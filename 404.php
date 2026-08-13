<?php
/** Serve legacy static routes before showing the WordPress 404 page. */

if (orcam_theme_maybe_render_static()) {
    return;
}

get_header();
?>
<main id="primary" class="orcam-wp-content orcam-error-page">
    <h1><?php esc_html_e('Page not found', 'orcam-theme'); ?></h1>
    <p><?php esc_html_e('The requested page could not be found.', 'orcam-theme'); ?></p>
    <?php get_search_form(); ?>
    <p><a href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Return home', 'orcam-theme'); ?></a></p>
</main>
<?php get_footer();
