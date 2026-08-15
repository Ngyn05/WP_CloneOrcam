<?php
/**
 * OrCam Theme - Cache Cleaner Tool
 * URL: http://orcam.local/wp-content/themes/orcam_theme/tools/clear-cache.php
 */

define('WP_USE_THEMES', false);
require_once dirname(dirname(dirname(dirname(__DIR__)))) . '/wp-load.php';

$cache_dir = WP_CONTENT_DIR . '/cache/orcam_static';
$deleted_count = 0;
$freed_bytes = 0;

if (is_dir($cache_dir)) {
    $files = glob($cache_dir . '/*');
    if ($files) {
        foreach ($files as $file) {
            if (is_file($file)) {
                $freed_bytes += filesize($file);
                if (@unlink($file)) {
                    $deleted_count++;
                }
            }
        }
    }
}

if (function_exists('wp_cache_flush')) {
    wp_cache_flush();
}

$freed_kb = round($freed_bytes / 1024, 2);

if (php_sapi_name() === 'cli') {
    echo "========================================\n";
    echo "     OrCam Theme Cache Cleaner\n";
    echo "========================================\n";
    echo "Deleted: {$deleted_count} files ({$freed_kb} KB)\n";
    echo "Cache cleared completely!\n";
    exit(0);
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Xóa Cache OrCam Theme</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0f172a; color: #f8fafc; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }
        .card { background: #1e293b; padding: 40px; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); max-width: 480px; width: 100%; text-align: center; border: 1px solid #334155; }
        .icon { font-size: 54px; margin-bottom: 15px; }
        h1 { margin: 0 0 10px; font-size: 24px; color: #38bdf8; }
        p { color: #94a3b8; font-size: 15px; line-height: 1.6; margin: 0 0 20px; }
        .stats { background: #0f172a; padding: 15px; border-radius: 10px; margin-bottom: 25px; display: flex; justify-content: space-around; }
        .stat-item { text-align: center; }
        .stat-val { font-size: 20px; font-weight: bold; color: #4ade80; }
        .stat-lbl { font-size: 12px; color: #64748b; margin-top: 4px; }
        .btn { display: inline-block; background: #0284c7; color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; transition: background 0.2s; }
        .btn:hover { background: #0369a1; }
    </style>
</head>
<body>
    <div class="card">
        <div class="icon">✨</div>
        <h1>Đã xóa sạch Cache thành công!</h1>
        <p>Toàn bộ file HTML tĩnh và cache WordPress đã được làm mới.</p>
        <div class="stats">
            <div class="stat-item">
                <div class="stat-val"><?php echo $deleted_count; ?></div>
                <div class="stat-lbl">File đã xóa</div>
            </div>
            <div class="stat-item">
                <div class="stat-val"><?php echo $freed_kb; ?> KB</div>
                <div class="stat-lbl">Dung lượng giải phóng</div>
            </div>
        </div>
        <a href="/vi/home" class="btn">Về lại Trang Chủ</a>
    </div>
</body>
</html>
