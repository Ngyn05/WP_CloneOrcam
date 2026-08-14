<?php
/**
 * Default WooCommerce product template.
 *
 * The five migrated OrCam products are rendered earlier by
 * orcam_theme_render_database_product() and never reach this file. Every new
 * WooCommerce product automatically uses this shared layout.
 */

defined('ABSPATH') || exit;

ob_start();

while (have_posts()) :
    the_post();
    $product = wc_get_product(get_the_ID());
    if (!$product) {
        continue;
    }


    $image_ids = array_values(array_filter(array_merge(
        array($product->get_image_id()),
        $product->get_gallery_image_ids()
    )));
    $main_image = $image_ids ? wp_get_attachment_image_url($image_ids[0], 'large') : wc_placeholder_img_src('large');
    ?>
    <main class="orcam-default-product" id="primary">
        <section class="orcam-default-product__hero">
            <div class="orcam-default-product__hero-inner">
                <p class="orcam-default-product__eyebrow"><?php esc_html_e('Sản phẩm OrCam', 'orcam-theme'); ?></p>
                <h1><?php the_title(); ?></h1>
            </div>
        </section>

        <section class="orcam-default-product__purchase" aria-label="<?php echo esc_attr(get_the_title()); ?>">
            <div class="orcam-default-product__purchase-inner">
                <div class="orcam-default-product__gallery">
                    <div class="orcam-default-product__stage">
                        <img id="orcam-default-product-image" src="<?php echo esc_url($main_image); ?>"
                            alt="<?php echo esc_attr(get_the_title()); ?>" loading="eager" decoding="async">
                    </div>
                    <?php if (count($image_ids) > 1) : ?>
                        <div class="orcam-default-product__thumbs" aria-label="<?php esc_attr_e('Bộ sưu tập ảnh sản phẩm', 'orcam-theme'); ?>">
                            <?php foreach ($image_ids as $index => $image_id) :
                                $large = wp_get_attachment_image_url($image_id, 'large');
                                $thumb = wp_get_attachment_image_url($image_id, 'thumbnail') ?: $large;
                                if (!$large) {
                                    continue;
                                }
                                ?>
                                <button type="button" class="orcam-default-product__thumb<?php echo $index === 0 ? ' is-active' : ''; ?>"
                                    data-large="<?php echo esc_url($large); ?>" aria-label="<?php echo esc_attr(sprintf('Xem ảnh %d', $index + 1)); ?>">
                                    <img src="<?php echo esc_url($thumb); ?>" alt="" loading="lazy">
                                </button>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                </div>

                <div class="orcam-default-product__summary">
                    <h2><?php the_title(); ?></h2>
                    <?php if ($product->get_price() !== '') : ?>
                        <div class="orcam-default-product__price"><?php echo wp_kses_post($product->get_price_html()); ?></div>
                    <?php endif; ?>
                    <div class="orcam-default-product__stock <?php echo esc_attr($product->is_in_stock() ? 'is-in-stock' : 'is-out-of-stock'); ?>">
                        <?php echo wp_kses_post(wc_get_stock_html($product)); ?>
                    </div>
                    <?php if ($product->get_short_description() !== '') : ?>
                        <div class="orcam-default-product__short-description">
                            <?php echo wp_kses_post(wpautop($product->get_short_description())); ?>
                        </div>
                    <?php endif; ?>
                    <?php if ($product->is_purchasable() && $product->is_in_stock()) : ?>
                        <div class="orcam-default-product__cart">
                            <?php woocommerce_template_single_add_to_cart(); ?>
                        </div>
                    <?php endif; ?>
                    <?php if ($product->get_sku()) : ?>
                        <p class="orcam-default-product__sku"><strong>SKU:</strong> <?php echo esc_html($product->get_sku()); ?></p>
                    <?php endif; ?>
                </div>
            </div>
        </section>

        <?php if (trim((string) get_the_content()) !== '') : ?>
            <section class="orcam-default-product__description">
                <div class="orcam-default-product__content orcam-article-content">
                    <h2><?php esc_html_e('Thông tin sản phẩm', 'orcam-theme'); ?></h2>
                    <?php the_content(); ?>
                </div>
            </section>
        <?php endif; ?>
    </main>

    <script>
    document.addEventListener('click', function (event) {
        var button = event.target.closest('.orcam-default-product__thumb');
        if (!button || !button.dataset.large) return;
        var image = document.getElementById('orcam-default-product-image');
        if (image) image.src = button.dataset.large;
        document.querySelectorAll('.orcam-default-product__thumb').forEach(function (item) {
            item.classList.toggle('is-active', item === button);
        });
    });
    </script>
    <?php
endwhile;

$product_content = (string) ob_get_clean();
if (!orcam_theme_render_shared_static_shell($product_content, get_the_title())) {
    get_header();
    echo $product_content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    get_footer();
}
