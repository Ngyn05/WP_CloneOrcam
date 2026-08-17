import urllib.request, json, sys, re, html, time

sys.stdout.reconfigure(encoding='utf-8')

def translate_to_vietnamese(text):
    if not text or len(text.strip()) == 0:
        return text
    # Clean text
    text = html.unescape(text).strip()
    
    # Check if text contains English (e.g. common English words)
    has_english = bool(re.search(r'\b(the|and|for|with|this|that|from|skills|abilities|how to|revolutionizing|experience|today|read|reading|books|guide|tips|learn|school|student|support|world|champion|discover|overcoming|challenges|empowering|visual|impairment|assistive|technology|independent|learning|productivity|mind|mapping|success|story|journey|gifts|loved|ones|dyslexia|dysgraphia|signs|interventions)\b', text, re.I))
    
    # Or non-accented vietnamese (like "Tieu de SEO...")
    has_unaccented_vn = "Tieu de SEO" in text or "Mo ta the meta" in text
    
    if not has_english and not has_unaccented_vn and len(text) > 40:
        return text

    # Specific fix for test article
    if "Tieu de SEO Tuy Chinh" in text or "bai viet AAA" in text.lower():
        if "tieu de" in text.lower():
            return "Bài Viết Hướng Dẫn & Tin Tức Mẫu AAA - OrCam Việt Nam"
        else:
            return "Mô tả chi tiết và hướng dẫn về bài viết mẫu AAA trên website OrCam Việt Nam."

    if text.strip().lower() == "orcam":
        return "Khám phá cách công nghệ AI và thiết bị trợ năng OrCam nâng cao khả năng tiếp cận, giúp người khiếm thị làm chủ cuộc sống."

    url = f"https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=vi&dt=t&q={urllib.parse.quote(text)}"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            translated = "".join([part[0] for part in data[0] if part[0]])
            # Clean up known oddities
            translated = translated.replace("Khả năng đọc", "khả năng đọc").replace("khả năng Đọc", "khả năng đọc")
            return translated.strip()
    except Exception as e:
        return text

# Fetch all posts
print("Fetching posts from WordPress...")
resp = urllib.request.urlopen('http://orcam.local/wp-content/themes/orcam_theme/get_all_posts_json.php')
posts = json.loads(resp.read().decode('utf-8'))
print(f"Total posts: {len(posts)}")

updates = []
for idx, p in enumerate(posts):
    pid = p['id']
    title = p['title']
    seo_title = p['yoast_title'] or (title + " - OrCam Blog")
    seo_desc = p['yoast_desc'] or p['excerpt']
    
    new_title = title
    new_seo_title = seo_title
    new_seo_desc = seo_desc
    
    # 1. Check title
    if bool(re.search(r'[A-Za-z]{4,}', title)) and bool(re.search(r'\b(the|and|for|with|skills|revolutionizing|joy|learn|ignite|independent|productivity|reader|pen|discover)\b', title, re.I)):
        new_title = translate_to_vietnamese(title)
        time.sleep(0.05)
    
    # 2. Check SEO title
    if "Tieu de SEO" in seo_title or "bai viet AAA" in seo_title.lower() or bool(re.search(r'\b(the|and|for|with|skills|revolutionizing|joy|learn|ignite|independent|productivity|reader|pen|discover)\b', seo_title, re.I)):
        if "Tieu de SEO" in seo_title:
            new_seo_title = "Bài Viết Hướng Dẫn & Tin Tức Mẫu AAA - OrCam Việt Nam"
        else:
            new_seo_title = translate_to_vietnamese(seo_title.replace(" - OrCam Blog", "")).strip() + " - OrCam Blog"
        time.sleep(0.05)
    else:
        new_seo_title = new_title + " - OrCam Blog"

    # 3. Check SEO Desc
    if not seo_desc or len(seo_desc.strip()) < 30 or bool(re.search(r'\b(the|and|for|with|classroom|home|boost|intervention|access|valuable|resources|how to)\b', seo_desc, re.I)) or "Mo ta the meta" in seo_desc:
        new_seo_desc = translate_to_vietnamese(seo_desc)
        if len(new_seo_desc) < 30:
            new_seo_desc = f"Tìm hiểu thông tin chi tiết và cẩm nang hữu ích về {new_title.lower()} từ chuyên gia công nghệ trợ năng OrCam."
        time.sleep(0.05)

    if new_title != title or new_seo_title != seo_title or new_seo_desc != seo_desc:
        updates.append({
            'id': pid,
            'title': new_title,
            'seo_title': new_seo_title,
            'seo_desc': new_seo_desc
        })
        if len(updates) % 20 == 0:
            print(f"Processed {idx+1}/{len(posts)} posts, queued {len(updates)} updates...")

print(f"Total posts needing Vietnamese / Diacritic refinement: {len(updates)}")

# Send updates to WordPress
if updates:
    update_url = "http://orcam.local/wp-content/themes/orcam_theme/apply_blog_seo_updates.php"
    req_data = json.dumps(updates).encode('utf-8')
    req = urllib.request.Request(update_url, data=req_data, headers={'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0'})
    resp = urllib.request.urlopen(req)
    print("WordPress update response:", resp.read().decode('utf-8'))
