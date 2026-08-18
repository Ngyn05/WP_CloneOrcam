import urllib.request
import xml.etree.ElementTree as ET

urls = [
    'http://orcam.local/sitemap_index.xml',
    'http://orcam.local/page-sitemap.xml',
    'http://orcam.local/product-sitemap.xml',
    'http://orcam.local/post-sitemap.xml',
]

for u in urls:
    try:
        req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'})
        with urllib.request.urlopen(req, timeout=10) as resp:
            content = resp.read().decode('utf-8')
            root = ET.fromstring(content)
            print(f"[OK] {u} -> Status: {resp.status}, Content-Type: {resp.headers.get('Content-Type')}, Root: <{root.tag}>, Elements: {len(list(root))}")
    except Exception as e:
        print(f"[ERR] {u} -> {e}")
