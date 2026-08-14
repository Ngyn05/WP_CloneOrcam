<?php
/** Standard editable WordPress page template rendered in the shared OrCam shell. */

if (function_exists('is_checkout') && is_checkout()) {
    include get_template_directory() . '/page-checkout.php';
    return;
}
if (function_exists('is_shop') && is_shop()) {
    include get_template_directory() . '/archive-product.php';
    return;
}

ob_start();
?>
<main id="primary" class="orcam-wp-content" style="max-width:1200px;margin:50px auto 80px;padding:0 24px;min-height:60vh;">
    <?php while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <h1 style="font-size:clamp(32px,4vw,48px);font-weight:800;margin-bottom:24px;"><?php the_title(); ?></h1>
            <div class="entry-content" style="font-size:16px;line-height:1.7;">
                <?php the_content(); ?>
            </div>
            <?php wp_link_pages(); ?>
        </article>
    <?php endwhile; ?>
</main>
<?php
$page_content = (string) ob_get_clean();
$title = get_the_title() ?: get_bloginfo('name');
if (!orcam_theme_render_shared_static_shell($page_content, $title, true)) {
    get_header();
    echo $page_content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    get_footer();
}
