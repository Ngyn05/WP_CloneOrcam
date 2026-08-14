from pathlib import Path


STATIC_VI = Path(__file__).resolve().parents[1] / "static-pages" / "vi"
PAGES = (
    STATIC_VI / "read-3-store.html",
    STATIC_VI / "orcam-read-3.html",
)

TRANSLATIONS = {
    "פריטים חיוניים ואביזרים": "Thiết bị và phụ kiện thiết yếu",
    "מטלית ניקוי": "Khăn lau vệ sinh",
    "שרוך": "Dây đeo",
    "כבל הטענה": "Cáp sạc",
    "אוזניות חוטיות": "Tai nghe có dây",
    "מטען קיר": "Bộ sạc tường",
    "רמקול": "Loa",
    "מעמד למכשיר OrCam": "Giá đỡ thiết bị OrCam",
}

for page in PAGES:
    text = page.read_text(encoding="utf-8-sig")
    for source, target in TRANSLATIONS.items():
        source_count = text.count(source)
        target_count = text.count(target)
        if source_count == 0 and target_count >= 2:
            continue
        if source_count != 2:
            raise SystemExit(
                f"Expected 2 occurrences of {source!r} in {page}; found {source_count}"
            )
        text = text.replace(source, target)

    page.write_text(text, encoding="utf-8", newline="")
    print(f"Localized {len(TRANSLATIONS)} Hebrew labels in {page}")
