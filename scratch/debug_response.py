import urllib.request

req = urllib.request.Request('http://orcam.local/vi/low-vision', headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req, timeout=5) as response:
    headers = dict(response.getheaders())
    print("Response headers:", headers)
    html = response.read().decode('utf-8')
    print("Page length:", len(html))
    print("Has widget:", 'orcam-contact-widget' in html)
    print("Has navigation:", 'orcam-static-navigation' in html)
    print("End of HTML (last 500 chars):")
    print(html[-500:])
