import urllib.request, re, json, sys
sys.stdout.reconfigure(encoding='utf-8')

for path in ['/vi/home', '/vi/orcam-myeye-3-pro', '/vi/blog/aaa/']:
    url = "http://orcam.local" + path
    with urllib.request.urlopen(url) as resp:
        content = resp.read().decode('utf-8')
        schemas = re.findall(r'<script\s+type=["\']application/ld\+json["\']>(.*?)</script>', content, re.S)
        print("="*60)
        print(f"Path: {path} | Total Schema blocks: {len(schemas)}")
        for idx, s in enumerate(schemas):
            try:
                data = json.loads(s.strip())
                print(f"Schema {idx+1}:", json.dumps(data, indent=2, ensure_ascii=False)[:300] + "...")
            except Exception as e:
                print(f"Schema {idx+1} parse error:", e, s[:100])
