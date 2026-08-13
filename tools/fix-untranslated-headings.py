import os
import sys
import html
import importlib.util
from pathlib import Path
import pymysql
from bs4 import BeautifulSoup, NavigableString
import re

# Load translate-blog-posts.py dynamically
tools_dir = Path(__file__).parent
spec = importlib.util.spec_from_file_location("translate_posts", str(tools_dir / "translate-blog-posts.py"))
translate_posts = importlib.util.module_from_spec(spec)
spec.loader.exec_module(translate_posts)

# Set stdout encoding to utf-8 for Windows console
sys.stdout.reconfigure(encoding='utf-8')

# Regex to detect English letters
LETTERS = re.compile(r"[A-Za-z]")
# Regex to detect Vietnamese characters
VIETNAMESE = re.compile(r"[À-ỹĐđ]")

def is_english(text: str) -> bool:
    t = text.strip()
    return bool(len(t) > 2 and LETTERS.search(t) and not VIETNAMESE.search(t))

def clean_and_normalize(text: str) -> str:
    # Replace the replacement character  with double quotes
    cleaned = text.replace("", '"').strip()
    return cleaned

def should_force_translate(text: str) -> bool:
    t = clean_and_normalize(text)
    brands = {
        "jaws", "lutein", "orcam", "c-pen", "kindle", "linkedin", "facebook", 
        "twitter", "whatsapp", "apple", "airpods", "amazon", "youtube", 
        "runkeeper", "dominos", "nessie", "nessy", "erik weihenmayer", 
        "johnny derp", "allan pineda lindo, jr."
    }
    if not is_english(t):
        return False
    if t.lower() in brands:
        return False
    return True

def main():
    connection = pymysql.connect(**translate_posts.DB)
    with connection.cursor() as cursor:
        cursor.execute(
            """SELECT p.ID, p.post_title, p.post_content 
               FROM wp_posts p INNER JOIN wp_postmeta m ON m.post_id=p.ID
               WHERE p.post_type='post' AND m.meta_key='_orcam_vi_static' AND m.meta_value='1'
               ORDER BY p.ID"""
        )
        posts = cursor.fetchall()
        
    print(f"Total posts fetched: {len(posts)}")
    
    posts_data = []
    texts_to_translate = set()
    cache = translate_posts.cache
    
    # Custom manual translations for specific hard strings
    manual_translations = {
        "OrCam Read 3: A Game-Changer": "OrCam Read 3: Người thay đổi cuộc chơi",
        "OrCam MyEye Has Transformed The Way I Live": '"OrCam MyEye đã thay đổi cách tôi sống"',
        "\"OrCam MyEye Has Transformed The Way I Live\"": '"OrCam MyEye đã thay đổi cách tôi sống"',
        "Fate In the Works": "Số phận đang an bài"
    }
    
    for post_id, title, content in posts:
        soup = BeautifulSoup(content, "html.parser")
        headings = soup.find_all(["h1", "h2", "h3"])
        
        headings_in_post = []
        for h in headings:
            for node in h.find_all(string=True):
                if isinstance(node, NavigableString):
                    text = str(node).strip()
                    if should_force_translate(text):
                        texts_to_translate.add(str(node))
                        headings_in_post.append((node, str(node)))
                        
        if headings_in_post:
            posts_data.append((post_id, title, soup, headings_in_post))
            
    if not texts_to_translate:
        print("No headings require translation. Database is clean.")
        connection.close()
        return
        
    print(f"Found {len(texts_to_translate)} heading strings to translate.")
    
    # Perform translation
    translated_map = {}
    for s in texts_to_translate:
        # Check manual translations first
        if s in manual_translations:
            translated_map[s] = manual_translations[s]
            cache[s] = manual_translations[s]
            continue
            
        cleaned_str = clean_and_normalize(s)
        if cleaned_str in manual_translations:
            translated_map[s] = manual_translations[cleaned_str]
            cache[s] = manual_translations[cleaned_str]
            continue
            
        # Fallback to single direct Google translation
        try:
            translated_val = translate_posts.translator.translate(cleaned_str)
            if translated_val:
                translated_map[s] = translated_val
                cache[s] = translated_val
                print(f"Translated: '{s}' -> '{translated_val}'")
            else:
                translated_map[s] = s
        except Exception as e:
            print(f"Failed to translate '{s}': {e}")
            translated_map[s] = s
            
    # Save cache
    translate_posts.save_cache()
    
    # Now replace the texts and update DB
    total_headings_fixed = 0
    posts_updated = 0
    
    for post_id, title, soup, headings_in_post in posts_data:
        updated = False
        for node, original_text in headings_in_post:
            translated_text = translated_map.get(original_text)
            if translated_text and translated_text != original_text:
                node.replace_with(translated_text)
                updated = True
                total_headings_fixed += 1
                
        if updated:
            new_content = str(soup)
            with connection.cursor() as cursor:
                cursor.execute(
                    "UPDATE wp_posts SET post_content=%s, post_modified=NOW(), post_modified_gmt=UTC_TIMESTAMP() WHERE ID=%s",
                    (new_content, post_id)
                )
            posts_updated += 1
            print(f"Updated Post ID {post_id}: '{title}'")
            
    connection.close()
    print(f"\nCompleted! Fixed {total_headings_fixed} headings across {posts_updated} posts.")

if __name__ == '__main__':
    main()
