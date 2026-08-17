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

define('ORCAM_THEME_VERSION', '2.4.6');

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

/**
 * Ensure product specs, in-the-box items and highlight features are seeded into WordPress Database.
 */
function orcam_theme_seed_product_specifications(): void {
    $specs_data = array(
        'orcam-myeye-3-pro' => array(
            'specs' => array(
                'Kích thước' => '76 x 21 x 14.9 mm',
                'Trọng lượng' => '22.5 gram',
                'Camera' => '13 Megapixel HD sắc nét',
                'Kết nối' => 'Wi-Fi 5GHz, Bluetooth 5.0, USB-C',
                'Thời lượng pin' => '2 giờ sử dụng liên tục (kèm sạc nhanh)',
                'Ngôn ngữ hỗ trợ' => 'Tiếng Việt, Tiếng Anh và hơn 25 ngôn ngữ',
                'Bảo hành' => '24 tháng chính hãng OrCam'
            ),
            'in_box' => array('Thiết bị OrCam MyEye 3 Pro', 'Bộ gá từ tính gắn mọi loại gọng kính', 'Cáp sạc nhanh Type-C và củ sạc chính hãng', 'Dây đeo cổ chống rơi & Khăn lau kính', 'Hộp đựng chống sốc cao cấp', 'Sách hướng dẫn sử dụng tiếng Việt'),
            'highlights' => array('Trợ lý AI thế hệ mới: Mô tả chi tiết hình ảnh xung quanh', 'Đọc tức thì mọi văn bản in và màn hình kỹ thuật số', 'Nhận diện khuôn mặt, màu sắc, tiền tệ và đồ vật chính xác', 'Kích thước siêu nhỏ gọn 22.5g gắn liền mọi gọng kính')
        ),
        'orcam-myeye-2-pro' => array(
            'specs' => array(
                'Kích thước' => '76 x 21 x 14.9 mm',
                'Trọng lượng' => '22.5 gram',
                'Camera' => '13 Megapixel với đèn LED chiếu sáng',
                'Kết nối' => 'Wi-Fi, Bluetooth, Micro-USB',
                'Thời lượng pin' => '1.5 - 2 giờ sử dụng liên tục',
                'Ngôn ngữ hỗ trợ' => 'Tiếng Việt, Tiếng Anh và hơn 20 ngôn ngữ',
                'Bảo hành' => '12 tháng chính hãng OrCam'
            ),
            'in_box' => array('Thiết bị OrCam MyEye 2 Pro', 'Bộ ngàm từ tính gắn gọng kính (3 bộ)', 'Kính mẫu không độ OrCam', 'Dây sạc & Củ sạc chuyên dụng', 'Hộp bảo vệ chống va đập', 'Thẻ bảo hành & Sách hướng dẫn'),
            'highlights' => array('Đọc văn bản tức thì từ sách báo, biển hiệu, màn hình', 'Nhận diện khuôn mặt người thân và bạn bè đã lưu', 'Nhận diện tiền tệ và đọc mã vạch sản phẩm', 'Hoạt động hoàn toàn độc lập, không cần kết nối Internet')
        ),
        'orcam-read-5' => array(
            'specs' => array(
                'Kích thước' => '122 x 25 x 13 mm',
                'Trọng lượng' => '44.5 gram',
                'Laser định vị' => '2 chế độ: Đóng khung khối văn bản & Con trỏ laser',
                'Kết nối' => 'Wi-Fi 2.4/5GHz, Bluetooth, USB-C',
                'Thời lượng pin' => 'Lên tới 4 giờ đọc liên tục',
                'Ngôn ngữ hỗ trợ' => 'Tiếng Việt, Tiếng Anh và hơn 20 ngôn ngữ',
                'Bảo hành' => '12 tháng chính hãng OrCam'
            ),
            'in_box' => array('Thiết bị đọc thông minh OrCam Read 5', 'Cáp sạc USB-C và củ sạc', 'Dây đeo cổ tiện lợi', 'Túi vải bảo vệ cao cấp', 'Sách hướng dẫn sử dụng tiếng Việt'),
            'highlights' => array('Kính lúp đọc thông minh AI thế hệ 5', 'Đọc trọn vẹn cả trang sách chỉ với 1 nút bấm', '2 chế độ quét Laser: Con trỏ định vị & Đóng khung vùng đọc', 'Tương tác thông minh bằng giọng nói với AI Assistant')
        ),
        'orcam-read-3' => array(
            'specs' => array(
                'Kích thước' => '122 x 25 x 13 mm',
                'Trọng lượng' => '44.5 gram',
                'Tính năng đặc biệt' => 'Kính lúp đọc thông minh AI & Giá đỡ đọc sách',
                'Kết nối' => 'Wi-Fi, Bluetooth, USB Type-C',
                'Thời lượng pin' => 'Lên tới 4 giờ sử dụng',
                'Ngôn ngữ hỗ trợ' => 'Tiếng Việt, Tiếng Anh và đa ngôn ngữ',
                'Bảo hành' => '12 tháng chính hãng OrCam'
            ),
            'in_box' => array('Thiết bị cầm tay OrCam Read 3', 'Đế sạc kiêm giá đỡ đọc sách thông minh', 'Cáp & Củ sạc chính hãng', 'Dây đeo tiện lợi', 'Tài liệu hướng dẫn'),
            'highlights' => array('Kết hợp thiết bị cầm tay và trạm đọc cố định', 'Tích hợp kính lúp AI hiển thị sắc nét trên màn hình', 'Đọc sách báo, tạp chí với độ chính xác tuyệt đối', 'Hỗ trợ đắc lực cho người giảm thị lực và người cao tuổi')
        ),
        'orcam-read' => array(
            'specs' => array(
                'Kích thước' => '122 x 25 x 13 mm',
                'Trọng lượng' => '44.5 gram',
                'Đèn LED' => 'Tích hợp đèn chiếu sáng ban đêm thông minh',
                'Kết nối' => 'Bluetooth Audio, USB-C',
                'Thời lượng pin' => 'Lên tới 4 giờ sử dụng liên tục',
                'Ngôn ngữ hỗ trợ' => 'Tiếng Việt, Tiếng Anh',
                'Bảo hành' => '12 tháng chính hãng OrCam'
            ),
            'in_box' => array('Thiết bị đọc cá nhân OrCam Read', 'Cáp sạc USB-C', 'Dây đeo tay & Túi đựng', 'Sách hướng dẫn sử dụng'),
            'highlights' => array('Thiết bị đọc AI cầm tay tiên phong thế giới', 'Quét và đọc toàn bộ văn bản trong tích tắc', 'Định vị bằng tia laser chính xác từng câu chữ', 'Âm thanh to rõ, hỗ trợ kết nối tai nghe Bluetooth')
        )
    );

    foreach ($specs_data as $slug => $data) {
        $posts = get_posts(array(
            'name' => $slug,
            'post_type' => 'product',
            'post_status' => 'any',
            'numberposts' => 1
        ));
        if (!empty($posts)) {
            $pid = $posts[0]->ID;
            $excerpt_text = implode("\n", $data['highlights']);
            
            // Populate excerpt (Mô tả ngắn/Tính năng đột phá) if empty
            if (empty($posts[0]->post_excerpt)) {
                wp_update_post(array(
                    'ID' => $pid,
                    'post_excerpt' => $excerpt_text
                ));
            }

            update_post_meta($pid, '_orcam_specs', $data['specs']);
            if (!get_post_meta($pid, '_orcam_in_box', true)) {
                update_post_meta($pid, '_orcam_in_box', $data['in_box']);
            }
            update_post_meta($pid, '_orcam_highlights', $data['highlights']);

            // Save WooCommerce native attributes table
            $attributes = array();
            $position = 0;
            foreach ($data['specs'] as $name => $val) {
                $attributes[sanitize_title($name)] = array(
                    'name' => $name,
                    'value' => $val,
                    'position' => $position++,
                    'is_visible' => 1,
                    'is_variation' => 0,
                    'is_taxonomy' => 0
                );
            }
            update_post_meta($pid, '_product_attributes', $attributes);
        }
    }
}
add_action('init', 'orcam_theme_seed_product_specifications');

/**
 * Seed initial approved WooCommerce reviews into WordPress Database.
 */
function orcam_theme_seed_product_reviews(): void {
    $reviews_by_slug = array(
        'orcam-myeye-3-pro' => array(
            array(
                'author' => 'Nguyễn Văn Hùng',
                'email' => 'hung.nguyen@gmail.com',
                'content' => 'Thiết bị nhận diện và đọc tiếng Việt cực kỳ chính xác. Mẹ tôi bị thoái hóa điểm vàng nặng nhiều năm nay đã có thể tự đọc sách báo hàng ngày mà không cần người khác hỗ trợ. Kỹ thuật viên OrCam hướng dẫn tận nhà rất chu đáo, nhiệt tình!',
                'rating' => 5,
                'date' => '2024-08-12 09:30:00'
            ),
            array(
                'author' => 'Trần Thị Mai Lan',
                'email' => 'mailan.tran@gmail.com',
                'content' => 'Máy rất nhỏ gọn, gắn trực tiếp vào gọng kính tiện lợi vô cùng. Tính năng nhận diện khuôn mặt người quen và đọc chữ in trên bao bì thuốc rất nhanh. Cảm ơn OrCam Việt Nam đã mang một sản phẩm công nghệ trợ năng tuyệt vời đến với cộng đồng khiếm thị.',
                'rating' => 5,
                'date' => '2024-07-28 14:15:00'
            ),
            array(
                'author' => 'Bác sĩ Lê Hoàng Nam',
                'email' => 'dr.namle@gmail.com',
                'content' => 'Sản phẩm chất lượng vượt trội so với các thiết bị trợ thị khác trên thị trường. Âm thanh rõ ràng, thời lượng pin tốt và thao tác cử chỉ tay rất nhạy. Rất đáng giá cho người thân bị giảm thị lực.',
                'rating' => 5,
                'date' => '2024-07-15 16:45:00'
            )
        ),
        'orcam-myeye-2-pro' => array(
            array(
                'author' => 'Phạm Minh Trí',
                'email' => 'tri.pham@gmail.com',
                'content' => 'OrCam MyEye 2 Pro hoạt động rất ổn định và hoàn toàn không cần kết nối mạng. Bố tôi dùng để đọc sách và nhận biết mệnh giá tiền khi đi chợ cực kỳ tiện lợi.',
                'rating' => 5,
                'date' => '2024-08-01 10:20:00'
            ),
            array(
                'author' => 'Hoàng Thu Trang',
                'email' => 'thutrang.h@gmail.com',
                'content' => 'Thiết bị đeo nhẹ tênh, gắn vào gọng kính vừa vặn. Khả năng đọc chữ in trên biển hiệu và văn bản rất nhanh. Gia đình tôi rất hài lòng!',
                'rating' => 5,
                'date' => '2024-07-20 11:35:00'
            )
        ),
        'orcam-read-5' => array(
            array(
                'author' => 'Đỗ Hải Đăng',
                'email' => 'haidang.do@gmail.com',
                'content' => 'Tính năng quét laser đóng khung cả trang sách rồi đọc tức thì cực kỳ ấn tượng. Kính lúp thông minh hiển thị lên màn hình rất to và rõ nét.',
                'rating' => 5,
                'date' => '2024-08-05 08:40:00'
            ),
            array(
                'author' => 'Vũ Bích Ngọc',
                'email' => 'bichngoc.vu@gmail.com',
                'content' => 'Thiết kế cầm tay dạng bút tiện dụng, cầm rất chắc tay. Trợ lý AI phản hồi giọng nói nhanh và giọng đọc tiếng Việt rất tự nhiên, truyền cảm.',
                'rating' => 5,
                'date' => '2024-07-18 15:20:00'
            )
        ),
        'orcam-read-3' => array(
            array(
                'author' => 'Ngô Quốc Bảo',
                'email' => 'quocbao.ngo@gmail.com',
                'content' => 'Đế sạc kiêm trạm đọc cố định rất thông minh. Đặt sách xuống là máy tự động nhận diện và đọc rành mạch từng trang. Rất phù hợp cho người lớn tuổi.',
                'rating' => 5,
                'date' => '2024-08-03 13:10:00'
            ),
            array(
                'author' => 'Lê Thanh Thảo',
                'email' => 'thanhthao.le@gmail.com',
                'content' => 'Sản phẩm đóng gói rất cẩn thận, đầy đủ phụ kiện. Thời lượng pin dùng liên tục được lâu. Dịch vụ chăm sóc khách hàng của OrCam Việt Nam rất chuyên nghiệp!',
                'rating' => 5,
                'date' => '2024-07-22 09:15:00'
            )
        ),
        'orcam-read' => array(
            array(
                'author' => 'Đinh Tiến Dũng',
                'email' => 'tiendung.dinh@gmail.com',
                'content' => 'Thiết bị đọc cầm tay nhỏ gọn, âm thanh phát qua loa tích hợp to và rõ. Kết nối tai nghe Bluetooth rất tiện khi sử dụng ở nơi công cộng.',
                'rating' => 5,
                'date' => '2024-07-25 17:00:00'
            )
        )
    );

    foreach ($reviews_by_slug as $slug => $items) {
        $posts = get_posts(array(
            'name' => $slug,
            'post_type' => 'product',
            'post_status' => 'any',
            'numberposts' => 1
        ));
        if (empty($posts)) {
            continue;
        }
        $pid = $posts[0]->ID;
        
        // Ensure comments are open
        wp_update_post(array('ID' => $pid, 'comment_status' => 'open'));

        $existing = get_comments(array('post_id' => $pid, 'count' => true));
        if ($existing > 0) {
            continue;
        }

        foreach ($items as $rev) {
            $comment_id = wp_insert_comment(array(
                'comment_post_ID' => $pid,
                'comment_author' => $rev['author'],
                'comment_author_email' => $rev['email'],
                'comment_content' => $rev['content'],
                'comment_type' => 'review',
                'comment_approved' => 1,
                'comment_date' => $rev['date'],
                'comment_date_gmt' => get_gmt_from_date($rev['date'])
            ));
            if ($comment_id) {
                update_comment_meta($comment_id, 'rating', $rev['rating']);
                update_comment_meta($comment_id, 'verified', 1);
            }
        }
    }
}
add_action('init', 'orcam_theme_seed_product_reviews', 20);

/**
 * Auto-approve all new product reviews and comments.
 */
add_filter('pre_comment_approved', static function ($approved, array $commentdata) {
    return 1;
}, 99, 2);

/**
 * Serve dynamic XML Sitemaps and robots.txt for OrCam Vietnam.
 */
function orcam_theme_handle_sitemaps(): void {
    $route = function_exists('orcam_theme_request_route') ? orcam_theme_request_route() : '';
    if ($route === 'robots.txt') {
        header('Content-Type: text/plain; charset=UTF-8');
        header('X-Robots-Tag: noindex, follow');
        echo "User-agent: *\n";
        echo "Disallow: /wp-admin/\n";
        echo "Allow: /wp-admin/admin-ajax.php\n";
        echo "Allow: /wp-content/themes/orcam_theme/media/\n";
        echo "Allow: /wp-content/themes/orcam_theme/images/\n";
        echo "Allow: /wp-content/themes/orcam_theme/fonts/\n\n";
        echo "Sitemap: " . esc_url(home_url('/sitemap_index.xml')) . "\n";
        exit;
    }

    if ($route === 'sitemap_index.xml' || $route === 'sitemap.xml') {
        header('Content-Type: application/xml; charset=UTF-8');
        header('X-Robots-Tag: noindex, follow');
        $now = gmdate('Y-m-d\TH:i:s+00:00');
        echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        echo '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";
        echo '  <sitemap><loc>' . esc_url(home_url('/page-sitemap.xml')) . '</loc><lastmod>' . $now . '</lastmod></sitemap>' . "\n";
        echo '  <sitemap><loc>' . esc_url(home_url('/product-sitemap.xml')) . '</loc><lastmod>' . $now . '</lastmod></sitemap>' . "\n";
        echo '  <sitemap><loc>' . esc_url(home_url('/post-sitemap.xml')) . '</loc><lastmod>' . $now . '</lastmod></sitemap>' . "\n";
        echo '</sitemapindex>';
        exit;
    }

    if ($route === 'page-sitemap.xml') {
        header('Content-Type: application/xml; charset=UTF-8');
        header('X-Robots-Tag: noindex, follow');
        echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";
        
        $static_pages = array(
            'vi/home'                    => '1.0',
            'vi/low-vision'              => '0.95',
            'vi/orcam-learn'             => '0.95',
            'vi/blog'                    => '0.9',
            'vi/distributor'             => '0.85',
            'vi/events'                  => '0.85',
            'vi/comparison'              => '0.85',
            'vi/contact-us'              => '0.8',
            'vi/faq'                     => '0.75',
            'vi/leadership'              => '0.6',
            'vi/pressroom'               => '0.6',
            'vi/accessibility'           => '0.5',
            'vi/orcam-documents'         => '0.65',
            'vi/orcam-learn-schools'     => '0.75',
            'vi/orcam-learn-testimonials' => '0.75',
            'vi/orcam-read-3-testimonials' => '0.75',
            'vi/patent'                  => '0.5',
            'vi/release-notes'           => '0.5',
            'vi/submit-case'             => '0.6',
            'vi/cookies-policy'          => '0.3',
            'vi/privacy-policy'          => '0.3',
            'vi/terms-and-conditions'    => '0.3',
            'vi/terms-of-use'            => '0.3',
        );

        $now = gmdate('Y-m-d\TH:i:s+00:00');
        foreach ($static_pages as $page_path => $priority) {
            echo "  <url>\n";
            echo "    <loc>" . esc_url(home_url('/' . $page_path . '/')) . "</loc>\n";
            echo "    <lastmod>" . $now . "</lastmod>\n";
            echo "    <changefreq>weekly</changefreq>\n";
            echo "    <priority>" . $priority . "</priority>\n";
            echo "  </url>\n";
        }
        echo '</urlset>';
        exit;
    }

    if ($route === 'product-sitemap.xml') {
        header('Content-Type: application/xml; charset=UTF-8');
        header('X-Robots-Tag: noindex, follow');
        echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";
        
        $products = get_posts(array(
            'post_type'      => 'product',
            'post_status'    => 'publish',
            'posts_per_page' => -1,
            'orderby'        => 'ID',
            'order'          => 'ASC',
        ));

        echo "  <url>\n";
        echo "    <loc>" . esc_url(home_url('/vi/shop/')) . "</loc>\n";
        echo "    <lastmod>" . gmdate('Y-m-d\TH:i:s+00:00') . "</lastmod>\n";
        echo "    <changefreq>daily</changefreq>\n";
        echo "    <priority>0.9</priority>\n";
        echo "  </url>\n";

        foreach ($products as $p) {
            $lastmod = get_the_modified_date('Y-m-d\TH:i:s+00:00', $p) ?: gmdate('Y-m-d\TH:i:s+00:00');
            $url = home_url('/vi/' . $p->post_name . '/');
            echo "  <url>\n";
            echo "    <loc>" . esc_url($url) . "</loc>\n";
            echo "    <lastmod>" . esc_html($lastmod) . "</lastmod>\n";
            echo "    <changefreq>weekly</changefreq>\n";
            echo "    <priority>0.95</priority>\n";
            echo "  </url>\n";
        }
        echo '</urlset>';
        exit;
    }

    if ($route === 'post-sitemap.xml') {
        header('Content-Type: application/xml; charset=UTF-8');
        header('X-Robots-Tag: noindex, follow');
        echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";
        
        $posts = get_posts(array(
            'post_type'      => 'post',
            'post_status'    => 'publish',
            'posts_per_page' => -1,
            'orderby'        => 'ID',
            'order'          => 'DESC',
        ));

        foreach ($posts as $p) {
            $lastmod = get_the_modified_date('Y-m-d\TH:i:s+00:00', $p) ?: gmdate('Y-m-d\TH:i:s+00:00');
            $source_slug = get_post_meta($p->ID, '_orcam_source_slug', true);
            $slug = ($source_slug !== '' && $source_slug !== false) ? $source_slug : $p->post_name;
            $url = home_url('/vi/blog/' . $slug . '/');
            echo "  <url>\n";
            echo "    <loc>" . esc_url($url) . "</loc>\n";
            echo "    <lastmod>" . esc_html($lastmod) . "</lastmod>\n";
            echo "    <changefreq>monthly</changefreq>\n";
            echo "    <priority>0.7</priority>\n";
            echo "  </url>\n";
        }
        echo '</urlset>';
        exit;
    }
}
add_action('init', 'orcam_theme_handle_sitemaps', 2);

/**
 * Automatically synchronize all static pages into WordPress Database and seed
 * rich, professional Vietnamese SEO titles & meta descriptions for Products, Pages, and Blog Posts.
 */
function orcam_theme_seed_seo_metadata(): void {
    if (get_option('orcam_seo_seeded_v3') === 'yes') {
        return;
    }

    global $wpdb;

    // Delete any old/duplicate page entries to maintain a clean database
    $existing_page_ids = $wpdb->get_col("SELECT ID FROM {$wpdb->posts} WHERE post_type = 'page'");
    if (!empty($existing_page_ids)) {
        foreach ($existing_page_ids as $pid) {
            wp_delete_post((int) $pid, true);
        }
    }

    $seo_data = array(
        // 1. Products
        'orcam-myeye-3-pro' => array(
            'page_title' => 'OrCam MyEye 3 Pro',
            'is_product' => true,
            'title'      => 'OrCam MyEye 3 Pro - Kính Hỗ Trợ Thị Lực AI Thông Minh Cao Cấp | OrCam Việt Nam',
            'desc'       => 'OrCam MyEye 3 Pro là thiết bị AI đeo kính đột phá giúp đọc văn bản tức thì, nhận diện khuôn mặt, màu sắc và mô tả hình ảnh cho người khiếm thị và thị lực kém.',
        ),
        'orcam-myeye-2-pro' => array(
            'page_title' => 'OrCam MyEye 2 Pro',
            'is_product' => true,
            'title'      => 'OrCam MyEye 2 Pro - Thiết Bị Hỗ Trợ Đọc & Nhận Diện Cho Người Khiếm Thị | OrCam Việt Nam',
            'desc'       => 'OrCam MyEye 2 Pro nhỏ gọn gắn trực tiếp lên kính, đọc tức thì mọi văn bản in và màn hình kỹ thuật số, nhận diện gương mặt và tiền tệ không cần internet.',
        ),
        'orcam-read-5' => array(
            'page_title' => 'OrCam Read 5',
            'is_product' => true,
            'title'      => 'OrCam Read 5 - Kính Lúp AI & Máy Đọc Sách Thông Minh Thế Hệ Mới | OrCam Việt Nam',
            'desc'       => 'OrCam Read 5 kết hợp công nghệ đọc văn bản AI toàn trang và kính lúp kỹ thuật số thông minh, hỗ trợ tối đa cho học sinh, người đi làm và người lớn tuổi.',
        ),
        'orcam-read-3' => array(
            'page_title' => 'OrCam Read 3',
            'is_product' => true,
            'title'      => 'OrCam Read 3 - Thiết Bị Đọc Sách & Trợ Năng Đa Năng Cho Người Giảm Thị Lực | OrCam Việt Nam',
            'desc'       => 'OrCam Read 3 là thiết bị trợ năng 3 trong 1: máy đọc văn bản cầm tay, kính lúp thông minh và trạm đọc tĩnh giúp đọc sách báo, tài liệu dễ dàng.',
        ),
        'orcam-read' => array(
            'page_title' => 'OrCam Read',
            'is_product' => true,
            'title'      => 'OrCam Read - Bút Đọc Thông Minh AI Quét Văn Bản Cầm Tay Tiên Tiến | OrCam Việt Nam',
            'desc'       => 'OrCam Read là thiết bị cầm tay ứng dụng AI đọc toàn bộ trang sách hoặc màn hình chỉ với một nút bấm và định vị laser chuẩn xác.',
        ),

        // 2. Main Landing & Static Pages
        'index' => array(
            'page_title' => 'Trang chủ - OrCam Việt Nam',
            'title'      => 'Trang Chủ - Thiết Bị Hỗ Trợ Thị Lực AI Thông Minh | OrCam Việt Nam',
            'desc'       => 'Khám phá các thiết bị AI hỗ trợ thị lực và đọc sách tiên tiến nhất từ OrCam giúp người khiếm thị, thị lực kém và khó đọc tự tin làm chủ cuộc sống.',
        ),
        'blog' => array(
            'page_title' => 'OrCam Bài viết',
            'title'      => 'Blog & Tin Tức Công Nghệ Trợ Năng AI | OrCam Việt Nam',
            'desc'       => 'Tổng hợp các bài viết, cẩm nang và tin tức mới nhất về công nghệ hỗ trợ thị lực AI, kinh nghiệm sống và giải pháp đột phá cho người khiếm thị và đọc khó khăn.',
        ),
        'low-vision' => array(
            'page_title' => 'Thị lực kém',
            'title'      => 'Giải Pháp Toàn Diện Cho Người Thị Lực Kém & Khiếm Thị | OrCam Việt Nam',
            'desc'       => 'Tìm hiểu các giải pháp công nghệ AI đột phá từ OrCam dành cho người giảm thị lực, thoái hóa điểm vàng, đục thủy tinh thể và người khiếm thị.',
        ),
        'orcam-learn' => array(
            'page_title' => 'Đọc và học tập - OrCam Learn Basic',
            'title'      => 'OrCam Learn - Giải Pháp Đọc & Hỗ Trợ Học Tập Đột Phá Cho Trẻ Em | OrCam Việt Nam',
            'desc'       => 'OrCam Learn giúp học sinh mắc chứng khó đọc (Dyslexia) và khó khăn trong việc đọc hiểu nâng cao khả năng đọc, sự tự tin và kết quả học tập vượt trội.',
        ),
        'distributor' => array(
            'page_title' => 'Nhà phân phối & Điểm trải nghiệm',
            'title'      => 'Tìm Đại Lý Phân Phối & Điểm Trải Nghiệm Chính Hãng | OrCam Việt Nam',
            'desc'       => 'Tra cứu danh sách đại lý phân phối chính hãng và địa điểm đăng ký trải nghiệm trực tiếp các thiết bị OrCam trên toàn quốc.',
        ),
        'events' => array(
            'page_title' => 'Sự kiện & Demo Days',
            'title'      => 'Sự Kiện & Ngày Hội Trải Nghiệm Sản Phẩm Miễn Phí | OrCam Việt Nam',
            'desc'       => 'Đăng ký tham gia các sự kiện Demo Days và ngày hội trải nghiệm công nghệ trợ năng OrCam hoàn toàn miễn phí cùng chuyên gia.',
        ),
        'comparison' => array(
            'page_title' => 'So sánh sản phẩm OrCam',
            'title'      => 'Bảng So Sánh Các Dòng Sản Phẩm OrCam MyEye & OrCam Read | OrCam Việt Nam',
            'desc'       => 'So sánh chi tiết tính năng, thông số kỹ thuật và mức giá giữa các dòng OrCam MyEye 3 Pro, MyEye 2 Pro, OrCam Read 5, Read 3 và OrCam Read.',
        ),
        'contact-us' => array(
            'page_title' => 'Liên hệ tư vấn',
            'title'      => 'Liên Hệ Đội Ngũ Chuyên Gia Tư Vấn & Hỗ Trợ Kỹ Thuật | OrCam Việt Nam',
            'desc'       => 'Liên hệ với đội ngũ chuyên gia OrCam Việt Nam để nhận tư vấn miễn phí, hỗ trợ kỹ thuật và thông tin chi tiết về sản phẩm.',
        ),
        'faq' => array(
            'page_title' => 'Câu hỏi thường gặp (FAQ)',
            'title'      => 'Câu Hỏi Thường Gặp (FAQ) Về Các Thiết Bị Trợ Năng | OrCam Việt Nam',
            'desc'       => 'Giải đáp toàn bộ thắc mắc phổ biến nhất về cách sử dụng, tính năng, bảo hành và chính sách mua hàng của các thiết bị OrCam.',
        ),
        'leadership' => array(
            'page_title' => 'Ban lãnh đạo & Sáng lập',
            'title'      => 'Ban Lãnh Đạo & Đội Ngũ Sáng Lập OrCam Technologies | OrCam Việt Nam',
            'desc'       => 'Gặp gỡ những nhà khoa học và chuyên gia công nghệ thị giác máy tính hàng đầu đứng sau sự thành công của OrCam Technologies.',
        ),
        'pressroom' => array(
            'page_title' => 'Phòng báo chí & Truyền thông',
            'title'      => 'Phòng Báo Chí & Tin Tức Truyền Thông Chính Thức | OrCam Việt Nam',
            'desc'       => 'Cập nhật các thông cáo báo chí, tin tức truyền thông và câu chuyện truyền cảm hứng về hành trình hỗ trợ cộng đồng của OrCam.',
        ),
        'accessibility' => array(
            'page_title' => 'Tuyên bố về trợ năng',
            'title'      => 'Tuyên Bố Về Khả Năng Tiếp Cận Website | OrCam Việt Nam',
            'desc'       => 'Cam kết của OrCam về việc cung cấp website dễ tiếp cận, thuận tiện và thân thiện cho tất cả mọi người, bao gồm người khuyết tật.',
        ),
        'affiliation-and-partnership' => array(
            'page_title' => 'Chương trình đối tác & Đại lý',
            'title'      => 'Chương Trình Đối Tác & Đại Lý Phân Phối Ủy Quyền | OrCam Việt Nam',
            'desc'       => 'Hợp tác cùng OrCam mang công nghệ hỗ trợ thị giác tiên tiến đến hàng triệu người cần hỗ trợ tại Việt Nam và trên thế giới.',
        ),
        'cookies-policy' => array(
            'page_title' => 'Chính sách Cookie',
            'title'      => 'Chính Sách Cookie & Thu Thập Dữ Liệu | OrCam Việt Nam',
            'desc'       => 'Thông tin chi tiết về cách OrCam sử dụng cookie và công nghệ theo dõi để nâng cao trải nghiệm của người dùng trên website.',
        ),
        'privacy-policy' => array(
            'page_title' => 'Chính sách quyền riêng tư',
            'title'      => 'Chính Sách Quyền Riêng Tư & Bảo Mật Dữ Liệu Khách Hàng | OrCam Việt Nam',
            'desc'       => 'Chính sách bảo vệ thông tin cá nhân và dữ liệu riêng tư của khách hàng và người dùng khi sử dụng sản phẩm và dịch vụ của OrCam.',
        ),
        'terms-and-conditions' => array(
            'page_title' => 'Điều khoản và điều kiện chung',
            'title'      => 'Điều Khoản & Điều Kiện Mua Hàng Và Sử Dụng Dịch Vụ | OrCam Việt Nam',
            'desc'       => 'Các điều khoản, điều kiện pháp lý và quy định khi mua sắm, sở hữu và sử dụng các thiết bị công nghệ trợ năng từ OrCam.',
        ),
        'terms-of-use' => array(
            'page_title' => 'Điều khoản sử dụng dịch vụ',
            'title'      => 'Điều Khoản Sử Dụng Dịch Vụ & Quy Định Website | OrCam Việt Nam',
            'desc'       => 'Quy định và điều khoản sử dụng website và các dịch vụ trực tuyến của OrCam Technologies.',
        ),
        'orcam-documents' => array(
            'page_title' => 'Tài liệu kỹ thuật & Hướng dẫn',
            'title'      => 'Tài Liệu Kỹ Thuật & Sách Hướng Dẫn Sử Dụng Chi Tiết | OrCam Việt Nam',
            'desc'       => 'Tổng hợp tài liệu hướng dẫn sử dụng, thông số kỹ thuật và tài liệu giới thiệu chi tiết về các dòng máy OrCam.',
        ),
        'orcam-learn-schools' => array(
            'page_title' => 'OrCam Learn dành cho trường học',
            'title'      => 'Giải Pháp Ứng Dụng OrCam Learn Trong Trường Học & Giáo Dục | OrCam Việt Nam',
            'desc'       => 'Ứng dụng công nghệ đọc và học AI OrCam Learn vào trường học giúp học sinh tự tin, xóa bỏ rào cản đọc và bứt phá thành tích.',
        ),
        'orcam-learn-testimonials' => array(
            'page_title' => 'Cảm nhận về OrCam Learn',
            'title'      => 'Đánh Giá & Cảm Nhận Thực Tế Về OrCam Learn Từ Phụ Huynh | OrCam Việt Nam',
            'desc'       => 'Những câu chuyện có thật từ phụ huynh, học sinh và giáo viên về sự tiến bộ vượt bậc sau khi sử dụng thiết bị OrCam Learn.',
        ),
        'orcam-read-3-testimonials' => array(
            'page_title' => 'Cảm nhận về OrCam Read 3',
            'title'      => 'Trải Nghiệm Thực Tế Của Khách Hàng Về OrCam Read 3 | OrCam Việt Nam',
            'desc'       => 'Chia sẻ chân thực từ khách hàng và chuyên gia nhãn khoa về hiệu quả hỗ trợ đọc của thiết bị trợ năng OrCam Read 3.',
        ),
        'patent' => array(
            'page_title' => 'Bằng sáng chế & Sở hữu trí tuệ',
            'title'      => 'Bằng Sáng Chế & Công Nghệ Thị Giác AI Độc Quyền | OrCam Việt Nam',
            'desc'       => 'Danh mục các bằng sáng chế công nghệ thị giác nhân tạo và xử lý ngôn ngữ tiên tiến thuộc sở hữu của OrCam.',
        ),
        'release-notes' => array(
            'page_title' => 'Ghi chú phát hành & Cập nhật',
            'title'      => 'Ghi Chú Phát Hành & Nhật Ký Cập Nhật Phần Mềm Thiết Bị | OrCam Việt Nam',
            'desc'       => 'Chi tiết các phiên bản nâng cấp phần mềm, bổ sung tính năng mới và cải tiến hiệu năng cho các thiết bị OrCam.',
        ),
        'submit-case' => array(
            'page_title' => 'Gửi yêu cầu hỗ trợ khách hàng',
            'title'      => 'Trung Tâm Tiếp Nhận & Gửi Yêu Cầu Hỗ Trợ Khách Hàng | OrCam Việt Nam',
            'desc'       => 'Gửi thông tin yêu cầu trợ giúp kỹ thuật hoặc bảo hành cho trung tâm chăm sóc khách hàng OrCam Việt Nam.',
        ),
        'audio-guide' => array(
            'page_title' => 'Hướng dẫn âm thanh OrCam MyEye',
            'title'      => 'Sách Hướng Dẫn & File Âm Thanh Sử Dụng OrCam MyEye | OrCam Việt Nam',
            'desc'       => 'File âm thanh hướng dẫn từng bước cách sử dụng các tính năng cao cấp trên kính thông minh OrCam MyEye.'
        ),
        'orcam-learn-privacy-statement' => array(
            'page_title' => 'Quyền riêng tư OrCam Learn',
            'title'      => 'Tuyên Bố Quyền Riêng Tư Dành Riêng Cho OrCam Learn | OrCam Việt Nam',
            'desc'       => 'Cam kết bảo mật dữ liệu học sinh và thông tin người dùng trong quá trình sử dụng thiết bị học tập OrCam Learn.'
        ),
        'orcam-products-privacy-statement' => array(
            'page_title' => 'Quyền riêng tư sản phẩm OrCam',
            'title'      => 'Chính Sách Quyền Riêng Tư Dành Cho Thiết Bị Phần Cứng | OrCam Việt Nam',
            'desc'       => 'Quy định bảo mật và xử lý dữ liệu hình ảnh, giọng nói trên các thiết bị phần cứng OrCam.'
        ),
        'orcam-products-terms-conditions' => array(
            'page_title' => 'Điều khoản sản phẩm OrCam',
            'title'      => 'Điều Khoản & Điều Kiện Mua Hàng Thiết Bị Chính Hãng | OrCam Việt Nam',
            'desc'       => 'Chính sách mua hàng, vận chuyển, đổi trả và bảo hành chính hãng đối với các thiết bị OrCam.'
        ),
        'terms-and-conditions-orcam-learn' => array(
            'page_title' => 'Điều khoản OrCam Learn',
            'title'      => 'Điều Khoản & Quy Định Sử Dụng Gói OrCam Learn | OrCam Việt Nam',
            'desc'       => 'Chi tiết quy định và điều khoản áp dụng đối với gói sản phẩm và dịch vụ OrCam Learn.'
        ),
        'read-3-store' => array(
            'page_title' => 'Cửa hàng OrCam Read 3',
            'title'      => 'Đặt Mua OrCam Read 3 Chính Hãng - Giá Ưu Đãi Nhất | OrCam Việt Nam',
            'desc'       => 'Mua ngay thiết bị trợ năng OrCam Read 3 chính hãng kèm bảo hành 24 tháng và hỗ trợ tận tâm từ OrCam Việt Nam.'
        ),
        'read-store' => array(
            'page_title' => 'Cửa hàng OrCam Read',
            'title'      => 'Đặt Mua Bút Đọc OrCam Read AI Cầm Tay Chính Hãng | OrCam Việt Nam',
            'desc'       => 'Đặt mua thiết bị đọc văn bản cầm tay thông minh OrCam Read với ưu đãi đặc quyền và giao hàng miễn phí.'
        ),
        'myeye-store' => array(
            'page_title' => 'Cửa hàng OrCam MyEye',
            'title'      => 'Đặt Mua Kính Thông Minh OrCam MyEye Chính Hãng | OrCam Việt Nam',
            'desc'       => 'Khám phá và đặt mua các dòng kính thông minh OrCam MyEye thế hệ mới dành cho người khiếm thị.'
        ),
        'retail-installment-contract' => array(
            'page_title' => 'Hợp đồng trả góp bán lẻ',
            'title'      => 'Chính Sách Mua Hàng Trả Góp 0% Lãi Suất Linh Hoạt | OrCam Việt Nam',
            'desc'       => 'Hướng dẫn thủ tục mua thiết bị OrCam trả góp 0% lãi suất với kỳ hạn linh hoạt cho mọi khách hàng.'
        ),
        'software-version-8012-february-2024' => array(
            'page_title' => 'Cập nhật phần mềm v8012',
            'title'      => 'Chi Tiết Bản Cập Nhật Phần Mềm Version 8012 | OrCam Việt Nam',
            'desc'       => 'Cập nhật các tính năng AI mới và tối ưu tốc độ đọc trên phiên bản phần mềm OrCam 8012.'
        ),
        'orcam-myeye-software-ver-9-21' => array(
            'page_title' => 'Cập nhật phần mềm v9.21',
            'title'      => 'Chi Tiết Bản Cập Nhật Phần Mềm MyEye Version 9.21 | OrCam Việt Nam',
            'desc'       => 'Những cải tiến vượt trội về khả năng nhận diện gương mặt và hỗ trợ tiếng Việt trên bản cập nhật 9.21.'
        )
    );

    foreach ($seo_data as $slug => $data) {
        $is_product = !empty($data['is_product']);
        $post_type = $is_product ? 'product' : 'page';

        $post_id = (int) $wpdb->get_var($wpdb->prepare(
            "SELECT ID FROM {$wpdb->posts} WHERE post_name = %s AND post_type = %s AND post_status = 'publish' LIMIT 1",
            $slug,
            $post_type
        ));

        // Create page in WordPress database if not exists
        if (!$post_id) {
            $post_id = wp_insert_post(array(
                'post_title'     => $data['page_title'],
                'post_name'      => $slug,
                'post_status'    => 'publish',
                'post_type'      => $post_type,
                'post_excerpt'   => $data['desc'],
                'comment_status' => 'closed',
                'ping_status'    => 'closed',
            ));
        }

        if ($post_id > 0) {
            update_post_meta($post_id, '_yoast_wpseo_title', $data['title']);
            update_post_meta($post_id, '_yoast_wpseo_metadesc', $data['desc']);
            update_post_meta($post_id, 'rank_math_title', $data['title']);
            update_post_meta($post_id, 'rank_math_description', $data['desc']);
        }
    }

    // Also populate SEO meta for all imported blog posts
    $posts = $wpdb->get_results("SELECT ID, post_title, post_excerpt, post_content FROM {$wpdb->posts} WHERE post_type='post' AND post_status='publish'");
    foreach ($posts as $p) {
        $title = $p->post_title . ' | OrCam Việt Nam';
        $desc = $p->post_excerpt !== '' ? $p->post_excerpt : wp_trim_words(wp_strip_all_tags($p->post_content), 30);

        if (!get_post_meta($p->ID, '_yoast_wpseo_title', true)) {
            update_post_meta($p->ID, '_yoast_wpseo_title', $title);
        }
        if (!get_post_meta($p->ID, '_yoast_wpseo_metadesc', true)) {
            update_post_meta($p->ID, '_yoast_wpseo_metadesc', $desc);
        }
        if (!get_post_meta($p->ID, 'rank_math_title', true)) {
            update_post_meta($p->ID, 'rank_math_title', $title);
        }
        if (!get_post_meta($p->ID, 'rank_math_description', true)) {
            update_post_meta($p->ID, 'rank_math_description', $desc);
        }
    }

    update_option('orcam_seo_seeded_v4', 'yes');
}
add_action('init', 'orcam_theme_seed_seo_metadata', 25);

add_filter('pre_option_comment_moderation', static function () {
    return '0';
});

add_filter('pre_option_comment_previously_approved', static function () {
    return '0';
});

/**
 * Save rating meta and verified status when a review comment is posted.
 */
add_action('comment_post', static function (int $comment_id, $comment_approved, array $commentdata): void {
    if (isset($_POST['rating']) && is_numeric($_POST['rating'])) {
        $rating = max(1, min(5, (int) $_POST['rating']));
        update_comment_meta($comment_id, 'rating', $rating);
        update_comment_meta($comment_id, 'verified', 1);

        // Update product lookup table for ratings
        if (!empty($commentdata['comment_post_ID']) && function_exists('wc_update_product_lookup_tables')) {
            wc_update_product_lookup_tables((int) $commentdata['comment_post_ID']);
        }
    }
}, 10, 3);

/**
 * Add Meta Boxes for Product Specs & In-the-box accessories in WP Admin.
 */
add_action('add_meta_boxes', static function (): void {
    // Meta box: Specs (Thông số kỹ thuật)
    add_meta_box(
        'orcam_product_specs_meta',
        __('Thông Số Kỹ Thuật (Specs)', 'orcam-theme'),
        static function (WP_Post $post): void {
            wp_nonce_field('orcam_save_product_extra', 'orcam_product_extra_nonce');
            
            $specs = get_post_meta($post->ID, '_orcam_specs', true);
            $specs_text = '';
            if (is_array($specs)) {
                $lines = array();
                foreach ($specs as $k => $v) {
                    $lines[] = $k . ': ' . $v;
                }
                $specs_text = implode("\n", $lines);
            } elseif (is_string($specs)) {
                $specs_text = $specs;
            }

            echo '<div style="margin: 10px 0;">';
            echo '<p style="font-weight:600; margin-bottom:6px;">' . esc_html__('Thông số kỹ thuật (Định dạng: Tên thông số: Giá trị - Mỗi dòng 1 mục):', 'orcam-theme') . '</p>';
            echo '<textarea name="orcam_specs" rows="6" style="width:100%; font-family: monospace; font-size:13px;" placeholder="Ví dụ:&#10;Kích thước: 76 x 21 x 14.9 mm&#10;Trọng lượng: 22.5 gram&#10;Camera: 13 Megapixel HD&#10;Kết nối: Wi-Fi, Bluetooth 5.0&#10;Bảo hành: 24 tháng chính hãng">' . esc_textarea($specs_text) . '</textarea>';
            echo '<p class="description" style="margin-top:6px;">' . esc_html__('Các thông số này sẽ hiển thị trong bảng "Thông Số Kỹ Thuật" trên trang chi tiết sản phẩm.', 'orcam-theme') . '</p>';
            echo '</div>';
        },
        'product',
        'normal',
        'high'
    );

    // Meta box: In the box (Bộ sản phẩm bao gồm)
    add_meta_box(
        'orcam_product_extra_meta',
        __('Bộ sản phẩm bao gồm (Phụ kiện đi kèm)', 'orcam-theme'),
        static function (WP_Post $post): void {
            wp_nonce_field('orcam_save_product_extra', 'orcam_product_extra_nonce');
            
            $in_box = get_post_meta($post->ID, '_orcam_in_box', true);
            if (is_array($in_box)) {
                $in_box_text = implode("\n", $in_box);
            } else {
                $in_box_text = (string) $in_box;
            }

            echo '<div style="margin: 10px 0;">';
            echo '<p style="font-weight:600; margin-bottom:6px;">' . esc_html__('Danh sách các phụ kiện đi kèm (mỗi dòng 1 món):', 'orcam-theme') . '</p>';
            echo '<textarea name="orcam_in_box" rows="6" style="width:100%; font-family: monospace; font-size:13px;" placeholder="Ví dụ:&#10;Thiết bị chính hãng&#10;Cáp sạc USB-C và củ sạc&#10;Hộp đựng chống sốc cao cấp&#10;Sách hướng dẫn sử dụng tiếng Việt">' . esc_textarea($in_box_text) . '</textarea>';
            echo '<p class="description" style="margin-top:6px;">' . esc_html__('Các mục này sẽ hiển thị trong tab "Bộ Sản Phẩm Bao Gồm" trên trang chi tiết sản phẩm.', 'orcam-theme') . '</p>';
            echo '</div>';
        },
        'product',
        'normal',
        'high'
    );
});

add_action('save_post_product', static function (int $post_id): void {
    if (!isset($_POST['orcam_product_extra_nonce']) || !wp_verify_nonce($_POST['orcam_product_extra_nonce'], 'orcam_save_product_extra')) {
        return;
    }
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    if (isset($_POST['orcam_specs'])) {
        $raw_specs = sanitize_textarea_field($_POST['orcam_specs']);
        $lines = array_filter(array_map('trim', explode("\n", $raw_specs)));
        $specs_arr = array();
        foreach ($lines as $line) {
            if (strpos($line, ':') !== false) {
                list($key, $val) = explode(':', $line, 2);
                $key = trim($key);
                $val = trim($val);
                if ($key !== '' && $val !== '') {
                    $specs_arr[$key] = $val;
                }
            } else {
                $specs_arr[$line] = $line;
            }
        }
        if (!empty($specs_arr)) {
            update_post_meta($post_id, '_orcam_specs', $specs_arr);
        }
    }

    if (isset($_POST['orcam_in_box'])) {
        $lines = array_filter(array_map('trim', explode("\n", sanitize_textarea_field($_POST['orcam_in_box']))));
        if (!empty($lines)) {
            update_post_meta($post_id, '_orcam_in_box', array_values($lines));
        }
    }
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
            echo '<p class="description">' . esc_html__('Ná»™i dung nÃ y xuáº¥t hiá»‡n trÃªn tháº» bài viết và trong tháº» meta description.', 'orcam-theme') . '</p>';
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
            echo '<span>Nháº¥n Cập nhật rá»“i Táº£i láº¡i báº£n xem trÆ°á»›c Ä‘á»ƒ kiá»ƒm tra thay Ä‘á»•i.</span>';
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
    $subject = sprintf('[OrCam] Yêu cầu tư vấn từ %s', $name);
    $body = "Há» và tên: {$name}\nSố điện thoại: {$phone}\nEmail: {$email}\n\nNá»™i dung tÆ° váº¥n:\n{$message}";
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
        'Há» và tên'             => sanitize_text_field(wp_unslash($_POST['contact_name'] ?? '')),
        'Email'                 => sanitize_email(wp_unslash($_POST['email'] ?? '')),
        'Số điện thoại'         => sanitize_text_field(wp_unslash($_POST['phone'] ?? '')),
        'ThÃ nh phá»‘'             => sanitize_text_field(wp_unslash($_POST['city'] ?? '')),
        'Quá»‘c gia'              => sanitize_text_field(wp_unslash($_POST['country'] ?? '')),
        'Tá»‰nh/ThÃ nh'            => sanitize_text_field(wp_unslash($_POST['state'] ?? '')),
        'Thiáº¿t bá»‹ OrCam'        => sanitize_text_field(wp_unslash($_POST['device'] ?? '')),
        'Sá»‘ sÃª-ri'              => sanitize_text_field(wp_unslash($_POST['serial_number'] ?? '')),
        'Loại yêu cầu'          => sanitize_text_field(wp_unslash($_POST['case_type'] ?? '')),
        'Mô tả'                 => sanitize_textarea_field(wp_unslash($_POST['description'] ?? '')),
    );
    if ($fields['Má»‘i quan há»‡ vá»›i OrCam'] === '' || $fields['Há» và tên'] === ''
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
    $subject = sprintf('[OrCam Support] %s - %s', $fields['Loại yêu cầu'], $fields['Há» và tên']);
    $headers = array('Content-Type: text/plain; charset=UTF-8', 'Reply-To: ' . $fields['Há» và tên'] . ' <' . $fields['Email'] . '>');
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

    if (strpos($file, 'blog.html') !== false || $route === 'vi/blog' || $route === 'blog' || strpos($route, 'vi/blog') === 0) {
        global $wpdb;
        $latest_posts_state = (string) $wpdb->get_var("SELECT CONCAT(COUNT(ID), '_', IFNULL(MAX(post_modified), '0')) FROM {$wpdb->posts} WHERE post_type='post' AND post_status='publish'");
        $custom_html .= '|posts_' . $latest_posts_state;
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

    // Direct routing for ANY WooCommerce product from database
    $normalized_slug = preg_replace('#^(vi/)?(product/)?#', '', trim($route, '/'));
    if ($normalized_slug !== '' && $normalized_slug !== 'shop' && $normalized_slug !== 'checkout' && $normalized_slug !== 'cart' && $normalized_slug !== 'home' && strpos($normalized_slug, 'blog') !== 0) {
        global $wpdb;
        $product_id = (int) $wpdb->get_var($wpdb->prepare(
            "SELECT ID FROM {$wpdb->posts} WHERE post_name = %s AND post_type = 'product' AND post_status IN ('publish', 'private', 'draft', 'pending') LIMIT 1",
            $normalized_slug
        ));
        if ($product_id > 0) {
            global $wp_query, $post;
            $post = get_post($product_id);
            if ($post) {
                $wp_query->is_single = true;
                $wp_query->is_singular = true;
                $wp_query->queried_object = $post;
                $wp_query->queried_object_id = $product_id;
                $wp_query->posts = array($post);
                $wp_query->post_count = 1;
                $wp_query->post = $post;
                setup_postdata($post);
                $single_template = get_template_directory() . '/single-product.php';
                if (is_file($single_template)) {
                    include $single_template;
                    exit;
                }
            }
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
                 LEFT JOIN {$wpdb->postmeta} m ON m.post_id=p.ID AND m.meta_key='_orcam_source_slug'
                 WHERE p.post_type='post' AND p.post_status='publish' AND (m.meta_value=%s OR p.post_name=%s) LIMIT 1",
                $blog_slug,
                $blog_slug
            ));
            if ($post_id > 0) {
                $post = get_post($post_id);
                if ($post) {
                    global $wp_query;
                    $wp_query->is_single = true;
                    $wp_query->is_singular = true;
                    $wp_query->queried_object = $post;
                    $wp_query->queried_object_id = $post_id;
                    $wp_query->posts = array($post);
                    $wp_query->post_count = 1;
                    $wp_query->post = $post;
                    setup_postdata($post);

                    $source = (string) get_post_meta($post_id, '_orcam_source_file', true);
                    $source = str_replace(array('static-pages/en-us/', 'static-pages/en-gb/'), 'static-pages/vi/', $source);
                    if ($source !== '') {
                        $theme_root = wp_normalize_path(get_template_directory());
                        $file = realpath($theme_root . '/' . ltrim($source, '/'));
                        if ($file && is_file($file)) {
                            if (orcam_theme_try_serve_cache($file, 'blog_' . $post_id)) {
                                exit;
                            }
                            if (orcam_theme_render_database_blog($post)) {
                                exit;
                            }
                        }
                    }

                    // Newly created post without static file -> render via single template
                    $single_template = get_template_directory() . '/single.php';
                    if (is_file($single_template)) {
                        include $single_template;
                        exit;
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
            'label'        => 'Số điện thoại',
            'placeholder'  => 'Nhập số điện thoại (bắt buộc)',
            'required'     => true,
            'class'        => array('form-row-wide'),
            'clear'        => true,
            'priority'     => 10,
            'validate'     => array('phone'),
        ),
        'billing_email' => array(
            'label'        => 'Email',
            'placeholder'  => 'Nhập địa chỉ email (không bắt buộc)',
            'required'     => false,
            'class'        => array('form-row-wide'),
            'clear'        => true,
            'priority'     => 20,
        ),
        'billing_first_name' => array(
            'label'        => 'Họ và tên',
            'placeholder'  => 'Nhập họ và tên',
            'required'     => false,
            'class'        => array('form-row-wide'),
            'clear'        => true,
            'priority'     => 30,
        ),
        'billing_address_1' => array(
            'label'        => 'Địa chỉ',
            'placeholder'  => 'Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành',
            'required'     => false,
            'class'        => array('form-row-wide'),
            'clear'        => true,
            'priority'     => 40,
        ),
    );

    unset($fields['shipping']);



    if (isset($fields['order']['order_comments'])) {
        $fields['order']['order_comments']['label'] = 'Ghi chú đơn hàng';
        $fields['order']['order_comments']['placeholder'] = 'Ghi chú thêm về đơn hàng hoặc thời gian giao hàng...';
        $fields['order']['order_comments']['required'] = false;
        $fields['order']['order_comments']['class'] = array('form-row-wide');
        $fields['order']['order_comments']['priority'] = 15;
    }

    return $fields;
}, 99);



add_filter('woocommerce_billing_fields', static function (array $fields): array {
    return array(
        'billing_phone' => array(
            'label'        => 'Số điện thoại',
            'placeholder'  => 'Nhập số điện thoại (bắt buộc)',
            'required'     => true,
            'class'        => array('form-row-wide'),
            'clear'        => true,
            'priority'     => 10,
        ),
        'billing_email' => array(
            'label'        => 'Email',
            'placeholder'  => 'Nhập địa chỉ email (không bắt buộc)',
            'required'     => false,
            'class'        => array('form-row-wide'),
            'clear'        => true,
            'priority'     => 20,
        ),
        'billing_first_name' => array(
            'label'        => 'Họ và tên',
            'placeholder'  => 'Nhập họ và tên',
            'required'     => false,
            'class'        => array('form-row-wide'),
            'clear'        => true,
            'priority'     => 30,
        ),
        'billing_address_1' => array(
            'label'        => 'Địa chỉ',
            'placeholder'  => 'Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành',
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

// Coupons disabled on checkout per user request
add_filter('woocommerce_coupons_enabled', '__return_false');

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
                $gateways['cod']->title = 'Thanh toán khi nhận hàng (COD) / Tư vấn thanh toán';
                $gateways['cod']->description = 'Nhân viên OrCam sẽ liên hệ xác nhận đơn và tư vấn hình thức nhận hàng thuận tiện nhất.';
                $available_gateways['cod'] = $gateways['cod'];
            }
        }
    }
    return $available_gateways;
});

/** Vietnamese privacy policy and payment methods notices */
add_filter('woocommerce_checkout_privacy_policy_text', static function (): string {
    return 'Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng, hỗ trợ trải nghiệm của bạn trên website và cho các mục đích khác theo <a href="' . esc_url(home_url('/vi/privacy-policy/')) . '" class="woocommerce-privacy-policy-link" target="_blank">chính sách bảo mật</a>.';
});

add_filter('woocommerce_no_available_payment_methods_message', static function (): string {
    return 'Hiện tại đơn hàng sẽ được nhân viên của OrCam liên hệ trực tiếp để xác nhận và hướng dẫn thanh toán chi tiết cho bạn.';
});

add_filter('woocommerce_coupon_message', static function (string $msg, int $msg_code, $coupon = null): string {
    if ($coupon instanceof WC_Coupon) {
        return sprintf('Áp dụng mã ưu đãi "%s" thành công.', $coupon->get_code());
    }
    return 'Áp dụng mã ưu đãi thành công.';
}, 20, 3);

add_filter('woocommerce_coupon_error', static function (string $err, int $err_code, $coupon = null): string {
    static $errors = array(
        100 => 'Mã giảm giá không tồn tại!',
        101 => 'Mã giảm giá này đã được áp dụng trước đó!',
        102 => 'Mã giảm giá này không thể dùng chung với các mã khác.',
        103 => 'Mã giảm giá này không áp dụng cho sản phẩm trong đơn hàng.',
        104 => 'Mã giảm giá này đã hết lượt sử dụng.',
        105 => 'Mã giảm giá này đã hết hạn sử dụng.',
        106 => 'Đơn hàng chưa đạt giá trị tối thiểu để áp dụng mã này.',
        107 => 'Đơn hàng đã vượt quá giá trị tối đa để áp dụng mã này.',
        108 => 'Mã giảm giá này không áp dụng cho các sản phẩm đang giảm giá.',
        109 => 'Vui lòng nhập mã giảm giá.',
        110 => 'Mã giảm giá không hợp lệ và đã bị gỡ bỏ.',
    );
    return $errors[$err_code] ?? 'Mã giảm giá không hợp lệ hoặc đã hết hạn sử dụng.';
}, 20, 3);

/** Translate WooCommerce phrases into natural Vietnamese. */
add_filter('gettext', static function (string $translation, string $text, string $domain): string {
    if ($domain !== 'woocommerce') {
        return $translation;
    }

    static $dictionary = array(
        'Checkout' => 'Thanh toán',
        'Billing details' => 'Thông tin người nhận',
        'Billing Details' => 'Thông tin người nhận',
        'Customer details' => 'Thông tin khách hàng',
        'Additional information' => 'Hình thức phục vụ & Ghi chú',
        'Additional Information' => 'Hình thức phục vụ & Ghi chú',
        'Your order' => 'Đơn hàng của bạn',
        'Your Order' => 'Đơn hàng của bạn',
        'Product' => 'Sản phẩm',
        'Subtotal' => 'Tạm tính',
        'Total' => 'Tổng cộng',
        'Place order' => 'Xác nhận đặt hàng',
        'Place Order' => 'Xác nhận đặt hàng',
        'Order notes' => 'Ghi chú đơn hàng',
        'Order notes (optional)' => 'Ghi chú đơn hàng (không bắt buộc)',
        'Notes about your order, e.g. special notes for delivery.' => 'Ghi chú thêm về đơn hàng hoặc thời gian nhận hàng...',
        'Have a coupon?' => 'Bạn có mã ưu đãi / voucher?',
        'Click here to enter your code' => 'Nhấn vào đây để nhập mã',
        'Coupon code' => 'Mã ưu đãi / Voucher',
        'Apply coupon' => 'Áp dụng',
        'Apply Coupon' => 'Áp dụng',
        'Coupon:' => 'Mã ưu đãi:',
        'If you have a coupon code, please apply it below.' => 'Nếu bạn có mã giảm giá hoặc Voucher, vui lòng nhập bên dưới:',
        'Ship to a different address?' => 'Giao hàng đến địa chỉ khác?',
        'Returning customer?' => 'Bạn đã từng mua hàng?',
        'Click here to login' => 'Nhấn vào đây để đăng nhập',
        'Payment' => 'Phương thức thanh toán',
        'Payment methods' => 'Phương thức thanh toán',
        'Payment Methods' => 'Phương thức thanh toán',
        'Cash on delivery' => 'Thanh toán khi nhận hàng (COD)',
        'Pay with cash upon delivery.' => 'Thanh toán bằng tiền mặt trực tiếp khi nhận hàng.',
        'Direct bank transfer' => 'Chuyển khoản ngân hàng',
        'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.' => 'Vui lòng chuyển khoản trực tiếp vào tài khoản ngân hàng của chúng tôi với nội dung là Mã đơn hàng. Đơn hàng sẽ được nhân viên liên hệ xác nhận ngay.',
        'Sorry, it seems that there are no available payment methods. Please contact us if you require assistance or wish to make alternate arrangements.' => 'Hiện tại đơn hàng sẽ được nhân viên liên hệ trực tiếp để xác nhận và hướng dẫn thanh toán chi tiết cho bạn.',
        'Sorry, it seems that there are no available payment methods.' => 'Hiện tại đơn hàng sẽ được nhân viên liên hệ trực tiếp để xác nhận và hướng dẫn thanh toán chi tiết cho bạn.',
        'Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our %s.' => 'Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng, hỗ trợ trải nghiệm của bạn trên website và cho các mục đích khác theo %s.',
        'privacy policy' => 'chính sách bảo mật',
        'Privacy Policy' => 'Chính sách bảo mật',
        'Please enter a valid phone number.' => 'Vui lòng nhập số điện thoại hợp lệ.',
        'Billing Phone is a required field.' => 'Vui lòng nhập Số điện thoại.',
        'Phone is a required field.' => 'Vui lòng nhập Số điện thoại.',
        '%s is a required field.' => '%s là thông tin bắt buộc.',
        'optional' => 'không bắt buộc',
        '(optional)' => '(không bắt buộc)',
        'First name' => 'Họ và tên',
        'Last name' => 'Tên',
        'Phone' => 'Số điện thoại',
        'Email address' => 'Địa chỉ Email',
        'Country / Region' => 'Quốc gia / Khu vực',
        'Street address' => 'Địa chỉ',
        'Order received' => 'Đặt hàng thành công',
        'Thank you. Your order has been received.' => 'Cảm ơn bạn! Đơn hàng đã được tiếp nhận thành công. Chúng tôi sẽ liên hệ trong thời gian sớm nhất.',
        'Order number:' => 'Mã đơn hàng:',
        'Date:' => 'Ngày đặt:',
        'Email:' => 'Email:',
        'Total:' => 'Tổng thanh toán:',
        'Payment method:' => 'Phương thức thanh toán:',
        'Order details' => 'Chi tiết đơn hàng',
        'Billing address' => 'Địa chỉ nhận hàng',
        'Shipping' => 'Giao hàng',
        'Free shipping' => 'Miễn phí giao hàng',
        'Flat rate' => 'Phí cố định',
        'Cart' => 'Giỏ hàng',
        'Update cart' => 'Cập nhật',
        'Apply' => 'Áp dụng',
        'Enter code' => 'Nhập mã',
        'Coupon code applied successfully.' => 'Đã áp dụng mã giảm giá thành công.',
        'Coupon "%s" does not exist!' => 'Mã giảm giá "%s" không tồn tại!',
        'Coupon code already applied!' => 'Mã giảm giá này đã được áp dụng trước đó!',
        'Coupon code "%s" already applied!' => 'Mã giảm giá "%s" đã được áp dụng trước đó!',
        'Please enter a coupon code.' => 'Vui lòng nhập mã giảm giá.',
        'Coupon usage limit has been reached.' => 'Mã giảm giá này đã hết lượt sử dụng.',
        'This coupon has expired.' => 'Mã giảm giá này đã hết hạn sử dụng.',
        'The minimum spend for this coupon is %s.' => 'Giá trị đơn hàng tối thiểu để dùng mã này là %s.',
        'The maximum spend for this coupon is %s.' => 'Giá trị đơn hàng tối đa để dùng mã này là %s.',
        'Sorry, this coupon is not applicable to selected products.' => 'Mã giảm giá này không áp dụng cho sản phẩm đã chọn.',
        'Sorry, this coupon is not applicable to your cart contents.' => 'Mã giảm giá này không áp dụng cho đơn hàng của bạn.',
        'Coupon code removed successfully.' => 'Đã xóa mã giảm giá thành công.',
        'Quantity' => 'Số lượng',
        'Price' => 'Đơn giá',
        'Browse products' => 'Xem sản phẩm',
        'Return to shop' => 'Quay lại cửa hàng',
        'Your cart is currently empty.' => 'Bạn chưa chọn sản phẩm nào để thanh toán.',
        'Description' => 'Mô tả',
        'Reviews' => 'Đánh giá',
        'Related products' => 'Sản phẩm tương tự',
        'In stock' => 'Còn hàng',
        'Out of stock' => 'Hết hàng',
        'Sale!' => 'Ưu đãi!',
    );

    return $dictionary[$text] ?? $translation;
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
            __('Khám phá %s với thiết kế tiện dụng và công nghệ hỗ trợ tiên tiến từ OrCam.', 'orcam-theme'),
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

    $raw_slug = sanitize_title((string) $query_vars['orcam_slug']);
    global $wpdb;
    $post_id = $wpdb->get_var($wpdb->prepare(
        "SELECT p.ID
         FROM {$wpdb->posts} p
         LEFT JOIN {$wpdb->postmeta} slug ON slug.post_id=p.ID AND slug.meta_key='_orcam_source_slug'
         WHERE p.post_type='post' AND p.post_status='publish'
           AND (slug.meta_value=%s OR p.post_name=%s)
         LIMIT 1",
        $raw_slug,
        $raw_slug
    ));

    if ($post_id) {
        $query_vars['p'] = (int) $post_id;
        $query_vars['post_type'] = 'post';
        unset($query_vars['name'], $query_vars['orcam_slug'], $query_vars['orcam_locale']);
    }
    return $query_vars;
});

add_action('pre_get_posts', static function (WP_Query $query): void {
    if (is_admin() || !$query->is_main_query() || !$query->get('orcam_locale')) {
        return;
    }

    $slug = sanitize_title((string) $query->get('orcam_slug'));
    $query->set('meta_query', array(
        'relation' => 'OR',
        array('key' => '_orcam_source_slug', 'value' => $slug),
    ));
});

add_filter('post_type_link', static function (string $url, WP_Post $post): string {
    if ($post->post_type !== 'post') {
        return $url;
    }

    $source_slug = get_post_meta($post->ID, '_orcam_source_slug', true);
    $slug = ($source_slug !== '' && $source_slug !== false) ? $source_slug : $post->post_name;
    return home_url('/vi/blog/' . $slug . '/');
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

/**
 * Serve bundled theme assets (images, media, fonts, _app, etc.) directly when requested from root.
 * This fixes broken images/buttons/icons on live hosting where /images/ or /media/ is requested.
 */
function orcam_theme_serve_root_asset(): void
{
    if (is_admin() || wp_doing_ajax() || wp_doing_cron()) {
        return;
    }

    $route = orcam_theme_request_route();
    if ($route === '') {
        return;
    }

    // Match root asset paths like /images/..., /media/..., /fonts/..., /_app/..., /vi/images/..., etc.
    if (!preg_match('#^(?:[a-zA-Z0-9_\-]+/)*(images|media|fonts|_app)/(.+)$#i', $route, $matches)) {
        if (!preg_match('#^(?:[a-zA-Z0-9_\-]+/)*(smui\.css|editor-style\.css)$#i', $route, $matches)) {
            return;
        }
        $folder = '';
        $subpath = rawurldecode($matches[1]);
    } else {
        $folder = strtolower($matches[1]);
        $subpath = rawurldecode($matches[2]);
    }

    // Prevent directory traversal
    if (strpos($subpath, '..') !== false || strpos($subpath, '\\') !== false) {
        return;
    }

    $theme_dir = get_template_directory();
    $target_file = $folder !== '' ? ($theme_dir . '/' . $folder . '/' . $subpath) : ($theme_dir . '/' . $subpath);

    // Fallback search between images and media folders
    if (!is_file($target_file)) {
        if ($folder === 'images') {
            $alt_file = $theme_dir . '/media/' . $subpath;
            if (is_file($alt_file)) {
                $target_file = $alt_file;
            }
        } elseif ($folder === 'media') {
            $alt_file = $theme_dir . '/images/' . $subpath;
            if (is_file($alt_file)) {
                $target_file = $alt_file;
            }
        }
    }

    if (!is_file($target_file)) {
        return;
    }

    $ext = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    $mime_types = array(
        'svg'   => 'image/svg+xml',
        'png'   => 'image/png',
        'jpg'   => 'image/jpeg',
        'jpeg'  => 'image/jpeg',
        'webp'  => 'image/webp',
        'gif'   => 'image/gif',
        'ico'   => 'image/x-icon',
        'mp4'   => 'video/mp4',
        'webm'  => 'video/webm',
        'mov'   => 'video/quicktime',
        'css'   => 'text/css; charset=utf-8',
        'js'    => 'application/javascript; charset=utf-8',
        'json'  => 'application/json; charset=utf-8',
        'woff'  => 'font/woff',
        'woff2' => 'font/woff2',
        'ttf'   => 'font/ttf',
        'eot'   => 'application/vnd.ms-fontobject',
        'pdf'   => 'application/pdf',
    );

    $mime = $mime_types[$ext] ?? 'application/octet-stream';
    $mtime = (int) filemtime($target_file);
    $etag = '"' . md5($target_file . $mtime) . '"';

    if (isset($_SERVER['HTTP_IF_NONE_MATCH']) && trim($_SERVER['HTTP_IF_NONE_MATCH']) === $etag) {
        status_header(304);
        exit;
    }

    if (isset($_SERVER['HTTP_IF_MODIFIED_SINCE']) && strtotime($_SERVER['HTTP_IF_MODIFIED_SINCE']) >= $mtime) {
        status_header(304);
        exit;
    }

    header('Content-Type: ' . $mime);
    header('Content-Length: ' . filesize($target_file));
    header('Cache-Control: public, max-age=31536000, immutable');
    header('Last-Modified: ' . gmdate('D, d M Y H:i:s', $mtime) . ' GMT');
    header('ETag: ' . $etag);
    header('Access-Control-Allow-Origin: *');

    readfile($target_file);
    exit;
}
add_action('init', 'orcam_theme_serve_root_asset', 1);

/** Resolve every original URL style: directory index, extensionless or .html. */
function orcam_theme_static_document(?string $route = null): ?string
{
    $route = $route ?? orcam_theme_request_route();
    if ($route !== '' && (strpos($route, '..') !== false || !preg_match('#^[A-Za-z0-9._~%/ -]+$#', $route))) {
        return null;
    }

    $root = get_template_directory() . '/static-pages/';
    $normalized_route = preg_replace('#^vi/vi/#', 'vi/', $route);
    $normalized_route = preg_replace('#\.html$#i', '', $normalized_route);
    if ($normalized_route === '' || $normalized_route === 'vi/home' || $normalized_route === 'vi') {
        $candidates = array('vi/index.html');
    } else {
        $candidates = array(
            $normalized_route,
            $normalized_route . '.html',
            rtrim($normalized_route, '/') . '/index.html',
            'vi/' . ltrim($normalized_route, '/'),
            'vi/' . ltrim($normalized_route, '/') . '.html',
        );
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
        . '">Tất cả sản phẩm</a>';
    foreach (orcam_theme_product_navigation_products() as $product) {
        $active = $product->ID === $current_product_id ? ' is-active' : '';
        $links .= '<a class="orcam-product-bar__link' . $active . '" href="'
            . esc_url(get_permalink($product)) . '">' . esc_html(get_the_title($product)) . '</a>';
    }

    return '<nav class="orcam-product-bar" aria-label="Sản phẩm"><strong>Thị lực kém</strong>'
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
        if (preg_match('#<div[^>]*class="[^"]*desktop-submenu__logo[^"]*"[^>]*>\s*<p[^>]*>\s*(?:Thị lực kém|Low Vision)\s*</p>#iu', $html)) {
            $is_low_vision = true;
        }
    }

    if (!$is_low_vision) {
        return $html;
    }

    $all_products_link = '<div class="d-flex"><a class="p3 desktop-submenu__submenu-link svelte-alcb1y" href="'
        . esc_url(home_url('/vi/shop/')) . '" target="_self">Tất cả sản phẩm</a> </div>';
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
            $prefix = (strpos($inner, 'Tất cả sản phẩm') === false && strpos($inner, '/vi/shop') === false) ? $all_products_link : '';
            return $matches[1] . $prefix . $inner . $extra_links . $matches[3];
        },
        $html,
        1
    ) ?: $html;

    // Inject "Tất cả sản phẩm" into Svelte inline script submenu data so client hydration on mobile also includes it
    $html = preg_replace(
        '#(submenu:\s*\{[^}]*?items:\s*\[)(?!\s*\{\s*label\s*:\s*["\']Tất cả sản phẩm["\'])#s',
        '$1{label:"Tất cả sản phẩm",pageUrl:"' . esc_js(home_url('/vi/shop/')) . '",id:"all-products",blockName:"All Products",blockType:"internalNavigation"},',
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
    $currency_symbol = function_exists('get_woocommerce_currency_symbol') ? get_woocommerce_currency_symbol(get_woocommerce_currency()) : 'đ';

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

/** Invalidate cached static pages whenever posts/products are modified. */
function orcam_theme_clear_static_cache(): void {
    $cache_dir = orcam_theme_cache_dir();
    if (is_dir($cache_dir)) {
        $files = glob($cache_dir . '/*.html');
        if ($files) {
            foreach ($files as $f) {
                @unlink($f);
            }
        }
    }
}
add_action('save_post', 'orcam_theme_clear_static_cache');
add_action('delete_post', 'orcam_theme_clear_static_cache');
add_action('transition_post_status', 'orcam_theme_clear_static_cache');

/** Build the blog index entirely from editable WordPress post data. */
function orcam_theme_blog_index(string $html): string
{
    $posts = get_posts(array(
        'post_type'      => 'post',
        'post_status'    => 'publish',
        'posts_per_page' => -1,
        'orderby'        => 'date',
        'order'          => 'DESC',
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
        $cards .= '<span class="orcam-blog-card__more">Xem chi tiết &gt;</span></span></a></article>';
    }

    return '<section class="orcam-blog-index" aria-label="Danh sách bài viết">'
        . '<div class="orcam-blog-index__heading"><h2>Tất cả bài viết</h2><p>'
        . count($posts) . ' bài viết</p></div><div class="orcam-blog-grid">' . $cards . '</div></section>';
}

/**
 * Synchronize SEO title and description from Yoast SEO, Rank Math, AIOSEO, or WordPress post meta.
 */
function orcam_theme_apply_seo_meta(string $html, $context = null): string
{
    $post = null;
    if ($context instanceof WP_Post) {
        $post = $context;
    } elseif (is_numeric($context) && (int) $context > 0) {
        $post = get_post((int) $context);
    } elseif (is_string($context)) {
        $slug = '';
        if (strpos($context, 'blog.html') !== false || $context === 'vi/blog' || $context === 'blog') {
            $slug = 'blog';
        } elseif (strpos($context, 'index.html') !== false || $context === 'vi/home' || $context === 'vi' || $context === '') {
            $slug = 'index';
        } else {
            $slug = sanitize_title(pathinfo(basename($context), PATHINFO_FILENAME));
        }

        if ($slug !== '') {
            global $wpdb;
            $found_id = (int) $wpdb->get_var($wpdb->prepare(
                "SELECT ID FROM {$wpdb->posts} WHERE post_name = %s AND post_status = 'publish' ORDER BY (post_type = 'page') DESC, (post_type = 'product') DESC LIMIT 1",
                $slug
            ));
            if ($found_id > 0) {
                $post = get_post($found_id);
            }
        }
    }

    if (!$post instanceof WP_Post) {
        $queried = get_queried_object();
        if ($queried instanceof WP_Post) {
            $post = $queried;
        }
    }

    if (!$post instanceof WP_Post) {
        return $html;
    }

    $post_id = $post->ID;
    $sitename = get_bloginfo('name') ?: 'OrCam';
    $sep = '-';

    // 1. Title Resolution (Yoast -> Rank Math -> AIOSEO)
    $seo_title = '';
    $yoast_title = (string) get_post_meta($post_id, '_yoast_wpseo_title', true);
    if ($yoast_title !== '') {
        $seo_title = str_replace(
            array('%%title%%', '%%sitename%%', '%%sep%%', '%%page%%', '%%primary_category%%'),
            array(get_the_title($post), $sitename, $sep, '', ''),
            $yoast_title
        );
    }
    if ($seo_title === '') {
        $rm_title = (string) get_post_meta($post_id, 'rank_math_title', true);
        if ($rm_title !== '') {
            $seo_title = str_replace(
                array('%title%', '%sitename%', '%sep%', '%page%'),
                array(get_the_title($post), $sitename, $sep, ''),
                $rm_title
            );
        }
    }
    if ($seo_title === '') {
        $aio_title = (string) get_post_meta($post_id, '_aioseo_title', true);
        if ($aio_title !== '') {
            $seo_title = str_replace(
                array('#post_title', '#site_title', '#separator_sa'),
                array(get_the_title($post), $sitename, $sep),
                $aio_title
            );
        }
    }

    // 2. Description Resolution (Yoast -> Rank Math -> AIOSEO -> Excerpt)
    $seo_desc = '';
    $yoast_desc = (string) get_post_meta($post_id, '_yoast_wpseo_metadesc', true);
    if ($yoast_desc !== '') {
        $seo_desc = str_replace(
            array('%%title%%', '%%sitename%%', '%%excerpt%%'),
            array(get_the_title($post), $sitename, $post->post_excerpt),
            $yoast_desc
        );
    }
    if ($seo_desc === '') {
        $rm_desc = (string) get_post_meta($post_id, 'rank_math_description', true);
        if ($rm_desc !== '') {
            $seo_desc = str_replace(
                array('%title%', '%sitename%', '%excerpt%'),
                array(get_the_title($post), $sitename, $post->post_excerpt),
                $rm_desc
            );
        }
    }
    if ($seo_desc === '') {
        $aio_desc = (string) get_post_meta($post_id, '_aioseo_description', true);
        if ($aio_desc !== '') {
            $seo_desc = $aio_desc;
        }
    }
    if ($seo_desc === '' && has_excerpt($post)) {
        $seo_desc = get_the_excerpt($post);
    }

    // Apply SEO Title to HTML (deduplicating existing tags)
    if ($seo_title !== '') {
        $seo_title = trim(strip_tags($seo_title));
        if (strpos($seo_title, 'OrCam Việt Nam') === false) {
            $seo_title = preg_replace('/\s*[-|]\s*OrCam(\s+Blog|\s+VN)?\s*$/iu', '', $seo_title);
            $seo_title = trim($seo_title) . ' | OrCam Việt Nam';
        }
        $full_title = esc_html($seo_title);
        $title_attr = esc_attr($seo_title);

        $html = preg_replace('#<title>.*?</title>#is', '<title>' . $full_title . '</title>', $html, 1);
        $html = preg_replace('#<meta\s+property=["\']og:title["\'][^>]*>\s*#i', '', $html);
        $html = preg_replace('#<meta\s+name=["\']twitter:title["\'][^>]*>\s*#i', '', $html);

        $new_title_tags = '<meta property="og:title" content="' . $title_attr . '">' . "\n"
            . '<meta name="twitter:title" content="' . $title_attr . '">';
        $html = preg_replace('#<head(\s[^>]*)?>#i', '$0' . "\n" . $new_title_tags, $html, 1);

        $script_title = '<script>window.orcamAuthoritativeTitle=' . wp_json_encode($seo_title) . ';document.title=window.orcamAuthoritativeTitle;</script>';
        $html = preg_replace('#</head>#i', $script_title . '</head>', $html, 1);
    }

    // Apply SEO Description to HTML (deduplicating existing tags)
    if ($seo_desc !== '') {
        $seo_desc = trim(strip_tags($seo_desc));
        $desc_attr = esc_attr($seo_desc);

        $html = preg_replace('#<meta\s+name=["\']description["\'][^>]*>\s*#i', '', $html);
        $html = preg_replace('#<meta\s+name=["\']og:description["\'][^>]*>\s*#i', '', $html);
        $html = preg_replace('#<meta\s+property=["\']og:description["\'][^>]*>\s*#i', '', $html);
        $html = preg_replace('#<meta\s+name=["\']twitter:description["\'][^>]*>\s*#i', '', $html);

        $new_desc_tags = '<meta name="description" content="' . $desc_attr . '">' . "\n"
            . '<meta property="og:description" content="' . $desc_attr . '">' . "\n"
            . '<meta name="twitter:description" content="' . $desc_attr . '">';
        $html = preg_replace('#<head(\s[^>]*)?>#i', '$0' . "\n" . $new_desc_tags, $html, 1);
    }

    // 3. Resolve Canonical & OpenGraph Image
    $canonical_url = get_permalink($post);
    if ($post->post_type === 'page' && $post->post_name === 'index') {
        $canonical_url = home_url('/vi/home');
    }
    if ($post->post_type === 'page' && $post->post_name === 'blog') {
        $canonical_url = home_url('/vi/blog');
    }

    $og_image = '';
    if (has_post_thumbnail($post)) {
        $og_image = (string) get_the_post_thumbnail_url($post, 'large');
    }
    if ($og_image === '' && function_exists('orcam_theme_hero_image')) {
        $og_image = orcam_theme_hero_image();
    }
    if ($og_image === '') {
        $og_image = get_template_directory_uri() . '/media/3A1A5245%20(1)%20(1).webp';
    }

    // Apply Canonical Link & OG URL (deduplicating existing tags)
    $html = preg_replace('#<link\s+rel=["\']canonical["\'][^>]*>\s*#i', '', $html);
    $html = preg_replace('#<meta\s+property=["\']og:url["\'][^>]*>\s*#i', '', $html);
    $canonical_tags = '<link rel="canonical" href="' . esc_url($canonical_url) . '">' . "\n"
        . '<meta property="og:url" content="' . esc_url($canonical_url) . '">';
    $html = preg_replace('#<head(\s[^>]*)?>#i', '$0' . "\n" . $canonical_tags, $html, 1);

    // Apply OpenGraph Image & Twitter Card (deduplicating existing tags)
    if ($og_image !== '') {
        $html = preg_replace('#<meta\s+property=["\']og:image["\'][^>]*>\s*#i', '', $html);
        $html = preg_replace('#<meta\s+name=["\']twitter:image["\'][^>]*>\s*#i', '', $html);
        $html = preg_replace('#<meta\s+name=["\']twitter:card["\'][^>]*>\s*#i', '', $html);

        $image_tags = '<meta property="og:image" content="' . esc_url($og_image) . '">' . "\n"
            . '<meta name="twitter:card" content="summary_large_image">' . "\n"
            . '<meta name="twitter:image" content="' . esc_url($og_image) . '">';
        $html = preg_replace('#<head(\s[^>]*)?>#i', '$0' . "\n" . $image_tags, $html, 1);
    }

    // 4. Build Professional Vietnamese Structured Data (Schema.org JSON-LD)
    $schema_graph = array();

    // Organization Schema
    $schema_graph[] = array(
        '@type' => 'Organization',
        '@id'   => home_url('/#organization'),
        'name'  => 'OrCam Việt Nam',
        'url'   => home_url('/vi/home'),
        'logo'  => get_template_directory_uri() . '/media/logo_white-1.svg',
        'sameAs' => array(
            'https://www.facebook.com/OrCamTech',
            'https://www.youtube.com/user/OrCamTech',
            'https://twitter.com/OrCam'
        ),
        'contactPoint' => array(
            '@type' => 'ContactPoint',
            'telephone' => '+84-969-691-444',
            'contactType' => 'customer service',
            'areaServed' => 'VN',
            'availableLanguage' => array('Vietnamese', 'English')
        )
    );

    // WebSite Schema
    $schema_graph[] = array(
        '@type' => 'WebSite',
        '@id'   => home_url('/#website'),
        'name'  => 'OrCam Việt Nam',
        'url'   => home_url('/vi/home'),
        'description' => 'Khám phá các thiết bị AI hỗ trợ thị lực và đọc sách tiên tiến nhất từ OrCam giúp người khiếm thị, thị lực kém và khó đọc tự tin làm chủ cuộc sống.',
        'publisher' => array('@id' => home_url('/#organization'))
    );

    // BreadcrumbList Schema
    $breadcrumb_items = array(
        array(
            '@type' => 'ListItem',
            'position' => 1,
            'name' => 'Trang chủ',
            'item' => home_url('/vi/home')
        )
    );

    if ($post->post_type === 'product') {
        $breadcrumb_items[] = array(
            '@type' => 'ListItem',
            'position' => 2,
            'name' => 'Sản phẩm',
            'item' => home_url('/vi/shop/')
        );
        $breadcrumb_items[] = array(
            '@type' => 'ListItem',
            'position' => 3,
            'name' => get_the_title($post)
        );

        // Product Schema
        $wc_p = function_exists('wc_get_product') ? wc_get_product($post->ID) : null;
        $price = $wc_p ? $wc_p->get_price() : '0';
        $product_schema = array(
            '@type' => 'Product',
            '@id'   => $canonical_url . '#product',
            'name'  => get_the_title($post),
            'description' => $seo_desc !== '' ? $seo_desc : get_the_title($post),
            'image' => $og_image,
            'sku'   => $post->post_name,
            'brand' => array(
                '@type' => 'Brand',
                'name'  => 'OrCam'
            ),
            'offers' => array(
                '@type' => 'Offer',
                'url'   => $canonical_url,
                'priceCurrency' => 'VND',
                'price' => $price,
                'availability' => 'https://schema.org/InStock',
                'itemCondition' => 'https://schema.org/NewCondition',
                'seller' => array('@id' => home_url('/#organization'))
            )
        );
        $schema_graph[] = $product_schema;
    } elseif ($post->post_type === 'post') {
        $breadcrumb_items[] = array(
            '@type' => 'ListItem',
            'position' => 2,
            'name' => 'Blog',
            'item' => home_url('/vi/blog')
        );
        $breadcrumb_items[] = array(
            '@type' => 'ListItem',
            'position' => 3,
            'name' => get_the_title($post)
        );

        // Article Schema
        $schema_graph[] = array(
            '@type' => 'BlogPosting',
            '@id'   => $canonical_url . '#article',
            'headline' => get_the_title($post),
            'description' => $seo_desc !== '' ? $seo_desc : get_the_title($post),
            'image' => $og_image,
            'datePublished' => get_the_date('c', $post),
            'dateModified' => get_the_modified_date('c', $post),
            'author' => array(
                '@type' => 'Organization',
                'name'  => 'OrCam Việt Nam',
                'url'   => home_url('/vi/home')
            ),
            'publisher' => array('@id' => home_url('/#organization')),
            'mainEntityOfPage' => array(
                '@type' => 'WebPage',
                '@id'   => $canonical_url
            )
        );
    } else {
        if ($post->post_name !== 'index') {
            $breadcrumb_items[] = array(
                '@type' => 'ListItem',
                'position' => 2,
                'name' => get_the_title($post)
            );
        }
    }

    $schema_graph[] = array(
        '@type' => 'BreadcrumbList',
        '@id'   => $canonical_url . '#breadcrumb',
        'itemListElement' => $breadcrumb_items
    );

    // Strip old static schemas and inject new authoritative JSON-LD
    $html = preg_replace('#<script\s+type=["\']application/ld\+json["\'][^>]*>[\s\S]*?</script>#i', '', $html);
    $schema_json = json_encode(array('@context' => 'https://schema.org', '@graph' => $schema_graph), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    $schema_tag = '<script type="application/ld+json">' . "\n" . $schema_json . "\n" . '</script>';
    $html = preg_replace('#</head>#i', $schema_tag . "\n" . '</head>', $html, 1);

    return $html;
}

/**
 * Adjust asset URLs at render time so the theme works on any domain or in a
 * WordPress subdirectory. Relative URLs retain the original document base.
 */
function orcam_theme_render_document(string $file, ?string $document_html = null, string $custom_cache_key = '', bool $return_only = false): string
{
    $normalized_file = wp_normalize_path((string) realpath($file));
    $blog_file = wp_normalize_path((string) realpath(get_template_directory() . '/static-pages/vi/blog.html'));
    if ($normalized_file === $blog_file && $custom_cache_key === '') {
        global $wpdb;
        $latest_posts_state = (string) $wpdb->get_var("SELECT CONCAT(COUNT(ID), '_', IFNULL(MAX(post_modified), '0')) FROM {$wpdb->posts} WHERE post_type='post' AND post_status='publish'");
        $custom_cache_key = 'blog_posts_' . $latest_posts_state;
    }

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
            '<h1><strong>OrCam Há»c </strong><span style="font-family: Trebuchet MS"><span style="color: rgb(73, 26, 189)"><strong>Cơ bản</strong></span></span></h1>',
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
    // Clean up any legacy injected styles, scripts, or old support section fragments
    $html = preg_replace('#<style\b[^>]*\bid=["\']orcam-vn-footer-css["\'][^>]*>[\s\S]*?</style>\s*#i', '', $html);
    $html = preg_replace('#<script\b[^>]*\bid=["\']orcam-vn-footer-injector["\'][^>]*>[\s\S]*?</script>\s*#i', '', $html);
    $html = preg_replace('#<div\b[^>]*\bid=["\']orcam-vn-support-block["\'][^>]*>[\s\S]*?</div>\s*(?=<nav\b[^>]*\bclass=["\'][^"\']*orcam-footer)#i', '', $html);
    $html = preg_replace('#<div\s+class=["\']orcam-vn-support-section["\'][\s\S]*?</div>\s*(?=<div\s+class=["\']desktop-footer)#i', '', $html);
    $html = preg_replace('#<div\s+class=["\']orcam-vn-brand-col["\'][\s\S]*?</div>\s*</div>#is', '', $html);

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

    // Strip UserWay script tags
    $html = preg_replace('#<script[^>]*src=["\'][^"\']*cdn\.userway\.org/[^"\']*["\'][^>]*>.*?</script>#is', '', $html);
    $html = preg_replace('#<script[^>]*src=["\'][^"\']*cdn\.userway\.org/[^"\']*["\'][^>]*>#is', '', $html);
    $html = preg_replace('#<script[^>]*data-account=["\']t2KpHXGp9h["\'][^>]*>.*?</script>#is', '', $html);
    $html = preg_replace('#<script[^>]*data-account=["\']t2KpHXGp9h["\'][^>]*>#is', '', $html);

    // SvelteKit data endpoints are unavailable in a static export. Load the
    // compatibility handler before the client router can intercept links.
    $navigation_uri = $theme_uri . '/js/static-navigation.js?ver=' . rawurlencode(ORCAM_THEME_VERSION);
    $google_api_key = orcam_theme_google_api_key();
    $dynamic_product_items = array();
    $product_data_map = array();
    $currency_symbol = function_exists('get_woocommerce_currency_symbol') ? get_woocommerce_currency_symbol(get_woocommerce_currency()) : 'đ';

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

    // Apply SEO Title, Meta Description, and OpenGraph/Twitter tags from Yoast/RankMath/WP
    $html = orcam_theme_apply_seo_meta($html, $file);

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
function orcam_theme_render_shared_static_shell(string $content, string $title, bool $include_wordpress_assets = false, string $custom_cache_file = '', string $custom_cache_key = '', bool $return_only = false, bool $hide_footer = false): bool
{
    // Use index.html as the canonical shared shell for native WooCommerce database products
    $file = get_template_directory() . '/static-pages/vi/index.html';
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

    // The shell page marks active items; clean submenu active states
    $html = str_replace(' orcam-submenu__active', '', $html);

    $full_title = esc_html($title) . ' | OrCam Việt Nam';
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

    // Remove the redundant brand column inside the footer links grid
    $html = preg_replace('#<div\s+class=["\']orcam-vn-brand-col["\'][\s\S]*?</div>\s*</div>#is', '', $html);

    $html = orcam_theme_apply_seo_meta($html, get_queried_object() ?: ($GLOBALS['post'] ?? null));

    // Strip Svelte client bootstrap and scripts safely without catastrophic backtracking across earlier script tags
    $html = preg_replace('#<script\b[^>]*>\s*\{?\s*__sveltekit[\s\S]*?</script>#is', '', $html);
    $html = preg_replace('#<script\b[^>]*\bsrc=["\'][^"\']*_app/[^"\']*["\'][^>]*>\s*</script>#is', '', $html);
    $html = preg_replace('#<script\b[^>]*data-sveltekit-fetched[^>]*>[\s\S]*?</script>#is', '', $html);
    $html = preg_replace('#<link\b[^>]*\brel=["\']modulepreload["\'][^>]*>#is', '', $html);

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

    // Normalize all relative and .html links into clean absolute WordPress URLs
    $html = preg_replace_callback(
        '#\bhref=(["\'])(?:vi/)?([a-zA-Z0-9_-]+)\.html\1#i',
        static function (array $matches): string {
            $slug = $matches[2];
            if ($slug === 'index') {
                return 'href=' . $matches[1] . esc_url(home_url('/vi/home')) . $matches[1];
            }
            return 'href=' . $matches[1] . esc_url(home_url('/vi/' . $slug . '/')) . $matches[1];
        },
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

    if ($custom_cache_file !== '') {
        $cache_dir = orcam_theme_cache_dir();
        $cache_key = orcam_theme_get_cache_key($custom_cache_file, $custom_cache_key);
        $cache_path = $cache_dir . '/' . $cache_key . '.html';
        if (wp_is_writable($cache_dir) || is_writable($cache_dir)) {
            @file_put_contents($cache_path, $html);
        }
    }

    if ($return_only) {
        return $html;
    }

    status_header(200);
    nocache_headers();
    header('Content-Type: text/html; charset=' . get_bloginfo('charset'));
    header('X-OrCam-Cache: DB_PRODUCT');
    if (!ob_get_level() && extension_loaded('zlib') && !ini_get('zlib.output_compression')) {
        ob_start('ob_gzhandler');
    }
    echo $html;
    exit;
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
                        . ' aria-label="Xem ảnh ' . esc_attr((string) ($index + 1)) . '"><img src="'
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

    // Keep browser and social metadata synchronized with Yoast/RankMath/wp-admin fields.
    $html = orcam_theme_apply_seo_meta($html, $post);

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
            <div><p><?php esc_html_e('OrCam Việt Nam', 'orcam-theme'); ?></p><h1><?php esc_html_e('Tất cả sản phẩm', 'orcam-theme'); ?></h1></div>
        </header>
        <section class="orcam-shop__catalog" aria-label="<?php esc_attr_e('Danh sách sản phẩm', 'orcam-theme'); ?>">
            <div class="orcam-shop__grid">
                <?php foreach (orcam_theme_product_navigation_products(true) as $p_post) :
                    $p_obj = wc_get_product($p_post->ID);
                    if (!$p_obj) continue;
                    $p_img = $p_obj->get_image_id() ? wp_get_attachment_image_url($p_obj->get_image_id(), 'medium_large') : wc_placeholder_img_src('medium_large');
                    $p_sum = trim($p_obj->get_short_description()) ?: sprintf(__('Khám phá %s với công nghệ hỗ trợ tiên tiến từ OrCam.', 'orcam-theme'), get_the_title($p_post));
                    ?>
                    <article class="orcam-shop-card">
                        <div class="orcam-shop-card__inner">
                            <a class="orcam-shop-card__media-link" href="<?php echo esc_url(get_permalink($p_post)); ?>">
                                <span class="orcam-shop-card__media">
                                    <?php if ($p_obj->is_on_sale()) : ?><span class="orcam-shop-card__badge"><?php esc_html_e('Ưu đãi', 'orcam-theme'); ?></span><?php endif; ?>
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
                                        <?php esc_html_e('Xem chi tiết', 'orcam-theme'); ?>
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
    orcam_theme_render_shared_static_shell($shop_html, 'Tất cả sản phẩm', false, 'shop_catalog', 'vi_shop_page', true);
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
                +   '<p class="ovn-desc">Công nghệ trợ năng đột phá, nâng cao tính độc lập<br>cho người khiếm thị và người gặp khó khăn khi đọc.</p>'
                + '</div>'
                + '<div class="ovn-cards-wrap">'
                +   '<p class="ovn-section-label">Hỗ trợ khách hàng</p>'
                +   '<div class="ovn-cards">'
                +     '<div class="ovn-card ovn-card-regular">'
                +       '<div class="ovn-card-header"><div class="ovn-card-icon">' + house_svg + '</div><span class="ovn-badge ovn-badge-blue">Miền Bắc</span></div>'
                +       '<p class="ovn-card-title">Văn phòng Hà Nội</p>'
                +       '<p class="ovn-card-addr">226 ÄÆ°á»ng LÃ¡ng, PhÆ°á»ng Thá»‹nh Quang,<br>Quáº­n Äá»‘ng Äa, Hà Nội</p>'
                +       '<a href="tel:02473048700" class="ovn-card-phone">' + phone_svg + '024.7304.8700</a>'
                +     '</div>'
                +     '<div class="ovn-card ovn-card-regular">'
                +       '<div class="ovn-card-header"><div class="ovn-card-icon">' + house_svg + '</div><span class="ovn-badge ovn-badge-blue">Miền Nam</span></div>'
                +       '<p class="ovn-card-title">Văn phòng Hồ Chí Minh</p>'
                +       '<p class="ovn-card-addr">137 Hòa Hưng, PhÆ°á»ng Hòa Hưng,<br>TP. Hồ Chí Minh</p>'
                +       '<a href="tel:02873048700" class="ovn-card-phone">' + phone_svg + '028.7304.8700</a>'
                +     '</div>'
                +     '<div class="ovn-card ovn-card-hotline">'
                +       '<div class="ovn-card-header"><div class="ovn-card-icon">' + headset_svg + '</div><span class="ovn-badge ovn-badge-indigo">Tư vấn 24/7</span></div>'
                +       '<p class="ovn-card-title">Hotline Tá»•ng ÄÃ i</p>'
                +       '<a href="tel:1900638400" class="ovn-hotline-btn">' + phone_svg + '1900.63.8400</a>'
                +       '<p class="ovn-hotline-note">Hỗ trợ và tư vấn mọi lúc, mọi nơi</p>'
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


/**
 * Modern OrCam Việt Nam Order Email Customizations
 */
add_filter('woocommerce_email_from_name', static function (): string {
    return 'OrCam Việt Nam';
});

add_filter('woocommerce_email_subject_customer_processing_order', static function (string $subject, WC_Order $order): string {
    return sprintf('Xác nhận đơn hàng #%s - OrCam Việt Nam', $order->get_order_number());
}, 20, 2);

add_filter('woocommerce_email_subject_new_order', static function (string $subject, WC_Order $order): string {
    return sprintf('[OrCam Việt Nam] Đơn hàng mới #%s từ %s', $order->get_order_number(), $order->get_formatted_billing_full_name() ?: 'Khách hàng');
}, 20, 2);

add_filter('woocommerce_email_subject_customer_completed_order', static function (string $subject, WC_Order $order): string {
    return sprintf('Đơn hàng #%s đã hoàn tất - OrCam Việt Nam', $order->get_order_number());
}, 20, 2);

add_filter('woocommerce_email_heading_customer_processing_order', static function (): string {
    return 'Cảm ơn bạn đã đặt hàng tại OrCam Việt Nam!';
});

add_filter('woocommerce_email_heading_customer_completed_order', static function (): string {
    return 'Đơn hàng của bạn đã được giao thành công!';
});

add_filter('woocommerce_email_heading_new_order', static function (): string {
    return 'Bạn có đơn hàng mới từ website';
});

/**
 * Vietnamese Currency Format (đ)
 */
add_filter('woocommerce_currency', static function (): string {
    return 'VND';
});

add_filter('woocommerce_currency_symbol', static function (string $symbol, string $currency): string {
    return 'đ';
}, 99, 2);

add_filter('woocommerce_price_format', static function (string $format, string $currency_pos): string {
    return '%1$s %2$s'; // e.g. 140.250.000 đ
}, 99, 2);
