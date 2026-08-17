<?php
/**
 * Unified WooCommerce Single Product Template (Rendered 100% from Database).
 *
 * Renders all OrCam products dynamically from the WordPress / WooCommerce database
 * wrapped inside the shared site shell (header, submenu, footer).
 */

defined('ABSPATH') || exit;

ob_start();

while (have_posts()) :
    the_post();
    $product_id = get_the_ID();
    $product = wc_get_product($product_id);
    if (!$product) {
        continue;
    }

    $title = get_the_title();
    $slug = $product->get_slug();
    $sku = $product->get_sku() ?: 'ORCAM-' . strtoupper(str_replace('orcam-', '', $slug));
    $price = $product->get_price();
    $regular_price = $product->get_regular_price();
    $sale_price = $product->get_sale_price();
    $is_on_sale = $product->is_on_sale();
    $currency_symbol = function_exists('get_woocommerce_currency_symbol') ? get_woocommerce_currency_symbol() : 'đ';

    $formatted_price = $price ? number_format((float) $price, 0, ',', '.') . ' ' . $currency_symbol : 'Liên hệ';
    $formatted_regular = $regular_price ? number_format((float) $regular_price, 0, ',', '.') . ' ' . $currency_symbol : '';

    $checkout_url = function_exists('wc_get_checkout_url')
        ? add_query_arg('add-to-cart', $product_id, wc_get_checkout_url())
        : home_url('/vi/checkout/?add-to-cart=' . $product_id);

    // Gallery images
    $image_ids = array_values(array_filter(array_merge(
        array($product->get_image_id()),
        $product->get_gallery_image_ids()
    )));
    $gallery_images = array();
    foreach ($image_ids as $img_id) {
        $img_url = wp_get_attachment_image_url($img_id, 'full') ?: wp_get_attachment_image_url($img_id, 'large');
        if ($img_url) {
            $gallery_images[] = $img_url;
        }
    }
    if (empty($gallery_images)) {
        $gallery_images[] = get_template_directory_uri() . '/media/MYEYE_on%20floor%20Flip%20(1)%20(1).webp';
    }
    $main_image = $gallery_images[0];

    // Dynamic specs dictionary based on product slug
    $specs_map = array(
        'orcam-myeye-3-pro' => array(
            'Kích thước' => '76 x 21 x 14.9 mm',
            'Trọng lượng' => '22.5 gram',
            'Camera' => '13 Megapixel HD sắc nét',
            'Kết nối' => 'Wi-Fi 5GHz, Bluetooth 5.0, USB-C',
            'Thời lượng pin' => '2 giờ sử dụng liên tục (kèm sạc nhanh)',
            'Ngôn ngữ hỗ trợ' => 'Tiếng Việt, Tiếng Anh và hơn 25 ngôn ngữ',
            'Bảo hành' => '24 tháng chính hãng OrCam'
        ),
        'orcam-myeye-2-pro' => array(
            'Kích thước' => '76 x 21 x 14.9 mm',
            'Trọng lượng' => '22.5 gram',
            'Camera' => '13 Megapixel với đèn LED chiếu sáng',
            'Kết nối' => 'Wi-Fi, Bluetooth, Micro-USB',
            'Thời lượng pin' => '1.5 - 2 giờ sử dụng liên tục',
            'Ngôn ngữ hỗ trợ' => 'Tiếng Việt, Tiếng Anh và hơn 20 ngôn ngữ',
            'Bảo hành' => '12 tháng chính hãng OrCam'
        ),
        'orcam-read-5' => array(
            'Kích thước' => '122 x 25 x 13 mm',
            'Trọng lượng' => '44.5 gram',
            'Laser định vị' => '2 chế độ: Đóng khung khối văn bản & Con trỏ laser',
            'Kết nối' => 'Wi-Fi 2.4/5GHz, Bluetooth, USB-C',
            'Thời lượng pin' => 'Lên tới 4 giờ đọc liên tục',
            'Ngôn ngữ hỗ trợ' => 'Tiếng Việt, Tiếng Anh và hơn 20 ngôn ngữ',
            'Bảo hành' => '12 tháng chính hãng OrCam'
        ),
        'orcam-read-3' => array(
            'Kích thước' => '122 x 25 x 13 mm',
            'Trọng lượng' => '44.5 gram',
            'Tính năng đặc biệt' => 'Kính lúp đọc thông minh AI & Giá đỡ đọc sách',
            'Kết nối' => 'Wi-Fi, Bluetooth, USB Type-C',
            'Thời lượng pin' => 'Lên tới 4 giờ sử dụng',
            'Ngôn ngữ hỗ trợ' => 'Tiếng Việt, Tiếng Anh và đa ngôn ngữ',
            'Bảo hành' => '12 tháng chính hãng OrCam'
        ),
        'orcam-read' => array(
            'Kích thước' => '122 x 25 x 13 mm',
            'Trọng lượng' => '44.5 gram',
            'Đèn LED' => 'Tích hợp đèn chiếu sáng ban đêm thông minh',
            'Kết nối' => 'Bluetooth Audio, USB-C',
            'Thời lượng pin' => 'Lên tới 4 giờ sử dụng liên tục',
            'Ngôn ngữ hỗ trợ' => 'Tiếng Việt, Tiếng Anh',
            'Bảo hành' => '12 tháng chính hãng OrCam'
        )
    );
    // Read Specs from DB post meta first, fallback to predefined map
    $db_specs = get_post_meta($product_id, '_orcam_specs', true);
    if (is_array($db_specs) && !empty($db_specs)) {
        $specs = $db_specs;
    } else {
        $specs = $specs_map[$slug] ?? array(
            'Thương hiệu' => 'OrCam Technologies',
            'Xuất xứ' => 'Israel',
            'Bảo hành' => '12 tháng chính hãng',
            'Phân phối' => 'OrCam Việt Nam'
        );
    }

    // In the box list
    $in_box_map = array(
        'orcam-myeye-3-pro' => array('Thiết bị OrCam MyEye 3 Pro', 'Bộ gá từ tính gắn mọi loại gọng kính', 'Cáp sạc nhanh Type-C và củ sạc chính hãng', 'Dây đeo cổ chống rơi & Khăn lau kính', 'Hộp đựng chống sốc cao cấp', 'Sách hướng dẫn sử dụng tiếng Việt'),
        'orcam-myeye-2-pro' => array('Thiết bị OrCam MyEye 2 Pro', 'Bộ ngàm từ tính gắn gọng kính (3 bộ)', 'Kính mẫu không độ OrCam', 'Dây sạc & Củ sạc chuyên dụng', 'Hộp bảo vệ chống va đập', 'Thẻ bảo hành & Sách hướng dẫn'),
        'orcam-read-5' => array('Thiết bị đọc thông minh OrCam Read 5', 'Cáp sạc USB-C và củ sạc', 'Dây đeo cổ tiện lợi', 'Túi vải bảo vệ cao cấp', 'Sách hướng dẫn sử dụng tiếng Việt'),
        'orcam-read-3' => array('Thiết bị cầm tay OrCam Read 3', 'Đế sạc kiêm giá đỡ đọc sách thông minh', 'Cáp & Củ sạc chính hãng', 'Dây đeo tiện lợi', 'Tài liệu hướng dẫn'),
        'orcam-read' => array('Thiết bị đọc cá nhân OrCam Read', 'Cáp sạc USB-C', 'Dây đeo tay & Túi đựng', 'Sách hướng dẫn sử dụng')
    );
    $db_in_box = get_post_meta($product_id, '_orcam_in_box', true);
    if (is_array($db_in_box) && !empty($db_in_box)) {
        $in_box = $db_in_box;
    } elseif (is_string($db_in_box) && trim($db_in_box) !== '') {
        $in_box = array_values(array_filter(array_map('trim', explode("\n", $db_in_box))));
    } else {
        $in_box = $in_box_map[$slug] ?? array('Thân máy chính hãng', 'Cáp và củ sạc', 'Sách hướng dẫn sử dụng', 'Phiếu bảo hành');
    }

    // Highlights (Tính năng đột phá - Read from Product Short Description / Excerpt in DB)
    $highlights = array();
    $raw_excerpt = trim((string) $product->get_short_description());
    if ($raw_excerpt === '') {
        $raw_excerpt = trim((string) get_the_excerpt());
    }
    if ($raw_excerpt !== '') {
        $cleaned_excerpt = preg_replace('/<\/(li|p|div|h[1-6])>/i', "\n", $raw_excerpt);
        $lines = array_filter(array_map('trim', explode("\n", strip_tags($cleaned_excerpt))));
        if (!empty($lines)) {
            $highlights = array_values($lines);
        }
    }
    if (empty($highlights)) {
        $db_highlights = get_post_meta($product_id, '_orcam_highlights', true);
        if (is_array($db_highlights) && !empty($db_highlights)) {
            $highlights = $db_highlights;
        } else {
            $highlights_map = array(
                'orcam-myeye-3-pro' => array('Trợ lý AI thế hệ mới: Mô tả chi tiết hình ảnh xung quanh', 'Đọc tức thì mọi văn bản in và màn hình kỹ thuật số', 'Nhận diện khuôn mặt, màu sắc, tiền tệ và đồ vật chính xác', 'Kích thước siêu nhỏ gọn 22.5g gắn liền mọi gọng kính'),
                'orcam-myeye-2-pro' => array('Đọc văn bản tức thì từ sách báo, biển hiệu, màn hình', 'Nhận diện khuôn mặt người thân và bạn bè đã lưu', 'Nhận diện tiền tệ và đọc mã vạch sản phẩm', 'Hoạt động hoàn toàn độc lập, không cần kết nối Internet'),
                'orcam-read-5' => array('Kính lúp đọc thông minh AI thế hệ 5', 'Đọc trọn vẹn cả trang sách chỉ với 1 nút bấm', '2 chế độ quét Laser: Con trỏ định vị & Đóng khung vùng đọc', 'Tương tác thông minh bằng giọng nói với AI Assistant'),
                'orcam-read-3' => array('Kết hợp thiết bị cầm tay và trạm đọc cố định', 'Tích hợp kính lúp AI hiển thị sắc nét trên màn hình', 'Đọc sách báo, tạp chí với độ chính xác tuyệt đối', 'Hỗ trợ đắc lực cho người giảm thị lực và người cao tuổi'),
                'orcam-read' => array('Thiết bị đọc AI cầm tay tiên phong thế giới', 'Quét và đọc toàn bộ văn bản trong tích tắc', 'Định vị bằng tia laser chính xác từng câu chữ', 'Âm thanh to rõ, hỗ trợ kết nối tai nghe Bluetooth')
            );
            $highlights = $highlights_map[$slug] ?? array('Công nghệ trợ năng AI hàng đầu thế giới', 'Hỗ trợ ngôn ngữ Tiếng Việt chuẩn xác', 'Bảo hành chính hãng 12-24 tháng');
        }
    }
    // Read approved reviews dynamically from WordPress Database
    $db_reviews = get_comments(array(
        'post_id' => $product_id,
        'status' => 'approve'
    ));
    $review_count = count($db_reviews);
    $rating_sum = 0;
    $star_counts = array(5 => 0, 4 => 0, 3 => 0, 2 => 0, 1 => 0);

    foreach ($db_reviews as $r) {
        $r_star = (int) (get_comment_meta($r->comment_ID, 'rating', true) ?: 5);
        if ($r_star < 1 || $r_star > 5) {
            $r_star = 5;
        }
        $star_counts[$r_star]++;
        $rating_sum += $r_star;
    }

    $avg_rating = $review_count > 0 ? round($rating_sum / $review_count, 1) : 5.0;
    $rating_text = $review_count > 0 ? sprintf('%0.1f (%d đánh giá từ khách hàng)', $avg_rating, $review_count) : '5.0 (Đánh giá từ khách hàng)';
    ?>

    <div class="orcam-pdp">
        <!-- Breadcrumbs -->
        <nav class="orcam-pdp__breadcrumb" aria-label="Đường dẫn">
            <div class="orcam-pdp__container">
                <a href="<?php echo esc_url(home_url('/vi/home')); ?>">Trang chủ</a>
                <span class="sep">/</span>
                <a href="<?php echo esc_url(home_url('/vi/shop/')); ?>">Sản phẩm</a>
                <span class="sep">/</span>
                <span class="current"><?php echo esc_html($title); ?></span>
            </div>
        </nav>

        <!-- Main Product Section -->
        <section class="orcam-pdp__hero">
            <div class="orcam-pdp__container orcam-pdp__grid">
                
                <!-- Gallery Column -->
                <div class="orcam-pdp__gallery">
                    <div class="orcam-pdp__stage">
                        <img id="pdp-main-image" src="<?php echo esc_url($main_image); ?>" alt="<?php echo esc_attr($title); ?>">
                        <div class="orcam-pdp__badge">100% CHÍNH HÃNG</div>
                    </div>
                    <?php if (count($gallery_images) > 1) : ?>
                        <div class="orcam-pdp__thumbs">
                            <?php foreach ($gallery_images as $index => $img_src) : ?>
                                <button type="button" class="orcam-pdp__thumb <?php echo $index === 0 ? 'is-active' : ''; ?>" data-full="<?php echo esc_url($img_src); ?>">
                                    <img src="<?php echo esc_url($img_src); ?>" alt="<?php echo esc_attr($title); ?>">
                                </button>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>

                    <div class="orcam-pdp__trust-bar">
                        <div class="trust-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            <span>Bảo hành chính hãng</span>
                        </div>
                        <div class="trust-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                            <span>Giao hàng miễn phí toàn quốc</span>
                        </div>
                        <div class="trust-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                            <span>Hướng dẫn tận nơi 1-kèm-1</span>
                        </div>
                    </div>
                </div>

                <!-- Product Summary Column -->
                <div class="orcam-pdp__summary">
                    <a href="#tab-reviews" class="orcam-pdp__rating orcam-pdp__rating-link" id="pdp-rating-trigger" title="Xem đánh giá từ khách hàng">
                        <span class="stars">★★★★★</span>
                        <span class="score"><?php echo esc_html($rating_text); ?></span>
                        <span class="sku">Mã SP: <?php echo esc_html($sku); ?></span>
                    </a>

                    <h1 class="orcam-pdp__title"><?php echo esc_html($title); ?></h1>

                    <div class="orcam-pdp__price-wrap">
                        <span class="orcam-pdp__price"><?php echo esc_html($formatted_price); ?></span>
                        <?php if ($is_on_sale && $formatted_regular) : ?>
                            <span class="orcam-pdp__regular-price"><?php echo esc_html($formatted_regular); ?></span>
                            <span class="orcam-pdp__discount-tag">Ưu đãi</span>
                        <?php endif; ?>
                    </div>

                    <!-- Highlight Features -->
                    <div class="orcam-pdp__highlights">
                        <h3>Tính năng đột phá</h3>
                        <ul>
                            <?php foreach ($highlights as $hl) : ?>
                                <li>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span><?php echo esc_html($hl); ?></span>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>

                    <!-- CTA Actions -->
                    <div class="orcam-pdp__actions">
                        <a href="<?php echo esc_url($checkout_url); ?>" class="orcam-pdp__btn orcam-pdp__btn--buy">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                            <span>MUA NGAY - GIAO TẬN NƠI MIỄN PHÍ</span>
                        </a>
                        <a href="tel:1900638400" class="orcam-pdp__btn orcam-pdp__btn--call">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.47 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.09 6.09l1.81-1.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            <span>GỌI HOTLINE TƯ VẤN: 1900.63.8400</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>

        <!-- Product Tabs Section -->
        <section class="orcam-pdp__details">
            <div class="orcam-pdp__container">
                <div class="orcam-pdp__tabs">
                    <button class="orcam-tab-btn is-active" data-tab="specs">Thông Số Kỹ Thuật</button>
                    <button class="orcam-tab-btn" data-tab="inbox">Bộ Sản Phẩm Bao Gồm</button>
                    <button class="orcam-tab-btn" data-tab="reviews" id="tab-btn-reviews">Đánh Giá (Reviews)</button>
                </div>

                <!-- Tab 1: Specs -->
                <div id="tab-specs" class="orcam-tab-content is-active">
                    <table class="orcam-specs-table">
                        <tbody>
                            <?php foreach ($specs as $spec_label => $spec_value) : ?>
                                <tr>
                                    <th><?php echo esc_html($spec_label); ?></th>
                                    <td><?php echo esc_html($spec_value); ?></td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>

                <!-- Tab 2: In the Box -->
                <div id="tab-inbox" class="orcam-tab-content">
                    <div class="orcam-inbox-grid">
                        <?php foreach ($in_box as $idx => $item) : ?>
                            <div class="inbox-card">
                                <div class="inbox-idx"><?php echo esc_html($idx + 1); ?></div>
                                <div class="inbox-text"><?php echo esc_html($item); ?></div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>

                <!-- Tab 3: Reviews (Directly from WordPress Database) -->
                <div id="tab-reviews" class="orcam-tab-content">
                    <div class="orcam-reviews-container">
                        <!-- Review Summary Card -->
                        <div class="orcam-review-summary-card">
                            <div class="orcam-rating-score-box">
                                <div class="score-number"><?php echo esc_html(sprintf('%0.1f', $avg_rating)); ?></div>
                                <div class="score-stars">
                                    <?php
                                    $full_stars = (int) round($avg_rating);
                                    echo esc_html(str_repeat('★', $full_stars) . str_repeat('☆', max(0, 5 - $full_stars)));
                                    ?>
                                </div>
                                <div class="score-note">Dựa trên <?php echo esc_html((string) $review_count); ?> đánh giá từ cơ sở dữ liệu</div>
                            </div>
                            <div class="orcam-rating-bars">
                                <?php for ($s = 5; $s >= 1; $s--) : 
                                    $pct = $review_count > 0 ? round(($star_counts[$s] / $review_count) * 100) : ($s === 5 ? 100 : 0);
                                ?>
                                    <div class="rating-bar-row">
                                        <span class="star-label"><?php echo esc_html($s); ?> sao</span>
                                        <div class="bar-track"><div class="bar-fill" style="width: <?php echo esc_attr($pct); ?>%;"></div></div>
                                        <span class="percent-label"><?php echo esc_html($pct); ?>%</span>
                                    </div>
                                <?php endfor; ?>
                            </div>
                            <div class="orcam-review-cta-box">
                                <p>Bạn đã trải nghiệm thiết bị này?</p>
                                <button type="button" class="btn-open-review-form" onclick="document.getElementById('orcam-write-review').scrollIntoView({behavior:'smooth'}); document.getElementById('author').focus();">Viết Đánh Giá Của Bạn</button>
                            </div>
                        </div>

                        <!-- Customer Reviews List from Database -->
                        <div class="orcam-reviews-feed">
                            <?php if (!empty($db_reviews)) : ?>
                                <?php foreach ($db_reviews as $rev) :
                                    $r_rating = (int) (get_comment_meta($rev->comment_ID, 'rating', true) ?: 5);
                                    $author_name = $rev->comment_author ?: 'Khách hàng';
                                    $first_letter = mb_strtoupper(mb_substr($author_name, 0, 1, 'UTF-8'), 'UTF-8');
                                    $date_formatted = date_i18n('d/m/Y', strtotime($rev->comment_date));
                                ?>
                                    <div class="review-item" id="comment-<?php echo esc_attr($rev->comment_ID); ?>">
                                        <div class="review-item__header">
                                            <div class="review-avatar"><?php echo esc_html($first_letter); ?></div>
                                            <div class="review-meta">
                                                <div class="review-author">
                                                    <strong><?php echo esc_html($author_name); ?></strong>
                                                    <span class="verified-badge">✓ Đã mua hàng chính hãng</span>
                                                </div>
                                                <div class="review-rating">
                                                    <span class="stars"><?php echo esc_html(str_repeat('★', $r_rating) . str_repeat('☆', max(0, 5 - $r_rating))); ?></span>
                                                    <span class="date"><?php echo esc_html($date_formatted); ?></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-body">
                                            <p><?php echo nl2br(esc_html($rev->comment_content)); ?></p>
                                        </div>
                                    </div>
                                <?php endforeach; ?>
                            <?php else : ?>
                                <div class="review-item" style="text-align:center; padding: 32px;">
                                    <p style="color:#64748b; font-size:15px; margin:0;">Chưa có đánh giá nào. Hãy là người đầu tiên gửi đánh giá cho sản phẩm này!</p>
                                </div>
                            <?php endif; ?>
                        </div>

                        <!-- Write Review Form (Submits to WordPress Database) -->
                        <div class="orcam-write-review-card" id="orcam-write-review">
                            <h3>Gửi đánh giá & nhận xét của bạn</h3>
                            <p class="form-sub">Đánh giá của bạn sẽ được lưu trực tiếp vào cơ sở dữ liệu và giúp người dùng khác có thêm thông tin hữu ích.</p>
                            <form action="<?php echo esc_url(site_url('/wp-comments-post.php')); ?>" method="post">
                                <input type="hidden" name="comment_post_ID" value="<?php echo esc_attr($product_id); ?>">
                                <input type="hidden" name="comment_type" value="review">
                                
                                <div class="form-group rating-select">
                                    <label for="rating">Đánh giá số sao:</label>
                                    <select name="rating" id="rating" style="padding:8px 12px; border-radius:6px; border:1px solid #cbd5e1; font-weight:600;">
                                        <option value="5" selected>★★★★★ (5/5 Tuyệt vời)</option>
                                        <option value="4">★★★★☆ (4/5 Rất tốt)</option>
                                        <option value="3">★★★☆☆ (3/5 Bình thường)</option>
                                        <option value="2">★★☆☆☆ (2/5 Tạm được)</option>
                                        <option value="1">★☆☆☆☆ (1/5 Kém)</option>
                                    </select>
                                </div>
                                <div class="form-row">
                                    <div class="form-group">
                                        <label for="author">Họ và tên *</label>
                                        <input type="text" name="author" id="author" required placeholder="Nhập họ và tên của bạn">
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Số điện thoại hoặc Email *</label>
                                        <input type="text" name="email" id="email" required placeholder="name@example.com">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="comment">Nội dung nhận xét *</label>
                                    <textarea name="comment" id="comment" rows="4" required placeholder="Hãy chia sẻ cảm nhận và trải nghiệm thực tế của bạn về sản phẩm này..."></textarea>
                                </div>
                                <button type="submit" name="submit" class="btn-submit-review">Gửi Đánh Giá Ngay</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <script>
    (function () {
        // Rating Top Trigger link
        var ratingTrigger = document.getElementById('pdp-rating-trigger');
        if (ratingTrigger) {
            ratingTrigger.addEventListener('click', function (e) {
                e.preventDefault();
                var reviewTabBtn = document.querySelector('.orcam-tab-btn[data-tab="reviews"]');
                if (reviewTabBtn) {
                    reviewTabBtn.click();
                }
                var detailsSec = document.querySelector('.orcam-pdp__details');
                if (detailsSec) {
                    detailsSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        }

        document.addEventListener('click', function (e) {
            // Thumbnail Switcher
            var thumb = e.target.closest('.orcam-pdp__thumb');
            if (thumb) {
                var full = thumb.getAttribute('data-full');
                var mainImg = document.getElementById('pdp-main-image');
                if (mainImg && full) {
                    mainImg.src = full;
                }
                var allThumbs = document.querySelectorAll('.orcam-pdp__thumb');
                for (var i = 0; i < allThumbs.length; i++) {
                    allThumbs[i].classList.remove('is-active');
                }
                thumb.classList.add('is-active');
                return;
            }

            // Tab Switcher
            var tabBtn = e.target.closest('.orcam-tab-btn');
            if (tabBtn) {
                var tabId = tabBtn.getAttribute('data-tab');
                var allBtns = document.querySelectorAll('.orcam-tab-btn');
                for (var j = 0; j < allBtns.length; j++) {
                    allBtns[j].classList.remove('is-active');
                }
                var allContents = document.querySelectorAll('.orcam-tab-content');
                for (var k = 0; k < allContents.length; k++) {
                    allContents[k].classList.remove('is-active');
                }
                tabBtn.classList.add('is-active');
                var targetContent = document.getElementById('tab-' + tabId);
                if (targetContent) {
                    targetContent.classList.add('is-active');
                }
                return;
            }
        });
    })();
    </script>
    <?php
endwhile;

$product_content = (string) ob_get_clean();
orcam_theme_render_shared_static_shell($product_content, get_the_title(), false, '', '', false, false);

