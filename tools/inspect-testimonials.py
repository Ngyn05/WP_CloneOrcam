import re, urllib.parse
from pathlib import Path

theme_dir = Path(r"c:\Users\hnguy\Local Sites\orcam\app\public\wp-content\themes\orcam_theme")
media_dir = theme_dir / "media"
local_media = {f.name: f for f in media_dir.glob("*")}
local_media_lower = {f.name.lower(): f.name for f in media_dir.glob("*")}

static_vi = theme_dir / "static-pages" / "vi"

# Let's inspect orcam-learn-testimonials.html
txt = (static_vi / "orcam-learn-testimonials.html").read_text(encoding="utf-8")

# Find all media, filename, background in orcam-learn-testimonials.html
for m in re.finditer(r'(?:media/|filename:\s*["\']|url:\s*["\'])([^"\'<>\s\\,]+)', txt):
    raw = m.group(1)
    if any(ext in raw.lower() for ext in ['.png', '.jpg', '.webp', '.svg', '.mp4', '.jpeg']):
        dec = urllib.parse.unquote(raw)
        exists = dec.lower() in local_media_lower
        safe = dec.encode('ascii', 'backslashreplace').decode('ascii')
        print(f"[orcam-learn-testimonials.html] {safe} -> Exists on disk: {exists}")
