<?php
/**
 * OrCam theme bootstrap.
 *
 * The original site is a compiled Svelte application. Its documents and all
 * compiled assets are preserved in this theme so no markup, CSS or JavaScript
 * is discarded during the WordPress migration.
 */

if (!defined('ABSPATH')) {
    exit;
}

define('ORCAM_THEME_VERSION', '2.2.3');
define('ORCAM_USERWAY_ACCOUNT', 't2KpHXGp9h');

add_action('after_setup_theme', static function () {
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script'));
    add_theme_support('automatic-feed-links');
    add_theme_support('responsive-embeds');
    add_theme_support('align-wide');
    add_editor_style('editor-style.css');
    register_nav_menus(array(
        'primary' => __('Primary navigation', 'orcam-theme'),
        'footer'  => __('Footer navigation', 'orcam-theme'),
    ));
});

/** Use the familiar Visual/Code editor for blog posts. */
add_filter('use_block_editor_for_post_type', static function (bool $use_block_editor, string $post_type): bool {
    return $post_type === 'post' ? false : $use_block_editor;
}, 10, 2);

add_filter('wp_default_editor', static function (): string {
    return 'tinymce';
});

/** Match the requested edit form by placing the featured image above the editor. */
add_action('do_meta_boxes', static function (): void {
    remove_meta_box('postimagediv', 'post', 'side');
    remove_meta_box('postexcerpt', 'post', 'normal');
    add_meta_box(
        'postimagediv',
        __('áº¢nh Ä‘áº¡i diá»‡n', 'orcam-theme'),
        'post_thumbnail_meta_box',
        'post',
        'normal',
        'high'
    );
    add_meta_box(
        'orcam-post-description',
        __('Description', 'orcam-theme'),
        static function (WP_Post $post): void {
            wp_nonce_field('orcam_save_post_description', 'orcam_description_nonce');
            echo '<p><label class="screen-reader-text" for="orcam-post-description-field">Description</label>';
            echo '<textarea id="orcam-post-description-field" name="orcam_post_description" rows="5" style="width:100%">'
                . esc_textarea($post->post_excerpt) . '</textarea></p>';
            echo '<p class="description">' . esc_html__('Ná»™i dung nÃ y xuáº¥t hiá»‡n trÃªn tháº» bÃ i viáº¿t vÃ  trong tháº» meta description.', 'orcam-theme') . '</p>';
        },
        'post',
        'normal',
        'high'
    );
});

add_action('save_post_post', static function (int $post_id): void {
    static $saving = false;
    if ($saving) {
        return;
    }
    if (!isset($_POST['orcam_description_nonce'])
        || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['orcam_description_nonce'])), 'orcam_save_post_description')
        || (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
        || !current_user_can('edit_post', $post_id)
        || !isset($_POST['orcam_post_description'])) {
        return;
    }

    $saving = true;
    wp_update_post(array(
        'ID'           => $post_id,
        'post_excerpt' => sanitize_textarea_field(wp_unslash($_POST['orcam_post_description'])),
    ));
    $saving = false;
}, 10);

/** Give TinyMCE the same semantic wrapper used by the public article. */
add_filter('tiny_mce_before_init', static function (array $settings): array {
    $settings['body_class'] = trim(($settings['body_class'] ?? '') . ' orcam-article-content');
    $settings['content_style'] = ($settings['content_style'] ?? '')
        . 'body{max-width:900px;margin:0 auto;padding:32px;}';
    return $settings;
});

/** Load the same compiled styles used by the public product into TinyMCE. */
add_filter('mce_css', static function (string $stylesheets): string {
    $post_id = isset($_GET['post']) ? absint($_GET['post']) : 0;
    if ($post_id < 1
        || get_post_type($post_id) !== 'product'
        || get_post_meta($post_id, '_orcam_full_document', true) !== 'yes') {
        return $stylesheets;
    }

    $source = (string) get_post_meta($post_id, '_orcam_source_file', true);
    $file = $source !== '' ? get_template_directory() . '/' . ltrim($source, '/') : '';
    $css_urls = array(
        get_template_directory_uri() . '/editor-style.css',
        get_template_directory_uri() . '/style.css',
    );

    if ($file !== '' && is_readable($file)) {
        $html = (string) file_get_contents($file);
        if (preg_match_all('#<link\b[^>]*>#i', $html, $matches)) {
            foreach ($matches[0] as $link_tag) {
                if (!preg_match('#\brel=["\'][^"\']*stylesheet[^"\']*["\']#i', $link_tag)
                    || !preg_match('#\bhref=["\']([^"\']+)["\']#i', $link_tag, $href_match)) {
                    continue;
                }
                $href = $href_match[1];
                if (str_starts_with($href, '../')) {
                    $relative = substr($href, 3);
                    if (is_file(get_template_directory() . '/' . rawurldecode($relative))) {
                        $css_urls[] = get_template_directory_uri() . '/' . $relative;
                    }
                }
            }
        }
    }

    $css_urls = array_values(array_unique(array_map(static function (string $url): string {
        return add_query_arg('ver', ORCAM_THEME_VERSION, $url);
    }, $css_urls)));

    return implode(',', array_filter(array_merge(
        $stylesheets !== '' ? explode(',', $stylesheets) : array(),
        $css_urls
    )));
});

/** Give the product Visual editor enough room to resemble the public page. */
add_action('admin_head-post.php', static function (): void {
    $post_id = isset($_GET['post']) ? absint($_GET['post']) : 0;
    if ($post_id < 1 || get_post_meta($post_id, '_orcam_full_document', true) !== 'yes') {
        return;
    }
    echo '<style id="orcam-product-editor-admin-style">'
        . '#postdivrich{width:100%;max-width:none}'
        . '#postdivrich .mce-edit-area iframe{min-height:900px!important;background:#fff}'
        . '#postdivrich .wp-editor-container{border-color:#8c8f94}'
        . '</style>';
});

// Product descriptions now contain text only. Remove the old live preview
// box and use the normal lightweight editor stylesheet.
add_action('add_meta_boxes_product', static function (): void {
    remove_meta_box('orcam-product-live-preview', 'product', 'normal');
}, 100);

add_filter('mce_css', static function (string $stylesheets): string {
    $post_id = isset($_GET['post']) ? absint($_GET['post']) : 0;
    if ($post_id > 0 && get_post_type($post_id) === 'product'
        && get_post_meta($post_id, '_orcam_full_document', true) === 'yes') {
        return add_query_arg('ver', ORCAM_THEME_VERSION, get_template_directory_uri() . '/editor-style.css');
    }
    return $stylesheets;
}, 1000);

/**
 * TinyMCE cannot execute the compiled Svelte application. Provide an exact,
 * live rendering beside the editor so visual changes can be checked without
 * leaving the WooCommerce product screen.
 */
add_action('add_meta_boxes_product', static function (): void {
    global $post;
    if (!$post instanceof WP_Post || get_post_meta($post->ID, '_orcam_full_document', true) !== 'yes') {
        return;
    }

    add_meta_box(
        'orcam-product-live-preview',
        __('Xem trÆ°á»›c giao diá»‡n tháº­t', 'orcam-theme'),
        static function (WP_Post $product): void {
            $url = get_permalink($product);
            echo '<div class="orcam-product-preview-toolbar">';
            echo '<strong>Trang WooCommerce Ä‘ang hiá»ƒn thá»‹ thá»±c táº¿</strong>';
            echo '<span>Nháº¥n Cáº­p nháº­t rá»“i Táº£i láº¡i báº£n xem trÆ°á»›c Ä‘á»ƒ kiá»ƒm tra thay Ä‘á»•i.</span>';
            echo '<button type="button" class="button" id="orcam-refresh-product-preview">Táº£i láº¡i báº£n xem trÆ°á»›c</button>';
            echo '<a class="button button-primary" href="' . esc_url($url) . '" target="_blank" rel="noopener">Má»Ÿ trang tháº­t</a>';
            echo '</div>';
            echo '<iframe id="orcam-product-live-preview-frame" src="' . esc_url(add_query_arg('orcam_admin_preview', '1', $url)) . '"'
                . ' title="Xem trÆ°á»›c ' . esc_attr(get_the_title($product)) . '" loading="eager"></iframe>';
            echo '<script>(function(){var button=document.getElementById("orcam-refresh-product-preview"),frame=document.getElementById("orcam-product-live-preview-frame");'
                . 'if(button&&frame){button.addEventListener("click",function(){var url=new URL(frame.src);url.searchParams.set("preview_refresh",Date.now());frame.src=url.toString();});}})();</script>';
        },
        'product',
        'normal',
        'high'
    );
});

add_action('admin_head-post.php', static function (): void {
    $post_id = isset($_GET['post']) ? absint($_GET['post']) : 0;
    if ($post_id < 1 || get_post_meta($post_id, '_orcam_full_document', true) !== 'yes') {
        return;
    }
    echo '<style id="orcam-product-live-preview-style">'
        . '#orcam-product-live-preview .inside{margin:0;padding:0}'
        . '.orcam-product-preview-toolbar{align-items:center;background:#f6f7f7;border-bottom:1px solid #c3c4c7;display:flex;flex-wrap:wrap;gap:10px;padding:12px}'
        . '.orcam-product-preview-toolbar strong{font-size:14px}'
        . '.orcam-product-preview-toolbar span{color:#646970;margin-right:auto}'
        . '#orcam-product-live-preview-frame{background:#fff;border:0;display:block;height:900px;width:100%}'
        . '</style>';
});

add_action('wp_enqueue_scripts', static function () {
    wp_enqueue_style(
        'orcam-theme',
        get_stylesheet_uri(),
        array(),
        ORCAM_THEME_VERSION
    );
});

/** Receive the native consultation form. SMTP can later be attached to wp_mail(). */
function orcam_theme_handle_consultation_form(): void
{
    $redirect = wp_get_referer() ?: home_url('/vi/contact-us');
    if (!isset($_POST['orcam_consultation_nonce'])
        || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['orcam_consultation_nonce'])), 'orcam_consultation')) {
        wp_safe_redirect(add_query_arg('contact', 'invalid', $redirect));
        exit;
    }

    if (!empty($_POST['website'])) {
        wp_safe_redirect(add_query_arg('contact', 'success', $redirect));
        exit;
    }

    $name = sanitize_text_field(wp_unslash($_POST['full_name'] ?? ''));
    $phone = sanitize_text_field(wp_unslash($_POST['phone'] ?? ''));
    $email = sanitize_email(wp_unslash($_POST['email'] ?? ''));
    $message = sanitize_textarea_field(wp_unslash($_POST['message'] ?? ''));
    if ($name === '' || $phone === '' || !is_email($email) || $message === '') {
        wp_safe_redirect(add_query_arg('contact', 'invalid', $redirect));
        exit;
    }

    $recipient = apply_filters('orcam_consultation_recipient', get_option('admin_email'));
    $subject = sprintf('[OrCam] YÃªu cáº§u tÆ° váº¥n tá»« %s', $name);
    $body = "Há» vÃ  tÃªn: {$name}\nSá»‘ Ä‘iá»‡n thoáº¡i: {$phone}\nEmail: {$email}\n\nNá»™i dung tÆ° váº¥n:\n{$message}";
    $headers = array('Content-Type: text/plain; charset=UTF-8', 'Reply-To: ' . $name . ' <' . $email . '>');
    $sent = wp_mail($recipient, $subject, $body, $headers);

    wp_safe_redirect(add_query_arg('contact', $sent ? 'success' : 'error', $redirect));
    exit;
}
add_action('admin_post_nopriv_orcam_consultation', 'orcam_theme_handle_consultation_form');
add_action('admin_post_orcam_consultation', 'orcam_theme_handle_consultation_form');

/** Receive customer-support cases and deliver them through WordPress mail. */
function orcam_theme_handle_support_case(): void
{
    $redirect = wp_get_referer() ?: home_url('/vi/submit-case');
    if (!isset($_POST['orcam_support_nonce'])
        || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['orcam_support_nonce'])), 'orcam_support_case')) {
        wp_safe_redirect(add_query_arg('case_status', 'invalid', $redirect));
        exit;
    }
    if (!empty($_POST['website'])) {
        wp_safe_redirect(add_query_arg('case_status', 'success', $redirect));
        exit;
    }

    $fields = array(
        'Má»‘i quan há»‡ vá»›i OrCam' => sanitize_text_field(wp_unslash($_POST['connection'] ?? '')),
        'Há» vÃ  tÃªn'             => sanitize_text_field(wp_unslash($_POST['contact_name'] ?? '')),
        'Email'                 => sanitize_email(wp_unslash($_POST['email'] ?? '')),
        'Sá»‘ Ä‘iá»‡n thoáº¡i'         => sanitize_text_field(wp_unslash($_POST['phone'] ?? '')),
        'ThÃ nh phá»‘'             => sanitize_text_field(wp_unslash($_POST['city'] ?? '')),
        'Quá»‘c gia'              => sanitize_text_field(wp_unslash($_POST['country'] ?? '')),
        'Tá»‰nh/ThÃ nh'            => sanitize_text_field(wp_unslash($_POST['state'] ?? '')),
        'Thiáº¿t bá»‹ OrCam'        => sanitize_text_field(wp_unslash($_POST['device'] ?? '')),
        'Sá»‘ sÃª-ri'              => sanitize_text_field(wp_unslash($_POST['serial_number'] ?? '')),
        'Loáº¡i yÃªu cáº§u'          => sanitize_text_field(wp_unslash($_POST['case_type'] ?? '')),
        'MÃ´ táº£'                 => sanitize_textarea_field(wp_unslash($_POST['description'] ?? '')),
    );
    if ($fields['Má»‘i quan há»‡ vá»›i OrCam'] === '' || $fields['Há» vÃ  tÃªn'] === ''
        || !is_email($fields['Email']) || $fields['Sá»‘ Ä‘iá»‡n thoáº¡i'] === ''
        || $fields['Loáº¡i yÃªu cáº§u'] === '' || $fields['MÃ´ táº£'] === '') {
        wp_safe_redirect(add_query_arg('case_status', 'invalid', $redirect));
        exit;
    }

    $body = '';
    foreach ($fields as $label => $value) {
        $body .= $label . ': ' . $value . "\n";
    }
    $recipient = apply_filters('orcam_support_recipient', get_option('admin_email'));
    $subject = sprintf('[OrCam Support] %s - %s', $fields['Loáº¡i yÃªu cáº§u'], $fields['Há» vÃ  tÃªn']);
    $headers = array('Content-Type: text/plain; charset=UTF-8', 'Reply-To: ' . $fields['Há» vÃ  tÃªn'] . ' <' . $fields['Email'] . '>');
    $sent = wp_mail($recipient, $subject, $body, $headers);
    wp_safe_redirect(add_query_arg('case_status', $sent ? 'success' : 'error', $redirect));
    exit;
}
add_action('admin_post_nopriv_orcam_support_case', 'orcam_theme_handle_support_case');
add_action('admin_post_orcam_support_case', 'orcam_theme_handle_support_case');

/** Keep every WooCommerce product and shop below the public /vi route. */
add_action('init', static function (): void {
    add_rewrite_rule('^vi/shop/?$', 'index.php?orcam_shop=1', 'top');
    add_rewrite_rule('^vi/checkout/?$', 'index.php?orcam_checkout=1', 'top');
    add_rewrite_rule('^vi/checkout/order-pay/([0-9]+)/?$', 'index.php?orcam_checkout=1&order-pay=$matches[1]', 'top');
    add_rewrite_rule('^vi/checkout/order-received/([0-9]+)/?$', 'index.php?orcam_checkout=1&order-received=$matches[1]', 'top');

    $slugs = array('orcam-myeye-3-pro', 'orcam-myeye-2-pro', 'orcam-read-5', 'orcam-read-3', 'orcam-read');
    $published_products = get_posts(array(
        'post_type'      => 'product',
        'post_status'    => 'publish',
        'posts_per_page' => -1,
        'fields'         => 'ids',
    ));
    foreach ($published_products as $product_id) {
        $slug = get_post_field('post_name', $product_id);
        if ($slug !== '') {
            $slugs[] = $slug;
        }
    }

    foreach (array_unique($slugs) as $slug) {
        add_rewrite_rule(
            '^vi/' . preg_quote($slug, '#') . '/?$',
            'index.php?post_type=product&name=' . $slug,
            'top'
        );
    }
});

add_filter('post_type_link', static function (string $url, WP_Post $post): string {
    if ($post->post_type !== 'product') {
        return $url;
    }

    $route = trim((string) get_post_meta($post->ID, '_orcam_product_route', true), '/');
    return $route !== ''
        ? home_url('/' . $route . '/')
        : home_url('/vi/' . $post->post_name . '/');
}, 10, 2);

/** Keep the complete WooCommerce checkout flow below /vi. */
add_filter('woocommerce_get_checkout_url', static function (): string {
    return home_url('/vi/checkout/');
});

add_filter('page_link', static function (string $url, int $post_id): string {
    return function_exists('wc_get_page_id') && $post_id === wc_get_page_id('checkout')
        ? home_url('/vi/checkout/')
        : $url;
}, 10, 2);

/** Return the cache directory for rendered static documents. */
function orcam_theme_cache_dir(): string
{
    $dir = (defined('WP_CONTENT_DIR') ? WP_CONTENT_DIR : (get_template_directory() . '/../..')) . '/cache/orcam_static';
    if (!is_dir($dir)) {
        wp_mkdir_p($dir);
    }
    return $dir;
}

/** Generate a normalized cache key across Windows and Linux environments. */
function orcam_theme_get_cache_key(string $file, string $custom_html = ''): string
{
    $normalized_file = str_replace('\\', '/', (string) (realpath($file) ?: $file));
    $base_url = function_exists('home_url') ? home_url() : '';
    return md5($normalized_file . '|' . $custom_html . '|' . $base_url . '|' . ORCAM_THEME_VERSION);
}

/** Fast static cache server. */
function orcam_theme_try_serve_cache(string $file, string $custom_html = ''): bool
{
    if (isset($_GET['wc-ajax']) || wp_doing_ajax() || wp_doing_cron()) {
        return false;
    }

    $route = function_exists('orcam_theme_request_route') ? orcam_theme_request_route() : '';
    if ($route === 'checkout' || strpos($route, 'checkout') === 0 || strpos($route, 'vi/checkout') === 0) {
        return false;
    }

    $cache_dir = orcam_theme_cache_dir();
    $cache_key = orcam_theme_get_cache_key($file, $custom_html);
    $cache_file = $cache_dir . '/' . $cache_key . '.html';

    $translations_file = get_template_directory() . '/inc/vietnamese-translations.php';
    $translations_time = is_file($translations_file) ? (filemtime($translations_file) ?: 0) : 0;
    $source_time = is_file($file) ? (filemtime($file) ?: 0) : 0;

    $products_tracker = (defined('WP_CONTENT_DIR') ? WP_CONTENT_DIR : (get_template_directory() . '/../..')) . '/cache/orcam_products.timestamp';
    $products_time = is_file($products_tracker) ? (filemtime($products_tracker) ?: 0) : 0;
    $min_valid_time = max($translations_time, $source_time, $products_time);

    if (is_file($cache_file) && (filemtime($cache_file) >= $min_valid_time) && filesize($cache_file) > 100) {
        status_header(200);
        nocache_headers();
        header('Content-Type: text/html; charset=' . (function_exists('get_bloginfo') ? get_bloginfo('charset') : 'UTF-8'));
        header('X-OrCam-Cache: HIT');
        if (!ob_get_level() && extension_loaded('zlib') && !ini_get('zlib.output_compression')) {
            ob_start('ob_gzhandler');
        }
        readfile($cache_file);
        exit;
    }

    return false;
}

add_action('template_redirect', static function (): void {
    if (is_admin() || isset($_GET['wc-ajax']) || wp_doing_ajax() || wp_doing_cron()) {
        return;
    }
    $route = orcam_theme_request_route();
    if ($route === '' || $route === 'vi/home' || $route === 'vi') {
        $index_file = get_template_directory() . '/static-pages/vi/index.html';
        if (orcam_theme_try_serve_cache($index_file)) {
            exit;
        }
    }

    if ($route === 'checkout') {
        $target = home_url('/vi/checkout/');
        if (!empty($_SERVER['QUERY_STRING'])) {
            $target .= '?' . sanitize_text_field(wp_unslash($_SERVER['QUERY_STRING']));
        }
        wp_safe_redirect($target, 301);
        exit;
    }

    if ($route === 'vi/shop' || $route === 'shop' || strpos($route, 'vi/shop') === 0) {
        if (orcam_theme_try_serve_cache('shop_catalog', 'vi_shop_page')) {
            exit;
        }
    }

    if (strpos($route, 'vi/blog/') === 0) {
        $blog_slug = sanitize_title(trim(substr($route, strlen('vi/blog/')), '/'));
        if ($blog_slug !== '') {
            global $wpdb;
            $post_id = (int) $wpdb->get_var($wpdb->prepare(
                "SELECT p.ID FROM {$wpdb->posts} p
                 INNER JOIN {$wpdb->postmeta} m ON m.post_id=p.ID AND m.meta_key='_orcam_source_slug'
                 WHERE p.post_type='post' AND p.post_status='publish' AND m.meta_value=%s LIMIT 1",
                $blog_slug
            ));
            if ($post_id > 0) {
                $source = (string) get_post_meta($post_id, '_orcam_source_file', true);
                $source = str_replace(array('static-pages/en-us/', 'static-pages/en-gb/'), 'static-pages/vi/', $source);
                if ($source !== '') {
                    $theme_root = wp_normalize_path(get_template_directory());
                    $file = realpath($theme_root . '/' . ltrim($source, '/'));
                    if ($file && is_file($file)) {
                        if (orcam_theme_try_serve_cache($file, 'blog_' . $post_id)) {
                            exit;
                        }
                    }
                }
            }
        }
    }

    if (orcam_theme_maybe_render_database_product()) {
        exit;
    }

    if (orcam_theme_maybe_render_static()) {
        exit;
    }
}, -10);

/**
 * Streamlined Vietnamese checkout: Phone first (required), then Email, Name, Address.
 */
add_filter('woocommerce_checkout_fields', static function (array $fields): array {
    $fields['billing'] = array(
        'billing_phone' => array(
            'label'        => 'Sá»‘ Ä‘iá»‡n thoáº¡i',
            'placeholder'  => 'Nháº­p sá»‘ Ä‘iá»‡n thoáº¡i (báº¯t buá»™c)',
            'required'     => true,
            'class'        => array('form-row-wide'),
            'clear'        => true,
            'priority'     => 10,
            'validate'     => array('phone'),
        ),
        'billing_email' => array(
            'label'        => 'Email',
            'placeholder'  => 'Nháº­p Ä‘á»‹a chá»‰ email (khÃ´ng báº¯t buá»™c)',
            'required'     => false,
            'class'        => array('form-row-wide'),
            'clear'        => true,
            'priority'     => 20,
        ),
        'billing_first_name' => array(
            'label'        => 'Há» vÃ  tÃªn',
            'placeholder'  => 'Nháº­p há» vÃ  tÃªn',
            'required'     => false,
            'class'        => array('form-row-wide'),
            'clear'        => true,
            'priority'     => 30,
        ),
        'billing_address_1' => array(
            'label'        => 'Äá»‹a chá»‰',
            'placeholder'  => 'Sá»‘ nhÃ , tÃªn Ä‘Æ°á»ng, phÆ°á»ng/xÃ£, quáº­n/huyá»‡n, tá»‰nh/thÃ nh',
            'required'     => false,
            'class'        => array('form-row-wide'),
            'clear'        => true,
            'priority'     => 40,
        ),
    );

    unset($fields['shipping']);

    $fields['order']['customer_intent'] = array(
        'type'        => 'radio',
        'label'       => 'HÃ¬nh thá»©c phá»¥c vá»¥ mong muá»‘n',
        'class'       => array('form-row-wide', 'orcam-checkout-intent'),
        'required'    => false,
        'default'     => 'cod',
        'options'     => array(
            'cod'     => 'Giao hÃ ng vÃ  thanh toÃ¡n khi nháº­n hÃ ng (COD)',
            'consult' => 'TÆ° váº¥n chuyÃªn sÃ¢u vá» sáº£n pháº©m & há»— trá»£ phÆ°Æ¡ng thá»©c thanh toÃ¡n',
        ),
        'priority'    => 5,
    );

    if (isset($fields['order']['order_comments'])) {
        $fields['order']['order_comments']['label'] = 'Ghi chÃº Ä‘Æ¡n hÃ ng';
        $fields['order']['order_comments']['placeholder'] = 'Ghi chÃº thÃªm vá» Ä‘Æ¡n hÃ ng hoáº·c thá»i gian giao hÃ ng...';
        $fields['order']['order_comments']['required'] = false;
        $fields['order']['order_comments']['class'] = array('form-row-wide');
        $fields['order']['order_comments']['priority'] = 15;
    }

    return $fields;
}, 99);

/** Save chosen intent option into order metadata */
add_action('woocommerce_checkout_update_order_meta', static function (int $order_id): void {
    if (!empty($_POST['customer_intent'])) {
        $intent_key = sanitize_text_field(wp_unslash($_POST['customer_intent']));
        $intent_label = $intent_key === 'consult'
            ? 'TÆ° váº¥n chuyÃªn sÃ¢u vá» sáº£n pháº©m & há»— trá»£ phÆ°Æ¡ng thá»©c thanh toÃ¡n'
            : 'Giao hÃ ng vÃ  thanh toÃ¡n khi nháº­n hÃ ng (COD)';
        update_post_meta($order_id, '_customer_intent', $intent_label);
    }
});

add_action('woocommerce_admin_order_data_after_billing_address', static function (WC_Order $order): void {
    $intent = get_post_meta($order->get_id(), '_customer_intent', true);
    if ($intent) {
        echo '<p><strong>HÃ¬nh thá»©c yÃªu cáº§u:</strong> ' . esc_html($intent) . '</p>';
    }
});

add_filter('woocommerce_billing_fields', static function (array $fields): array {
    return array(
        'billing_phone' => array(
            'label'        => 'Sá»‘ Ä‘iá»‡n thoáº¡i',
            'placeholder'  => 'Nháº­p sá»‘ Ä‘iá»‡n thoáº¡i (báº¯t buá»™c)',
            'required'     => true,
            'class'        => array('form-row-wide'),
            'clear'        => true,
            'priority'     => 10,
        ),
        'billing_email' => array(
            'label'        => 'Email',
            'placeholder'  => 'Nháº­p Ä‘á»‹a chá»‰ email (khÃ´ng báº¯t buá»™c)',
            'required'     => false,
            'class'        => array('form-row-wide'),
            'clear'        => true,
            'priority'     => 20,
        ),
        'billing_first_name' => array(
            'label'        => 'Há» vÃ  tÃªn',
            'placeholder'  => 'Nháº­p há» vÃ  tÃªn',
            'required'     => false,
            'class'        => array('form-row-wide'),
            'clear'        => true,
            'priority'     => 30,
        ),
        'billing_address_1' => array(
            'label'        => 'Äá»‹a chá»‰',
            'placeholder'  => 'Sá»‘ nhÃ , tÃªn Ä‘Æ°á»ng, phÆ°á»ng/xÃ£, quáº­n/huyá»‡n, tá»‰nh/thÃ nh',
            'required'     => false,
            'class'        => array('form-row-wide'),
            'clear'        => true,
            'priority'     => 40,
        ),
    );
}, 99);

add_filter('woocommerce_default_address_fields', static function (array $fields): array {
    $fields['first_name']['required'] = false;
    $fields['last_name']['required'] = false;
    $fields['address_1']['required'] = false;
    $fields['city']['required'] = false;
    $fields['state']['required'] = false;
    $fields['postcode']['required'] = false;
    $fields['country']['required'] = false;
    return $fields;
}, 99);

// Render clean non-nested Voucher box inside Additional Information
remove_action('woocommerce_before_checkout_form', 'woocommerce_checkout_coupon_form', 10);
add_action('woocommerce_after_order_notes', static function (): void {
    ?>
    <div class="orcam-voucher-box">
        <label for="orcam_coupon_input" class="orcam-voucher-box__label">MÃ£ Æ°u Ä‘Ã£i / Voucher</label>
        <div class="orcam-voucher-box__group">
            <input type="text" id="orcam_coupon_input" name="orcam_coupon_code" placeholder="Nháº­p mÃ£ giáº£m giÃ¡..." />
            <button type="button" id="orcam_apply_coupon_btn">Ãp dá»¥ng</button>
        </div>
    </div>
    <script>
    (function() {
        function setupVoucher() {
            var btn = document.getElementById('orcam_apply_coupon_btn');
            var input = document.getElementById('orcam_coupon_input');
            if (!btn || !input || btn.dataset.bound) return;
            btn.dataset.bound = 'true';
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                var code = (input.value || '').trim();
                if (!code) {
                    alert('Vui lÃ²ng nháº­p mÃ£ Æ°u Ä‘Ã£i.');
                    return;
                }
                btn.disabled = true;
                btn.textContent = 'Äang Ã¡p dá»¥ng...';
                if (window.jQuery && window.wc_checkout_params) {
                    window.jQuery.ajax({
                        type: 'POST',
                        url: window.wc_checkout_params.wc_ajax_url.toString().replace('%%endpoint%%', 'apply_coupon'),
                        data: {
                            security: window.wc_checkout_params.apply_coupon_nonce,
                            coupon_code: code
                        },
                        success: function(res) {
                            window.jQuery('.woocommerce-error, .woocommerce-message').remove();
                            window.jQuery('form.woocommerce-checkout').before(res);
                            window.jQuery(document.body).trigger('update_checkout', { update_shipping_method: false });
                        },
                        complete: function() {
                            btn.disabled = false;
                            btn.textContent = 'Ãp dá»¥ng';
                        },
                        dataType: 'html'
                    });
                }
            });
        }
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', setupVoucher);
        } else {
            setupVoucher();
        }
        document.addEventListener('ajaxComplete', setupVoucher);
    })();
    </script>
    <?php
}, 10);

/**
 * Ensure WooCommerce has a ready-to-use payment gateway for Vietnam (COD).
 */
add_filter('woocommerce_payment_gateways', static function (array $gateways): array {
    if (!in_array('WC_Gateway_COD', $gateways, true)) {
        $gateways[] = 'WC_Gateway_COD';
    }
    return $gateways;
});

add_filter('woocommerce_available_payment_gateways', static function (array $available_gateways): array {
    if (empty($available_gateways)) {
        if (function_exists('WC') && WC()->payment_gateways()) {
            $gateways = WC()->payment_gateways()->payment_gateways();
            if (isset($gateways['cod'])) {
                $gateways['cod']->enabled = 'yes';
                $gateways['cod']->title = 'Thanh toÃ¡n khi nháº­n hÃ ng (COD) / TÆ° váº¥n thanh toÃ¡n';
                $gateways['cod']->description = 'NhÃ¢n viÃªn OrCam sáº½ liÃªn há»‡ xÃ¡c nháº­n Ä‘Æ¡n vÃ  tÆ° váº¥n hÃ¬nh thá»©c nháº­n hÃ ng thuáº­n tiá»‡n nháº¥t.';
                $available_gateways['cod'] = $gateways['cod'];
            }
        }
    }
    return $available_gateways;
});

/** Vietnamese privacy policy and payment methods notices */
add_filter('woocommerce_checkout_privacy_policy_text', static function (): string {
    return 'ThÃ´ng tin cÃ¡ nhÃ¢n cá»§a báº¡n sáº½ Ä‘Æ°á»£c sá»­ dá»¥ng Ä‘á»ƒ xá»­ lÃ½ Ä‘Æ¡n hÃ ng, há»— trá»£ tráº£i nghiá»‡m cá»§a báº¡n trÃªn website vÃ  cho cÃ¡c má»¥c Ä‘Ã­ch khÃ¡c theo <a href="' . esc_url(home_url('/vi/privacy-policy/')) . '" class="woocommerce-privacy-policy-link" target="_blank">chÃ­nh sÃ¡ch báº£o máº­t</a>.';
});

add_filter('woocommerce_no_available_payment_methods_message', static function (): string {
    return 'Hiá»‡n táº¡i Ä‘Æ¡n hÃ ng sáº½ Ä‘Æ°á»£c nhÃ¢n viÃªn cá»§a OrCam liÃªn há»‡ trá»±c tiáº¿p Ä‘á»ƒ xÃ¡c nháº­n vÃ  hÆ°á»›ng dáº«n thanh toÃ¡n chi tiáº¿t cho báº¡n.';
});

add_filter('woocommerce_coupon_message', static function (string $msg, int $msg_code, $coupon = null): string {
    if ($coupon instanceof WC_Coupon) {
        return sprintf('Ãp dá»¥ng mÃ£ Æ°u Ä‘Ã£i "%s" thÃ nh cÃ´ng.', $coupon->get_code());
    }
    return 'Ãp dá»¥ng mÃ£ Æ°u Ä‘Ã£i thÃ nh cÃ´ng.';
}, 20, 3);

add_filter('woocommerce_coupon_error', static function (string $err, int $err_code, $coupon = null): string {
    static $errors = array(
        100 => 'MÃ£ giáº£m giÃ¡ khÃ´ng tá»“n táº¡i!',
        101 => 'MÃ£ giáº£m giÃ¡ nÃ y Ä‘Ã£ Ä‘Æ°á»£c Ã¡p dá»¥ng trÆ°á»›c Ä‘Ã³!',
        102 => 'MÃ£ giáº£m giÃ¡ nÃ y khÃ´ng thá»ƒ dÃ¹ng chung vá»›i cÃ¡c mÃ£ khÃ¡c.',
        103 => 'MÃ£ giáº£m giÃ¡ nÃ y khÃ´ng Ã¡p dá»¥ng cho sáº£n pháº©m trong Ä‘Æ¡n hÃ ng.',
        104 => 'MÃ£ giáº£m giÃ¡ nÃ y Ä‘Ã£ háº¿t lÆ°á»£t sá»­ dá»¥ng.',
        105 => 'MÃ£ giáº£m giÃ¡ nÃ y Ä‘Ã£ háº¿t háº¡n sá»­ dá»¥ng.',
        106 => 'ÄÆ¡n hÃ ng chÆ°a Ä‘áº¡t giÃ¡ trá»‹ tá»‘i thiá»ƒu Ä‘á»ƒ Ã¡p dá»¥ng mÃ£ nÃ y.',
        107 => 'ÄÆ¡n hÃ ng Ä‘Ã£ vÆ°á»£t quÃ¡ giÃ¡ trá»‹ tá»‘i Ä‘a Ä‘á»ƒ Ã¡p dá»¥ng mÃ£ nÃ y.',
        108 => 'MÃ£ giáº£m giÃ¡ nÃ y khÃ´ng Ã¡p dá»¥ng cho cÃ¡c sáº£n pháº©m Ä‘ang giáº£m giÃ¡.',
        109 => 'Vui lÃ²ng nháº­p mÃ£ giáº£m giÃ¡.',
        110 => 'MÃ£ giáº£m giÃ¡ khÃ´ng há»£p lá»‡ vÃ  Ä‘Ã£ bá»‹ gá»¡ bá».',
    );
    return $errors[$err_code] ?? 'MÃ£ giáº£m giÃ¡ khÃ´ng há»£p lá»‡ hoáº·c Ä‘Ã£ háº¿t háº¡n sá»­ dá»¥ng.';
}, 20, 3);

/** Complete Vietnamese translations for WooCommerce checkout & order details. */
add_filter('gettext', static function (string $translation, string $text, string $domain): string {
    static $translations = array(
        'Checkout' => 'Thanh toÃ¡n',
        'Billing details' => 'ThÃ´ng tin ngÆ°á»i nháº­n',
        'Billing Details' => 'ThÃ´ng tin ngÆ°á»i nháº­n',
        'Customer details' => 'ThÃ´ng tin khÃ¡ch hÃ ng',
        'Additional information' => 'HÃ¬nh thá»©c phá»¥c vá»¥ & Ghi chÃº',
        'Additional Information' => 'HÃ¬nh thá»©c phá»¥c vá»¥ & Ghi chÃº',
        'Your order' => 'ÄÆ¡n hÃ ng cá»§a báº¡n',
        'Your Order' => 'ÄÆ¡n hÃ ng cá»§a báº¡n',
        'Product' => 'Sáº£n pháº©m',
        'Subtotal' => 'Táº¡m tÃ­nh',
        'Total' => 'Tá»•ng cá»™ng',
        'Place order' => 'XÃ¡c nháº­n Ä‘áº·t hÃ ng',
        'Place Order' => 'XÃ¡c nháº­n Ä‘áº·t hÃ ng',
        'Order notes' => 'Ghi chÃº Ä‘Æ¡n hÃ ng',
        'Order notes (optional)' => 'Ghi chÃº Ä‘Æ¡n hÃ ng (khÃ´ng báº¯t buá»™c)',
        'Notes about your order, e.g. special notes for delivery.' => 'Ghi chÃº thÃªm vá» Ä‘Æ¡n hÃ ng hoáº·c thá»i gian nháº­n hÃ ng...',
        'Have a coupon?' => 'Báº¡n cÃ³ mÃ£ Æ°u Ä‘Ã£i / voucher?',
        'Click here to enter your code' => 'Nháº¥n vÃ o Ä‘Ã¢y Ä‘á»ƒ nháº­p mÃ£',
        'Coupon code' => 'MÃ£ Æ°u Ä‘Ã£i / Voucher',
        'Apply coupon' => 'Ãp dá»¥ng',
        'Apply Coupon' => 'Ãp dá»¥ng',
        'Coupon:' => 'MÃ£ giáº£m giÃ¡:',
        'If you have a coupon code, please apply it below.' => 'Náº¿u báº¡n cÃ³ mÃ£ giáº£m giÃ¡ hoáº·c Voucher, vui lÃ²ng nháº­p bÃªn dÆ°á»›i:',
        'Ship to a different address?' => 'Giao hÃ ng Ä‘áº¿n Ä‘á»‹a chá»‰ khÃ¡c?',
        'Returning customer?' => 'Báº¡n Ä‘Ã£ tá»«ng mua hÃ ng?',
        'Click here to login' => 'Nháº¥n vÃ o Ä‘Ã¢y Ä‘á»ƒ Ä‘Äƒng nháº­p',
        'Payment' => 'PhÆ°Æ¡ng thá»©c thanh toÃ¡n',
        'Payment methods' => 'PhÆ°Æ¡ng thá»©c thanh toÃ¡n',
        'Payment Methods' => 'PhÆ°Æ¡ng thá»©c thanh toÃ¡n',
        'Cash on delivery' => 'Thanh toÃ¡n khi nháº­n hÃ ng (COD)',
        'Pay with cash upon delivery.' => 'Thanh toÃ¡n báº±ng tiá»n máº·t trá»±c tiáº¿p khi nháº­n hÃ ng.',
        'Direct bank transfer' => 'Chuyá»ƒn khoáº£n ngÃ¢n hÃ ng',
        'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.' => 'Vui lÃ²ng chuyá»ƒn khoáº£n trá»±c tiáº¿p vÃ o tÃ i khoáº£n ngÃ¢n hÃ ng cá»§a chÃºng tÃ´i vá»›i ná»™i dung lÃ  MÃ£ Ä‘Æ¡n hÃ ng. ÄÆ¡n hÃ ng sáº½ Ä‘Æ°á»£c nhÃ¢n viÃªn liÃªn há»‡ xÃ¡c nháº­n ngay.',
        'Sorry, it seems that there are no available payment methods. Please contact us if you require assistance or wish to make alternate arrangements.' => 'Hiá»‡n táº¡i Ä‘Æ¡n hÃ ng sáº½ Ä‘Æ°á»£c nhÃ¢n viÃªn liÃªn há»‡ trá»±c tiáº¿p Ä‘á»ƒ xÃ¡c nháº­n vÃ  hÆ°á»›ng dáº«n thanh toÃ¡n chi tiáº¿t cho báº¡n.',
        'Sorry, it seems that there are no available payment methods.' => 'Hiá»‡n táº¡i Ä‘Æ¡n hÃ ng sáº½ Ä‘Æ°á»£c nhÃ¢n viÃªn liÃªn há»‡ trá»±c tiáº¿p Ä‘á»ƒ xÃ¡c nháº­n vÃ  hÆ°á»›ng dáº«n thanh toÃ¡n chi tiáº¿t cho báº¡n.',
        'Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our %s.' => 'ThÃ´ng tin cÃ¡ nhÃ¢n cá»§a báº¡n sáº½ Ä‘Æ°á»£c sá»­ dá»¥ng Ä‘á»ƒ xá»­ lÃ½ Ä‘Æ¡n hÃ ng, há»— trá»£ tráº£i nghiá»‡m cá»§a báº¡n trÃªn website vÃ  cho cÃ¡c má»¥c Ä‘Ã­ch khÃ¡c theo %s.',
        'privacy policy' => 'chÃ­nh sÃ¡ch báº£o máº­t',
        'Privacy Policy' => 'ChÃ­nh sÃ¡ch báº£o máº­t',
        'Please enter a valid phone number.' => 'Vui lÃ²ng nháº­p sá»‘ Ä‘iá»‡n thoáº¡i há»£p lá»‡.',
        'Billing Phone is a required field.' => 'Vui lÃ²ng nháº­p Sá»‘ Ä‘iá»‡n thoáº¡i.',
        'Phone is a required field.' => 'Vui lÃ²ng nháº­p Sá»‘ Ä‘iá»‡n thoáº¡i.',
        '%s is a required field.' => '%s lÃ  thÃ´ng tin báº¯t buá»™c.',
        'optional' => 'khÃ´ng báº¯t buá»™c',
        '(optional)' => '(khÃ´ng báº¯t buá»™c)',
        'First name' => 'Há» vÃ  tÃªn',
        'Last name' => 'TÃªn',
        'Phone' => 'Sá»‘ Ä‘iá»‡n thoáº¡i',
        'Email address' => 'Email',
        'Email Address' => 'Email',
        'Street address' => 'Äá»‹a chá»‰',
        'Order received' => 'Äáº·t hÃ ng thÃ nh cÃ´ng',
        'Thank you. Your order has been received.' => 'Cáº£m Æ¡n báº¡n! ÄÆ¡n hÃ ng Ä‘Ã£ Ä‘Æ°á»£c tiáº¿p nháº­n thÃ nh cÃ´ng. ChÃºng tÃ´i sáº½ liÃªn há»‡ trong thá»i gian sá»›m nháº¥t.',
        'Order number:' => 'MÃ£ Ä‘Æ¡n hÃ ng:',
        'Date:' => 'NgÃ y Ä‘áº·t:',
        'Email:' => 'Email:',
        'Total:' => 'Tá»•ng thanh toÃ¡n:',
        'Payment method:' => 'PhÆ°Æ¡ng thá»©c thanh toÃ¡n:',
        'Order details' => 'Chi tiáº¿t Ä‘Æ¡n hÃ ng',
        'Billing address' => 'Äá»‹a chá»‰ nháº­n hÃ ng',
        'Shipping' => 'Giao hÃ ng',
        'Free shipping' => 'Miá»…n phÃ­ giao hÃ ng',
        'Flat rate' => 'PhÃ­ cá»‘ Ä‘á»‹nh',
        'Cart' => 'Giá» hÃ ng',
        'Update cart' => 'Cáº­p nháº­t',
        'Apply' => 'Ãp dá»¥ng',
        'Enter code' => 'Nháº­p mÃ£',
        'Coupon code applied successfully.' => 'ÄÃ£ Ã¡p dá»¥ng mÃ£ giáº£m giÃ¡ thÃ nh cÃ´ng.',
        'Coupon "%s" does not exist!' => 'MÃ£ giáº£m giÃ¡ "%s" khÃ´ng tá»“n táº¡i!',
        'Coupon code already applied!' => 'MÃ£ giáº£m giÃ¡ nÃ y Ä‘Ã£ Ä‘Æ°á»£c Ã¡p dá»¥ng trÆ°á»›c Ä‘Ã³!',
        'Coupon code "%s" already applied!' => 'MÃ£ giáº£m giÃ¡ "%s" Ä‘Ã£ Ä‘Æ°á»£c Ã¡p dá»¥ng trÆ°á»›c Ä‘Ã³!',
        'Please enter a coupon code.' => 'Vui lÃ²ng nháº­p mÃ£ giáº£m giÃ¡.',
        'Coupon usage limit has been reached.' => 'MÃ£ giáº£m giÃ¡ nÃ y Ä‘Ã£ háº¿t lÆ°á»£t sá»­ dá»¥ng.',
        'This coupon has expired.' => 'MÃ£ giáº£m giÃ¡ nÃ y Ä‘Ã£ háº¿t háº¡n sá»­ dá»¥ng.',
        'The minimum spend for this coupon is %s.' => 'GiÃ¡ trá»‹ Ä‘Æ¡n hÃ ng tá»‘i thiá»ƒu Ä‘á»ƒ dÃ¹ng mÃ£ nÃ y lÃ  %s.',
        'The maximum spend for this coupon is %s.' => 'GiÃ¡ trá»‹ Ä‘Æ¡n hÃ ng tá»‘i Ä‘a Ä‘á»ƒ dÃ¹ng mÃ£ nÃ y lÃ  %s.',
        'Sorry, this coupon is not applicable to selected products.' => 'MÃ£ giáº£m giÃ¡ nÃ y khÃ´ng Ã¡p dá»¥ng cho sáº£n pháº©m Ä‘Ã£ chá»n.',
        'Sorry, this coupon is not applicable to your cart contents.' => 'MÃ£ giáº£m giÃ¡ nÃ y khÃ´ng Ã¡p dá»¥ng cho Ä‘Æ¡n hÃ ng cá»§a báº¡n.',
        'Coupon code removed successfully.' => 'ÄÃ£ xÃ³a mÃ£ giáº£m giÃ¡ thÃ nh cÃ´ng.',
        '[Remove]' => '[XÃ³a]',
        'Remove' => 'XÃ³a',
        'Browse products' => 'Xem sáº£n pháº©m',
        'Return to shop' => 'Quay láº¡i cá»­a hÃ ng',
        'Your cart is currently empty.' => 'Báº¡n chÆ°a chá»n sáº£n pháº©m nÃ o Ä‘á»ƒ thanh toÃ¡n.',
        'Description' => 'MÃ´ táº£',
        'Reviews' => 'ÄÃ¡nh giÃ¡',
        'Related products' => 'Sáº£n pháº©m tÆ°Æ¡ng tá»±',
        'In stock' => 'CÃ²n hÃ ng',
        'Out of stock' => 'Háº¿t hÃ ng',
        'Sale!' => 'Æ¯u Ä‘Ã£i!',
    );
    return $translations[$text] ?? $translation;
}, 20, 3);

add_filter('gettext_with_context', static function (string $translation, string $text, string $context, string $domain): string {
    return apply_filters('gettext', $translation, $text, $domain);
}, 20, 4);

add_filter('ngettext', static function (string $translation, string $single, string $plural, int $number, string $domain): string {
    return apply_filters('gettext', $translation, $single, $domain);
}, 20, 5);

/** Give new WooCommerce products a useful catalog summary when none is entered. */
add_action('save_post_product', static function (int $post_id, WP_Post $post): void {
    static $updating = false;
    if ($updating || wp_is_post_revision($post_id) || trim($post->post_excerpt) !== '') {
        return;
    }

    $plain_content = trim(wp_strip_all_tags($post->post_content));
    $summary = $plain_content !== ''
        ? wp_trim_words($plain_content, 30, 'â€¦')
        : sprintf(
            /* translators: %s: product name. */
            __('KhÃ¡m phÃ¡ %s vá»›i thiáº¿t káº¿ tiá»‡n dá»¥ng vÃ  cÃ´ng nghá»‡ há»— trá»£ tiÃªn tiáº¿n tá»« OrCam.', 'orcam-theme'),
            $post->post_title
        );

    $updating = true;
    wp_update_post(array('ID' => $post_id, 'post_excerpt' => $summary));
    $updating = false;
}, 20, 2);

/** Publish every imported Vietnamese blog post below the single /vi route. */
add_action('init', static function () {
    add_rewrite_rule(
        '^vi/blog/([^/]+)/?$',
        'index.php?post_type=post&orcam_slug=$matches[1]&orcam_locale=en-us',
        'top'
    );
});

add_filter('query_vars', static function (array $vars): array {
    $vars[] = 'orcam_locale';
    $vars[] = 'orcam_slug';
    $vars[] = 'orcam_shop';
    $vars[] = 'orcam_checkout';
    return $vars;
});

/** Use the shared catalog template for the Vietnamese WooCommerce alias. */
add_filter('template_include', static function (string $template): string {
    $route = orcam_theme_request_route();
    if ((string) get_query_var('orcam_checkout') === '1' || $route === 'vi/checkout' || strpos($route, 'vi/checkout/') === 0 || $route === 'checkout') {
        $checkout_template = get_template_directory() . '/page-checkout.php';
        if (is_file($checkout_template)) {
            return $checkout_template;
        }
    }

    if ((string) get_query_var('orcam_shop') === '1' || $route === 'vi/shop' || strpos($route, 'vi/shop/') === 0 || $route === 'shop') {
        $shop_template = get_template_directory() . '/archive-product.php';
        if (is_file($shop_template)) {
            return $shop_template;
        }
    }

    return $template;
}, 99);

/** Resolve locale + original slug to the exact imported post before 404 fallback. */
add_filter('request', static function (array $query_vars): array {
    if (empty($query_vars['orcam_locale']) || empty($query_vars['orcam_slug'])) {
        return $query_vars;
    }

    global $wpdb;
    $post_id = $wpdb->get_var($wpdb->prepare(
        "SELECT p.ID
         FROM {$wpdb->posts} p
         INNER JOIN {$wpdb->postmeta} slug ON slug.post_id=p.ID AND slug.meta_key='_orcam_source_slug'
         WHERE p.post_type='post' AND p.post_status='publish'
           AND slug.meta_value=%s
         LIMIT 1",
        sanitize_title((string) $query_vars['orcam_slug'])
    ));

    if ($post_id) {
        $query_vars['p'] = (int) $post_id;
        $query_vars['post_type'] = 'post';
        unset($query_vars['name']);
    }
    return $query_vars;
});

add_action('pre_get_posts', static function (WP_Query $query): void {
    if (is_admin() || !$query->is_main_query() || !$query->get('orcam_locale')) {
        return;
    }

    $query->set('meta_query', array(
        array('key' => '_orcam_source_slug', 'value' => sanitize_title((string) $query->get('orcam_slug'))),
    ));
});

add_filter('post_type_link', static function (string $url, WP_Post $post): string {
    if ($post->post_type !== 'post') {
        return $url;
    }

    $source_slug = get_post_meta($post->ID, '_orcam_source_slug', true);
    return $source_slug ? home_url('/vi/blog/' . $source_slug . '/') : $url;
}, 10, 2);

/** Return a normalized route relative to the WordPress installation. */
function orcam_theme_request_route(): string
{
    $request_path = (string) wp_parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
    $home_path = rtrim((string) wp_parse_url(home_url('/'), PHP_URL_PATH), '/');

    if ($home_path !== '' && ($request_path === $home_path || strpos($request_path, $home_path . '/') === 0)) {
        $request_path = substr($request_path, strlen($home_path));
    }

    $route = trim(rawurldecode($request_path), '/');
    return preg_replace('#/+#', '/', $route) ?: '';
}

/** Resolve every original URL style: directory index, extensionless or .html. */
function orcam_theme_static_document(?string $route = null): ?string
{
    $route = $route ?? orcam_theme_request_route();
    if ($route !== '' && (strpos($route, '..') !== false || !preg_match('#^[A-Za-z0-9._~%/ -]+$#', $route))) {
        return null;
    }

    $root = get_template_directory() . '/static-pages/';
    if ($route === '') {
        $candidates = array('vi/index.html');
    } elseif ($route === 'vi/home') {
        $candidates = array('vi/index.html');
    } else {
        $candidates = array($route, $route . '.html', rtrim($route, '/') . '/index.html');
    }

    foreach ($candidates as $candidate) {
        $candidate = ltrim($candidate, '/');
        $file = $root . $candidate;
        if (is_file($file) && strtolower(pathinfo($file, PATHINFO_EXTENSION)) === 'html') {
            return $file;
        }
    }
    return null;
}

/** Render a bundled route when the current request belongs to the static export. */
function orcam_theme_maybe_render_static(): bool
{
    if (isset($_GET['wc-ajax']) || wp_doing_ajax() || wp_doing_cron()) {
        return false;
    }

    $route = orcam_theme_request_route();
    if ($route === 'checkout' || strpos($route, 'checkout') === 0 || strpos($route, 'vi/checkout') === 0) {
        return false;
    }

    // Five migrated products have authoritative WooCommerce database entries and custom price panels
    if (in_array($route, array(
        'vi/orcam-myeye-3-pro',
        'vi/orcam-myeye-2-pro',
        'vi/orcam-read-5',
        'vi/orcam-read-3',
        'vi/orcam-read',
    ), true)) {
        return false;
    }

    $document = orcam_theme_static_document();
    if (!$document) {
        return false;
    }

    orcam_theme_render_document($document);
    return true;
}

/** Return published WooCommerce products in the shared navigation order. */
function orcam_theme_product_navigation_products(bool $force_refresh = false): array
{
    static $cached_products = null;
    if (!$force_refresh && $cached_products !== null) {
        return $cached_products;
    }

    if (!post_type_exists('product')) {
        return array();
    }

    $products = get_posts(array(
        'post_type'      => 'product',
        'post_status'    => 'publish',
        'posts_per_page' => -1,
        'orderby'        => array('menu_order' => 'ASC', 'title' => 'ASC'),
        'order'          => 'ASC',
        'no_found_rows'  => true,
        'update_post_term_cache' => false,
    ));
    $fixed_order = array(
        'orcam-myeye-3-pro' => 0,
        'orcam-myeye-2-pro' => 1,
        'orcam-read-5'      => 2,
        'orcam-read-3'      => 3,
        'orcam-read'        => 4,
    );

    usort($products, static function (WP_Post $left, WP_Post $right) use ($fixed_order): int {
        $left_order = $fixed_order[$left->post_name] ?? (100 + (int) $left->menu_order);
        $right_order = $fixed_order[$right->post_name] ?? (100 + (int) $right->menu_order);
        return $left_order === $right_order
            ? strcasecmp($left->post_title, $right->post_title)
            : $left_order <=> $right_order;
    });

    $cached_products = $products;
    return $cached_products;
}

/** Render the full shared product bar for normal WooCommerce product pages. */
function orcam_theme_product_navigation_bar(int $current_product_id = 0): string
{
    $links = '<a class="orcam-product-bar__link" href="' . esc_url(home_url('/vi/shop/'))
        . '">Táº¥t cáº£ sáº£n pháº©m</a>';
    foreach (orcam_theme_product_navigation_products() as $product) {
        $active = $product->ID === $current_product_id ? ' is-active' : '';
        $links .= '<a class="orcam-product-bar__link' . $active . '" href="'
            . esc_url(get_permalink($product)) . '">' . esc_html(get_the_title($product)) . '</a>';
    }

    return '<nav class="orcam-product-bar" aria-label="Sáº£n pháº©m"><strong>Thá»‹ lá»±c kÃ©m</strong>'
        . '<div class="orcam-product-bar__items">' . $links . '</div></nav>';
}

/** Append only newly created products to the original Svelte submenu for Low Vision category. */
function orcam_theme_append_products_to_static_submenu(string $html, string $file = ''): string
{
    $is_low_vision = false;
    if ($file !== '') {
        $filename = basename($file);
        $low_vision_files = array(
            'low-vision.html',
            'orcam-myeye-3-pro.html',
            'orcam-myeye-2-pro.html',
            'orcam-read-5.html',
            'orcam-read-3.html',
            'orcam-read.html',
        );
        $is_low_vision = in_array($filename, $low_vision_files, true);
    }
    if (!$is_low_vision && strpos($html, 'desktop-submenu') !== false) {
        if (preg_match('#<div[^>]*class="[^"]*desktop-submenu__logo[^"]*"[^>]*>\s*<p[^>]*>\s*(?:Thá»‹ lá»±c kÃ©m|Low Vision)\s*</p>#iu', $html)) {
            $is_low_vision = true;
        }
    }

    if (!$is_low_vision) {
        return $html;
    }

    $all_products_link = '<div class="d-flex"><a class="p3 desktop-submenu__submenu-link svelte-alcb1y" href="'
        . esc_url(home_url('/vi/shop/')) . '" target="_self">Táº¥t cáº£ sáº£n pháº©m</a> </div>';
    $extra_links = '';
    foreach (orcam_theme_product_navigation_products() as $product) {
        if (get_post_meta($product->ID, '_orcam_product_route', true) !== '') {
            continue;
        }
        $extra_links .= '<div class="d-flex"><a class="p3 desktop-submenu__submenu-link svelte-alcb1y" href="'
            . esc_url(get_permalink($product)) . '" target="_self">' . esc_html(get_the_title($product)) . '</a> </div>';
    }
    $html = preg_replace_callback(
        '#(<div class="desktop-submenu__items svelte-alcb1y">)(.*?)(</div>\s*<div class="desktop-submenu__buttons svelte-alcb1y">)#s',
        static function ($matches) use ($all_products_link, $extra_links): string {
            $inner = $matches[2];
            $prefix = (strpos($inner, 'Táº¥t cáº£ sáº£n pháº©m') === false && strpos($inner, '/vi/shop') === false) ? $all_products_link : '';
            return $matches[1] . $prefix . $inner . $extra_links . $matches[3];
        },
        $html,
        1
    ) ?: $html;

    // Inject "Táº¥t cáº£ sáº£n pháº©m" into Svelte inline script submenu data so client hydration on mobile also includes it
    $html = preg_replace(
        '#(submenu:\s*\{[^}]*?items:\s*\[)(?!\s*\{\s*label\s*:\s*["\']Táº¥t cáº£ sáº£n pháº©m["\'])#s',
        '$1{label:"Táº¥t cáº£ sáº£n pháº©m",pageUrl:"' . esc_js(home_url('/vi/shop/')) . '",id:"all-products",blockName:"All Products",blockType:"internalNavigation"},',
        $html,
        1
    ) ?: $html;

    return $html;
}

/**
 * Synchronize real WooCommerce prices and product images into static page comparison tables,
 * pricing cards, and product landing pages.
 */
function orcam_theme_sync_woocommerce_product_data_into_html(string $html, string $file = ''): string
{
    if (!function_exists('wc_get_product')) {
        return $html;
    }

    $products = orcam_theme_product_navigation_products();
    if (empty($products)) {
        return $html;
    }

    $product_data_map = array();
    $currency_symbol = function_exists('get_woocommerce_currency_symbol') ? get_woocommerce_currency_symbol(get_woocommerce_currency()) : 'â‚«';

    foreach ($products as $post_item) {
        $wc_prod = wc_get_product($post_item->ID);
        if (!$wc_prod) {
            continue;
        }
        $price = $wc_prod->get_price();
        if ($price === '') {
            continue;
        }

        $reg_price = $wc_prod->get_regular_price();
        $sale_price = $wc_prod->get_sale_price();
        $formatted_price = number_format((float) $price, 0, ',', '.') . ' ' . $currency_symbol;
        $formatted_reg = ($reg_price && $sale_price) ? (number_format((float) $reg_price, 0, ',', '.') . ' ' . $currency_symbol) : '';
        $img_id = $wc_prod->get_image_id();
        $img_url = $img_id ? wp_get_attachment_image_url($img_id, 'large') : '';

        $product_data_map[$post_item->post_name] = array(
            'id'              => $post_item->ID,
            'slug'            => $post_item->post_name,
            'title'           => get_the_title($post_item),
            'price'           => $price,
            'formatted_price' => $formatted_price,
            'formatted_reg'   => $formatted_reg,
            'image_url'       => $img_url,
            'checkout_url'    => add_query_arg('add-to-cart', $post_item->ID, wc_get_checkout_url()),
        );
    }

    if (empty($product_data_map)) {
        return $html;
    }

    // 1. MyEye 3 Pro
    if (isset($product_data_map['orcam-myeye-3-pro'])) {
        $p3 = $product_data_map['orcam-myeye-3-pro'];
        if ($p3['formatted_reg']) {
            $replacement = '{bold:true,text:"' . esc_js($p3['formatted_reg']) . '",strikethrough:true},{bold:true,text:" ' . esc_js($p3['formatted_price']) . '"}';
        } else {
            $replacement = '{bold:true,text:"' . esc_js($p3['formatted_price']) . '"}';
        }
        $html = str_replace(
            '{bold:true,text:"$4490",strikethrough:true},{bold:true,text:" $4250"}',
            $replacement,
            $html
        );
        $html = str_replace(
            array('$4490 $4250', '$4,490 $4,250', '$4490', '$4,490'),
            $p3['formatted_price'],
            $html
        );
        if (!empty($p3['image_url'])) {
            $html = str_replace(
                array(
                    'https://www.orcam.com/media/MYEYE_on%20floor%20Flip%201-1.png',
                    'https://www.orcam.com/media/MYEYE_on floor Flip 1-1.png',
                    'MYEYE_on%20floor%20Flip%201-1.png',
                    'MYEYE_on floor Flip 1-1.png'
                ),
                esc_url($p3['image_url']),
                $html
            );
        }
    }

    // 2. MyEye 2 Pro
    if (isset($product_data_map['orcam-myeye-2-pro'])) {
        $p2 = $product_data_map['orcam-myeye-2-pro'];
        $html = str_replace(
            '{bold:true,text:"$4250"}',
            '{bold:true,text:"' . esc_js($p2['formatted_price']) . '"}',
            $html
        );
        $html = str_replace(
            array('$4250 or $165/mo.', '$4,250 or $165/mo.', '$4250', '$4,250'),
            $p2['formatted_price'],
            $html
        );
        if (!empty($p2['image_url'])) {
            $html = str_replace(
                array(
                    'https://www.orcam.com/media/MYEYE_2_Pro.png',
                    'MYEYE_2_Pro.png'
                ),
                esc_url($p2['image_url']),
                $html
            );
        }
    }

    // 3. Read 3
    if (isset($product_data_map['orcam-read-3'])) {
        $r3 = $product_data_map['orcam-read-3'];
        $html = str_replace(
            array('$2790 or $104/mo.', '$2,790 or $104/mo.', '$2790', '$2,790', '$2490', '$2,490'),
            $r3['formatted_price'],
            $html
        );
        if (!empty($r3['image_url'])) {
            $html = str_replace(
                array(
                    'https://www.orcam.com/media/Group%203676%20(1)%20(1)-min.png',
                    'https://www.orcam.com/media/Group 3676 (1) (1)-min.png',
                    'Group%203676%20(1)%20(1)-min.png',
                    'Group 3676 (1) (1)-min.png',
                    'Read3_on%20floor%201.png',
                    'Read3_on floor 1.png'
                ),
                esc_url($r3['image_url']),
                $html
            );
        }
    }

    // 4. Read 5
    if (isset($product_data_map['orcam-read-5'])) {
        $r5 = $product_data_map['orcam-read-5'];
        $html = str_replace(
            array('$3990 or $150/mo.', '$3,990 or $150/mo.', '$3990', '$3,990'),
            $r5['formatted_price'],
            $html
        );
        if (!empty($r5['image_url'])) {
            $html = str_replace(
                array(
                    'https://www.orcam.com/media/Read5.png',
                    'Read5.png',
                    'Read%205.png',
                    'Read 5.png'
                ),
                esc_url($r5['image_url']),
                $html
            );
        }
    }

    // 5. Read (Standard)
    if (isset($product_data_map['orcam-read'])) {
        $r = $product_data_map['orcam-read'];
        $html = str_replace(
            array('$1990 or $71/mo.', '$1,990 or $71/mo.', '$1990', '$1,990'),
            $r['formatted_price'],
            $html
        );
        if (!empty($r['image_url'])) {
            $html = str_replace(
                array(
                    'https://www.orcam.com/media/Read_on%20floor%201.png',
                    'https://www.orcam.com/media/Read_on floor 1.png',
                    'Read_on%20floor%201.png',
                    'Read_on floor 1.png'
                ),
                esc_url($r['image_url']),
                $html
            );
        }
    }

    // 6. Learn
    if (isset($product_data_map['orcam-learn'])) {
        $l = $product_data_map['orcam-learn'];
        $html = str_replace(
            array('$599 or $34/mo.', '$599', '$34/mo.'),
            $l['formatted_price'],
            $html
        );
        if (!empty($l['image_url'])) {
            $html = str_replace(
                array(
                    'https://www.orcam.com/media/Group%204151.webp',
                    'Group%204151.webp',
                    'Group 4151.webp'
                ),
                esc_url($l['image_url']),
                $html
            );
        }
    }

    // Remove old monthly installment texts
    $html = preg_replace('/or\s+\$\d+\s*\/\s*mo\.?/i', '', $html);

    return $html;
}

/**
 * Do not let WordPress guess a similarly named post for a real static route.
 * For example, /vi/low-vision must not redirect to the low-vision-aids post.
 */
add_filter('redirect_canonical', static function ($redirect_url, string $requested_url) {
    return orcam_theme_static_document() ? false : $redirect_url;
}, 10, 2);

/** Read the Google key from the process environment or the ignored local .env file. */
function orcam_theme_google_api_key(): string
{
    static $cached_key = null;
    if ($cached_key !== null) {
        return $cached_key;
    }

    $environment_key = getenv('ORCAM_GOOGLE_API_KEY');
    if (is_string($environment_key) && $environment_key !== '') {
        $cached_key = $environment_key;
        return $cached_key;
    }

    if (defined('ORCAM_GOOGLE_API_KEY')) {
        $cached_key = (string) ORCAM_GOOGLE_API_KEY;
        return $cached_key;
    }

    $env_file = get_template_directory() . '/.env';
    if (!is_readable($env_file)) {
        $cached_key = '';
        return $cached_key;
    }

    foreach (file($env_file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: array() as $line) {
        $line = trim($line);
        if ($line === '' || $line[0] === '#' || strpos($line, '=') === false) {
            continue;
        }

        [$name, $value] = array_map('trim', explode('=', $line, 2));
        if ($name === 'ORCAM_GOOGLE_API_KEY') {
            $cached_key = trim($value, "\"'");
            return $cached_key;
        }
    }

    $cached_key = '';
    return $cached_key;
}

/** Return the original hero image when a post has no WordPress thumbnail yet. */
function orcam_theme_post_card_image(WP_Post $post): string
{
    $thumbnail = get_the_post_thumbnail_url($post, 'large');
    if ($thumbnail) {
        return $thumbnail;
    }

    $cached_image = get_post_meta($post->ID, '_orcam_cached_card_image', true);
    if ($cached_image !== '') {
        return $cached_image;
    }

    static $blog_images = null;
    if ($blog_images === null) {
        $json_file = get_template_directory() . '/inc/blog-images-cache.json';
        $blog_images = is_file($json_file) ? (json_decode((string) file_get_contents($json_file), true) ?: array()) : array();
    }

    $source_slug = (string) get_post_meta($post->ID, '_orcam_source_slug', true);
    if ($source_slug !== '' && isset($blog_images[$source_slug])) {
        $image_url = $blog_images[$source_slug];
        update_post_meta($post->ID, '_orcam_cached_card_image', $image_url);
        return $image_url;
    }

    return get_template_directory_uri() . '/media/3A1A5245%20(1)%20(1).webp';
}

/** Build the blog index entirely from editable WordPress post data. */
function orcam_theme_blog_index(string $html): string
{
    $posts = get_posts(array(
        'post_type'      => 'post',
        'post_status'    => 'publish',
        'posts_per_page' => -1,
        'orderby'        => 'date',
        'order'          => 'DESC',
        'meta_key'       => '_orcam_locale',
        'meta_compare'   => 'EXISTS',
        'no_found_rows'  => true,
        'update_post_term_cache' => false,
    ));
    $cards = '';

    foreach ($posts as $post) {
        $title = get_the_title($post);
        $description = $post->post_excerpt !== ''
            ? $post->post_excerpt
            : wp_trim_words(wp_strip_all_tags($post->post_content), 42);
        $url = get_permalink($post);
        $image = orcam_theme_post_card_image($post);
        $cards .= '<article class="orcam-blog-card">';
        $cards .= '<a class="orcam-blog-card__link" href="' . esc_url($url) . '">';
        $cards .= '<span class="orcam-blog-card__media">';
        $cards .= '<img class="orcam-blog-card__image" src="' . esc_url($image) . '"'
            . ' alt="' . esc_attr($title) . '" loading="lazy" decoding="async">';
        $cards .= '</span>';
        $cards .= '<span class="orcam-blog-card__body"><h2>' . esc_html($title) . '</h2>';
        if ($description !== '') {
            $cards .= '<span class="orcam-blog-card__summary">' . esc_html($description) . '</span>';
        }
                $cards .= '<span class="orcam-blog-card__more">Đọc thêm &gt;</span></span></a></article>';
    }

    return '<section class="orcam-blog-index" aria-label="Danh sách bài viết">'
        . '<div class="orcam-blog-index__heading"><h2>Tất cả bài viết</h2><p>'
        . count($posts) . ' bài viết</p></div><div class="orcam-blog-grid">' . $cards . '</div></section>';
}

/**
 * Adjust asset URLs at render time so the theme works on any domain or in a
 * WordPress subdirectory. Relative URLs retain the original document base.
 */
function orcam_theme_render_document(string $file, ?string $document_html = null, string $custom_cache_key = '', bool $return_only = false): string
{
    // Fast cache check
    $cache_content_key = $custom_cache_key !== '' ? $custom_cache_key : ($document_html ?? '');
    if (!$return_only) {
        orcam_theme_try_serve_cache($file, $cache_content_key);
    }

    $cache_dir = orcam_theme_cache_dir();
    $cache_key = orcam_theme_get_cache_key($file, $cache_content_key);
    $cache_file = $cache_dir . '/' . $cache_key . '.html';

    $html = $document_html ?? (string) file_get_contents($file);
    $html = orcam_theme_append_products_to_static_submenu($html, $file);

    // Correct the OrCam Learn export without changing the shared renderer or
    // downloading the rest of the media library.
    if (wp_normalize_path((string) realpath($file)) === wp_normalize_path((string) realpath(get_template_directory() . '/static-pages/vi/orcam-learn.html'))) {
        $html = str_replace(
            '<h1><strong>OrCam Há»c </strong><span style="font-family: Trebuchet MS"><span style="color: rgb(73, 26, 189)"><strong>CÆ¡ báº£n</strong></span></span></h1>',
            '<h1><strong>OrCam </strong><span style="font-family: Trebuchet MS"><span style="color: rgb(73, 26, 189)"><strong>Learn Basic</strong></span></span></h1>',
            $html
        );
        $html = str_replace(
            array('Group&#32;4151.png', 'Book_10M_txt&#32;3.png'),
            array('Group&#32;4151.webp', 'Book_10M_txt&#32;3.webp'),
            $html
        );
        $html = str_replace(
            'https://www.orcam.com/media/Frame%2016%20(2)%20(1).png',
            get_template_directory_uri() . '/media/Frame%2016%20%282%29%20%281%29.webp',
            $html
        );
        $html = str_replace(
            'https://www.orcam.com/media/Girl%20Reading%20Little%20Women_2.11%202%20(1)-1.png',
            get_template_directory_uri() . '/media/Girl%20Reading%20Little%20Women_2.11%202%20%281%29-1.webp',
            $html
        );
    }
    $html = preg_replace('/<html([^>]*?)\blang=["\'][^"\']*["\']([^>]*)>/i', '<html$1lang="vi"$2>', $html, 1);
    $html = preg_replace_callback(
        '#(<a\b[^>]*\bclass=["\'][^"\']*(?:desktop-header__logo|mobile-header__logo)[^"\']*["\'][^>]*\bhref=)(["\'])[^"\']*\2#i',
        static function (array $matches): string {
            return $matches[1] . $matches[2] . esc_url(home_url('/vi/home')) . $matches[2];
        },
        $html
    );

    $normalized_file = wp_normalize_path((string) realpath($file));
    $blog_file = wp_normalize_path((string) realpath(get_template_directory() . '/static-pages/vi/blog.html'));
    if ($normalized_file === $blog_file) {
        $blog_index = orcam_theme_blog_index($html);
        $html = preg_replace('/<nav class="orcam-footer/i', $blog_index . '<nav class="orcam-footer', $html, 1);
    }
    // OrCam Vietnam: always inject support footer block before .orcam-footer nav
    {
        $lu = esc_url(get_template_directory_uri() . '/media/logo_white-1.svg');
        $ph = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.47 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.09 6.09l1.81-1.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
        $hs = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>';
        $hd = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>';
        $css = '<style id="orcam-vn-footer-css">#orcam-vn-support-block{background:var(--orcam-07-solid-gray,#1a1a1a);width:100%;box-sizing:border-box}.ovn-top-row{max-width:1400px;margin:0 auto;padding:36px var(--orcam-sides-padding,5%) 28px;box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;border-bottom:1px solid rgba(255,255,255,.07)}.ovn-brand{display:flex;align-items:center;gap:10px}.ovn-brand img{height:22px;width:auto;opacity:.95}.ovn-brand-name{color:#fff;font-size:13.5px;font-weight:800;letter-spacing:2px;text-transform:uppercase}.ovn-desc{color:#64748b;font-size:12.5px;line-height:1.6;margin:0;max-width:340px;text-align:right}.ovn-cards-wrap{max-width:1400px;margin:0 auto;padding:24px var(--orcam-sides-padding,5%) 32px;box-sizing:border-box}.ovn-section-label{color:#475569;font-size:10.5px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 16px 0}.ovn-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px}.ovn-card{border-radius:10px;padding:18px 20px;display:flex;flex-direction:column;gap:0}.ovn-card-regular{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07)}.ovn-card-hotline{background:rgba(37,99,235,.08);border:1px solid rgba(37,99,235,.25)}.ovn-card-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}.ovn-card-icon{width:32px;height:32px;border-radius:7px;background:rgba(56,189,248,.08);display:flex;align-items:center;justify-content:center;color:#38bdf8}.ovn-card-hotline .ovn-card-icon{background:rgba(37,99,235,.15);color:#60a5fa}.ovn-badge{font-size:9.5px;font-weight:700;letter-spacing:.8px;padding:2px 9px;border-radius:20px;text-transform:uppercase}.ovn-badge-blue{color:#38bdf8;background:rgba(56,189,248,.08);border:1px solid rgba(56,189,248,.18)}.ovn-badge-indigo{color:#818cf8;background:rgba(99,102,241,.1);border:1px solid rgba(99,102,241,.2)}.ovn-card-title{color:#e2e8f0;font-size:13px;font-weight:700;margin:0 0 5px 0;line-height:1.3}.ovn-card-addr{color:#475569;font-size:12px;line-height:1.55;margin:0 0 14px 0}.ovn-card-phone{display:flex;align-items:center;gap:7px;color:#38bdf8;font-size:13px;font-weight:700;text-decoration:none;padding-top:12px;border-top:1px solid rgba(255,255,255,.05);margin-top:auto}.ovn-hotline-btn{display:flex;align-items:center;justify-content:center;gap:8px;background:#1d4ed8;color:#fff;padding:11px 14px;border-radius:7px;font-size:18px;font-weight:800;text-decoration:none;letter-spacing:.5px;margin:4px 0 10px}.ovn-hotline-note{color:#64748b;font-size:11.5px;text-align:center;margin:0;line-height:1.4}@media(max-width:600px){.ovn-desc{text-align:left}.ovn-cards{grid-template-columns:1fr}}</style>';
        $block = $css
            . '<div id="orcam-vn-support-block">'
            . '<div class="ovn-top-row"><div class="ovn-brand"><svg class="ovn-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 15" style="height:20px;width:auto;fill:#ffffff;display:inline-block;vertical-align:middle;" aria-label="OrCam"><g fill="#ffffff"><path d="M25.4,2.8c-2.1,0-3.9,1.7-3.9,3.8v1.9c0,2.1,1.7,3.8,3.9,3.8h4.4c2.1,0,3.9-1.7,3.9-3.8V6.5c0-2.1-1.7-3.8-3.9-3.8C29.8,2.8,25.4,2.8,25.4,2.8z M25.3,5.2H30c0.7,0,1.3,0.4,1.3,1.2v2.3c0,0.7-0.5,1.3-1.3,1.3h-4.8c-0.7,0-1.4-0.5-1.4-1.3V6.4C23.9,5.6,24.5,5.2,25.3,5.2z"/><path d="M53.3,2.8h8.1v2.4h-8.2c-0.7,0-1.3,0.6-1.3,1.3v0.1v1.9v0.1c0,0.7,0.6,1.3,1.3,1.3h8.2v2.4h-8.1c-2.1,0-3.9-1.7-3.9-3.8V8.3l0,0V6.8V6.7C49.4,4.5,51.2,2.8,53.3,2.8"/><path d="M38.4,5.2v2.2h4.6c1.4,0,1.4-2.2,0-2.2H38.4z M43.9,2.8c1.7,0,3.1,1.7,3.1,3.4c0,0.9-0.4,2-1.1,2.5l2.1,3.5h-2.7l-1.5-2.3h-5.5v2.3h-2.4V4.4c0-1,0.6-1.6,1.3-1.6L43.9,2.8L43.9,2.8z"/><g><path d="M12.3,2.7C11,1.3,9.1,0.5,7.1,0.5C3.2,0.5,0,3.6,0,7.5c0,3.9,3.2,7,7.1,7c2.1,0,3.9-0.9,5.2-2.2l4.5-4.8L12.3,2.7z M7.1,12.1c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6S9.7,12.1,7.1,12.1z"/><path d="M7.2,9.9c1.3,0,2.4-1.1,2.4-2.4S8.5,5.1,7.2,5.1S4.8,6.2,4.8,7.5S5.9,9.9,7.2,9.9"/></g><path d="M68.7,5.2h-1.3c-0.7,0-1.3,0.6-1.3,1.3v1h7.2v-1c0-0.7-0.6-1.3-1.3-1.3H68.7z M67.6,2.8h1.1h3.1c2.1,0,3.9,1.7,3.9,3.8v0.9v2.2v2.6h-2.4V9.8h-7.2v2.4h-2.4V9.6V7.5V6.6C63.8,4.5,65.5,2.8,67.6,2.8"/><path d="M86.1,2.8H83h-1.1c-2.1,0-3.9,1.7-3.9,3.8v0.9v2.2v2.6h2.4V9.8h0V7.3l0,0V6.5c0-0.7,0.6-1.3,1.3-1.3h1v7.1h2.4V5.1h1c0.7,0,1.3,0.6,1.3,1.3v0.8v0.2v4.8H90V9.6V7.5V6.6C90,4.5,88.3,2.8,86.1,2.8z"/></g></svg><span class="ovn-brand-name" style="color:#38bdf8;font-size:14px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;">VIỆT NAM</span></div>'
            . '<p class="ovn-desc">C&ocirc;ng ngh&#7879; tr&#7907; n&#259;ng &#273;&#7897;t ph&aacute;, n&acirc;ng cao t&iacute;nh &#273;&#7897;c l&#7853;p<br>cho ng&#432;&#7901;i khi&#7871;m th&#7883; v&agrave; ng&#432;&#7901;i g&#7863;p kh&oacute; kh&#259;n khi &#273;&#7885;c.</p></div>'
            . '<div class="ovn-cards-wrap"><p class="ovn-section-label">H&#7895; tr&#7907; kh&aacute;ch h&agrave;ng</p><div class="ovn-cards">'
            . '<div class="ovn-card ovn-card-regular"><div class="ovn-card-header"><div class="ovn-card-icon">' . $hs . '</div><span class="ovn-badge ovn-badge-blue">Mi&#7873;n B&#7855;c</span></div><p class="ovn-card-title">V&#259;n ph&ograve;ng H&agrave; N&#7897;i</p><p class="ovn-card-addr">226 &#272;&#432;&#7901;ng L&aacute;ng, Ph&#432;&#7901;ng Th&#7883;nh Quang,<br>Qu&#7853;n &#272;&#7889;ng &#272;a, H&agrave; N&#7897;i</p><a href="tel:02473048700" class="ovn-card-phone">' . $ph . '024.7304.8700</a></div>'
            . '<div class="ovn-card ovn-card-regular"><div class="ovn-card-header"><div class="ovn-card-icon">' . $hs . '</div><span class="ovn-badge ovn-badge-blue">Mi&#7873;n Nam</span></div><p class="ovn-card-title">V&#259;n ph&ograve;ng H&#7891; Ch&iacute; Minh</p><p class="ovn-card-addr">137 H&ograve;a H&#432;ng, Ph&#432;&#7901;ng H&ograve;a H&#432;ng,<br>TP. H&#7891; Ch&iacute; Minh</p><a href="tel:02873048700" class="ovn-card-phone">' . $ph . '028.7304.8700</a></div>'
            . '<div class="ovn-card ovn-card-hotline"><div class="ovn-card-header"><div class="ovn-card-icon">' . $hd . '</div><span class="ovn-badge ovn-badge-indigo">T&#432; v&#7845;n 24/7</span></div><p class="ovn-card-title">Hotline T&#7893;ng &#272;&agrave;i</p><a href="tel:1900638400" class="ovn-hotline-btn">' . $ph . '1900.63.8400</a><p class="ovn-hotline-note">H&#7895; tr&#7907; v&agrave; t&#432; v&#7845;n m&#7885;i l&uacute;c, m&#7885;i n&#417;i</p></div>'
            . '</div></div></div>';
        // Strip any old injected block first, then inject fresh
        $html = preg_replace('#<style\s+id="orcam-vn-footer-css">[\s\S]*?</style>\s*#i', '', $html, 1);
        $html = preg_replace('#<div\s+id="orcam-vn-support-block">[\s\S]*?(?:</div>\s*){3}#i', '', $html, 1);
        $html = preg_replace('#(<nav\b[^>]*class="[^"]*orcam-footer)#', $block . '', $html, 1);
    }
    $theme_uri = untrailingslashit(get_template_directory_uri());
    $request_host = strtolower((string) ($_SERVER['HTTP_HOST'] ?? ''));
    $request_host = preg_replace('/:\d+$/', '', $request_host);
    $is_local_development = $request_host === 'localhost'
        || $request_host === '127.0.0.1'
        || str_ends_with($request_host, '.local');

    if ($is_local_development) {
        // Third-party tracking/storage APIs are intentionally blocked by Edge
        // on local domains. Do not execute those integrations during local
        // development; production hosts retain them unchanged.
        $html = preg_replace(
            '#<script\b[^>]*>\s*\(function\(w,d,s,l,i\).*?</script>#is',
            '',
            $html
        );
        $html = preg_replace(
            '#<script\b[^>]*\bsrc=["\'][^"\']*(?:googletagmanager\.com|cdn\.userway\.org)[^"\']*["\'][^>]*>\s*</script>#is',
            '',
            $html
        );
        $html = preg_replace(
            '#<noscript>\s*<iframe\b[^>]*googletagmanager\.com.*?</iframe>\s*</noscript>#is',
            '',
            $html
        );

        // The exported documents preload route chunks for pages that are not
        // visited. Native imports still request each chunk when it is needed.
        $html = preg_replace('#<link\b[^>]*\brel=["\']modulepreload["\'][^>]*>#i', '', $html);
        $html = preg_replace(
            '#(<link\b[^>]*\bhref=["\'][^"\']+/fonts/[^"\']+\.css["\'][^>]*?)\s+rel=["\']preload["\']\s+as=["\']font["\']#i',
            '$1',
            $html
        );
        $html = str_replace(
            'href="https://use.typekit.net/jmm4rlh.css"',
            'href="https://use.typekit.net/jmm4rlh.css" media="print" onload="this.media=\'all\'"',
            $html
        );
    }

    // Open the mirrored Helpjuice knowledge base from this theme instead of
    // leaving the site for the externally hosted help center.
    $local_help_center = $theme_uri . '/help-center/';
    $html = preg_replace(
        '#https://orcam\.helpjuice\.com/?(?=["\'])#i',
        $local_help_center,
        $html
    );

    // Fast O(1) in-memory check for media files instead of slow disk I/O calls
    static $local_media_files = null;
    if ($local_media_files === null) {
        $media_dir = get_template_directory() . '/media';
        $local_media_files = is_dir($media_dir) ? array_flip(scandir($media_dir) ?: array()) : array();
    }

    $html = preg_replace_callback(
        '#https://www\.orcam\.com/media/(?P<path>[^"\'\s<>]+)#i',
        static function (array $matches) use ($theme_uri, $local_media_files): string {
            $relative_path = rawurldecode($matches['path']);
            return isset($local_media_files[$relative_path])
                ? $theme_uri . '/media/' . $matches['path']
                : $matches[0];
        },
        $html
    );
    $static_root = trailingslashit(realpath(get_template_directory() . '/static-pages'));
    $relative_file = str_replace('\\', '/', substr(realpath($file) ?: $file, strlen($static_root)));
    $relative_dir = dirname($relative_file);
    $base_uri = home_url('/' . ($relative_dir === '.' ? '' : trailingslashit($relative_dir)));

    $theme_stylesheet = $theme_uri . '/style.css?ver=' . rawurlencode(ORCAM_THEME_VERSION);
    $base = '<base href="' . esc_url(trailingslashit($base_uri)) . '">'
        . '<link rel="stylesheet" id="orcam-theme-css" href="' . esc_url($theme_stylesheet) . '">';
    $html = preg_replace('/<head(\\s[^>]*)?>/i', '$0' . $base, $html, 1);

    // The exported documents use paths relative to their old build directory
    // (for example ../_app and ../media). Point every bundled asset at the
    // theme root while leaving page links relative to the WordPress route.
    $html = preg_replace_callback(
        '#(["\'(=])(?:\\.\\./|\\./|/)*(?P<asset>_app|fonts|images|media)/#i',
        static function (array $matches) use ($theme_uri): string {
            return $matches[1] . $theme_uri . '/' . $matches['asset'] . '/';
        },
        $html
    );
    $html = preg_replace(
        '#(["\'(=])(?:\\.\\./|\\./|/)*smui\\.css#i',
        '$1' . $theme_uri . '/smui.css',
        $html
    );

    // Percent-encode spaces in exported asset URLs. Leaving them as &#32;
    // makes some local web servers route the decoded URL through WordPress.
    $html = preg_replace_callback(
        '#\b(?P<attribute>src|href)=(?P<quote>["\'])(?P<url>[^"\']*)(?P=quote)#i',
        static function (array $matches): string {
            $url = $matches['url'];
            if (preg_match('#/(?:_app|fonts|images|media)/#i', $url)) {
                $url = str_replace(array('&#32;', '&#x20;', ' '), '%20', $url);
            }

            return $matches['attribute'] . '=' . $matches['quote'] . $url . $matches['quote'];
        },
        $html
    );

    // Some exported pages do not include the accessibility widget. Inject it
    // once at render time so the accessibility control is present everywhere.
    if (!$is_local_development && !preg_match('#<script[^>]+cdn\\.userway\\.org/widget\\.js[^>]*>#i', $html)) {
        $accessibility_tag = sprintf(
            '<script src="https://cdn.userway.org/widget.js" data-account="%s" async></script>',
            esc_attr(ORCAM_USERWAY_ACCOUNT)
        );
        $html = preg_replace('/<\\/head>/i', $accessibility_tag . '</head>', $html, 1);
    }

    // SvelteKit data endpoints are unavailable in a static export. Load the
    // compatibility handler before the client router can intercept links.
    $navigation_uri = $theme_uri . '/js/static-navigation.js?ver=' . rawurlencode(ORCAM_THEME_VERSION);
    $google_api_key = orcam_theme_google_api_key();
    $dynamic_product_items = array();
    $product_data_map = array();
    $currency_symbol = function_exists('get_woocommerce_currency_symbol') ? get_woocommerce_currency_symbol(get_woocommerce_currency()) : 'â‚«';

    foreach (orcam_theme_product_navigation_products() as $navigation_product) {
        $wc_p = function_exists('wc_get_product') ? wc_get_product($navigation_product->ID) : null;
        $price_val = $wc_p ? $wc_p->get_price() : '';
        $reg_val = $wc_p ? $wc_p->get_regular_price() : '';
        $sale_val = $wc_p ? $wc_p->get_sale_price() : '';
        $formatted_p = $price_val !== '' ? (number_format((float) $price_val, 0, ',', '.') . ' ' . $currency_symbol) : '';
        $formatted_r = ($reg_val && $sale_val) ? (number_format((float) $reg_val, 0, ',', '.') . ' ' . $currency_symbol) : '';
        $img_id = $wc_p ? $wc_p->get_image_id() : 0;
        $img_url = $img_id ? (string) wp_get_attachment_image_url($img_id, 'large') : '';

        if (get_post_meta($navigation_product->ID, '_orcam_product_route', true) === '') {
            $dynamic_product_items[] = array(
                'title' => get_the_title($navigation_product),
                'url'   => get_permalink($navigation_product),
            );
        }

        if ($price_val !== '') {
            $product_data_map[$navigation_product->post_name] = array(
                'id'               => $navigation_product->ID,
                'slug'             => $navigation_product->post_name,
                'title'            => get_the_title($navigation_product),
                'price'            => $price_val,
                'formattedPrice'   => $formatted_p,
                'formattedRegular' => $formatted_r,
                'imageUrl'         => $img_url,
                'permalink'        => get_permalink($navigation_product),
                'checkoutUrl'      => function_exists('wc_get_checkout_url') ? add_query_arg('add-to-cart', $navigation_product->ID, wc_get_checkout_url()) : home_url('/vi/checkout/'),
            );
        }
    }

    // Synchronize actual WooCommerce prices and product imagery into HTML
    $html = orcam_theme_sync_woocommerce_product_data_into_html($html, $file);

    $navigation_config = '<script>window.orcamThemeUri=' . wp_json_encode($theme_uri)
        . ';window.orcamHomeUrl=' . wp_json_encode(home_url('/vi/home'))
        . ';window.orcamShopUrl=' . wp_json_encode(home_url('/vi/shop/'))
        . ';window.orcamGoogleApiKey=' . wp_json_encode($google_api_key)
        . ';window.orcamDynamicProducts=' . wp_json_encode($dynamic_product_items)
        . ';window.orcamProductDataMap=' . wp_json_encode($product_data_map)
        . ';window.orcamContactForm=' . wp_json_encode(array(
            'action' => admin_url('admin-post.php'),
            'nonce'  => wp_create_nonce('orcam_consultation'),
            'supportNonce' => wp_create_nonce('orcam_support_case'),
        )) . ';</script>';
    $navigation_tag = $navigation_config . '<script id="orcam-static-navigation" src="' . esc_url($navigation_uri) . '"></script>';
    $html = preg_replace('/<\/body>/i', $navigation_tag . '</body>', $html, 1);

    // Save rendered HTML to cache for instant sub-50ms responses (never cache checkout or AJAX)
    $route = function_exists('orcam_theme_request_route') ? orcam_theme_request_route() : '';
    if (!isset($_GET['wc-ajax']) && !wp_doing_ajax() && $route !== 'checkout' && strpos($route, 'checkout') !== 0 && strpos($route, 'vi/checkout') !== 0) {
        @file_put_contents($cache_file, $html, LOCK_EX);
        @touch($cache_file, time() + 5);
    }

    if ($return_only) {
        return $html;
    }

    status_header(200);
    nocache_headers();
    header('Content-Type: text/html; charset=' . get_bloginfo('charset'));
    header('X-OrCam-Cache: MISS');
    if (!ob_get_level() && extension_loaded('zlib') && !ini_get('zlib.output_compression')) {
        ob_start('ob_gzhandler');
    }
    echo $html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- trusted bundled documents.
    exit;
}

/** Render native WooCommerce content inside the same exported header/footer. */
function orcam_theme_render_shared_static_shell(string $content, string $title, bool $include_wordpress_assets = false, string $custom_cache_file = '', string $custom_cache_key = '', bool $return_only = false): bool
{
    // Use an original product page as the canonical shell so native/new
    // products receive exactly the same header, submenu assets and footer as
    // the five migrated product pages.
    $file = get_template_directory() . '/static-pages/vi/orcam-myeye-3-pro.html';
    if (!is_readable($file)) {
        return false;
    }

    $html = (string) file_get_contents($file);
    $replacement_count = 0;
    $html = preg_replace_callback(
        '#(<article\b[^>]*\bid=["\']mainBody["\'][^>]*>).*?(<nav\b[^>]*\bclass=["\'][^"\']*orcam-footer)#is',
        static function (array $match) use ($content): string {
            return $match[1] . $content . $match[2];
        },
        $html,
        1,
        $replacement_count
    );
    if (!$replacement_count) {
        return false;
    }

    // The shell page marks MyEye 3 Pro active. Native products receive their
    // own dynamic item, so do not leave a different product highlighted.
    $html = str_replace(' orcam-submenu__active', '', $html);

    $full_title = esc_html($title) . ' - OrCam';
    $html = preg_replace('#<title>.*?</title>#is', '<title>' . $full_title . '</title>', $html, 1);
    $html = preg_replace('#<meta\s+property=["\']og:title["\']\s+content=["\'][^"\']*["\']>#i', '<meta property="og:title" content="' . esc_attr($full_title) . '">', $html, 1);
    $html = preg_replace('#<meta\s+name=["\']twitter:title["\']\s+content=["\'][^"\']*["\']>#i', '<meta name="twitter:title" content="' . esc_attr($full_title) . '">', $html, 1);

    if ($include_wordpress_assets) {
        ob_start();
        wp_head();
        $wordpress_head = (string) ob_get_clean();
        ob_start();
        wp_footer();
        $wordpress_footer = (string) ob_get_clean();
        $html = preg_replace('#</head>#i', $wordpress_head . '</head>', $html, 1);
        $html = preg_replace('#</body>#i', $wordpress_footer . '</body>', $html, 1);
    }

    // OrCam Vietnam: inject support block before .orcam-footer nav
    if (true) { // always inject OrCam VN footer block
        // Strip existing block to avoid duplicate
        $html = preg_replace('#<style\s+id="orcam-vn-footer-css">.*?</style>[\s\S]*?<div\s+id="orcam-vn-support-block">[\s\S]*?</div>(?:\s*</div>){2}#is', '', $html, 1);
        $lu = esc_url(get_template_directory_uri() . '/media/logo_white-1.svg');
        $ph = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.47 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.09 6.09l1.81-1.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
        $hs = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>';
        $hd = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>';
        $css = '<style id="orcam-vn-footer-css">#orcam-vn-support-block{background:var(--orcam-07-solid-gray,#1a1a1a);width:100%;box-sizing:border-box}.ovn-top-row{max-width:1400px;margin:0 auto;padding:36px var(--orcam-sides-padding,5%) 28px;box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;border-bottom:1px solid rgba(255,255,255,.07)}.ovn-brand{display:flex;align-items:center;gap:10px}.ovn-brand img{height:22px;width:auto;opacity:.95}.ovn-brand-name{color:#fff;font-size:13.5px;font-weight:800;letter-spacing:2px;text-transform:uppercase}.ovn-desc{color:#64748b;font-size:12.5px;line-height:1.6;margin:0;max-width:340px;text-align:right}.ovn-cards-wrap{max-width:1400px;margin:0 auto;padding:24px var(--orcam-sides-padding,5%) 32px;box-sizing:border-box}.ovn-section-label{color:#475569;font-size:10.5px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 16px 0}.ovn-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px}.ovn-card{border-radius:10px;padding:18px 20px;display:flex;flex-direction:column;gap:0}.ovn-card-regular{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07)}.ovn-card-hotline{background:rgba(37,99,235,.08);border:1px solid rgba(37,99,235,.25)}.ovn-card-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}.ovn-card-icon{width:32px;height:32px;border-radius:7px;background:rgba(56,189,248,.08);display:flex;align-items:center;justify-content:center;color:#38bdf8}.ovn-card-hotline .ovn-card-icon{background:rgba(37,99,235,.15);color:#60a5fa}.ovn-badge{font-size:9.5px;font-weight:700;letter-spacing:.8px;padding:2px 9px;border-radius:20px;text-transform:uppercase}.ovn-badge-blue{color:#38bdf8;background:rgba(56,189,248,.08);border:1px solid rgba(56,189,248,.18)}.ovn-badge-indigo{color:#818cf8;background:rgba(99,102,241,.1);border:1px solid rgba(99,102,241,.2)}.ovn-card-title{color:#e2e8f0;font-size:13px;font-weight:700;margin:0 0 5px 0;line-height:1.3}.ovn-card-addr{color:#475569;font-size:12px;line-height:1.55;margin:0 0 14px 0}.ovn-card-phone{display:flex;align-items:center;gap:7px;color:#38bdf8;font-size:13px;font-weight:700;text-decoration:none;padding-top:12px;border-top:1px solid rgba(255,255,255,.05);margin-top:auto}.ovn-hotline-btn{display:flex;align-items:center;justify-content:center;gap:8px;background:#1d4ed8;color:#fff;padding:11px 14px;border-radius:7px;font-size:18px;font-weight:800;text-decoration:none;letter-spacing:.5px;margin:4px 0 10px}.ovn-hotline-note{color:#64748b;font-size:11.5px;text-align:center;margin:0;line-height:1.4}@media(max-width:600px){.ovn-desc{text-align:left}.ovn-cards{grid-template-columns:1fr}}</style>';
        $block = $css
            . '<div id="orcam-vn-support-block">'
            . '<div class="ovn-top-row"><div class="ovn-brand"><svg class="ovn-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 15" style="height:20px;width:auto;fill:#ffffff;display:inline-block;vertical-align:middle;" aria-label="OrCam"><g fill="#ffffff"><path d="M25.4,2.8c-2.1,0-3.9,1.7-3.9,3.8v1.9c0,2.1,1.7,3.8,3.9,3.8h4.4c2.1,0,3.9-1.7,3.9-3.8V6.5c0-2.1-1.7-3.8-3.9-3.8C29.8,2.8,25.4,2.8,25.4,2.8z M25.3,5.2H30c0.7,0,1.3,0.4,1.3,1.2v2.3c0,0.7-0.5,1.3-1.3,1.3h-4.8c-0.7,0-1.4-0.5-1.4-1.3V6.4C23.9,5.6,24.5,5.2,25.3,5.2z"/><path d="M53.3,2.8h8.1v2.4h-8.2c-0.7,0-1.3,0.6-1.3,1.3v0.1v1.9v0.1c0,0.7,0.6,1.3,1.3,1.3h8.2v2.4h-8.1c-2.1,0-3.9-1.7-3.9-3.8V8.3l0,0V6.8V6.7C49.4,4.5,51.2,2.8,53.3,2.8"/><path d="M38.4,5.2v2.2h4.6c1.4,0,1.4-2.2,0-2.2H38.4z M43.9,2.8c1.7,0,3.1,1.7,3.1,3.4c0,0.9-0.4,2-1.1,2.5l2.1,3.5h-2.7l-1.5-2.3h-5.5v2.3h-2.4V4.4c0-1,0.6-1.6,1.3-1.6L43.9,2.8L43.9,2.8z"/><g><path d="M12.3,2.7C11,1.3,9.1,0.5,7.1,0.5C3.2,0.5,0,3.6,0,7.5c0,3.9,3.2,7,7.1,7c2.1,0,3.9-0.9,5.2-2.2l4.5-4.8L12.3,2.7z M7.1,12.1c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6S9.7,12.1,7.1,12.1z"/><path d="M7.2,9.9c1.3,0,2.4-1.1,2.4-2.4S8.5,5.1,7.2,5.1S4.8,6.2,4.8,7.5S5.9,9.9,7.2,9.9"/></g><path d="M68.7,5.2h-1.3c-0.7,0-1.3,0.6-1.3,1.3v1h7.2v-1c0-0.7-0.6-1.3-1.3-1.3H68.7z M67.6,2.8h1.1h3.1c2.1,0,3.9,1.7,3.9,3.8v0.9v2.2v2.6h-2.4V9.8h-7.2v2.4h-2.4V9.6V7.5V6.6C63.8,4.5,65.5,2.8,67.6,2.8"/><path d="M86.1,2.8H83h-1.1c-2.1,0-3.9,1.7-3.9,3.8v0.9v2.2v2.6h2.4V9.8h0V7.3l0,0V6.5c0-0.7,0.6-1.3,1.3-1.3h1v7.1h2.4V5.1h1c0.7,0,1.3,0.6,1.3,1.3v0.8v0.2v4.8H90V9.6V7.5V6.6C90,4.5,88.3,2.8,86.1,2.8z"/></g></svg><span class="ovn-brand-name" style="color:#38bdf8;font-size:14px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;">VIỆT NAM</span></div>'
            . '<p class="ovn-desc">C&ocirc;ng ngh&#7879; tr&#7907; n&#259;ng &#273;&#7897;t ph&aacute;, n&acirc;ng cao t&iacute;nh &#273;&#7897;c l&#7853;p<br>cho ng&#432;&#7901;i khi&#7871;m th&#7883; v&agrave; ng&#432;&#7901;i g&#7863;p kh&oacute; kh&#259;n khi &#273;&#7885;c.</p></div>'
            . '<div class="ovn-cards-wrap"><p class="ovn-section-label">H&#7895; tr&#7907; kh&aacute;ch h&agrave;ng</p><div class="ovn-cards">'
            . '<div class="ovn-card ovn-card-regular"><div class="ovn-card-header"><div class="ovn-card-icon">' . $hs . '</div><span class="ovn-badge ovn-badge-blue">Mi&#7873;n B&#7855;c</span></div><p class="ovn-card-title">V&#259;n ph&ograve;ng H&agrave; N&#7897;i</p><p class="ovn-card-addr">226 &#272;&#432;&#7901;ng L&aacute;ng, Ph&#432;&#7901;ng Th&#7883;nh Quang,<br>Qu&#7853;n &#272;&#7889;ng &#272;a, H&agrave; N&#7897;i</p><a href="tel:02473048700" class="ovn-card-phone">' . $ph . '024.7304.8700</a></div>'
            . '<div class="ovn-card ovn-card-regular"><div class="ovn-card-header"><div class="ovn-card-icon">' . $hs . '</div><span class="ovn-badge ovn-badge-blue">Mi&#7873;n Nam</span></div><p class="ovn-card-title">V&#259;n ph&ograve;ng H&#7891; Ch&iacute; Minh</p><p class="ovn-card-addr">137 H&ograve;a H&#432;ng, Ph&#432;&#7901;ng H&ograve;a H&#432;ng,<br>TP. H&#7891; Ch&iacute; Minh</p><a href="tel:02873048700" class="ovn-card-phone">' . $ph . '028.7304.8700</a></div>'
            . '<div class="ovn-card ovn-card-hotline"><div class="ovn-card-header"><div class="ovn-card-icon">' . $hd . '</div><span class="ovn-badge ovn-badge-indigo">T&#432; v&#7845;n 24/7</span></div><p class="ovn-card-title">Hotline T&#7893;ng &#272;&agrave;i</p><a href="tel:1900638400" class="ovn-hotline-btn">' . $ph . '1900.63.8400</a><p class="ovn-hotline-note">H&#7895; tr&#7907; v&agrave; t&#432; v&#7845;n m&#7885;i l&uacute;c, m&#7885;i n&#417;i</p></div>'
            . '</div></div></div>';
        $html = preg_replace('#(<nav\b[^>]*class="[^"]*orcam-footer)#', $block . '$1', $html, 1);
    }

    // Hydrate the original Svelte header/footer. static-navigation.js keeps
    // the WooCommerce main body authoritative after hydration rebuilds DOM.
    $title_tag = '<script>window.orcamHydratedChrome=true;window.orcamAuthoritativeTitle='
        . wp_json_encode($full_title) . ';document.title=window.orcamAuthoritativeTitle;</script></head>';
    $html = preg_replace(
        '#</head>#i',
        $title_tag,
        $html,
        1
    );

    $render_target = $custom_cache_file !== '' ? $custom_cache_file : $file;
    if ($include_wordpress_assets) {
        // For checkout, do not run heavy static text translation dictionary over WordPress scripts
        $theme_uri = untrailingslashit(get_template_directory_uri());
        $theme_stylesheet = $theme_uri . '/style.css?ver=' . rawurlencode(ORCAM_THEME_VERSION);
        $base = '<base href="' . esc_url(trailingslashit(home_url('/vi/'))) . '">'
            . '<link rel="stylesheet" id="orcam-theme-css" href="' . esc_url($theme_stylesheet) . '">';
        $html = preg_replace('/<head(\\s[^>]*)?>/i', '$0' . $base, $html, 1);
        $html = preg_replace_callback(
            '#(["\'(=])(?:\\.\\./|\\./|/)*(?P<asset>_app|fonts|images|media)/#i',
            static function (array $matches) use ($theme_uri): string {
                return $matches[1] . $theme_uri . '/' . $matches['asset'] . '/';
            },
            $html
        );
        $html = preg_replace(
            '#(["\'(=])(?:\\.\\./|\\./|/)*smui\\.css#i',
            '$1' . $theme_uri . '/smui.css',
            $html
        );
        $navigation_uri = $theme_uri . '/js/static-navigation.js?ver=' . rawurlencode(ORCAM_THEME_VERSION);
        $navigation_config = '<script>window.orcamThemeUri=' . wp_json_encode($theme_uri)
            . ';window.orcamHomeUrl=' . wp_json_encode(home_url('/vi/home'))
            . ';window.orcamShopUrl=' . wp_json_encode(home_url('/vi/shop/'))
            . ';window.orcamGoogleApiKey=' . wp_json_encode(orcam_theme_google_api_key())
            . ';window.orcamContactForm=' . wp_json_encode(array(
                'action' => admin_url('admin-post.php'),
                'nonce'  => wp_create_nonce('orcam_consultation'),
                'supportNonce' => wp_create_nonce('orcam_support_case'),
            )) . ';</script>';
        $html = preg_replace('/<\/body>/i', $navigation_config . '<script id="orcam-static-navigation" src="' . esc_url($navigation_uri) . '"></script></body>', $html, 1);
        
        status_header(200);
        nocache_headers();
        header('Content-Type: text/html; charset=' . get_bloginfo('charset'));
        header('X-OrCam-Cache: DYNAMIC');
        echo $html;
        exit;
    }
    orcam_theme_render_document($render_target, $html, $custom_cache_key, $return_only);
    return true;
}

/** Render a complete product document whose authoritative copy is in wp_posts. */
function orcam_theme_render_database_product(WP_Post $product, bool $return_only = false): bool
{
    if ($product->post_type !== 'product'
        || get_post_meta($product->ID, '_orcam_product_route', true) === ''
        || $product->post_status !== 'publish') {
        return false;
    }

    $source = (string) get_post_meta($product->ID, '_orcam_source_file', true);
    $source = str_replace(array('static-pages/en-us/', 'static-pages/en-gb/'), 'static-pages/vi/', $source);
    if ($source === '' || strpos($source, '..') !== false) {
        return false;
    }

    $theme_root = wp_normalize_path(get_template_directory());
    $source_file = realpath($theme_root . '/' . ltrim($source, '/'));
    if (!$source_file || strpos(wp_normalize_path($source_file), $theme_root . '/') !== 0) {
        return false;
    }

    $product_cache_key = 'product_' . $product->ID;
    if (!$return_only) {
        orcam_theme_try_serve_cache($source_file, $product_cache_key);
    }

    // Layout is shared and protected from the product editor. post_content is
    // intentionally limited to readable section text for easy editing.
    $html = (string) get_post_meta($product->ID, '_orcam_layout_html', true);
    if ($html === '') {
        $html = $product->post_content;
    }
    if (function_exists('wc_get_product')) {
        $wc_product = wc_get_product($product->ID);
        if ($wc_product && $wc_product->get_price() !== '') {
            $currency = get_woocommerce_currency_symbol(get_woocommerce_currency());
            $display_price = $currency . number_format((float) $wc_product->get_price(), 0, '.', '');
            $image_ids = array_values(array_filter(array_merge(
                array($wc_product->get_image_id()),
                $wc_product->get_gallery_image_ids()
            )));
            $details_markup = '<section class="orcam-woocommerce-product-panel" data-product-id="'
                . esc_attr((string) $product->ID) . '"><div class="orcam-woocommerce-product-panel__inner">';
            if ($image_ids) {
                $main_url = wp_get_attachment_image_url($image_ids[0], 'large');
                $details_markup .= '<div class="orcam-woocommerce-gallery"><div class="orcam-woocommerce-gallery__stage">'
                    . '<img class="orcam-woocommerce-product-image" src="' . esc_url((string) $main_url)
                    . '" alt="' . esc_attr($wc_product->get_name()) . '" loading="eager" decoding="async"></div>'
                    . '<div class="orcam-woocommerce-gallery__thumbs">';
                foreach ($image_ids as $index => $image_id) {
                    $large_url = wp_get_attachment_image_url($image_id, 'large');
                    $thumbnail_url = wp_get_attachment_image_url($image_id, 'thumbnail') ?: $large_url;
                    if (!$large_url) {
                        continue;
                    }
                    $details_markup .= '<button type="button" class="orcam-woocommerce-gallery__thumb'
                        . ($index === 0 ? ' is-active' : '') . '" data-large="' . esc_url($large_url) . '"'
                        . ' aria-label="Xem áº£nh ' . esc_attr((string) ($index + 1)) . '"><img src="'
                        . esc_url((string) $thumbnail_url) . '" alt=""></button>';
                }
                $details_markup .= '</div></div>';
            }
            $details_markup .= '<div class="orcam-woocommerce-product-summary"><h2>'
                . esc_html($wc_product->get_name()) . '</h2><div class="orcam-woocommerce-product-price">'
                . esc_html($display_price) . '</div></div></div></section>';
            $replaced = 0;
            $html = preg_replace('#</section>#i', '</section>' . $details_markup, $html, 1, $replaced);
            if (!$replaced) {
                $html = preg_replace('#</header>#i', '</header>' . $details_markup, $html, 1);
            }
            $price_style = '<style id="orcam-woocommerce-product-price-style">'
                . '.orcam-woocommerce-product-panel{background:#fff;box-sizing:border-box;color:#111;padding:48px 5%;width:100%}'
                . '.orcam-woocommerce-product-panel__inner{align-items:center;display:grid;gap:48px;grid-template-columns:minmax(0,1fr) minmax(280px,.65fr);margin:0 auto;max-width:1200px}'
                . '.orcam-woocommerce-gallery__stage{align-items:center;background:#f8f8fa;border-radius:12px;display:flex;justify-content:center;min-height:360px;padding:28px}'
                . '.orcam-woocommerce-product-image{display:block;height:300px;max-width:100%;object-fit:contain;width:100%}'
                . '.orcam-woocommerce-gallery__thumbs{display:flex;flex-wrap:wrap;gap:12px;margin-top:14px}'
                . '.orcam-woocommerce-gallery__thumb{background:#fff;border:2px solid transparent;border-radius:8px;cursor:pointer;height:76px;padding:5px;width:76px}'
                . '.orcam-woocommerce-gallery__thumb.is-active{border-color:#111}.orcam-woocommerce-gallery__thumb img{height:100%;object-fit:contain;width:100%}'
                . '.orcam-woocommerce-product-summary h2{font-size:38px;line-height:1.15;margin:0 0 20px}.orcam-woocommerce-product-price{font-size:28px;font-weight:700;line-height:1.25}'
                . '@media(max-width:767px){.orcam-woocommerce-product-panel{padding:32px 20px}.orcam-woocommerce-product-panel__inner{gap:28px;grid-template-columns:1fr}.orcam-woocommerce-gallery__stage{min-height:260px}.orcam-woocommerce-product-image{height:230px}.orcam-woocommerce-product-summary h2{font-size:30px}}'
                . '</style>';
            $html = preg_replace('#</head>#i', $price_style . '</head>', $html, 1);
            $gallery_script = '<script id="orcam-woocommerce-gallery-script">document.addEventListener("click",function(event){var button=event.target.closest(".orcam-woocommerce-gallery__thumb");if(!button)return;var gallery=button.closest(".orcam-woocommerce-gallery"),image=gallery&&gallery.querySelector(".orcam-woocommerce-product-image");if(image&&button.dataset.large){image.src=button.dataset.large;gallery.querySelectorAll(".orcam-woocommerce-gallery__thumb").forEach(function(item){item.classList.toggle("is-active",item===button);});}});</script>';
            $html = preg_replace('#</body>#i', $gallery_script . '</body>', $html, 1);
        }
    }

    orcam_theme_render_document($source_file, $html, $product_cache_key, $return_only);
    return true;
}

/** Database fallback also works immediately before permalink rules are flushed. */
function orcam_theme_maybe_render_database_product(): bool
{
    $route = orcam_theme_request_route();
    $routes_map = array(
        'vi/orcam-myeye-3-pro' => 'static-pages/vi/orcam-myeye-3-pro.html',
        'vi/orcam-myeye-2-pro' => 'static-pages/vi/orcam-myeye-2-pro.html',
        'vi/orcam-read-5'      => 'static-pages/vi/orcam-read-5.html',
        'vi/orcam-read-3'      => 'static-pages/vi/orcam-read-3.html',
        'vi/orcam-read'        => 'static-pages/vi/orcam-read.html',
    );

    if (!isset($routes_map[$route])) {
        return false;
    }

    global $wpdb;
    $product_id = (int) $wpdb->get_var($wpdb->prepare(
        "SELECT p.ID FROM {$wpdb->posts} p
         INNER JOIN {$wpdb->postmeta} m ON m.post_id=p.ID AND m.meta_key='_orcam_product_route'
         WHERE p.post_type='product' AND p.post_status='publish' AND m.meta_value=%s LIMIT 1",
        $route
    ));

    if (!$product_id) {
        return false;
    }

    $source_file = get_template_directory() . '/' . $routes_map[$route];
    if (orcam_theme_try_serve_cache($source_file, 'product_' . $product_id)) {
        exit;
    }

    $product = get_post($product_id);
    return ($product instanceof WP_Post) ? orcam_theme_render_database_product($product) : false;
}

// Render marked WooCommerce products before WooCommerce selects its default
// single-product template. The stored document remains byte-for-byte intact.
add_action('template_redirect', static function (): void {
    if (!is_singular('product')) {
        return;
    }

    $product = get_queried_object();
    if ($product instanceof WP_Post && orcam_theme_render_database_product($product)) {
        exit;
    }
}, 0);

/**
 * Render an imported WordPress post inside its original exported blog shell.
 * Layout and compiled styles come from the source document; editorial data
 * always comes from wp_posts so changes in wp-admin appear immediately.
 */
function orcam_theme_render_database_blog(WP_Post $post, bool $return_only = false): bool
{
    $source = (string) get_post_meta($post->ID, '_orcam_source_file', true);
    $source = str_replace(array('static-pages/en-us/', 'static-pages/en-gb/'), 'static-pages/vi/', $source);
    if ($source === '' || strpos($source, '..') !== false) {
        return false;
    }

    $theme_root = wp_normalize_path(get_template_directory());
    $file = realpath($theme_root . '/' . ltrim($source, '/'));
    if (!$file || strpos(wp_normalize_path($file), $theme_root . '/') !== 0 || !is_file($file)) {
        return false;
    }

    $blog_cache_key = 'blog_' . $post->ID;
    if (!$return_only) {
        orcam_theme_try_serve_cache($file, $blog_cache_key);
    }

    $html = (string) file_get_contents($file);
    $title = get_the_title($post);
    $content = apply_filters('the_content', $post->post_content);
    $excerpt = has_excerpt($post) ? get_the_excerpt($post) : wp_trim_words(wp_strip_all_tags($content), 32);
    $author = get_the_author_meta('display_name', (int) $post->post_author);
    $date = get_the_date('Y-m-d', $post);

    // Replace the visible blog heading while retaining the original wrapper.
    $html = preg_replace_callback(
        '#(<div\s+class=(["\'])blog\2[^>]*>\s*<h1[^>]*>).*?(</h1>)#is',
        static function (array $match) use ($title): string {
            return $match[1] . esc_html($title) . $match[3];
        },
        $html,
        1
    );

    // Replace the date/byline when the exported article provides one.
    $byline = esc_html($date . ' | Bá»Ÿi ' . ($author ?: 'OrCam'));
    $html = preg_replace_callback(
        '#(<div\s+class=(["\'])blog\2[^>]*>\s*<h1[^>]*>.*?</h1>\s*<p[^>]*>).*?(</p>)#is',
        static function (array $match) use ($byline): string {
            return $match[1] . $byline . $match[3];
        },
        $html,
        1
    );

    // The post body is the authoritative database field.
    $body_replaced = 0;
    $html = preg_replace_callback(
        '#(<article\s+class=(["\'])blog\2[^>]*>).*?(</article>)#is',
        static function (array $match) use ($content): string {
            return $match[1] . '<div class="orcam-article-content">' . $content . '</div>' . $match[3];
        },
        $html,
        1,
        $body_replaced
    );
    // One campaign-style blog uses mainBody directly instead of article.blog.
    if (!$body_replaced) {
        $html = preg_replace_callback(
            '#(<article\s+id=(["\'])mainBody\2[^>]*>).*?(</article>)#is',
            static function (array $match) use ($content): string {
                return $match[1] . $content . $match[3];
            },
            $html,
            1,
            $body_replaced
        );
    }
    if (!$body_replaced) {
        return false;
    }

    // Keep browser and social metadata synchronized with wp-admin fields.
    $html = preg_replace('#<title>.*?</title>#is', '<title>' . esc_html($title) . ' - OrCam</title>', $html, 1);
    $html = preg_replace_callback(
        '#(<meta\s+name=(["\'])description\2\s+content=)(["\']).*?\3#is',
        static function (array $match) use ($excerpt): string {
            return $match[1] . $match[3] . esc_attr($excerpt) . $match[3];
        },
        $html,
        1
    );

    // Database content is already static; never translate it again in-browser.
    $html = preg_replace(
        '#<!-- ORCAM_VI_AUTO_TRANSLATE_START -->.*?<!-- ORCAM_VI_AUTO_TRANSLATE_END -->#is',
        '',
        $html
    );

    // Hydration rebuilds the exported Svelte tree from its embedded English
    // state and would overwrite the database-backed article inserted above.
    // Keep the server-rendered shell/CSS, but do not start the old Svelte app.
    $html = preg_replace_callback(
        '#<script\b[^>]*>.*?</script>#is',
        static function (array $match): string {
            return strpos($match[0], 'kit.start(') !== false ? '' : $match[0];
        },
        $html
    );

    // Without Svelte hydration, its full-height nested scroller clips the
    // database article below the hero image. Use normal document flow.
    $html = preg_replace_callback(
        '#<body([^>]*)>#i',
        static function (array $match): string {
            $attributes = $match[1];
            if (preg_match('#\bclass=(["\'])(.*?)\1#i', $attributes)) {
                $attributes = preg_replace(
                    '#\bclass=(["\'])(.*?)\1#i',
                    'class=$1$2 orcam-database-blog$1',
                    $attributes,
                    1
                );
            } else {
                $attributes .= ' class="orcam-database-blog"';
            }
            return '<body' . $attributes . '>';
        },
        $html,
        1
    );

    // This must be inline because the compiled app CSS can load after the
    // theme stylesheet and lock html/body to a viewport-sized scroller.
    $flow_fix = '<style id="orcam-database-flow-fix">'
        . 'html,body.orcam-database-blog{height:auto!important;max-height:none!important;min-height:100%!important;overflow-x:hidden!important;overflow-y:auto!important;position:static!important}'
        . 'body.orcam-database-blog .app,body.orcam-database-blog .app>.fill-height,body.orcam-database-blog article#mainBody,body.orcam-database-blog .orcam-blog{height:auto!important;max-height:none!important;min-height:0!important;overflow:visible!important;position:static!important}'
        . 'body.orcam-database-blog .app>.fill-height{display:block!important}'
        . '</style>';
    $html = preg_replace('#</head>#i', $flow_fix . '</head>', $html, 1);

    orcam_theme_render_document($file, $html, $blog_cache_key, $return_only);
    return true;
}

/**
 * WooCommerce Direct Buy: Completely eliminate Cart and redirect straight to Checkout.
 */
add_filter('woocommerce_add_to_cart_redirect', static function (): string {
    return function_exists('wc_get_checkout_url') ? wc_get_checkout_url() : home_url('/vi/checkout/');
});

// Map any cart URL request directly to checkout
add_filter('woocommerce_get_cart_url', static function (): string {
    return function_exists('wc_get_checkout_url') ? wc_get_checkout_url() : home_url('/vi/checkout/');
});

// Enforce 1-item instant purchase: clear cart before adding the new product
add_filter('woocommerce_add_to_cart_validation', static function (bool $passed, int $product_id, int $quantity): bool {
    if ($passed && function_exists('WC') && WC()->cart) {
        WC()->cart->empty_cart();
    }
    return $passed;
}, 10, 3);

// Enforce single quantity for all products (removes quantity selector box)
add_filter('woocommerce_is_sold_individually', '__return_true');

// Rename all button texts to "Mua ngay"
add_filter('woocommerce_product_single_add_to_cart_text', static function (): string {
    return __('Mua ngay', 'orcam-theme');
});

add_filter('woocommerce_product_add_to_cart_text', static function (): string {
    return __('Mua ngay', 'orcam-theme');
});

// Remove cart messages and notices
add_filter('wc_add_to_cart_message_html', '__return_empty_string');
add_filter('woocommerce_cart_item_removed_title', '__return_empty_string');
add_filter('woocommerce_cart_item_restored_title', '__return_empty_string');

// Disable WooCommerce AJAX cart fragments script to speed up site and remove cart polling
add_action('wp_enqueue_scripts', static function (): void {
    wp_dequeue_script('wc-cart-fragments');
}, 100);

// Redirect any attempt to view the cart page directly to checkout or shop
add_action('template_redirect', static function (): void {
    if (function_exists('is_cart') && is_cart()) {
        if (function_exists('WC') && WC()->cart && WC()->cart->is_empty()) {
            wp_safe_redirect(home_url('/vi/shop/'));
        } else {
            wp_safe_redirect(function_exists('wc_get_checkout_url') ? wc_get_checkout_url() : home_url('/vi/checkout/'));
        }
        exit;
    }
}, 5);

/**
 * Warmup Shop Catalog page in static cache.
 */
function orcam_theme_warmup_shop_catalog(): void
{
    if (!function_exists('orcam_theme_render_shared_static_shell') || !function_exists('wc_get_product')) {
        return;
    }
    ob_start();
    ?>
    <main class="orcam-shop" id="primary">
        <header class="orcam-shop__header">
            <div><p><?php esc_html_e('OrCam Viá»‡t Nam', 'orcam-theme'); ?></p><h1><?php esc_html_e('Táº¥t cáº£ sáº£n pháº©m', 'orcam-theme'); ?></h1></div>
        </header>
        <section class="orcam-shop__catalog" aria-label="<?php esc_attr_e('Danh sÃ¡ch sáº£n pháº©m', 'orcam-theme'); ?>">
            <div class="orcam-shop__grid">
                <?php foreach (orcam_theme_product_navigation_products(true) as $p_post) :
                    $p_obj = wc_get_product($p_post->ID);
                    if (!$p_obj) continue;
                    $p_img = $p_obj->get_image_id() ? wp_get_attachment_image_url($p_obj->get_image_id(), 'medium_large') : wc_placeholder_img_src('medium_large');
                    $p_sum = trim($p_obj->get_short_description()) ?: sprintf(__('KhÃ¡m phÃ¡ %s vá»›i cÃ´ng nghá»‡ há»— trá»£ tiÃªn tiáº¿n tá»« OrCam.', 'orcam-theme'), get_the_title($p_post));
                    ?>
                    <article class="orcam-shop-card">
                        <div class="orcam-shop-card__inner">
                            <a class="orcam-shop-card__media-link" href="<?php echo esc_url(get_permalink($p_post)); ?>">
                                <span class="orcam-shop-card__media">
                                    <?php if ($p_obj->is_on_sale()) : ?><span class="orcam-shop-card__badge"><?php esc_html_e('Æ¯u Ä‘Ã£i', 'orcam-theme'); ?></span><?php endif; ?>
                                    <img src="<?php echo esc_url($p_img); ?>" alt="<?php echo esc_attr(get_the_title($p_post)); ?>" loading="lazy">
                                </span>
                            </a>
                            <div class="orcam-shop-card__body">
                                <a class="orcam-shop-card__title-link" href="<?php echo esc_url(get_permalink($p_post)); ?>">
                                    <h2><?php echo esc_html(get_the_title($p_post)); ?></h2>
                                </a>
                                <?php if ($p_obj->get_price() !== '') : ?>
                                    <div class="orcam-shop-card__price"><?php echo wp_kses_post($p_obj->get_price_html()); ?></div>
                                <?php endif; ?>
                                <p class="orcam-shop-card__description"><?php echo esc_html(wp_trim_words(wp_strip_all_tags($p_sum), 22, 'â€¦')); ?></p>
                                <div class="orcam-shop-card__actions">
                                    <a class="orcam-shop-card__btn orcam-shop-card__btn--detail" href="<?php echo esc_url(get_permalink($p_post)); ?>">
                                        <?php esc_html_e('Xem chi tiáº¿t', 'orcam-theme'); ?>
                                    </a>
                                    <a class="orcam-shop-card__btn orcam-shop-card__btn--buy" href="<?php echo esc_url($p_obj->is_purchasable() && $p_obj->is_in_stock() ? add_query_arg('add-to-cart', $p_obj->get_id(), wc_get_checkout_url()) : get_permalink($p_post)); ?>">
                                        <?php esc_html_e('Mua ngay', 'orcam-theme'); ?>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </article>
                <?php endforeach; ?>
            </div>
        </section>
    </main>
    <?php
    $shop_html = (string) ob_get_clean();
    orcam_theme_render_shared_static_shell($shop_html, 'Táº¥t cáº£ sáº£n pháº©m', false, 'shop_catalog', 'vi_shop_page', true);
}

/**
 * Automatically invalidate and warm up cache on WooCommerce product & post CRUD events.
 * Guarantees 100% real-time frontend updates WITHOUT sacrificing ultra-fast page speeds.
 */
function orcam_theme_on_product_change($product_id = 0): void
{
    static $is_processing = false;
    if ($is_processing) {
        return;
    }
    $is_processing = true;

    // 1. Touch products tracker file with fresh timestamp
    $cache_dir = orcam_theme_cache_dir();
    $tracker_file = dirname($cache_dir) . '/orcam_products.timestamp';
    @touch($tracker_file);

    // 2. Force refresh product cache in-memory
    orcam_theme_product_navigation_products(true);

    // 3. Pre-warm Shop Catalog immediately in static cache
    orcam_theme_warmup_shop_catalog();

    // 4. Pre-warm key submenu & home pages
    $low_vision_file = get_template_directory() . '/static-pages/vi/low-vision.html';
    if (is_file($low_vision_file)) {
        orcam_theme_render_document($low_vision_file, null, '', true);
    }
    $index_file = get_template_directory() . '/static-pages/vi/index.html';
    if (is_file($index_file)) {
        orcam_theme_render_document($index_file, null, '', true);
    }

    // 5. Pre-warm the specific product if published
    $int_product_id = (int) $product_id;
    if ($int_product_id > 0) {
        $p = get_post($int_product_id);
        if ($p instanceof WP_Post && $p->post_status === 'publish') {
            orcam_theme_render_database_product($p, true);
        }
    }

    $is_processing = false;
}

// Hook all WooCommerce & WordPress Product CRUD actions:
add_action('save_post_product', 'orcam_theme_on_product_change', 20, 1);
add_action('woocommerce_update_product', 'orcam_theme_on_product_change', 20, 1);
add_action('woocommerce_new_product', 'orcam_theme_on_product_change', 20, 1);
add_action('woocommerce_product_quick_edit_save', 'orcam_theme_on_product_change', 20, 1);
add_action('woocommerce_product_set_stock_status', 'orcam_theme_on_product_change', 20, 1);
add_action('woocommerce_variation_set_stock_status', 'orcam_theme_on_product_change', 20, 1);

add_action('delete_post', static function ($post_id): void {
    if (get_post_type($post_id) === 'product') {
        orcam_theme_on_product_change((int) $post_id);
    }
}, 20, 1);

add_action('wp_trash_post', static function ($post_id): void {
    if (get_post_type($post_id) === 'product') {
        orcam_theme_on_product_change((int) $post_id);
    }
}, 20, 1);

add_action('untrash_post', static function ($post_id): void {
    if (get_post_type($post_id) === 'product') {
        orcam_theme_on_product_change((int) $post_id);
    }
}, 20, 1);

// Blog Post CRUD Auto-invalidation & Warmup
add_action('save_post_post', static function ($post_id): void {
    if (wp_is_post_revision($post_id) || wp_is_post_autosave($post_id)) {
        return;
    }
    $post = get_post($post_id);
    if ($post instanceof WP_Post && $post->post_status === 'publish') {
        orcam_theme_render_database_blog($post, true);
    }
}, 20, 1);

// OrCam Vietnam â€” inject footer support block on WP-rendered pages (products, posts, etc.)
add_action('wp_footer', static function (): void {
    ?>
    <style id="orcam-vn-footer-css">
        #orcam-vn-support-block {
            background: var(--orcam-07-solid-gray, #1a1a1a);
            width: 100%;
            box-sizing: border-box;
        }
        .ovn-top-row {
            max-width: 1400px;
            margin: 0 auto;
            padding: 36px var(--orcam-sides-padding, 5%) 28px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 12px;
            border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .ovn-brand { display: flex; align-items: center; gap: 10px; }
        .ovn-brand img { height: 22px; width: auto; opacity: 0.95; }
        .ovn-brand-name { color: #fff; font-size: 13.5px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; }
        .ovn-desc { color: #64748b; font-size: 12.5px; line-height: 1.6; margin: 0; max-width: 340px; text-align: right; }
        .ovn-cards-wrap { max-width: 1400px; margin: 0 auto; padding: 24px var(--orcam-sides-padding, 5%) 32px; box-sizing: border-box; }
        .ovn-section-label { color: #475569; font-size: 10.5px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 16px 0; }
        .ovn-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; }
        .ovn-card { border-radius: 10px; padding: 18px 20px; display: flex; flex-direction: column; gap: 0; }
        .ovn-card-regular { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); }
        .ovn-card-hotline { background: rgba(37,99,235,0.08); border: 1px solid rgba(37,99,235,0.25); }
        .ovn-card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
        .ovn-card-icon { width: 32px; height: 32px; border-radius: 7px; background: rgba(56,189,248,0.08); display: flex; align-items: center; justify-content: center; color: #38bdf8; }
        .ovn-card-hotline .ovn-card-icon { background: rgba(37,99,235,0.15); color: #60a5fa; }
        .ovn-badge { font-size: 9.5px; font-weight: 700; letter-spacing: 0.8px; padding: 2px 9px; border-radius: 20px; text-transform: uppercase; }
        .ovn-badge-blue { color: #38bdf8; background: rgba(56,189,248,0.08); border: 1px solid rgba(56,189,248,0.18); }
        .ovn-badge-indigo { color: #818cf8; background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.2); }
        .ovn-card-title { color: #e2e8f0; font-size: 13px; font-weight: 700; margin: 0 0 5px 0; line-height: 1.3; }
        .ovn-card-addr { color: #475569; font-size: 12px; line-height: 1.55; margin: 0 0 14px 0; }
        .ovn-card-phone { display: flex; align-items: center; gap: 7px; color: #38bdf8; font-size: 13px; font-weight: 700; text-decoration: none; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.05); margin-top: auto; }
        .ovn-hotline-btn { display: flex; align-items: center; justify-content: center; gap: 8px; background: #1d4ed8; color: #fff; padding: 11px 14px; border-radius: 7px; font-size: 18px; font-weight: 800; text-decoration: none; letter-spacing: 0.5px; margin: 4px 0 10px; }
        .ovn-hotline-note { color: #64748b; font-size: 11.5px; text-align: center; margin: 0; line-height: 1.4; }
        @media (max-width: 600px) { .ovn-desc { text-align: left; } .ovn-cards { grid-template-columns: 1fr; } }
    </style>
    <script id="orcam-vn-footer-injector">
    (function() {
        var LOGO = '<?php echo esc_url(get_theme_file_uri("media/logo_white-1.svg")); ?>';
        var phone_svg = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.47 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.09 6.09l1.81-1.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
        var house_svg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>';
        var headset_svg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>';

        function build() {
            return '<div id="orcam-vn-support-block">'
                + '<div class="ovn-top-row">'
                +   '<div class="ovn-brand"><svg class="ovn-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 15" style="height:20px;width:auto;fill:#ffffff;display:inline-block;vertical-align:middle;" aria-label="OrCam"><g fill="#ffffff"><path d="M25.4,2.8c-2.1,0-3.9,1.7-3.9,3.8v1.9c0,2.1,1.7,3.8,3.9,3.8h4.4c2.1,0,3.9-1.7,3.9-3.8V6.5c0-2.1-1.7-3.8-3.9-3.8C29.8,2.8,25.4,2.8,25.4,2.8z M25.3,5.2H30c0.7,0,1.3,0.4,1.3,1.2v2.3c0,0.7-0.5,1.3-1.3,1.3h-4.8c-0.7,0-1.4-0.5-1.4-1.3V6.4C23.9,5.6,24.5,5.2,25.3,5.2z"/><path d="M53.3,2.8h8.1v2.4h-8.2c-0.7,0-1.3,0.6-1.3,1.3v0.1v1.9v0.1c0,0.7,0.6,1.3,1.3,1.3h8.2v2.4h-8.1c-2.1,0-3.9-1.7-3.9-3.8V8.3l0,0V6.8V6.7C49.4,4.5,51.2,2.8,53.3,2.8"/><path d="M38.4,5.2v2.2h4.6c1.4,0,1.4-2.2,0-2.2H38.4z M43.9,2.8c1.7,0,3.1,1.7,3.1,3.4c0,0.9-0.4,2-1.1,2.5l2.1,3.5h-2.7l-1.5-2.3h-5.5v2.3h-2.4V4.4c0-1,0.6-1.6,1.3-1.6L43.9,2.8L43.9,2.8z"/><g><path d="M12.3,2.7C11,1.3,9.1,0.5,7.1,0.5C3.2,0.5,0,3.6,0,7.5c0,3.9,3.2,7,7.1,7c2.1,0,3.9-0.9,5.2-2.2l4.5-4.8L12.3,2.7z M7.1,12.1c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6S9.7,12.1,7.1,12.1z"/><path d="M7.2,9.9c1.3,0,2.4-1.1,2.4-2.4S8.5,5.1,7.2,5.1S4.8,6.2,4.8,7.5S5.9,9.9,7.2,9.9"/></g><path d="M68.7,5.2h-1.3c-0.7,0-1.3,0.6-1.3,1.3v1h7.2v-1c0-0.7-0.6-1.3-1.3-1.3H68.7z M67.6,2.8h1.1h3.1c2.1,0,3.9,1.7,3.9,3.8v0.9v2.2v2.6h-2.4V9.8h-7.2v2.4h-2.4V9.6V7.5V6.6C63.8,4.5,65.5,2.8,67.6,2.8"/><path d="M86.1,2.8H83h-1.1c-2.1,0-3.9,1.7-3.9,3.8v0.9v2.2v2.6h2.4V9.8h0V7.3l0,0V6.5c0-0.7,0.6-1.3,1.3-1.3h1v7.1h2.4V5.1h1c0.7,0,1.3,0.6,1.3,1.3v0.8v0.2v4.8H90V9.6V7.5V6.6C90,4.5,88.3,2.8,86.1,2.8z"/></g></svg><span class="ovn-brand-name" style="color:#38bdf8;font-size:14px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;">VIỆT NAM</span></div>'
                +   '<p class="ovn-desc">CÃ´ng nghá»‡ trá»£ nÄƒng Ä‘á»™t phÃ¡, nÃ¢ng cao tÃ­nh Ä‘á»™c láº­p<br>cho ngÆ°á»i khiáº¿m thá»‹ vÃ  ngÆ°á»i gáº·p khÃ³ khÄƒn khi Ä‘á»c.</p>'
                + '</div>'
                + '<div class="ovn-cards-wrap">'
                +   '<p class="ovn-section-label">Há»— trá»£ khÃ¡ch hÃ ng</p>'
                +   '<div class="ovn-cards">'
                +     '<div class="ovn-card ovn-card-regular">'
                +       '<div class="ovn-card-header"><div class="ovn-card-icon">' + house_svg + '</div><span class="ovn-badge ovn-badge-blue">Miá»n Báº¯c</span></div>'
                +       '<p class="ovn-card-title">VÄƒn phÃ²ng HÃ  Ná»™i</p>'
                +       '<p class="ovn-card-addr">226 ÄÆ°á»ng LÃ¡ng, PhÆ°á»ng Thá»‹nh Quang,<br>Quáº­n Äá»‘ng Äa, HÃ  Ná»™i</p>'
                +       '<a href="tel:02473048700" class="ovn-card-phone">' + phone_svg + '024.7304.8700</a>'
                +     '</div>'
                +     '<div class="ovn-card ovn-card-regular">'
                +       '<div class="ovn-card-header"><div class="ovn-card-icon">' + house_svg + '</div><span class="ovn-badge ovn-badge-blue">Miá»n Nam</span></div>'
                +       '<p class="ovn-card-title">VÄƒn phÃ²ng Há»“ ChÃ­ Minh</p>'
                +       '<p class="ovn-card-addr">137 HÃ²a HÆ°ng, PhÆ°á»ng HÃ²a HÆ°ng,<br>TP. Há»“ ChÃ­ Minh</p>'
                +       '<a href="tel:02873048700" class="ovn-card-phone">' + phone_svg + '028.7304.8700</a>'
                +     '</div>'
                +     '<div class="ovn-card ovn-card-hotline">'
                +       '<div class="ovn-card-header"><div class="ovn-card-icon">' + headset_svg + '</div><span class="ovn-badge ovn-badge-indigo">TÆ° váº¥n 24/7</span></div>'
                +       '<p class="ovn-card-title">Hotline Tá»•ng ÄÃ i</p>'
                +       '<a href="tel:1900638400" class="ovn-hotline-btn">' + phone_svg + '1900.63.8400</a>'
                +       '<p class="ovn-hotline-note">Há»— trá»£ vÃ  tÆ° váº¥n má»i lÃºc, má»i nÆ¡i</p>'
                +     '</div>'
                +   '</div>'
                + '</div>'
                + '</div>';
        }

        function inject() {
            if (document.getElementById('orcam-vn-support-block')) return;
            var footer = document.querySelector('.orcam-footer, .orcam-wp-footer, footer');
            if (!footer) return;
            var tmp = document.createElement('div');
            tmp.innerHTML = build();
            footer.insertBefore(tmp.firstChild, footer.firstChild);
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', inject);
        } else {
            inject();
        }
        var n = 0, t = setInterval(function() { inject(); if (++n > 20) clearInterval(t); }, 250);
    })();
    </script>
    <?php
}, 20);

