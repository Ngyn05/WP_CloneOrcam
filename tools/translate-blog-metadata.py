"""Translate imported post titles and descriptions in small resumable batches."""

from __future__ import annotations

import html
import os
import re
import time

import pymysql
import requests
from bs4 import BeautifulSoup


DB = {
    "host": os.getenv("ORCAM_DB_HOST", "127.0.0.1"),
    "port": int(os.getenv("ORCAM_DB_PORT", "10011")),
    "user": os.getenv("ORCAM_DB_USER", "root"),
    "password": os.getenv("ORCAM_DB_PASSWORD", "root"),
    "database": os.getenv("ORCAM_DB_NAME", "local"),
    "charset": "utf8mb4",
    "autocommit": True,
}
ENDPOINT = "https://translate.googleapis.com/translate_a/single"
VIETNAMESE = re.compile(r"[À-ỹĐđ]")
SESSION = requests.Session()
SESSION.trust_env = False


def translate_fragment(fragment: str) -> str:
    for attempt in range(7):
        try:
            response = SESSION.post(
                ENDPOINT,
                data={"client": "gtx", "sl": "en", "tl": "vi", "dt": "t", "q": fragment},
                timeout=45,
            )
            response.raise_for_status()
            payload = response.json()
            result = "".join(part[0] for part in payload[0] if part and part[0])
            if result:
                return result
        except (requests.RequestException, ValueError, TypeError, KeyError):
            time.sleep(min(2 ** attempt, 30))
    raise RuntimeError("Translation service did not respond after retries")


def translate_batch(rows: list[tuple[int, str, str]]) -> dict[int, tuple[str, str]]:
    markup = "<section>" + "".join(
        f'<article data-id="{post_id}"><h2>{html.escape(title)}</h2><p>{html.escape(description)}</p></article>'
        for post_id, title, description in rows
    ) + "</section>"
    translated = translate_fragment(markup)
    soup = BeautifulSoup(translated, "html.parser")
    output: dict[int, tuple[str, str]] = {}
    for article in soup.select("article[data-id]"):
        post_id = int(article["data-id"])
        # Find first heading tag or fallback to the first child element
        heading = article.find(["h1", "h2", "h3", "h4", "h5", "h6"])
        if not heading:
            children = [c for c in article.children if c.name]
            heading = children[0] if children else None
            
        # Find paragraph tag or fallback to the second child element
        paragraph = article.find("p")
        if not paragraph:
            children = [c for c in article.children if c.name]
            paragraph = children[1] if len(children) > 1 else (children[0] if len(children) == 1 and children[0] != heading else None)

        output[post_id] = (
            heading.get_text(" ", strip=True) if heading else "",
            paragraph.get_text(" ", strip=True) if paragraph else "",
        )
    if len(output) != len(rows):
        raise RuntimeError(f"Expected {len(rows)} translated rows, received {len(output)}")
    return output


def main() -> None:
    connection = pymysql.connect(**DB)
    with connection.cursor() as cursor:
        cursor.execute(
            """SELECT DISTINCT p.ID, p.post_title, p.post_excerpt
               FROM wp_posts p INNER JOIN wp_postmeta m ON m.post_id=p.ID
               WHERE p.post_type='post' AND p.post_status='publish'
                 AND m.meta_key='_orcam_source_file'
                 AND NOT EXISTS (
                     SELECT 1 FROM wp_postmeta done
                     WHERE done.post_id=p.ID AND done.meta_key='_orcam_vi_metadata' AND done.meta_value='1'
                 )
               ORDER BY p.ID"""
        )
        posts = list(cursor.fetchall())

    completed = 0
    batch: list[tuple[int, str, str]] = []
    batch_length = 0
    batches: list[list[tuple[int, str, str]]] = []
    for row in posts:
        row_length = len(row[1]) + len(row[2]) + 100
        if batch and batch_length + row_length > 3500:
            batches.append(batch)
            batch = []
            batch_length = 0
        batch.append(row)
        batch_length += row_length
    if batch:
        batches.append(batch)

    for number, rows in enumerate(batches, 1):
        translations = translate_batch(rows)
        with connection.cursor() as cursor:
            for post_id, _, _ in rows:
                title, description = translations[post_id]
                cursor.execute(
                    "UPDATE wp_posts SET post_title=%s, post_excerpt=%s, post_modified=NOW(), post_modified_gmt=UTC_TIMESTAMP() WHERE ID=%s",
                    (title, description, post_id),
                )
                cursor.execute(
                    "INSERT INTO wp_postmeta(post_id,meta_key,meta_value) VALUES(%s,'_orcam_vi_metadata','1')",
                    (post_id,),
                )
        completed += len(rows)
        print(f"Translated metadata {completed}/{len(posts)} (batch {number}/{len(batches)})", flush=True)
    connection.close()


if __name__ == "__main__":
    main()
