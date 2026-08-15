import re
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")

file_path = Path("static-pages/vi/blog/assistive-technology-benefits-learning-disabilities.html")
content = file_path.read_text(encoding="utf-8")

print("--- HREFS ---")
for h in set(re.findall(r'href=["\'](.*?)["\']', content)):
    print(h)

print("\n--- SRCS ---")
for s in set(re.findall(r'src=["\'](.*?)["\']', content)):
    print(s)

print("\n--- SCRIPT PATHS / URLS ---")
for u in set(re.findall(r'(?:pageUrl|url|uniquePath|path|urlNavigateOnClick):\s*["\'](.*?)["\']', content)):
    print(u)
