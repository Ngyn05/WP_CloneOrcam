<?php
/** Standard single-post template. */

get_header();
?>
<main id="primary" class="orcam-wp-content">
    <?php while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <h1><?php the_title(); ?></h1>
            <?php the_content(); ?>
            <?php wp_link_pages(); ?>
        </article>
        <?php the_post_navigation(); ?>
        <?php comments_template(); ?>
    <?php endwhile; ?>
</main>
<?php get_footer();
