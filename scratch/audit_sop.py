import urllib.request, re, json, sys
sys.stdout.reconfigure(encoding='utf-8')

def audit_url(url_path):
    url = "http://orcam.local" + url_path
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as resp:
            content = resp.read().decode('utf-8')
            
            has_title = bool(re.search(r'<title>(.*?)</title>', content, re.I))
            title = re.search(r'<title>(.*?)</title>', content, re.I).group(1) if has_title else 'N/A'
            
            has_meta_desc = bool(re.search(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', content, re.I))
            has_canonical = bool(re.search(r'<link\s+rel=["\']canonical["\']', content, re.I))
            has_og_title = bool(re.search(r'<meta\s+property=["\']og:title["\']', content, re.I))
            has_og_desc = bool(re.search(r'<meta\s+property=["\']og:description["\']', content, re.I))
            has_og_image = bool(re.search(r'<meta\s+property=["\']og:image["\']', content, re.I))
            has_favicon = bool(re.search(r'<link\s+rel=["\'](?:shortcut )?icon["\']', content, re.I))
            has_schema = bool(re.search(r'<script\s+type=["\']application/ld\+json["\']', content, re.I))
            has_h1 = bool(re.search(r'<h1[^>]*>(.*?)</h1>', content, re.I | re.S))
            has_noindex = bool(re.search(r'<meta\s+name=["\']robots["\']\s+content=["\'][^"\']*noindex', content, re.I))
            
            return {
                'status': resp.status,
                'title': title,
                'has_meta_desc': has_meta_desc,
                'has_canonical': has_canonical,
                'has_og_title': has_og_title,
                'has_og_desc': has_og_desc,
                'has_og_image': has_og_image,
                'has_favicon': has_favicon,
                'has_schema': has_schema,
                'has_h1': has_h1,
                'has_noindex': has_noindex
            }
    except Exception as e:
        return {'status': 'Error', 'error': str(e)}

test_paths = [
    '/',
    '/vi/home',
    '/vi/orcam-myeye-3-pro',
    '/vi/orcam-read-5',
    '/vi/blog',
    '/vi/blog/aaa/',
    '/vi/contact-us',
    '/vi/distributor'
]

print("AUDIT RESULTS AGAINST SOP:")
print("=" * 80)
for p in test_paths:
    r = audit_url(p)
    print(f"Path: {p}")
    if r.get('status') == 200:
        print(f"  - Status: 200 OK")
        print(f"  - Title: {r['title']}")
        print(f"  - Meta Description: {'[x] Có' if r['has_meta_desc'] else '[ ] THIẾU'}")
        print(f"  - Canonical Tag:    {'[x] Có' if r['has_canonical'] else '[ ] THIẾU'}")
        print(f"  - OpenGraph Tags:   {'[x] Có' if (r['has_og_title'] and r['has_og_desc']) else '[ ] THIẾU'}")
        print(f"  - OpenGraph Image:  {'[x] Có' if r['has_og_image'] else '[ ] THIẾU'}")
        print(f"  - Favicon:          {'[x] Có' if r['has_favicon'] else '[ ] THIẾU'}")
        print(f"  - Schema (JSON-LD): {'[x] Có' if r['has_schema'] else '[ ] THIẾU'}")
        print(f"  - H1 Tag:           {'[x] Có' if r['has_h1'] else '[ ] THIẾU'}")
        print(f"  - Noindex Check:    {'[!] Có noindex' if r['has_noindex'] else '[x] Cho phép Index'}")
    else:
        print(f"  - Error: {r}")
    print("-" * 80)
