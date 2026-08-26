import urllib.request

urls = [
    'http://orcam.local/',
    'http://orcam.local/vi/home',
    'http://orcam.local/vi/low-vision',
    'http://orcam.local/vi/orcam-myeye-3-pro/',
    'http://orcam.local/vi/shop/'
]

for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=5) as res:
            body = res.read().decode('utf-8')
            has_w = 'id="orcam-contact-widget"' in body
            print(f"{url} -> Widget present: {has_w}")
    except Exception as e:
        print(f"{url} -> Error: {e}")
