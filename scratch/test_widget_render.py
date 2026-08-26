import urllib.request

try:
    req = urllib.request.Request('http://orcam.local/vi/low-vision', headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=5) as response:
        html = response.read().decode('utf-8')
        if 'id="orcam-contact-widget"' in html:
            print("SUCCESS: Found orcam-contact-widget in rendered page!")
        else:
            print("WARNING: orcam-contact-widget NOT found in rendered page.")
except Exception as e:
    print(f"Could not connect via HTTP directly: {e}")
