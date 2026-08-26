<?php
/** Shared /vi/shop catalog for every published WooCommerce product. */

defined('ABSPATH') || exit;

// Fast cache check for shop catalog
orcam_theme_try_serve_cache('shop_catalog', 'vi_shop_page');

ob_start();
?>
<main class="orcam-shop" id="primary">
    <header class="orcam-shop__header">
        <div><p><?php esc_html_e('OrCam Việt Nam', 'orcam-theme'); ?></p><h1><?php esc_html_e('Tất cả sản phẩm', 'orcam-theme'); ?></h1></div>
    </header>
    <section class="orcam-shop__catalog" aria-label="<?php esc_attr_e('Danh sách sản phẩm', 'orcam-theme'); ?>">
        <div class="orcam-shop__grid">
            <?php foreach (orcam_theme_product_navigation_products() as $post) :
                setup_postdata($post);
                $product = wc_get_product($post->ID);
                if (!$product) {
                    continue;
                }
                $image = orcam_theme_get_product_image_url($product);
                $summary = trim($product->get_short_description());
                if ($summary === '') {
                    $summary = sprintf(__('Khám phá %s với công nghệ hỗ trợ tiên tiến từ OrCam.', 'orcam-theme'), get_the_title($post));
                }
                ?>
                <article class="orcam-shop-card">
                    <div class="orcam-shop-card__inner">
                        <a class="orcam-shop-card__media-link" href="<?php echo esc_url(get_permalink($post)); ?>">
                            <span class="orcam-shop-card__media">
                                <?php if ($product->is_on_sale()) : ?><span class="orcam-shop-card__badge"><?php esc_html_e('Ưu đãi', 'orcam-theme'); ?></span><?php endif; ?>
                                <img src="<?php echo esc_url($image); ?>" alt="<?php echo esc_attr(get_the_title($post)); ?>" loading="lazy">
                            </span>
                        </a>
                        <div class="orcam-shop-card__body">
                            <a class="orcam-shop-card__title-link" href="<?php echo esc_url(get_permalink($post)); ?>">
                                <h2><?php echo esc_html(get_the_title($post)); ?></h2>
                            </a>
                            <div class="orcam-product-stock-status">Còn hàng</div>
                            <p class="orcam-shop-card__description"><?php echo esc_html(wp_trim_words(wp_strip_all_tags($summary), 22, '…')); ?></p>
                            
                            <div class="orcam-shop-card__actions">
                                <a class="orcam-shop-card__btn orcam-shop-card__btn--detail" href="<?php echo esc_url(get_permalink($post)); ?>">
                                    <?php esc_html_e('Xem chi tiết', 'orcam-theme'); ?>
                                </a>
                                <a class="orcam-shop-card__btn orcam-shop-card__btn--buy" href="<?php echo esc_url($product->is_purchasable() && $product->is_in_stock() ? add_query_arg('add-to-cart', $product->get_id(), wc_get_checkout_url()) : get_permalink($post)); ?>">
                                    <?php esc_html_e('Mua ngay', 'orcam-theme'); ?>
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
            <?php endforeach; wp_reset_postdata(); ?>
        </div>
    </section>
</main>
<?php
$shop_content = (string) ob_get_clean();
if (!orcam_theme_render_shared_static_shell($shop_content, 'Tất cả sản phẩm', false, 'shop_catalog', 'vi_shop_page', false, false)) {
    get_header();
    echo $shop_content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    wp_footer();
    echo '</body></html>';
}
