import os
import shutil

cache_dir = r'c:\Users\hnguy\Local Sites\orcam\app\public\wp-content\cache\orcam_static'
if os.path.exists(cache_dir):
    shutil.rmtree(cache_dir, ignore_errors=True)
    os.makedirs(cache_dir, exist_ok=True)
    print(f"Cleared cache dir: {cache_dir}")
else:
    print(f"Cache dir {cache_dir} did not exist.")
