"""Translate imported OrCam posts in place and persist progress in a cache."""

from __future__ import annotations

import html
import json
import os
import re
import sys
import threading
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

import pymysql
from bs4 import BeautifulSoup, NavigableString
from deep_translator import GoogleTranslator

# Configure UTF-8 for console output on Windows
sys.stdout.reconfigure(encoding='utf-8')

translator = GoogleTranslator(source='en', target='vi')


DB = {
    "host": os.getenv("ORCAM_DB_HOST", "127.0.0.1"),
    "port": int(os.getenv("ORCAM_DB_PORT", "10011")),
    "user": os.getenv("ORCAM_DB_USER", "root"),
    "password": os.getenv("ORCAM_DB_PASSWORD", "root"),
    "database": os.getenv("ORCAM_DB_NAME", "local"),
    "charset": "utf8mb4",
    "autocommit": True,
}
CACHE_FILE = Path(__file__).with_name(".vi-translation-cache.json")
SKIP_PARENTS = {"script", "style", "code", "pre", "svg", "noscript", "template"}
LETTERS = re.compile(r"[A-Za-z]")
VIETNAMESE = re.compile(r"[ÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬĐÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴàáảãạăằắẳẵặâầấẩẫậđèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ]")
lock = threading.Lock()


def load_cache() -> dict[str, str]:
    if not CACHE_FILE.exists():
        return {}
    return json.loads(CACHE_FILE.read_text(encoding="utf-8"))


cache = load_cache()


def save_cache() -> None:
    temporary = CACHE_FILE.with_suffix(".tmp")
    temporary.write_text(json.dumps(cache, ensure_ascii=False), encoding="utf-8")
    temporary.replace(CACHE_FILE)


def should_translate(value: str) -> bool:
    stripped = html.unescape(value).strip()
    return bool(len(stripped) > 1 and LETTERS.search(stripped) and not VIETNAMESE.search(stripped))


def translate_batch(values: list[str]) -> dict[str, str]:
    # Filter strings that actually need translation (not in cache, valid length/content)
    to_translate = []
    for val in values:
        if not should_translate(val):
            continue
        with lock:
            if val in cache:
                continue
        if val not in to_translate:
            to_translate.append(val)

    if to_translate:
        # Group into batches (Google Translate has a limit of around 5000 chars per request)
        batches = []
        current_batch = []
        current_length = 0
        for val in to_translate:
            val_len = len(val) + 50
            if current_batch and current_length + val_len > 4000:
                batches.append(current_batch)
                current_batch = []
                current_length = 0
            current_batch.append(val)
            current_length += val_len
        if current_batch:
            batches.append(current_batch)

        for sub_batch in batches:
            markup = "<section>" + "".join(
                f'<div data-i="{i}">{html.escape(val)}</div>'
                for i, val in enumerate(sub_batch)
            ) + "</section>"

            translated_markup = None
            for attempt in range(5):
                try:
                    translated_markup = translator.translate(markup)
                    if translated_markup:
                        break
                except Exception as e:
                    print(f"Warning: Batch translation failed: {e}. Retrying in {2**attempt}s...", flush=True)
                    time.sleep(2**attempt)

            if not translated_markup:
                print("Warning: Fallback to single translation for sub-batch", flush=True)
                for val in sub_batch:
                    try:
                        translated_val = translator.translate(val)
                        if translated_val:
                            with lock:
                                cache[val] = translated_val
                    except Exception as ex:
                        print(f"Error in single fallback: {ex}", flush=True)
                continue

            # Parse translated HTML structure
            soup = BeautifulSoup(translated_markup, "html.parser")
            for div in soup.select("[data-i]"):
                try:
                    idx = int(div["data-i"])
                    original_val = sub_batch[idx]
                    translated_val = div.get_text()
                    translated_val = html.unescape(translated_val)
                    with lock:
                        cache[original_val] = translated_val
                except Exception:
                    pass

    # Build response dict
    result = {}
    for val in values:
        if not should_translate(val):
            result[val] = val
        else:
            with lock:
                if val in cache:
                    result[val] = cache[val]
                else:
                    # Final fallback
                    try:
                        translated_val = translator.translate(val)
                        if translated_val:
                            cache[val] = translated_val
                            result[val] = translated_val
                        else:
                            result[val] = val
                    except Exception:
                        result[val] = val
    return result


def translate(value: str) -> str:
    return translate_batch([value])[value]


def translate_content(content: str) -> str:
    soup = BeautifulSoup(content, "html.parser")
    nodes = [
        node for node in soup.find_all(string=True)
        if isinstance(node, NavigableString)
        and (node.parent is None or node.parent.name not in SKIP_PARENTS)
        and should_translate(str(node))
    ]
    attributes: list[tuple[object, str, str]] = []
    for tag in soup.find_all(True):
        if tag.name in SKIP_PARENTS:
            continue
        for attribute in ("alt", "title", "aria-label"):
            value = tag.get(attribute)
            if isinstance(value, str) and should_translate(value):
                attributes.append((tag, attribute, value))

    values = [str(node) for node in nodes] + [item[2] for item in attributes]
    if not values:
        return str(soup)

    translated = translate_batch(values)

    for node in nodes:
        node.replace_with(translated[str(node)])
    for tag, attribute, value in attributes:
        tag[attribute] = translated[value]
    return str(soup)


def main() -> None:
    connection = pymysql.connect(**DB)
    with connection.cursor() as cursor:
        cursor.execute(
            """SELECT p.ID, p.post_title, p.post_excerpt, p.post_content
               FROM wp_posts p INNER JOIN wp_postmeta m ON m.post_id=p.ID
               WHERE p.post_type='post' AND m.meta_key='_orcam_source_file'
                 AND NOT EXISTS (
                    SELECT 1 FROM wp_postmeta done
                    WHERE done.post_id=p.ID AND done.meta_key='_orcam_vi_static' AND done.meta_value='1'
                 )
               ORDER BY p.ID"""
        )
        posts = cursor.fetchall()

    for index, (post_id, title, excerpt, content) in enumerate(posts, 1):
        translated_title = translate(title)
        translated_excerpt = translate(excerpt)
        translated_content = translate_content(content)
        with connection.cursor() as cursor:
            cursor.execute(
                "UPDATE wp_posts SET post_title=%s, post_excerpt=%s, post_content=%s, post_modified=NOW(), post_modified_gmt=UTC_TIMESTAMP() WHERE ID=%s",
                (translated_title, translated_excerpt, translated_content, post_id),
            )
            cursor.execute("UPDATE wp_postmeta SET meta_value='1' WHERE post_id=%s AND meta_key='_orcam_vi_static'", (post_id,))
            if cursor.rowcount == 0:
                cursor.execute("INSERT INTO wp_postmeta(post_id,meta_key,meta_value) VALUES(%s,'_orcam_vi_static','1')", (post_id,))
        if index % 5 == 0 or index == len(posts):
            save_cache()
            print(f"Translated {index}/{len(posts)}", flush=True)
    connection.close()


if __name__ == "__main__":
    main()
