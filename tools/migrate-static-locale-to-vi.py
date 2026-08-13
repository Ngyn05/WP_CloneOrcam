"""Rewrite the Vietnamese static export from en-us URLs to the /vi namespace."""

from pathlib import Path

root = Path(__file__).resolve().parents[1]
source = root / "static-pages/en-us"
target = root / "static-pages/vi"
root_index = root / "static-pages/index.html"

if source.exists() and target.exists():
    raise SystemExit("Both en-us and vi exist; refusing to merge automatically")
if source.exists():
    source.rename(target)
if not target.is_dir():
    raise SystemExit("Vietnamese static directory is missing")
if root_index.exists() and not (target / "index.html").exists():
    root_index.rename(target / "index.html")

replacements = {
    "/en-us/": "/vi/",
    "/en-us\"": "/vi\"",
    "/en-us'": "/vi'",
    "../en-us/": "../vi/",
    "en-us/": "vi/",
    "/en-gb/": "/vi/",
    "/en-gb\"": "/vi\"",
    "/en-gb'": "/vi'",
    "../en-gb/": "../vi/",
    "en-gb/": "vi/",
    "/en/": "/vi/",
    "../en/": "../vi/",
    'locale:{id:"en-us",language:"en",country:"US"': 'locale:{id:"vi",language:"vi",country:"VN"',
    'uniquePath:"/en-us': 'uniquePath:"/vi',
}

changed = 0
for path in target.rglob("*.html"):
    document = path.read_text(encoding="utf-8")
    result = document
    for old, new in replacements.items():
        result = result.replace(old, new)
    if result != document:
        path.write_text(result, encoding="utf-8", newline="")
        changed += 1

print(f"locale_dir={target} changed_html={changed}")
