<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header class="orcam-wp-header">
    <div class="orcam-wp-header__inner">
        <a class="orcam-wp-brand" href="<?php echo esc_url(home_url('/')); ?>">
            <?php if (has_custom_logo()) : ?>
                <?php the_custom_logo(); ?>
            <?php else : ?>
                <?php bloginfo('name'); ?>
            <?php endif; ?>
        </a>
        <nav aria-label="<?php esc_attr_e('Primary navigation', 'orcam-theme'); ?>">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container'      => false,
                'fallback_cb'    => false,
            ));
            ?>
        </nav>
    </div>
</header>
