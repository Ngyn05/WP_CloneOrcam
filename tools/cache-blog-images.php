<?php
$theme_dir = dirname(__DIR__);
$static_vi_dir = $theme_dir . '/static-pages/vi';

// Let's create a cache file of blog image urls mapped by slug
$blog_files = glob($static_vi_dir . '/*.html');
$image_map = array();
foreach ($blog_files as $f) {
    $slug = basename($f, '.html');
    $content = file_get_contents($f);
    if (preg_match('#<meta\s+property=(["\'])og:image\1\s+content=(["\'])(.*?)\2#is', $content, $match)) {
        $image_map[$slug] = html_entity_decode($match[3], ENT_QUOTES | ENT_HTML5, 'UTF-8');
    }
}

file_put_contents($theme_dir . '/inc/blog-images-cache.json', json_encode($image_map, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
echo "Generated blog-images-cache.json with " . count($image_map) . " entries.\n";
