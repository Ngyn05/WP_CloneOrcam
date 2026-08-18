import urllib.request, json, sys
sys.stdout.reconfigure(encoding='utf-8')

data = json.loads(urllib.request.urlopen('http://orcam.local/wp-content/themes/orcam_theme/list_db_pages.php').read())
print('Total pages in DB:', len(data))
seen = {}
for p in data:
    seen[p['post_title']] = seen.get(p['post_title'], []) + [p]

duplicates = {k: v for k, v in seen.items() if len(v) > 1}
print(f'Duplicate page titles count: {len(duplicates)}')
for title, items in duplicates.items():
    print(f'  - "{title}": IDs {[x["ID"] for x in items]} slugs {[x["post_name"] for x in items]} statuses {[x["post_status"] for x in items]}')
