import re
import sys
import unicodedata
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")

ROOT = Path(__file__).resolve().parents[1]
PAGES_DIR = ROOT / "static-pages" / "vi"

# Regex patterns to extract URLs
URL_PATTERNS = [
    (r'href=["\'](.*?)["\']', "href"),
    (r'src=["\'](.*?)["\']', "src"),
    (r'"url":\s*["\'](.*?)["\']', 'JSON "url"'),
    (r'pageUrl:\s*["\'](.*?)["\']', "pageUrl"),
    (r'urlNavigateOnClick:\s*["\'](.*?)["\']', "urlNavigateOnClick"),
    (r'uniquePath:\s*["\'](.*?)["\']', "uniquePath"),
    (r'canonical.*?href=["\'](.*?)["\']', "canonical"),
]

def contains_vietnamese(text: str) -> bool:
    # Check for Vietnamese diacritics or non-ascii in URLs (excluding fragments/query with proper text if any, but in path it shouldn't have)
    # Exclude data: URLs or javascript:
    if text.startswith("data:") or text.startswith("javascript:"):
        return False
    # Check if there are non-ASCII characters or common vietnamese words in slug
    for char in text:
        if ord(char) > 127:
            return True
    return False

def scan_all_files():
    total_files = 0
    corrupted_files = {}

    for html_file in sorted(PAGES_DIR.rglob("*.html")):
        total_files += 1
        content = html_file.read_text(encoding="utf-8")
        file_issues = []

        for pattern, label in URL_PATTERNS:
            matches = re.findall(pattern, content)
            for m in matches:
                if contains_vietnamese(m):
                    file_issues.append((label, m))

        if file_issues:
            corrupted_files[html_file] = file_issues

    print(f"Total scanned HTML files: {total_files}")
    print(f"Files containing non-English / Vietnamese characters in links: {len(corrupted_files)}\n")

    for file_path, issues in corrupted_files.items():
        rel = file_path.relative_to(PAGES_DIR)
        print(f"=== {rel} ({len(issues)} issues) ===")
        seen = set()
        for label, url in issues:
            if url not in seen:
                seen.add(url)
                print(f"  [{label}] {url}")

if __name__ == "__main__":
    scan_all_files()
