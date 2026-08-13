<?php
/** Import the exported OrCam blog documents into native WordPress posts. */

if (PHP_SAPI !== 'cli') {
    exit("CLI only.\n");
}

$public_dir = dirname(__DIR__, 4);
$database_host = getenv('ORCAM_DB_HOST');
if ($database_host && !defined('DB_HOST')) {
    define('DB_HOST', $database_host);
}
require $public_dir . '/wp-load.php';

$theme_dir = dirname(__DIR__);
$files = glob($theme_dir . '/static-pages/vi/blog/*.html') ?: array();
$created = 0;
$updated = 0;
$failed = 0;

foreach ($files as $file) {
    $html = (string) file_get_contents($file);
    $locale = basename(dirname(dirname($file)));
    $slug = basename($file, '.html');

    if (preg_match('#<article\s+class=["\']blog["\'][^>]*>(.*?)</article>#is', $html, $body_match)) {
        $content = trim($body_match[1]);
    } elseif (preg_match('#<article\s+id=["\']mainBody["\'][^>]*>(.*?)</article>#is', $html, $body_match)) {
        $content = trim($body_match[1]);
    } else {
        fwrite(STDERR, "Missing content: {$file}\n");
        $failed++;
        continue;
    }
    preg_match('#<h1[^>]*>(.*?)</h1>#is', $html, $title_match);
    $title = trim(wp_strip_all_tags(html_entity_decode($title_match[1] ?? $slug, ENT_QUOTES | ENT_HTML5, 'UTF-8')));

    preg_match('#<meta\s+name=["\']description["\']\s+content=["\']([^"\']*)#i', $html, $description_match);
    $excerpt = html_entity_decode($description_match[1] ?? '', ENT_QUOTES | ENT_HTML5, 'UTF-8');

    preg_match('#property=["\']article:published_time["\']\s+content=["\']([^"\']+)#i', $html, $date_match);
    $timestamp = isset($date_match[1]) ? strtotime($date_match[1]) : false;
    $date = $timestamp ? gmdate('Y-m-d H:i:s', $timestamp) : current_time('mysql', true);

    $existing = get_posts(array(
        'post_type'      => 'post',
        'post_status'    => 'any',
        'meta_key'       => '_orcam_source_file',
        'meta_value'     => str_replace('\\', '/', substr($file, strlen($theme_dir) + 1)),
        'fields'         => 'ids',
        'posts_per_page' => 1,
    ));

    $postarr = array(
        'ID'            => $existing ? (int) $existing[0] : 0,
        'post_type'     => 'post',
        'post_status'   => 'publish',
        'post_author'   => 1,
        'post_name'     => $slug,
        'post_title'    => $title,
        'post_excerpt'  => $excerpt,
        'post_content'  => $content,
        'post_date_gmt' => $date,
        'post_date'     => get_date_from_gmt($date),
    );

    $post_id = wp_insert_post(wp_slash($postarr), true);
    if (is_wp_error($post_id)) {
        fwrite(STDERR, "Import failed {$file}: {$post_id->get_error_message()}\n");
        $failed++;
        continue;
    }

    update_post_meta($post_id, '_orcam_locale', $locale);
    update_post_meta($post_id, '_orcam_source_slug', $slug);
    update_post_meta($post_id, '_orcam_source_file', str_replace('\\', '/', substr($file, strlen($theme_dir) + 1)));
    $existing ? $updated++ : $created++;
}

flush_rewrite_rules(false);
printf("Imported %d; updated %d; failed %d; total %d.\n", $created, $updated, $failed, count($files));
