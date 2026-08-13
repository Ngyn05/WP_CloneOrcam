<footer class="orcam-wp-footer">
    <?php
    wp_nav_menu(array(
        'theme_location' => 'footer',
        'container'      => false,
        'fallback_cb'    => false,
    ));
    ?>
    <p>&copy; <?php echo esc_html(wp_date('Y')); ?> <?php bloginfo('name'); ?></p>
</footer>
<?php wp_footer(); ?>
</body>
</html>
