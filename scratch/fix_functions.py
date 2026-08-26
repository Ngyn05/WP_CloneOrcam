import re

file_path = r'c:\Users\hnguy\Local Sites\orcam\app\public\wp-content\themes\orcam_theme\functions.php'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Fix unclosed preg_replace_callback and ensure base tag
broken_pattern = """    $html = preg_replace_callback(
        '#https://www\\.orcam\\.com/media/(?P<path>[^"\\'\\s<>]+)#i',
        static function (array $matches) use ($theme_uri, $local_media_files): string {
            $relative_path = rawurldecode($matches['path']);
            return isset($local_media_files[$relative_path])

    // The exported documents use paths relative to their old build directory"""

correct_replacement = """    $html = preg_replace_callback(
        '#https://www\\.orcam\\.com/media/(?P<path>[^"\\'\\s<>]+)#i',
        static function (array $matches) use ($theme_uri, $local_media_files): string {
            $relative_path = rawurldecode($matches['path']);
            return isset($local_media_files[$relative_path])
                ? $theme_uri . '/media/' . $matches['path']
                : $matches[0];
        },
        $html
    );
    $static_root = trailingslashit(realpath(get_template_directory() . '/static-pages'));
    $relative_file = str_replace('\\\\', '/', substr(realpath($file) ?: $file, strlen($static_root)));
    $relative_dir = dirname($relative_file);
    $base_uri = home_url('/' . ($relative_dir === '.' ? '' : trailingslashit($relative_dir)));

    $theme_stylesheet = $theme_uri . '/style.css?ver=' . rawurlencode(ORCAM_THEME_VERSION);
    $base = '<base href="' . esc_url(trailingslashit($base_uri)) . '">'
        . '<link rel="stylesheet" id="orcam-theme-css" href="' . esc_url($theme_stylesheet) . '">';
    $html = preg_replace('/<head(\\\\s[^>]*)?>/i', '$0' . $base, $html, 1);

    // The exported documents use paths relative to their old build directory"""

if broken_pattern in content:
    content = content.replace(broken_pattern, correct_replacement)
    print("Fixed broken pattern in functions.php")
else:
    print("Broken pattern not found directly, checking...")

# 2. Inject contact widget before </body> in orcam_theme_render_document
target_render_doc = """    $navigation_tag = $navigation_config . '<script id="orcam-static-navigation" src="' . esc_url($navigation_uri) . '"></script>';
    $html = preg_replace('/<\\/body>/i', $navigation_tag . '</body>', $html, 1);"""

replacement_render_doc = """    $contact_widget_html = function_exists('orcam_get_floating_contact_widget_html') ? orcam_get_floating_contact_widget_html() : '';
    $navigation_tag = $contact_widget_html . $navigation_config . '<script id="orcam-static-navigation" src="' . esc_url($navigation_uri) . '"></script>';
    $html = preg_replace('/<\\/body>/i', $navigation_tag . '</body>', $html, 1);"""

if target_render_doc in content:
    content = content.replace(target_render_doc, replacement_render_doc)
    print("Injected contact widget in orcam_theme_render_document")

# 3. Inject contact widget before </body> in orcam_theme_render_shared_static_shell
target_shell_doc = """    $navigation_config = '<script>window.orcamThemeUri=' . wp_json_encode($theme_uri)
        . ';window.orcamHomeUrl=' . wp_json_encode(home_url('/vi/home'))
        . ';window.orcamShopUrl=' . wp_json_encode(home_url('/vi/shop/'))
        . ';window.orcamGoogleApiKey=' . wp_json_encode(orcam_theme_google_api_key())
        . ';window.orcamContactForm=' . wp_json_encode(array(
            'action' => admin_url('admin-post.php'),
            'nonce'  => wp_create_nonce('orcam_consultation'),
            'supportNonce' => wp_create_nonce('orcam_support_case'),
        )) . ';</script>';
    $html = preg_replace('/<\\/body>/i', $navigation_config . '<script id="orcam-static-navigation" src="' . esc_url($navigation_uri) . '"></script></body>', $html, 1);"""

replacement_shell_doc = """    $contact_widget_html = function_exists('orcam_get_floating_contact_widget_html') ? orcam_get_floating_contact_widget_html() : '';
    $navigation_config = '<script>window.orcamThemeUri=' . wp_json_encode($theme_uri)
        . ';window.orcamHomeUrl=' . wp_json_encode(home_url('/vi/home'))
        . ';window.orcamShopUrl=' . wp_json_encode(home_url('/vi/shop/'))
        . ';window.orcamGoogleApiKey=' . wp_json_encode(orcam_theme_google_api_key())
        . ';window.orcamContactForm=' . wp_json_encode(array(
            'action' => admin_url('admin-post.php'),
            'nonce'  => wp_create_nonce('orcam_consultation'),
            'supportNonce' => wp_create_nonce('orcam_support_case'),
        )) . ';</script>';
    $html = preg_replace('/<\\/body>/i', $contact_widget_html . $navigation_config . '<script id="orcam-static-navigation" src="' . esc_url($navigation_uri) . '"></script></body>', $html, 1);"""

if target_shell_doc in content:
    content = content.replace(target_shell_doc, replacement_shell_doc)
    print("Injected contact widget in orcam_theme_render_shared_static_shell")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated functions.php successfully.")
