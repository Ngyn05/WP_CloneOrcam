import urllib.request, xml.etree.ElementTree as ET, sys
sys.stdout.reconfigure(encoding='utf-8')

url = 'http://orcam.local/page-sitemap.xml'
with urllib.request.urlopen(url) as resp:
    xml_data = resp.read().decode('utf-8')
    root = ET.fromstring(xml_data)
    ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
    locs = [elem.text for elem in root.findall('.//s:loc', ns)]
    print(f"Total URLs in page-sitemap.xml: {len(locs)}")
    print(f"Unique URLs count: {len(set(locs))}")
    if len(locs) != len(set(locs)):
        print("DUPLICATES FOUND:")
        import collections
        for u, count in collections.Counter(locs).items():
            if count > 1:
                print(f"  - {u} (appears {count} times)")
    else:
        print("ALL URLS IN SITEMAP ARE 100% UNIQUE!")
