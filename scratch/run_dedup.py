import urllib.request, json, sys
sys.stdout.reconfigure(encoding='utf-8')

data = json.loads(urllib.request.urlopen('http://orcam.local/wp-content/themes/orcam_theme/dedup_pages.php').read())
print(f"Deleted {data['deleted_count']} duplicate pages.")
print(f"Remaining exact clean pages: {data['remaining_count']}")
for p in data['remaining_pages']:
    print("  -", p)
