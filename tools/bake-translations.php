<?php
$theme_dir = dirname(__DIR__);
$static_vi_dir = $theme_dir . '/static-pages/vi';
$translations_file = $theme_dir . '/inc/vietnamese-translations.php';

if (!is_file($translations_file)) {
    die("Translations file not found.\n");
}

$translations = require $translations_file;
$media_dir = $theme_dir . '/media';
$local_media_files = is_dir($media_dir) ? array_flip(scandir($media_dir) ?: array()) : array();

$files = glob($static_vi_dir . '/*.html');
echo "Found " . count($files) . " HTML files to bake in static-pages/vi/\n";

foreach ($files as $file) {
    $filename = basename($file);
    $html = (string) file_get_contents($file);
    $original_len = strlen($html);

    // 1. Apply translation dictionary
    $html = strtr($html, $translations);

    // 2. Specific fix for orcam-learn.html
    if ($filename === 'orcam-learn.html') {
        $html = str_replace(
            '<h1><strong>OrCam Học </strong><span style="font-family: Trebuchet MS"><span style="color: rgb(73, 26, 189)"><strong>Cơ bản</strong></span></span></h1>',
            '<h1><strong>OrCam </strong><span style="font-family: Trebuchet MS"><span style="color: rgb(73, 26, 189)"><strong>Learn Basic</strong></span></span></h1>',
            $html
        );
        $html = str_replace(
            array('Group&#32;4151.png', 'Book_10M_txt&#32;3.png'),
            array('Group&#32;4151.webp', 'Book_10M_txt&#32;3.webp'),
            $html
        );
    }

    // 3. Ensure lang="vi"
    $html = preg_replace('/<html([^>]*?)\blang=["\'][^"\']*["\']([^>]*)>/i', '<html$1lang="vi"$2>', $html, 1);

    file_put_contents($file, $html);
    echo "Baked $filename (" . ($original_len) . " -> " . strlen($html) . " bytes)\n";
}

echo "All static files baked successfully!\n";
