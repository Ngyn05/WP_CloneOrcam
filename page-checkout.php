<?php
/** Vietnamese WooCommerce checkout rendered in the shared OrCam shell. */

defined('ABSPATH') || exit;

ob_start();
?>
<main class="orcam-checkout" id="primary">
    <header class="orcam-checkout__header">
        <div><p>OrCam Việt Nam</p><h1>Thanh toán</h1></div>
    </header>
    <section class="orcam-checkout__content">
        <?php echo do_shortcode('[woocommerce_checkout]'); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
    </section>
</main>
<?php
$checkout_content = (string) ob_get_clean();
if (!orcam_theme_render_shared_static_shell($checkout_content, 'Thanh toán', true)) {
    get_header();
    echo $checkout_content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    get_footer();
}
