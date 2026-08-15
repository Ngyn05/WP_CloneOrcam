import re
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")

clean_content = Path("static-pages/vi/blog/impaired-vision-aids.html").read_text(encoding="utf-8")
dirty_content = Path("static-pages/vi/blog/assistive-technology-benefits-learning-disabilities.html").read_text(encoding="utf-8")

clean_paths = set(re.findall(r'uniquePath:\s*["\'](.*?)["\']', clean_content))
dirty_paths = set(re.findall(r'uniquePath:\s*["\'](.*?)["\']', dirty_content))

print("CLEAN uniquePaths:")
for p in sorted(clean_paths):
    print(" ", p)

print("\nDIRTY uniquePaths:")
for p in sorted(dirty_paths):
    print(" ", p)
