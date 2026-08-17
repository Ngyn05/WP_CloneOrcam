<?php
require_once dirname(__DIR__, 3) . '/wp-load.php';
global $wpdb;

$seo_data = array(
    // 1. Products
    'orcam-myeye-3-pro' => array(
        'title' => 'OrCam MyEye 3 Pro - Kính Hỗ Trợ Thị Lực AI Thông Minh Cao Cấp',
        'desc'  => 'OrCam MyEye 3 Pro là thiết bị AI đeo kính đột phá giúp đọc văn bản tức thì, nhận diện khuôn mặt, màu sắc và mô tả hình ảnh cho người khiếm thị và thị lực kém.',
    ),
    'orcam-myeye-2-pro' => array(
        'title' => 'OrCam MyEye 2 Pro - Thiết Bị Hỗ Trợ Đọc & Nhận Diện Cho Người Khiếm Thị',
        'desc'  => 'OrCam MyEye 2 Pro nhỏ gọn gắn trực tiếp lên kính, đọc tức thì mọi văn bản in và màn hình kỹ thuật số, nhận diện gương mặt và tiền tệ không cần internet.',
    ),
    'orcam-read-5' => array(
        'title' => 'OrCam Read 5 - Kính Lúp AI & Máy Đọc Sách Thông Minh Thế Hệ Mới',
        'desc'  => 'OrCam Read 5 kết hợp công nghệ đọc văn bản AI toàn trang và kính lúp kỹ thuật số thông minh, hỗ trợ tối đa cho học sinh, người đi làm và người lớn tuổi.',
    ),
    'orcam-read-3' => array(
        'title' => 'OrCam Read 3 - Thiết Bị Đọc Sách & Trợ Năng Đa Năng Cho Người Giảm Thị Lực',
        'desc'  => 'OrCam Read 3 là thiết bị trợ năng 3 trong 1: máy đọc văn bản cầm tay, kính lúp thông minh và trạm đọc tĩnh giúp đọc sách báo, tài liệu dễ dàng.',
    ),
    'orcam-read' => array(
        'title' => 'OrCam Read - Bút Đọc Thông Minh AI Quét Văn Bản Cầm Tay Tiên Tiến',
        'desc'  => 'OrCam Read là thiết bị cầm tay ứng dụng AI đọc toàn bộ trang sách hoặc màn hình chỉ với một nút bấm và định vị laser chuẩn xác.',
    ),

    // 2. Key Pages
    'blog' => array(
        'title' => 'Blog OrCam - Tin Tức & Kiến Thức Công Nghệ Hỗ Trợ Thị Lực AI',
        'desc'  => 'Tổng hợp các bài viết, cẩm nang và tin tức mới nhất về công nghệ hỗ trợ thị lực AI, kinh nghiệm sống và giải pháp đột phá cho người khiếm thị và đọc khó khăn.',
    ),
    'index' => array(
        'title' => 'OrCam Việt Nam - Công Nghệ Trợ Năng & Thiết Bị Hỗ Trợ Thị Lực AI',
        'desc'  => 'Khám phá các thiết bị AI hỗ trợ thị lực và đọc sách tiên tiến nhất từ OrCam giúp người khiếm thị, thị lực kém và khó đọc tự tin làm chủ cuộc sống.',
    ),
    'low-vision' => array(
        'title' => 'Giải Pháp Cho Người Thị Lực Kém & Khiếm Thị - OrCam Việt Nam',
        'desc'  => 'Tìm hiểu các giải pháp công nghệ AI đột phá từ OrCam dành cho người giảm thị lực, thoái hóa điểm vàng, đục thủy tinh thể và người khiếm thị.',
    ),
    'orcam-learn' => array(
        'title' => 'OrCam Learn - Giải Pháp Đọc & Hỗ Trợ Học Tập Đột Phá Cho Trẻ Em',
        'desc'  => 'OrCam Learn giúp học sinh mắc chứng khó đọc (Dyslexia) và khó khăn trong việc đọc hiểu nâng cao khả năng đọc, sự tự tin và kết quả học tập vượt trội.',
    ),
    'distributor' => array(
        'title' => 'Tìm Đại Lý & Điểm Trải Nghiệm OrCam Gần Bạn Nhất Tại Việt Nam',
        'desc'  => 'Tra cứu danh sách đại lý phân phối chính hãng và địa điểm đăng ký trải nghiệm trực tiếp các thiết bị OrCam trên toàn quốc.',
    ),
    'events' => array(
        'title' => 'Sự Kiện & Ngày Hội Trải Nghiệm Sản Phẩm OrCam Trực Tiếp',
        'desc'  => 'Đăng ký tham gia các sự kiện Demo Days và ngày hội trải nghiệm công nghệ trợ năng OrCam hoàn toàn miễn phí cùng chuyên gia.',
    ),
    'comparison' => array(
        'title' => 'Bảng So Sánh Các Dòng Sản Phẩm OrCam MyEye & OrCam Read Chi Tiết',
        'desc'  => 'So sánh chi tiết tính năng, thông số kỹ thuật và mức giá giữa các dòng OrCam MyEye 3 Pro, MyEye 2 Pro, OrCam Read 5, Read 3 và OrCam Read.',
    ),
    'contact-us' => array(
        'title' => 'Liên Hệ Tư Vấn & Hỗ Trợ Khách Hàng - OrCam Việt Nam',
        'desc'  => 'Liên hệ với đội ngũ chuyên gia OrCam Việt Nam để nhận tư vấn miễn phí, hỗ trợ kỹ thuật và thông tin chi tiết về sản phẩm.',
    ),
);

$updated_count = 0;
foreach ($seo_data as $slug => $data) {
    $post_id = (int) $wpdb->get_var($wpdb->prepare(
        "SELECT ID FROM {$wpdb->posts} WHERE post_name = %s AND post_status = 'publish' LIMIT 1",
        $slug
    ));
    if ($post_id > 0) {
        update_post_meta($post_id, '_yoast_wpseo_title', $data['title']);
        update_post_meta($post_id, '_yoast_wpseo_metadesc', $data['desc']);
        update_post_meta($post_id, 'rank_math_title', $data['title']);
        update_post_meta($post_id, 'rank_math_description', $data['desc']);
        $updated_count++;
    }
}

// Also seed all blog articles with clean SEO meta if missing
$posts = $wpdb->get_results("SELECT ID, post_title, post_excerpt, post_content FROM {$wpdb->posts} WHERE post_type='post' AND post_status='publish'");
$blog_updated = 0;
foreach ($posts as $p) {
    $existing_title = get_post_meta($p->ID, '_yoast_wpseo_title', true);
    $existing_desc = get_post_meta($p->ID, '_yoast_wpseo_metadesc', true);

    $title = $existing_title !== '' ? $existing_title : ($p->post_title . ' - OrCam Blog');
    $desc = $existing_desc !== '' ? $existing_desc : ($p->post_excerpt !== '' ? $p->post_excerpt : wp_trim_words(wp_strip_all_tags($p->post_content), 30));

    update_post_meta($p->ID, '_yoast_wpseo_title', $title);
    update_post_meta($p->ID, '_yoast_wpseo_metadesc', $desc);
    update_post_meta($p->ID, 'rank_math_title', $title);
    update_post_meta($p->ID, 'rank_math_description', $desc);
    $blog_updated++;
}

orcam_theme_clear_static_cache();
echo "Updated pages/products: {$updated_count}, Blog articles: {$blog_updated}\n";
