"""Restore untranslated code, tag names, CSS classes, asset paths, and hrefs across static pages."""

import os
import re
import sys
from pathlib import Path

# Ensure UTF-8 output
sys.stdout.reconfigure(encoding="utf-8")

ROOT = Path(__file__).resolve().parents[1]
PAGES_DIR = ROOT / "static-pages" / "vi"

REPLACEMENTS = [
    # Asset files & stylesheets
    ("FeaturedTin tức.9rAmauFx.css", "FeaturedNews.9rAmauFx.css"),
    ("FeaturedTin tức", "FeaturedNews"),
    
    # Media paths
    ("https://www.orcam.com/phương tiện truyền thông/", "https://www.orcam.com/media/"),
    ("https://www.orcam.com/ph%C6%B0%C6%A1ng%20ti%E1%BB%87n%20truy%E1%BB%81n%20th%C3%B4ng/", "https://www.orcam.com/media/"),
    ("/phương tiện truyền thông/", "/media/"),
    ("phương tiện truyền thông/logo_white-1.svg", "media/logo_white-1.svg"),
    ("phương tiện truyền thông/favicon.svg", "media/favicon.svg"),
    ("phương tiện truyền thông/icon%20globe%20(Đột quỵ).svg", "media/icon%20globe%20(Stroke).svg"),
    ("phương tiện truyền thông/icon%20globe%20(Stroke).svg", "media/icon%20globe%20(Stroke).svg"),
    ("icon%20globe%20(%C4%90%E1%BB%99t%20qu%E1%BB%B5).svg", "icon%20globe%20(Stroke).svg"),
    ("icon%20globe%20(Đột quỵ).svg", "icon%20globe%20(Stroke).svg"),
    ("icon globe (Đột quỵ)", "icon globe (Stroke)"),
    ("phương tiện truyền thông/twitter-1.svg", "media/twitter-1.svg"),
    ("phương tiện truyền thông/facebook-1.svg", "media/facebook-1.svg"),
    ("phương tiện truyền thông/Linkedin.svg", "media/Linkedin.svg"),
    ("phương tiện truyền thông/instagram.svg", "media/instagram.svg"),
    ("phương tiện truyền thông/youtube.svg", "media/youtube.svg"),
    ("imphương tiện truyền thôngtely", "immediately"),
    ('blockName:"phương tiện truyền thông"', 'blockName:"media"'),
    ('blockName:\'phương tiện truyền thông\'', 'blockName:\'media\''),
    ('"blockName":"phương tiện truyền thông"', '"blockName":"media"'),

    # Specific image filenames translated erroneously
    ("lợi ích-assistive-tech-for-người-with-learning-disabilities.webp", "benefits-assistive-tech-for-people-with-learning-disabilities.webp"),

    # Specific URLs translated erroneously
    ("https://www.orcam.com/vi/blog/assistive-công nghệ-lợi ích-learning-disabilities", "https://www.orcam.com/vi/blog/assistive-technology-benefits-learning-disabilities"),
    ("/vi/blog/assistive-công nghệ-lợi ích-learning-disabilities", "/vi/blog/assistive-technology-benefits-learning-disabilities"),
    ("assistive-công nghệ-lợi ích-learning-disabilities", "assistive-technology-benefits-learning-disabilities"),
    ("https://www.Teachthought.com/công nghệ/assistive-công nghệ/", "https://www.teachthought.com/technology/assistive-technology/"),
    ("https://www.orcam.com/vi/blog/assistive-công nghệ-for-chứng khó đọc-reaches-new-horizons", "https://www.orcam.com/vi/blog/assistive-technology-for-dyslexia-reaches-new-horizons"),
    ("https://www.hiểu.org/articles/vi/8-examples-of-assistive-công nghệ-adaptive-tools", "https://www.understood.org/articles/en/8-examples-of-assistive-technology-adaptive-tools"),

    # Common navigation hrefs
    ('href="/vi/low-tầm nhìn"', 'href="/vi/low-vision"'),
    ('pageUrl:"/vi/low-tầm nhìn"', 'pageUrl:"/vi/low-vision"'),
    ('href="/vi/liên hệ-us"', 'href="/vi/contact-us"'),
    ('pageUrl:"/vi/liên hệ-us"', 'pageUrl:"/vi/contact-us"'),
    ('href="/vi/orcam-learn-trường học"', 'href="/vi/orcam-learn-schools"'),
    ('pageUrl:"/vi/orcam-learn-trường học"', 'pageUrl:"/vi/orcam-learn-schools"'),

    # UniquePaths
    ('uniquePath:"/vi/business / trường học "', 'uniquePath:"/vi/business / schools "'),
    ('uniquePath:"/vi/footer - khách hàng sự quan tâm submenu"', 'uniquePath:"/vi/footer - customer care submenu"'),
    ('uniquePath:"/vi/footer - termsVàcopyright "', 'uniquePath:"/vi/footer - terms and copyright "'),
    ('uniquePath:"/vi/footer -business / trường học"', 'uniquePath:"/vi/footer -business / schools"'),
    ('uniquePath:"/vi/hỗ trợ "', 'uniquePath:"/vi/support "'),
    ('uniquePath:"/vi/tài nguyên"', 'uniquePath:"/vi/resources"'),

    # WhatsApp share param
    ("send?văn bản=", "send?text="),

    # HTML tags
    ("<bài viết id=\"mainBody\"", "<article id=\"mainBody\""),
    ("<bài viết class='blog'", "<article class='blog'"),
    ("<bài viết class=\"blog\"", "<article class=\"blog\""),
    ("<bài viết", "<article"),
    ("</bài viết>", "</article>"),

    # CSS classes
    ("white-văn bản", "white-text"),
    ("grey-văn bản", "grey-text"),
    ("desktop-header__các nút", "desktop-header__buttons"),
    ("images-danh sách", "images-list"),

    # JS code & functions
    ("getElementsByTagTên", "getElementsByTagName"),
    ("type=\"văn bản/javascript\"", "type=\"text/javascript\""),
    ("// PushingphảiGTM data layer", "// Pushing to GTM data layer"),

    # Schema markup
    ('"@convăn bản"', '"@context"'),
    ('"@type":"Tổ chức"', '"@type":"Organization"'),
    ('"@type":"Hình ảnhObject"', '"@type":"ImageObject"'),

    # Svelte JSON unquoted/quoted keys and values
    ('blockTên:', 'blockName:'),
    ('"blockTên":', '"blockName":'),
    ('templateTên:', 'templateName:'),
    ('"templateTên":', '"templateName":'),
    ('siteTên:', 'siteName:'),
    ('"siteTên":', '"siteName":'),
    ('ogHình ảnh:', 'ogImage:'),
    ('"ogHình ảnh":', '"ogImage":'),
    ('fullTiêu đề:', 'fullTitle:'),
    ('"fullTiêu đề":', '"fullTitle":'),
    ('các nút:', 'buttons:'),
    ('"các nút":', '"buttons":'),
    ('urlĐiều hướngOnClick:', 'urlNavigateOnClick:'),
    ('"urlĐiều hướngOnClick":', '"urlNavigateOnClick":'),
    ('FlexContainerPhong cách', 'FlexContainerStyle'),
    ('"FlexContainerPhong cách"', '"FlexContainerStyle"'),
    ('cssPhong cách', 'cssStyle'),
    ('"cssPhong cách"', '"cssStyle"'),
    ('alignNội dung:', 'alignContent:'),
    ('"alignNội dung":', '"alignContent":'),
    ('backgroundMàu sắc:', 'backgroundColor:'),
    ('"backgroundMàu sắc":', '"backgroundColor"'),
    ('backgroundMàu sắc', 'backgroundColor'),
    ('internalĐiều hướng', 'internalNavigation'),
    ('"internalĐiều hướng"', '"internalNavigation"'),
    ('externalĐiều hướng', 'externalNavigation'),
    ('"externalĐiều hướng"', '"externalNavigation"'),
    ('maxItemsInPageForThiết bị di động:', 'maxItemsInPageForMobile:'),
    ('"maxItemsInPageForThiết bị di động":', '"maxItemsInPageForMobile":'),
    ('maxItemsInPageForMáy tính để bàn:', 'maxItemsInPageForDesktop:'),
    ('"maxItemsInPageForMáy tính để bàn":', '"maxItemsInPageForDesktop":'),
    ('style:"văn bản-align:', 'style:"text-align:'),
    ('key:"văn bản"', 'key:"text"'),
    ('"key":"văn bản"', '"key":"text"'),
    ('key:"văn bản1"', 'key:"text1"'),
    ('"key":"văn bản1"', '"key":"text1"'),
    ('key:"văn bản2"', 'key:"text2"'),
    ('"key":"văn bản2"', '"key":"text2"'),
    ('{văn bản:"Tùy chọn ngôn ngữ"', '{text:"Tùy chọn ngôn ngữ"'),
    ('children:[{văn bản:', 'children:[{text:'),
]

def clean_file(path: Path) -> bool:
    content = path.read_text(encoding="utf-8")
    original = content

    for target, replacement in REPLACEMENTS:
        content = content.replace(target, replacement)

    # General regex cleans for any remaining media / links / keys
    content = re.sub(r'https://www\.orcam\.com/ph(?:%C6%B0%C6%A1ng%20ti%E1%BB%87n%20truy%E1%BB%81n%20th%C3%B4ng|ương tiện truyền thông)/', 'https://www.orcam.com/media/', content)
    content = re.sub(r'/ph(?:%C6%B0%C6%A1ng%20ti%E1%BB%87n%20truy%E1%BB%81n%20th%C3%B4ng|ương tiện truyền thông)/', '/media/', content)
    content = re.sub(r'src="https://www\.orcam\.com/phương tiện truyền thông/([^"]+)"', r'src="https://www.orcam.com/media/\1"', content)
    content = re.sub(r'"url":\s*"https://www\.orcam\.com/phương tiện truyền thông/([^"]+)"', r'"url":"https://www.orcam.com/media/\1"', content)
    content = re.sub(r'url:\s*"https://www\.orcam\.com/phương tiện truyền thông/([^"]+)"', r'url:"https://www.orcam.com/media/\1"', content)
    content = re.sub(r'icon%20globe%20\(%C4%90%E1%BB%99t%20qu%E1%BB%B5\)\.svg', 'icon%20globe%20(Stroke).svg', content)
    content = re.sub(r'icon%20globe%20\(Đột quỵ\)\.svg', 'icon%20globe%20(Stroke).svg', content)

    if content != original:
        path.write_text(content, encoding="utf-8")
        return True
    return False

def main():
    count = 0
    for html_file in PAGES_DIR.rglob("*.html"):
        if clean_file(html_file):
            count += 1
            print(f"Fixed: {html_file.relative_to(PAGES_DIR)}")

    print(f"Done! Cleaned total {count} files.")

if __name__ == "__main__":
    main()
