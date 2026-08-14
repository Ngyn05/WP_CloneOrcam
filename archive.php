<?php
/** Standard archive template rendered in the shared OrCam shell. */

ob_start();
?>
<main id="primary" class="orcam-wp-content" style="max-width:1200px;margin:50px auto 80px;padding:0 24px;min-height:60vh;">
    <?php the_archive_title('<h1 style="font-size:clamp(32px,4vw,48px);font-weight:800;margin-bottom:20px;">', '</h1>'); ?>
    <?php the_archive_description('<div class="archive-description" style="font-size:16px;color:#64748b;margin-bottom:30px;">', '</div>'); ?>
    <div class="orcam-archive-grid" style="display:grid;grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));gap:24px;">
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?> style="background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:24px;">
                <h2 style="font-size:20px;font-weight:700;margin-bottom:12px;"><a href="<?php the_permalink(); ?>" style="color:#0f172a;text-decoration:none;"><?php the_title(); ?></a></h2>
                <div style="font-size:14.5px;color:#475569;line-height:1.6;"><?php the_excerpt(); ?></div>
            </article>
        <?php endwhile; ?>
    </div>
    <?php the_posts_navigation(); ?>
</main>
<?php
$archive_content = (string) ob_get_clean();
$title = get_the_archive_title() ?: 'Lưu trữ';
if (!orcam_theme_render_shared_static_shell($archive_content, $title, true)) {
    get_header();
    echo $archive_content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    get_footer();
}
