"""Translate only the embedded FAQ records on the five Vietnamese product pages."""

from __future__ import annotations

import html
import json
import re
import time
from pathlib import Path

from bs4 import BeautifulSoup
from deep_translator import GoogleTranslator


ROOT = Path(__file__).resolve().parents[1]
PAGES = [
    ROOT / "static-pages/vi/orcam-myeye-3-pro.html",
    ROOT / "static-pages/vi/orcam-myeye-2-pro.html",
    ROOT / "static-pages/vi/orcam-read-5.html",
    ROOT / "static-pages/vi/orcam-read-3.html",
    ROOT / "static-pages/vi/orcam-read.html",
]
CACHE_FILE = Path(__file__).with_name(".product-faq-vi-cache.json")
FAQ = re.compile(
    r'\{title:"(?P<title>(?:\\.|[^"\\])*)",content:"(?P<content>(?:\\.|[^"\\])*)",id:"(?P<id>[^"]+)"\}'
)
ENGLISH = re.compile(
    r"\b(?:the|a|an|and|or|for|with|from|to|of|in|on|at|by|is|are|do|does|can|how|"
    r"what|which|who|why|where|when|your|you|our|we|device|purchase|payment|return|"
    r"shipping|available|support|features?|read|reading|vision|insurance|languages?)\b",
    re.I,
)
VIETNAMESE_CHAR = re.compile(r"[àáảãạăằắẳẵặâầấẩẫậđèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ]", re.I)
HEADINGS = {
    "Frequently Asked Questions": "Câu hỏi thường gặp",
    "Your Most Asked Questions:": "Những câu hỏi thường gặp nhất:",
    "Your Most Asked Questions": "Những câu hỏi thường gặp nhất",
    "How Do I Buy OrCam MyEye": "Làm thế nào để mua OrCam MyEye?",
    "How Do I Buy OrCam Read?": "Làm thế nào để mua OrCam Read?",
    "Is the OrCam Read 3 the right solution for me?": "Câu hỏi thường gặp về OrCam Read 3",
}


def decode_js(value: str) -> str:
    return json.loads('"' + value + '"')


def encode_js(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)[1:-1]


def needs_translation(value: str) -> bool:
    plain = html.unescape(value)
    english_hits = len(ENGLISH.findall(plain))
    vietnamese_hits = len(VIETNAMESE_CHAR.findall(plain))
    return english_hits >= 2 and vietnamese_hits < 15


def translate_values(values: list[str], cache: dict[str, str]) -> None:
    # Auto-detection can occasionally treat a mixed EN/VI batch as Vietnamese
    # and return an English item unchanged. Discard those false cache hits.
    for value in values:
        if needs_translation(value) and cache.get(value, "").strip() == value.strip():
            cache.pop(value, None)
    pending = [value for value in dict.fromkeys(values) if needs_translation(value) and value not in cache]
    translator = GoogleTranslator(source="auto", target="vi")
    batches: list[list[str]] = []
    batch: list[str] = []
    batch_length = 0
    for value in pending:
        estimated = len(value) + 50
        if batch and batch_length + estimated > 4000:
            batches.append(batch)
            batch = []
            batch_length = 0
        batch.append(value)
        batch_length += estimated
    if batch:
        batches.append(batch)

    for batch in batches:
        markup = "<section>" + "".join(
            f'<div data-i="{index}">{html.escape(value)}</div>' for index, value in enumerate(batch)
        ) + "</section>"
        translated = None
        for attempt in range(4):
            try:
                translated = translator.translate(markup)
                if translated:
                    break
            except Exception as exc:
                print(f"Translation retry {attempt + 1}: {exc}")
                time.sleep(2**attempt)
        if not translated:
            raise RuntimeError("Google Translate did not return the FAQ batch")
        soup = BeautifulSoup(translated, "html.parser")
        found = 0
        for node in soup.select("[data-i]"):
            index = int(node["data-i"])
            cache[batch[index]] = html.unescape(node.get_text())
            found += 1
        if found != len(batch):
            raise RuntimeError(f"Translated {found}/{len(batch)} FAQ strings")
        # Retry unchanged items separately so mixed-language answers are not
        # skipped because another item made the batch look Vietnamese.
        for value in batch:
            if cache.get(value, "").strip() == value.strip():
                translated_value = translator.translate(value)
                if translated_value:
                    cache[value] = translated_value
        CACHE_FILE.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")


def main() -> None:
    cache = json.loads(CACHE_FILE.read_text(encoding="utf-8")) if CACHE_FILE.exists() else {}
    records: dict[Path, list[tuple[str, str, str]]] = {}
    values: list[str] = []
    for page in PAGES:
        source = page.read_text(encoding="utf-8-sig")
        rows = [(decode_js(m["title"]), decode_js(m["content"]), m["id"]) for m in FAQ.finditer(source)]
        if not rows:
            raise RuntimeError(f"No FAQ records found in {page.name}")
        records[page] = rows
        for title, content, _ in rows:
            values.extend((title, content))

    translate_values(values, cache)

    for page, rows in records.items():
        source = page.read_text(encoding="utf-8-sig")
        iterator = iter(rows)

        def replace(match: re.Match[str]) -> str:
            title, content, record_id = next(iterator)
            title = cache.get(title, title)
            content = cache.get(content, content)
            return f'{{title:"{encode_js(title)}",content:"{encode_js(content)}",id:"{record_id}"}}'

        updated, count = FAQ.subn(replace, source)
        for english, vietnamese in HEADINGS.items():
            updated = updated.replace(english, vietnamese)
        page.write_text(updated, encoding="utf-8")
        print(f"{page.name}: localized {count} FAQ rows")


if __name__ == "__main__":
    main()
