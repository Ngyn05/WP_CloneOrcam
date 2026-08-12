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

define('ORCAM_THEME_VERSION', '1.1.2');
define('ORCAM_USERWAY_ACCOUNT', 't2KpHXGp9h');

add_action('after_setup_theme', static function () {
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script'));
});

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
    $candidates = $route === ''
        ? array('index.html')
        : array($route, $route . '.html', rtrim($route, '/') . '/index.html');

    foreach ($candidates as $candidate) {
        $candidate = ltrim($candidate, '/');
        $file = $root . $candidate;
        if (is_file($file) && strtolower(pathinfo($file, PATHINFO_EXTENSION)) === 'html') {
            return $file;
        }
    }
    return null;
}

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

/**
 * Adjust asset URLs at render time so the theme works on any domain or in a
 * WordPress subdirectory. Relative URLs retain the original document base.
 */
function orcam_theme_render_document(string $file): void
{
    $html = (string) file_get_contents($file);
    $theme_uri = untrailingslashit(get_template_directory_uri());
    $static_root = trailingslashit(realpath(get_template_directory() . '/static-pages'));
    $relative_file = str_replace('\\', '/', substr(realpath($file), strlen($static_root)));
    $relative_dir = dirname($relative_file);
    $base_uri = home_url('/' . ($relative_dir === '.' ? '' : trailingslashit($relative_dir)));

    $base = '<base href="' . esc_url(trailingslashit($base_uri)) . '">';
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
        . ';window.orcamGoogleApiKey=' . wp_json_encode($google_api_key) . ';</script>';
    $navigation_tag = $navigation_config . '<script id="orcam-static-navigation" src="' . esc_url($navigation_uri) . '"></script>';
    $html = preg_replace('/<\/body>/i', $navigation_tag . '</body>', $html, 1);

    status_header(200);
    nocache_headers();
    header('Content-Type: text/html; charset=' . get_bloginfo('charset'));
    echo $html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- trusted bundled documents.
}
