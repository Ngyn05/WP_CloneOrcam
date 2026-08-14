<?php
/** Import the five Vietnamese product documents as WooCommerce products. */

declare(strict_types=1);

$wp_load = dirname(__DIR__, 4) . '/wp-load.php';
if (!is_file($wp_load)) {
    fwrite(STDERR, "Cannot locate wp-load.php at {$wp_load}\n");
    exit(1);
}

require_once $wp_load;

$theme_dir = get_template_directory();
$products = array(
    'orcam-myeye-3-pro' => array('title' => 'OrCam MyEye 3 Pro', 'sku' => 'ORCAM-MYEYE-3-PRO', 'regular_price' => '4490', 'sale_price' => '4250', 'short_description' => 'Thiết bị hỗ trợ thị giác đeo được tích hợp AI, giúp đọc văn bản, nhận diện khuôn mặt, sản phẩm và môi trường xung quanh theo thời gian thực.', 'image' => 'media/MYEYE_on floor-1.webp', 'gallery' => array('media/MYEYE_on floor Flip 1.webp', 'media/OrCam_Glasses_PNG-4.webp', 'media/Mask Group 353 1-1.webp')),
    'orcam-myeye-2-pro' => array('title' => 'OrCam MyEye 2 Pro', 'sku' => 'ORCAM-MYEYE-2-PRO', 'regular_price' => '4250', 'sale_price' => '', 'short_description' => 'Thiết bị nhỏ gọn gắn trên kính, hỗ trợ người khiếm thị đọc chữ, nhận diện khuôn mặt và thực hiện các hoạt động hằng ngày độc lập hơn.', 'image' => 'media/MYEYE_on floor Flip 1.webp', 'gallery' => array('media/MYEYE_on floor-1.webp', 'media/OrCam_Glasses_PNG-3.webp', 'media/Mask Group 353 1-1.webp')),
    'orcam-read-5'      => array('title' => 'OrCam Read 5', 'sku' => 'ORCAM-READ-5', 'regular_price' => '2790', 'sale_price' => '', 'short_description' => 'Máy đọc cầm tay thế hệ mới với trợ lý AI, đọc nhanh văn bản in và kỹ thuật số, hỗ trợ hỏi đáp và tóm tắt nội dung thuận tiện.', 'image' => 'media/Read-Website-yellow-buttons (1) (1) (1)-min.webp', 'gallery' => array('media/orcam-read2.webp', 'media/device2 (1).webp', 'media/Group 3607-1.webp', 'media/Artboard 1 copy 5-1.webp')),
    'orcam-read-3'      => array('title' => 'OrCam Read 3', 'sku' => 'ORCAM-READ-3', 'regular_price' => '2790', 'sale_price' => '', 'short_description' => 'Thiết bị đọc và kính lúp thông minh dành cho người thị lực kém, kết hợp đọc thành tiếng, phóng đại và trợ lý AI tương tác.', 'image' => 'media/read_3_model.webp', 'gallery' => array('media/Read-Website-yellow-buttons (1) (1) (1)-min.webp', 'media/device2 (1).webp', 'media/Group 3607-1.webp', 'media/Artboard 1 copy 5-1.webp')),
    'orcam-read'        => array('title' => 'OrCam Read', 'sku' => 'ORCAM-READ', 'regular_price' => '1990', 'sale_price' => '', 'short_description' => 'Thiết bị đọc cầm tay trực quan, đọc to văn bản in và kỹ thuật số ở mọi nơi mà không cần kết nối Internet.', 'image' => 'media/orcam-read2.webp', 'gallery' => array('media/OrCam Read device.webp', 'media/device2 (1).webp', 'media/Group 3607-1.webp', 'media/Artboard 1 copy 5-1.webp')),
);

if (!class_exists('WooCommerce') || !class_exists('WC_Product_Simple')) {
    fwrite(STDERR, "WooCommerce is not active.\n");
    exit(1);
}

// The imported OrCam price book is denominated in US dollars.
update_option('woocommerce_currency', 'USD');

/** Copy a trusted theme asset into Media Library once and return its ID. */
function orcam_import_product_image(string $relative_file, string $title): int
{
    $existing = get_posts(array(
        'post_type'      => 'attachment',
        'post_status'    => 'inherit',
        'posts_per_page' => 1,
        'meta_key'       => '_orcam_source_asset',
        'meta_value'     => $relative_file,
        'fields'         => 'ids',
    ));
    if ($existing) {
        return (int) $existing[0];
    }

    $source = get_template_directory() . '/' . ltrim($relative_file, '/');
    if (!is_readable($source)) {
        throw new RuntimeException("Cannot read product image {$relative_file}");
    }

    $upload = wp_upload_bits(basename($source), null, (string) file_get_contents($source));
    if (!empty($upload['error'])) {
        throw new RuntimeException((string) $upload['error']);
    }

    $mime = wp_check_filetype($upload['file']);
    $attachment_id = wp_insert_attachment(array(
        'post_mime_type' => $mime['type'] ?: 'image/webp',
        'post_title'     => $title,
        'post_status'    => 'inherit',
    ), $upload['file']);
    if (is_wp_error($attachment_id)) {
        throw new RuntimeException($attachment_id->get_error_message());
    }

    require_once ABSPATH . 'wp-admin/includes/image.php';
    $metadata = wp_generate_attachment_metadata((int) $attachment_id, $upload['file']);
    wp_update_attachment_metadata((int) $attachment_id, $metadata);
    update_post_meta((int) $attachment_id, '_orcam_source_asset', $relative_file);
    update_post_meta((int) $attachment_id, '_wp_attachment_image_alt', $title);
    return (int) $attachment_id;
}

/** Extract only readable headings and paragraphs for WooCommerce Description. */
function orcam_extract_product_description(string $html): string
{
    if (!class_exists('DOMDocument')) {
        return '<p>' . esc_html(wp_strip_all_tags($html)) . '</p>';
    }

    $document = new DOMDocument('1.0', 'UTF-8');
    $previous = libxml_use_internal_errors(true);
    $document->loadHTML('<?xml encoding="UTF-8">' . $html, LIBXML_NOWARNING | LIBXML_NOERROR);
    libxml_clear_errors();
    libxml_use_internal_errors($previous);
    $xpath = new DOMXPath($document);
    $nodes = $xpath->query('//article[@id="mainBody"]//*[self::h1 or self::h2 or self::h3 or self::h4 or self::h5 or self::h6 or self::p or self::li][not(ancestor::nav) and not(ancestor::footer) and not(ancestor::header)]');
    if (!$nodes) {
        return '';
    }

    $output = array();
    $last_text = '';
    foreach ($nodes as $node) {
        $text = trim((string) preg_replace('/\s+/u', ' ', html_entity_decode($node->textContent, ENT_QUOTES | ENT_HTML5, 'UTF-8')));
        if ($text === '' || $text === $last_text || mb_strlen($text) < 2) {
            continue;
        }
        $last_text = $text;
        $tag = strtolower($node->nodeName);
        $editor_tag = in_array($tag, array('h1', 'h2'), true) ? 'h2' : (in_array($tag, array('h3', 'h4', 'h5', 'h6'), true) ? 'h3' : 'p');
        $output[] = '<' . $editor_tag . '>' . esc_html($text) . '</' . $editor_tag . '>';
    }

    return implode("\n", $output);
}

foreach ($products as $slug => $definition) {
    $title = $definition['title'];
    $relative_file = 'static-pages/vi/' . $slug . '.html';
    $file = $theme_dir . '/' . $relative_file;
    $html = is_readable($file) ? file_get_contents($file) : false;
    if (!is_string($html) || $html === '') {
        fwrite(STDERR, "Cannot read {$relative_file}\n");
        exit(1);
    }
    $description = orcam_extract_product_description($html);

    global $wpdb;
    $existing_id = $wpdb->get_var($wpdb->prepare(
        "SELECT p.ID FROM {$wpdb->posts} p
         INNER JOIN {$wpdb->postmeta} route ON route.post_id=p.ID AND route.meta_key='_orcam_product_route'
         WHERE route.meta_value=%s AND p.post_type IN ('orcam_product','product')
         ORDER BY p.ID ASC LIMIT 1",
        'vi/' . $slug
    ));

    $post_data = array(
        'post_type'   => 'product',
        'post_status' => 'publish',
        'post_title'  => $title,
        'post_name'   => $slug,
    );
    if ($existing_id) {
        $post_data['ID'] = (int) $existing_id;
        $existing_content = (string) $wpdb->get_var($wpdb->prepare(
            "SELECT post_content FROM {$wpdb->posts} WHERE ID=%d",
            (int) $existing_id
        ));
        // Preserve manual text edits on subsequent imports. The first
        // migration replaces only the old complete HTML document.
        if ($existing_content !== '' && stripos(ltrim($existing_content), '<!DOCTYPE html') !== 0) {
            $description = $existing_content;
        }
    }

    $post_id = wp_insert_post(wp_slash($post_data), true);
    if (is_wp_error($post_id)) {
        fwrite(STDERR, $post_id->get_error_message() . "\n");
        exit(1);
    }

    // Store only readable text in the WooCommerce Description editor.
    $updated = $wpdb->update(
        $wpdb->posts,
        array('post_content' => $description, 'post_modified' => current_time('mysql'), 'post_modified_gmt' => current_time('mysql', true)),
        array('ID' => (int) $post_id),
        array('%s', '%s', '%s'),
        array('%d')
    );
    if ($updated === false) {
        fwrite(STDERR, "Database update failed for {$slug}\n");
        exit(1);
    }

    update_post_meta((int) $post_id, '_orcam_product_route', 'vi/' . $slug);
    update_post_meta((int) $post_id, '_orcam_source_file', $relative_file);
    update_post_meta((int) $post_id, '_orcam_product_imported_at', current_time('mysql', true));
    update_post_meta((int) $post_id, '_orcam_full_document', 'yes');
    // update_post_meta() unslashes values; pre-slash the compiled document so
    // embedded JavaScript escape sequences remain byte-correct.
    update_post_meta((int) $post_id, '_orcam_layout_html', wp_slash($html));
    wp_set_object_terms((int) $post_id, 'simple', 'product_type');

    $product = new WC_Product_Simple((int) $post_id);
    $product->set_name($title);
    $product->set_slug($slug);
    $product->set_sku($definition['sku']);
    $product->set_status('publish');
    $product->set_catalog_visibility('visible');
    $product->set_stock_status('instock');
    $product->set_manage_stock(false);
    $product->set_virtual(false);
    $product->set_downloadable(false);
    $product->set_regular_price($definition['regular_price']);
    $product->set_sale_price($definition['sale_price']);
    $product->set_short_description($definition['short_description']);
    $product->set_image_id(orcam_import_product_image($definition['image'], $title));
    $gallery_ids = array();
    foreach ($definition['gallery'] as $gallery_file) {
        $gallery_ids[] = orcam_import_product_image($gallery_file, $title);
    }
    $product->set_gallery_image_ids(array_values(array_unique($gallery_ids)));
    $product->save();

    // WC_Product::save() may normalize post fields; restore the text-only
    // description afterwards. The full layout remains in protected postmeta.
    $wpdb->update(
        $wpdb->posts,
        array('post_content' => $description),
        array('ID' => (int) $post_id),
        array('%s'),
        array('%d')
    );
    clean_post_cache((int) $post_id);
    wc_delete_product_transients((int) $post_id);
    echo "Imported {$title} as WooCommerce product #{$post_id} ({$definition['sku']}, " . strlen($html) . " bytes)\n";
}

// Backfill a short catalog summary for any other product already in the shop.
$all_product_ids = get_posts(array(
    'post_type'      => 'product',
    'post_status'    => 'publish',
    'posts_per_page' => -1,
    'fields'         => 'ids',
));
foreach ($all_product_ids as $product_id) {
    $post = get_post((int) $product_id);
    if (!$post || trim($post->post_excerpt) !== '') {
        continue;
    }
    $plain_content = trim(wp_strip_all_tags($post->post_content));
    $summary = $plain_content !== ''
        ? wp_trim_words($plain_content, 30, '…')
        : sprintf('Khám phá %s với thiết kế tiện dụng và công nghệ hỗ trợ tiên tiến từ OrCam.', $post->post_title);
    wp_update_post(array('ID' => (int) $product_id, 'post_excerpt' => $summary));
}

flush_rewrite_rules(false);
echo "Product routes flushed.\n";
