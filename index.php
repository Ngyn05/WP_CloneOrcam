<?php
/** Main router for the complete OrCam static-site migration. */

if (!defined('ABSPATH')) {
    exit;
}

$orcam_document = orcam_theme_static_document();
if ($orcam_document) {
    orcam_theme_render_document($orcam_document);
    exit;
}

status_header(404);
get_header();
?>
<main id="primary" style="max-width: 760px; margin: 8rem auto; padding: 2rem; font-family: sans-serif;">
    <h1><?php esc_html_e('Page not found', 'orcam-theme'); ?></h1>
    <p><?php esc_html_e('The requested OrCam page could not be found.', 'orcam-theme'); ?></p>
    <p><a href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Return home', 'orcam-theme'); ?></a></p>
</main>
<?php get_footer();

