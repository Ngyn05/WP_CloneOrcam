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

define('ORCAM_THEME_VERSION', '2.1.3');
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
        __('Ảnh đại diện', 'orcam-theme'),
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
            echo '<p class="description">' . esc_html__('Nội dung này xuất hiện trên thẻ bài viết và trong thẻ meta description.', 'orcam-theme') . '</p>';
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
    $subject = sprintf('[OrCam] Yêu cầu tư vấn từ %s', $name);
    $body = "Họ và tên: {$name}\nSố điện thoại: {$phone}\nEmail: {$email}\n\nNội dung tư vấn:\n{$message}";
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
        'Mối quan hệ với OrCam' => sanitize_text_field(wp_unslash($_POST['connection'] ?? '')),
        'Họ và tên'             => sanitize_text_field(wp_unslash($_POST['contact_name'] ?? '')),
        'Email'                 => sanitize_email(wp_unslash($_POST['email'] ?? '')),
        'Số điện thoại'         => sanitize_text_field(wp_unslash($_POST['phone'] ?? '')),
        'Thành phố'             => sanitize_text_field(wp_unslash($_POST['city'] ?? '')),
        'Quốc gia'              => sanitize_text_field(wp_unslash($_POST['country'] ?? '')),
        'Tỉnh/Thành'            => sanitize_text_field(wp_unslash($_POST['state'] ?? '')),
        'Thiết bị OrCam'        => sanitize_text_field(wp_unslash($_POST['device'] ?? '')),
        'Số sê-ri'              => sanitize_text_field(wp_unslash($_POST['serial_number'] ?? '')),
        'Loại yêu cầu'          => sanitize_text_field(wp_unslash($_POST['case_type'] ?? '')),
        'Mô tả'                 => sanitize_textarea_field(wp_unslash($_POST['description'] ?? '')),
    );
    if ($fields['Mối quan hệ với OrCam'] === '' || $fields['Họ và tên'] === ''
        || !is_email($fields['Email']) || $fields['Số điện thoại'] === ''
        || $fields['Loại yêu cầu'] === '' || $fields['Mô tả'] === '') {
        wp_safe_redirect(add_query_arg('case_status', 'invalid', $redirect));
        exit;
    }

    $body = '';
    foreach ($fields as $label => $value) {
        $body .= $label . ': ' . $value . "\n";
    }
    $recipient = apply_filters('orcam_support_recipient', get_option('admin_email'));
    $subject = sprintf('[OrCam Support] %s - %s', $fields['Loại yêu cầu'], $fields['Họ và tên']);
    $headers = array('Content-Type: text/plain; charset=UTF-8', 'Reply-To: ' . $fields['Họ và tên'] . ' <' . $fields['Email'] . '>');
    $sent = wp_mail($recipient, $subject, $body, $headers);
    wp_safe_redirect(add_query_arg('case_status', $sent ? 'success' : 'error', $redirect));
    exit;
}
add_action('admin_post_nopriv_orcam_support_case', 'orcam_theme_handle_support_case');
add_action('admin_post_orcam_support_case', 'orcam_theme_handle_support_case');

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
    return $vars;
});

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
    $document = orcam_theme_static_document();
    if (!$document) {
        return false;
    }

    orcam_theme_render_document($document);
    return true;
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
    $environment_key = getenv('ORCAM_GOOGLE_API_KEY');
    if (is_string($environment_key) && $environment_key !== '') {
        return $environment_key;
    }

    if (defined('ORCAM_GOOGLE_API_KEY')) {
        return (string) ORCAM_GOOGLE_API_KEY;
    }

    $env_file = get_template_directory() . '/.env';
    if (!is_readable($env_file)) {
        return '';
    }

    foreach (file($env_file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: array() as $line) {
        $line = trim($line);
        if ($line === '' || $line[0] === '#' || strpos($line, '=') === false) {
            continue;
        }

        [$name, $value] = array_map('trim', explode('=', $line, 2));
        if ($name === 'ORCAM_GOOGLE_API_KEY') {
            return trim($value, "\"'");
        }
    }

    return '';
}

/** Return the original hero image when a post has no WordPress thumbnail yet. */
function orcam_theme_post_card_image(WP_Post $post): string
{
    $thumbnail = get_the_post_thumbnail_url($post, 'large');
    if ($thumbnail) {
        return $thumbnail;
    }

    $source = (string) get_post_meta($post->ID, '_orcam_source_file', true);
    $source = str_replace(array('static-pages/en-us/', 'static-pages/en-gb/'), 'static-pages/vi/', $source);
    $file = $source !== '' ? get_template_directory() . '/' . ltrim($source, '/') : '';
    if ($file && is_readable($file)) {
        $html = (string) file_get_contents($file);
        if (preg_match('#<meta\s+property=(["\'])og:image\1\s+content=(["\'])(.*?)\2#is', $html, $match)) {
            return html_entity_decode($match[3], ENT_QUOTES | ENT_HTML5, 'UTF-8');
        }
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
function orcam_theme_render_document(string $file, ?string $document_html = null): void
{
    $html = $document_html ?? (string) file_get_contents($file);
    $translations = require get_template_directory() . '/inc/vietnamese-translations.php';

    // Translation keys such as "Reading" can also occur inside filenames.
    // Protect URLs so translating page copy never corrupts an asset path.
    $protected_urls = array();
    $html = preg_replace_callback(
        '#https?://[^"\'\s<>]+#i',
        static function (array $matches) use (&$protected_urls): string {
            $placeholder = '__ORCAM_PROTECTED_URL_' . count($protected_urls) . '__';
            $protected_urls[$placeholder] = $matches[0];
            return $placeholder;
        },
        $html
    );
    $html = strtr($html, $translations);
    $html = strtr($html, $protected_urls);
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
    $theme_uri = untrailingslashit(get_template_directory_uri());

    // Open the mirrored Helpjuice knowledge base from this theme instead of
    // leaving the site for the externally hosted help center.
    $local_help_center = $theme_uri . '/help-center/';
    $html = preg_replace(
        '#https://orcam\.helpjuice\.com/?(?=["\'])#i',
        $local_help_center,
        $html
    );

    // Prefer a bundled copy when an exported media URL exists in the theme.
    $html = preg_replace_callback(
        '#https://www\.orcam\.com/media/(?P<path>[^"\'\s<>]+)#i',
        static function (array $matches) use ($theme_uri): string {
            $relative_path = rawurldecode($matches['path']);
            $local_file = get_template_directory() . '/media/' . $relative_path;
            return is_file($local_file)
                ? $theme_uri . '/media/' . $matches['path']
                : $matches[0];
        },
        $html
    );
    $static_root = trailingslashit(realpath(get_template_directory() . '/static-pages'));
    $relative_file = str_replace('\\', '/', substr(realpath($file), strlen($static_root)));
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
    if (!preg_match('#<script[^>]+cdn\\.userway\\.org/widget\\.js[^>]*>#i', $html)) {
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
    $navigation_config = '<script>window.orcamThemeUri=' . wp_json_encode($theme_uri)
        . ';window.orcamHomeUrl=' . wp_json_encode(home_url('/vi/home'))
        . ';window.orcamGoogleApiKey=' . wp_json_encode($google_api_key)
        . ';window.orcamContactForm=' . wp_json_encode(array(
            'action' => admin_url('admin-post.php'),
            'nonce'  => wp_create_nonce('orcam_consultation'),
            'supportNonce' => wp_create_nonce('orcam_support_case'),
        )) . ';</script>';
    $navigation_tag = $navigation_config . '<script id="orcam-static-navigation" src="' . esc_url($navigation_uri) . '"></script>';
    $html = preg_replace('/<\/body>/i', $navigation_tag . '</body>', $html, 1);

    status_header(200);
    nocache_headers();
    header('Content-Type: text/html; charset=' . get_bloginfo('charset'));
    echo $html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- trusted bundled documents.
}

/**
 * Render an imported WordPress post inside its original exported blog shell.
 * Layout and compiled styles come from the source document; editorial data
 * always comes from wp_posts so changes in wp-admin appear immediately.
 */
function orcam_theme_render_database_blog(WP_Post $post): bool
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
    $byline = esc_html($date . ' | Bởi ' . ($author ?: 'OrCam'));
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

    orcam_theme_render_document($file, $html);
    return true;
}
