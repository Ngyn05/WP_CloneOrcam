<?php
/**
 * Warmup and Pre-render cache for all OrCam static & database pages.
 * Run in CLI or via Web.
 */

declare(strict_types=1);

$wp_load = dirname(__DIR__, 4) . '/wp-load.php';
if (is_file($wp_load)) {
    require_once $wp_load;
}

if (!defined('ABSPATH')) {
    echo "WordPress ABSPATH not defined.\n";
    exit(1);
}

$theme_dir = get_template_directory();
$static_pages_dir = $theme_dir . '/static-pages';
$cache_dir = orcam_theme_cache_dir();

echo "Starting full cache warmup for first-time visitors...\n";
echo "Cache directory: {$cache_dir}\n";

$rendered_count = 0;
$files = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($static_pages_dir, FilesystemIterator::SKIP_DOTS)
);

foreach ($files as $file) {
    if ($file->isFile() && strtolower($file->getExtension()) === 'html') {
        $path = $file->getRealPath();
        orcam_theme_render_document($path, null, '', true);
        $rendered_count++;
    }
}

echo "Pre-rendered {$rendered_count} static pages.\n";

// Warmup WooCommerce Products
$product_count = 0;
if (function_exists('orcam_theme_product_navigation_products')) {
    $products = orcam_theme_product_navigation_products();
    foreach ($products as $prod) {
        if (orcam_theme_render_database_product($prod, true)) {
            $product_count++;
        }
    }
    echo "Pre-rendered {$product_count} WooCommerce product pages.\n";
}

// Warmup Shop Catalog
if (function_exists('orcam_theme_render_shared_static_shell')) {
    ob_start();
    ?>
    <main class="orcam-shop" id="primary">
        <header class="orcam-shop__header">
            <div><p><?php esc_html_e('OrCam Việt Nam', 'orcam-theme'); ?></p><h1><?php esc_html_e('Tất cả sản phẩm', 'orcam-theme'); ?></h1></div>
        </header>
        <section class="orcam-shop__catalog" aria-label="<?php esc_attr_e('Danh sách sản phẩm', 'orcam-theme'); ?>">
            <div class="orcam-shop__grid">
                <?php foreach (orcam_theme_product_navigation_products() as $p_post) :
                    $p_obj = wc_get_product($p_post->ID);
                    if (!$p_obj) continue;
                    $p_img = $p_obj->get_image_id() ? wp_get_attachment_image_url($p_obj->get_image_id(), 'medium_large') : wc_placeholder_img_src('medium_large');
                    $p_sum = trim($p_obj->get_short_description()) ?: sprintf(__('Khám phá %s với công nghệ hỗ trợ tiên tiến từ OrCam.', 'orcam-theme'), get_the_title($p_post));
                    ?>
                    <article class="orcam-shop-card">
                        <div class="orcam-shop-card__inner">
                            <a class="orcam-shop-card__media-link" href="<?php echo esc_url(get_permalink($p_post)); ?>">
                                <span class="orcam-shop-card__media">
                                    <?php if ($p_obj->is_on_sale()) : ?><span class="orcam-shop-card__badge"><?php esc_html_e('Ưu đãi', 'orcam-theme'); ?></span><?php endif; ?>
                                    <img src="<?php echo esc_url($p_img); ?>" alt="<?php echo esc_attr(get_the_title($p_post)); ?>" loading="lazy">
                                </span>
                            </a>
                            <div class="orcam-shop-card__body">
                                <a class="orcam-shop-card__title-link" href="<?php echo esc_url(get_permalink($p_post)); ?>">
                                    <h2><?php echo esc_html(get_the_title($p_post)); ?></h2>
                                </a>
                                <?php if ($p_obj->get_price() !== '') : ?>
                                    <div class="orcam-shop-card__price"><?php echo wp_kses_post($p_obj->get_price_html()); ?></div>
                                <?php endif; ?>
                                <p class="orcam-shop-card__description"><?php echo esc_html(wp_trim_words(wp_strip_all_tags($p_sum), 22, '…')); ?></p>
                                <div class="orcam-shop-card__actions">
                                    <a class="orcam-shop-card__btn orcam-shop-card__btn--detail" href="<?php echo esc_url(get_permalink($p_post)); ?>">
                                        <?php esc_html_e('Xem chi tiết', 'orcam-theme'); ?>
                                    </a>
                                    <a class="orcam-shop-card__btn orcam-shop-card__btn--buy" href="<?php echo esc_url($p_obj->is_purchasable() && $p_obj->is_in_stock() ? add_query_arg('add-to-cart', $p_obj->get_id(), wc_get_checkout_url()) : get_permalink($p_post)); ?>">
                                        <?php esc_html_e('Mua ngay', 'orcam-theme'); ?>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </article>
                <?php endforeach; ?>
            </div>
        </section>
    </main>
    <?php
    $shop_html = (string) ob_get_clean();
    orcam_theme_render_shared_static_shell($shop_html, 'Tất cả sản phẩm', false, 'shop_catalog', 'vi_shop_page', true);
    echo "Pre-rendered Shop catalog page.\n";
}

// Warmup Blog Posts
$blog_count = 0;
if (function_exists('orcam_theme_render_database_blog')) {
    $blogs = get_posts(array(
        'post_type'      => 'post',
        'post_status'    => 'publish',
        'posts_per_page' => -1,
        'no_found_rows'  => true,
    ));
    foreach ($blogs as $b) {
        if (orcam_theme_render_database_blog($b, true)) {
            $blog_count++;
        }
    }
    echo "Pre-rendered {$blog_count} blog post pages.\n";
}

echo "ALL PAGES WARMED UP AND CACHED SUCCESSFULLY!\n";

