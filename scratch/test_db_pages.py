import urllib.request, json, sys
sys.stdout.reconfigure(encoding='utf-8')

req = urllib.request.Request('http://orcam.local/wp-content/themes/orcam_theme/scratch/list_db_pages.php')
# Wait, let's create list_db_pages.php in theme root to inspect
