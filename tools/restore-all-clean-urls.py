"""Restore all JSON-LD schemas, meta URLs, image URLs, and blog URLs from HEAD."""

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

def restore_head_tags_and_media(html_file: Path) -> bool:
    rel_path = html_file.relative_to(PAGES_DIR)
    head_content = get_head_file_content(str(rel_path))
    if not head_content:
        return False

    current_content = html_file.read_text(encoding="utf-8")
    original = current_content

    # 1. Restore JSON-LD in head
    head_json_match = re.search(r'<script type="application/ld\+json">.*?</script>', head_content, re.DOTALL)
    curr_json_match = re.search(r'<script type="application/ld\+json">.*?</script>', current_content, re.DOTALL)
    if head_json_match and curr_json_match:
        # We can extract the headline/description from current_content to keep Vietnamese translation if present
        # But ensure url and image in JSON-LD are strictly the clean ones from HEAD
        head_schema = head_json_match.group(0)
        curr_schema = curr_json_match.group(0)
        
        # Extract headline and description from curr_schema if available
        curr_hl = re.search(r'"headline":\s*"(.*?)"', curr_schema)
        curr_desc = re.search(r'"description":\s*"(.*?)"', curr_schema)
        
        fixed_schema = head_schema
        if curr_hl:
            fixed_schema = re.sub(r'"headline":\s*".*?"', f'"headline":"{curr_hl.group(1)}"', fixed_schema)
        if curr_desc:
            fixed_schema = re.sub(r'"description":\s*".*?"', f'"description":"{curr_desc.group(1)}"', fixed_schema)
            
        current_content = current_content.replace(curr_schema, fixed_schema)

    # 2. Restore all image src from HEAD by comparing order of <img> tags
    head_imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', head_content)
    curr_imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', current_content)

    for c_src in curr_imgs:
        if any(ord(c) > 127 for c in c_src) or "%20" in c_src or "thách" in c_src:
            for h_src in head_imgs:
                # If they share the file extension and similar length / position
                if h_src.split('.')[-1] == c_src.split('.')[-1]:
                    current_content = current_content.replace(f'src="{c_src}"', f'src="{h_src}"')
                    current_content = current_content.replace(f"src='{c_src}'", f"src='{h_src}'")
                    break

    # 3. Specific known image & URL fixes
    replacements = [
        ("ai-giải pháps-for-senior-independence", "ai-solutions-for-senior-independence"),
        ("alternative-learning-empowers-children-with-learning-những thách thức", "alternative-learning-empowers-children-with-learning-challenges"),
        ("assistive-công nghệ-devices", "assistive-technology-devices"),
        ("assistive-công nghệ-for-chứng khó đọc", "assistive-technology-for-dyslexia"),
        ("assistive-công nghệ-for-đọc", "assistive-technology-for-reading"),
        ("assistive-công nghệ-for-visually-impaired-launches-in-canada", "assistive-technology-for-visually-impaired-launches-in-canada"),
        ("assistive-công nghệ-improves-life-quality", "assistive-technology-improves-life-quality"),
        ("assistive-công nghệ-visually-impaired", "assistive-technology-visually-impaired"),
        ("avid-reader-orcam-myeye-bít hơning", "avid-reader-orcam-myeye-blessing"),
        ("back-to-school-shopping-danh sách-best-các mẹo-for-lập kế hoạch", "back-to-school-shopping-list-best-tips-for-planning"),
        ("back-to-school-shopping-các mẹo-for-lập kế hoạch", "back-to-school-shopping-tips-for-planning"),
        ("best-hoạt động thú vị trong nhà-for-visually-impaired-người", "best-activities-for-visually-impaired-people"),
        ("best-adapted-trò chơi-for-the-blind-or-visually-impaired", "best-adapted-games-for-the-blind-or-visually-impaired"),
        ("công nghệ", "technology"),
        ("chứng khó đọc", "dyslexia"),
        ("tầm nhìn", "vision"),
        ("Khả năng đọc", "Reading"),
        ("Màu sắcful", "Colorful"),
        ("Dịch vụ", "Services"),
        ("đi bộ", "walking"),
        ("sinh viên", "students"),
        ("Trợ giúp", "Help"),
        ("Tìm hiểu", "Learn"),
        ("lớp học", "classroom"),
        ("cựu chiến binh-hiệp hội", "veterans-association"),
        ("các mẹo", "tips"),
        ("lùi  vào  danh sách học", "back-to-school-list"),
        ("trở lại trường học", "back-to-school"),
        ("trở về trường2", "back-to-school-2"),
        ("hỗ trợ", "support"),
        ("hoạt động thú vị trong nhà", "indoor-activities"),
        ("câu đố cho  mù", "puzzle-for-the-blind"),
    ]

    # Only replace in URLs, srcs, and hrefs
    for vi_word, en_word in replacements:
        # Regex replace inside href="...", src="...", "url":"..."
        def replace_in_attr(m):
            attr_type = m.group(1)
            quote = m.group(2)
            val = m.group(3)
            return f'{attr_type}={quote}{val.replace(vi_word, en_word)}{quote}'
            
        current_content = re.sub(r'(href|src)=(["\'])(.*?)\2', replace_in_attr, current_content)
        
        def replace_in_json(m):
            key = m.group(1)
            val = m.group(2)
            return f'"{key}":"{val.replace(vi_word, en_word)}"'
            
        current_content = re.sub(r'"(url|image|ogImage|pageUrl)":"(.*?)"', replace_in_json, current_content)

    if current_content != original:
        html_file.write_text(current_content, encoding="utf-8")
        return True
    return False

def main():
    fixed = 0
    for html_file in PAGES_DIR.rglob("*.html"):
        if restore_head_tags_and_media(html_file):
            fixed += 1
            print(f"Fixed URLs/Media in: {html_file.relative_to(PAGES_DIR)}")

    print(f"\nDone! Processed {fixed} files.")

if __name__ == "__main__":
    main()
