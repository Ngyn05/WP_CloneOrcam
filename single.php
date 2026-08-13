<?php
/** Render imported posts with their exact static shell and database content. */

$current_post = get_queried_object();
if ($current_post instanceof WP_Post && orcam_theme_render_database_blog($current_post)) {
    return;
}

/** Standard fallback for posts that were not imported from the static site. */

get_header();
?>
<main id="primary" class="orcam-wp-content">
    <?php while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <h1><?php the_title(); ?></h1>
            <?php if (has_post_thumbnail()) : ?>
                <figure class="orcam-article-featured-image">
                    <?php the_post_thumbnail('full', array('loading' => 'eager')); ?>
                </figure>
            <?php endif; ?>
            <div class="orcam-article-content">
                <?php the_content(); ?>
            </div>
            <?php wp_link_pages(); ?>
        </article>
        <?php the_post_navigation(); ?>
        <?php comments_template(); ?>
    <?php endwhile; ?>
</main>
<?php get_footer();
