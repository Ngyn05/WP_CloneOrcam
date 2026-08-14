<?php
$route = orcam_theme_request_route();
if ($route === 'vi/checkout' || strpos($route, 'vi/checkout/') === 0 || $route === 'checkout') {
    include get_template_directory() . '/page-checkout.php';
    return;
}
if ($route === 'vi/shop' || strpos($route, 'vi/shop/') === 0 || $route === 'shop') {
    include get_template_directory() . '/archive-product.php';
    return;
}

if (orcam_theme_maybe_render_database_product()) {
    return;
}

if (orcam_theme_maybe_render_static()) {
    return;
}

ob_start();
?>
<main id="primary" class="orcam-wp-content orcam-error-page" style="max-width:800px;margin:80px auto;padding:0 24px;text-align:center;min-height:50vh;">
    <h1 style="font-size:clamp(36px,5vw,56px);font-weight:800;margin-bottom:16px;">404 - Không tìm thấy trang</h1>
    <p style="font-size:18px;color:#64748b;margin-bottom:32px;">Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.</p>
    <div style="margin-bottom:32px;">
        <a href="<?php echo esc_url(home_url('/vi/home')); ?>" style="display:inline-flex;align-items:center;justify-content:center;background:#111;color:#fff;font-weight:700;font-size:16px;padding:14px 32px;border-radius:10px;text-decoration:none;transition:background .2s;">Quay về Trang chủ</a>
    </div>
</main>
<?php
$error_content = (string) ob_get_clean();
if (!orcam_theme_render_shared_static_shell($error_content, 'Không tìm thấy trang', true)) {
    get_header();
    echo $error_content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    get_footer();
}
