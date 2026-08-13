<?php
/** Standard archive template. */

get_header();
?>
<main id="primary" class="orcam-wp-content">
    <?php the_archive_title('<h1>', '</h1>'); ?>
    <?php the_archive_description('<div class="archive-description">', '</div>'); ?>
    <?php while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
            <?php the_excerpt(); ?>
        </article>
    <?php endwhile; ?>
    <?php the_posts_navigation(); ?>
</main>
<?php get_footer();
