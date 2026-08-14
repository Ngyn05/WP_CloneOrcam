<?php
/** Default WordPress post index rendered in the shared OrCam shell. */

ob_start();
?>
<main id="primary" class="orcam-wp-content" style="max-width:1200px;margin:50px auto 80px;padding:0 24px;min-height:60vh;">
    <h1 style="font-size:clamp(32px,4vw,48px);font-weight:800;margin-bottom:28px;">Bài viết</h1>
    <?php if (have_posts()) : ?>
        <div class="orcam-archive-grid" style="display:grid;grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));gap:24px;">
            <?php while (have_posts()) : the_post(); ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?> style="background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:24px;">
                    <h2 style="font-size:20px;font-weight:700;margin-bottom:12px;"><a href="<?php the_permalink(); ?>" style="color:#0f172a;text-decoration:none;"><?php the_title(); ?></a></h2>
                    <div style="font-size:14.5px;color:#475569;line-height:1.6;"><?php the_excerpt(); ?></div>
                </article>
            <?php endwhile; ?>
        </div>
        <?php the_posts_navigation(); ?>
    <?php else : ?>
        <p style="font-size:16px;color:#64748b;">Chưa có bài viết nào.</p>
    <?php endif; ?>
</main>
<?php
$index_content = (string) ob_get_clean();
if (!orcam_theme_render_shared_static_shell($index_content, 'Bài viết', true)) {
    get_header();
    echo $index_content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    get_footer();
}
