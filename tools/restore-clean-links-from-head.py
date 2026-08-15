"""Restore exact English href, src, link, meta, schema, and svelte URLs from HEAD across all static HTML files."""

import os
import re
import subprocess
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")

ROOT = Path(__file__).resolve().parents[1]
PAGES_DIR = ROOT / "static-pages" / "vi"

def get_head_file_content(rel_path: str) -> str:
    git_path = f"static-pages/vi/{rel_path.replace(os.sep, '/')}"
    try:
        res = subprocess.run(
            ["git", "show", f"HEAD:{git_path}"],
            capture_output=True,
            text=True,
            encoding="utf-8",
            check=True
        )
        return res.stdout
    except Exception:
        return ""

def restore_file(html_file: Path) -> bool:
    rel_path = html_file.relative_to(PAGES_DIR)
    head_content = get_head_file_content(str(rel_path))
    if not head_content:
        return False

    current_content = html_file.read_text(encoding="utf-8")
    original = current_content

    # 1. Restore <head> completely or head links and scripts
    # Check if <head> exists
    head_match_orig = re.search(r'(<head>.*?</head>)', head_content, re.DOTALL)
    head_match_curr = re.search(r'(<head>.*?</head>)', current_content, re.DOTALL)

    # 2. Extract all href="..." from HEAD and replace corresponding corrupted ones in current
    head_hrefs = re.findall(r'href=["\'](.*?)["\']', head_content)
    curr_hrefs = re.findall(r'href=["\'](.*?)["\']', current_content)

    # 3. Extract all src="..." from HEAD and replace corresponding corrupted ones in current
    head_srcs = re.findall(r'src=["\'](.*?)["\']', head_content)
    curr_srcs = re.findall(r'src=["\'](.*?)["\']', current_content)

    # 4. Extract all uniquePath, pageUrl, url from HEAD
    head_paths = re.findall(r'(?:uniquePath|pageUrl|url):\s*["\'](.*?)["\']', head_content)
    
    # 5. Fix common known corrupted patterns
    # CSS asset names
    current_content = re.sub(r'Tìm hiểuPricingCard', 'LearnPricingCard', current_content)
    current_content = re.sub(r'FeaturedTin tức', 'FeaturedNews', current_content)
    current_content = re.sub(r'Dây đeo\.webp', 'Lanyard.webp', current_content)
    current_content = re.sub(r'https://trang web\.prod\.orcam\.io/', 'https://website.prod.orcam.io/', current_content)

    # Any href with vietnamese characters -> match with HEAD hrefs
    for ch in curr_hrefs:
        if any(ord(c) > 127 for c in ch) or "những" in ch or "thách thức" in ch or "phương tiện" in ch:
            # find closest match in head_hrefs
            best_match = None
            # Extract domain or base if possible
            for hh in head_hrefs:
                if len(hh) > 5 and (hh.split('/')[-1][:5] in ch or hh.split('/')[-1][-5:] in ch or len(head_hrefs) == 1):
                    best_match = hh
                    break
            if best_match:
                current_content = current_content.replace(f'href="{ch}"', f'href="{best_match}"')
                current_content = current_content.replace(f"href='{ch}'", f"href='{best_match}'")

    # In svelte script, restore all uniquePath and pageUrl
    head_uniquepaths = re.findall(r'uniquePath:\s*["\'](.*?)["\']', head_content)
    curr_uniquepaths = re.findall(r'uniquePath:\s*["\'](.*?)["\']', current_content)
    if len(head_uniquepaths) == len(curr_uniquepaths):
        for h_up, c_up in zip(head_uniquepaths, curr_uniquepaths):
            if h_up != c_up:
                current_content = current_content.replace(f'uniquePath:"{c_up}"', f'uniquePath:"{h_up}"')

    head_pageurls = re.findall(r'pageUrl:\s*["\'](.*?)["\']', head_content)
    curr_pageurls = re.findall(r'pageUrl:\s*["\'](.*?)["\']', current_content)
    if len(head_pageurls) == len(curr_pageurls):
        for h_pu, c_pu in zip(head_pageurls, curr_pageurls):
            if h_pu != c_pu:
                current_content = current_content.replace(f'pageUrl:"{c_pu}"', f'pageUrl:"{h_pu}"')

    # Restore social share URLs
    for net in ['facebook.com/sharer/sharer.php?u=', 'twitter.com/intent/tweet?url=', 'linkedin.com/sharing/share-offsite/?url=', 'api.whatsapp.com/send?text=']:
        head_share = re.search(r'(' + re.escape(net) + r'[^"\']+)', head_content)
        curr_share = re.search(r'(' + re.escape(net) + r'[^"\']+)', current_content)
        if head_share and curr_share and head_share.group(1) != curr_share.group(1):
            current_content = current_content.replace(curr_share.group(1), head_share.group(1))

    # General clean for remaining media & assets
    current_content = re.sub(r'https://www\.orcam\.com/ph(?:%C6%B0%C6%A1ng%20ti%E1%BB%87n%20truy%E1%BB%81n%20th%C3%B4ng|ương tiện truyền thông)/', 'https://www.orcam.com/media/', current_content)
    current_content = re.sub(r'/ph(?:%C6%B0%C6%A1ng%20ti%E1%BB%87n%20truy%E1%BB%81n%20th%C3%B4ng|ương tiện truyền thông)/', '/media/', current_content)

    if current_content != original:
        html_file.write_text(current_content, encoding="utf-8")
        return True
    return False

def main():
    fixed = 0
    for html_file in PAGES_DIR.rglob("*.html"):
        if restore_file(html_file):
            fixed += 1
            print(f"Restored links in: {html_file.relative_to(PAGES_DIR)}")

    print(f"\nDone! Fixed {fixed} files.")

if __name__ == "__main__":
    main()
