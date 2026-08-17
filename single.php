<?php
/** Render imported posts with their exact static shell and database content. */

$current_post = get_queried_object();
if (!$current_post && isset($GLOBALS['post'])) {
    $current_post = $GLOBALS['post'];
}

if ($current_post instanceof WP_Post && orcam_theme_render_database_blog($current_post)) {
    return;
}

/** Fallback for standard WordPress posts rendered in the shared OrCam shell. */
ob_start();
$post_obj = ($current_post instanceof WP_Post) ? $current_post : get_post();
$title = '';
if ($post_obj) :
    $title = get_the_title($post_obj);
    $content = apply_filters('the_content', $post_obj->post_content);
    $thumb = get_the_post_thumbnail($post_obj, 'large', array('style' => 'width:100%;height:auto;display:block;border-radius:14px;'));
?>
<main id="primary" class="orcam-wp-content" style="max-width:900px;margin:50px auto 80px;padding:0 24px;min-height:60vh;">
    <article id="post-<?php echo esc_attr((string) $post_obj->ID); ?>" <?php post_class('', $post_obj->ID); ?>>
        <h1 style="font-size:clamp(32px,4vw,48px);font-weight:800;margin-bottom:16px;color:#0f172a;line-height:1.2;"><?php echo esc_html($title); ?></h1>
        <p style="font-size:14px;color:#64748b;margin-bottom:28px;"><?php echo esc_html(get_the_date('Y-m-d', $post_obj)); ?> | Bởi <?php echo esc_html(get_the_author_meta('display_name', (int) $post_obj->post_author) ?: 'OrCam'); ?></p>
        <?php if ($thumb) : ?>
            <figure class="orcam-article-featured-image" style="margin-bottom:28px;border-radius:14px;overflow:hidden;">
                <?php echo $thumb; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
            </figure>
        <?php endif; ?>
        <div class="orcam-article-content" style="font-size:16.5px;line-height:1.8;color:#334155;">
            <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
        </div>
    </article>
</main>
<?php
endif;
$post_content = (string) ob_get_clean();
$title = !empty($title) ? $title : get_bloginfo('name');
if (!orcam_theme_render_shared_static_shell($post_content, $title, true)) {
    get_header();
    echo $post_content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    get_footer();
}
