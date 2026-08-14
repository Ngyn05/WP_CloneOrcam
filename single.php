<?php
/** Render imported posts with their exact static shell and database content. */

$current_post = get_queried_object();
if ($current_post instanceof WP_Post && orcam_theme_render_database_blog($current_post)) {
    return;
}

/** Fallback for standard WordPress posts rendered in the shared OrCam shell. */
ob_start();
?>
<main id="primary" class="orcam-wp-content" style="max-width:900px;margin:50px auto 80px;padding:0 24px;min-height:60vh;">
    <?php while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <h1 style="font-size:clamp(32px,4vw,48px);font-weight:800;margin-bottom:20px;"><?php the_title(); ?></h1>
            <?php if (has_post_thumbnail()) : ?>
                <figure class="orcam-article-featured-image" style="margin-bottom:28px;border-radius:14px;overflow:hidden;">
                    <?php the_post_thumbnail('large', array('style' => 'width:100%;height:auto;display:block;')); ?>
                </figure>
            <?php endif; ?>
            <div class="orcam-article-content" style="font-size:16.5px;line-height:1.75;">
                <?php the_content(); ?>
            </div>
            <?php wp_link_pages(); ?>
        </article>
        <?php the_post_navigation(); ?>
        <?php comments_template(); ?>
    <?php endwhile; ?>
</main>
<?php
$post_content = (string) ob_get_clean();
$title = get_the_title() ?: get_bloginfo('name');
if (!orcam_theme_render_shared_static_shell($post_content, $title, true)) {
    get_header();
    echo $post_content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    get_footer();
}
