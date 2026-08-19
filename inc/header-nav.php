<?php
/**
 * OrCam Master Header Navigation
 * Exact match to native OrCam header & mobile drawer design.
 * Self-contained styles to guarantee zero FOUC / zero cache issues across all pages.
 *
 * @package OrCam
 */

if (!defined('ABSPATH')) { exit; }

function orcam_theme_render_master_header() {
    $theme_uri = get_template_directory_uri();
    $logo_url  = $theme_uri . '/media/logo_white-1.svg';
    $home_url  = esc_url(home_url('/'));
    
    $low_vision_url    = esc_url(home_url('/vi/low-vision.html'));
    $learn_url         = esc_url(home_url('/vi/orcam-learn.html'));
    $myeye3_url        = esc_url(home_url('/vi/orcam-myeye-3-pro/'));
    $myeye2_url        = esc_url(home_url('/vi/orcam-myeye-2-pro/'));
    $read5_url         = esc_url(home_url('/vi/orcam-read-5/'));
    $read3_url         = esc_url(home_url('/vi/orcam-read-3/'));
    $read_url          = esc_url(home_url('/vi/orcam-read/'));
    $shop_url          = esc_url(home_url('/shop/'));
    
    $blog_url          = esc_url(home_url('/vi/blog/'));
    $learn_test_url    = esc_url(home_url('/vi/orcam-learn-testimonials/'));
    $read3_test_url    = esc_url(home_url('/vi/orcam-read-3-testimonials/'));
    $events_url        = esc_url(home_url('/vi/events.html'));
    
    $leadership_url    = esc_url(home_url('/vi/leadership/'));
    $distributor_url   = esc_url(home_url('/vi/distributor.html'));
    $pressroom_url     = esc_url(home_url('/vi/pressroom/'));
    $partners_url      = esc_url(home_url('/vi/affiliation-and-partnership/'));
    $contact_url       = esc_url(home_url('/vi/contact-us.html'));
    
    $helpcenter_url    = 'https://orcam.helpjuice.com/';
    $faq_url           = esc_url(home_url('/vi/faq/'));
    $release_notes_url = esc_url(home_url('/vi/release-notes/'));
    $submit_case_url   = esc_url(home_url('/vi/submit-case/'));
    $schools_url       = esc_url(home_url('/vi/orcam-learn-schools/'));

    return '<style id="orcam-master-header-core-css">
/* Reset & Header Base */
.orcam-master-header {
    background-color: #1c1c1e !important;
    width: 100% !important;
    position: relative !important;
    z-index: 99999 !important;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4) !important;
    border-bottom: 1px solid #27272a !important;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif !important;
}
.orcam-header-container {
    width: 100% !important;
    max-width: 1440px !important;
    margin: 0 auto !important;
    padding: 0 32px !important;
    box-sizing: border-box !important;
}
.orcam-header-row {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    height: 70px !important;
    width: 100% !important;
}
.orcam-header-brand {
    display: flex !important;
    align-items: center !important;
    flex-shrink: 0 !important;
}
.orcam-logo-img {
    height: 25px !important;
    width: auto !important;
    display: block !important;
}
.orcam-header-nav {
    display: flex !important;
    align-items: center !important;
}
.orcam-nav-list {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    list-style: none !important;
    margin: 0 !important;
    padding: 0 !important;
    gap: 24px !important;
}
.orcam-nav-item {
    position: relative !important;
    display: inline-flex !important;
    align-items: center !important;
    margin: 0 !important;
    padding: 0 !important;
    list-style: none !important;
}
.orcam-nav-link {
    color: #ffffff !important;
    font-size: 15px !important;
    font-weight: 500 !important;
    text-decoration: none !important;
    padding: 10px 0 !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 5px !important;
    transition: color 0.2s ease !important;
    white-space: nowrap !important;
}
.orcam-nav-link:hover {
    color: #38bdf8 !important;
}
.orcam-arrow-icon {
    transition: transform 0.2s ease !important;
    color: #94a3b8 !important;
}
.orcam-has-dropdown:hover .orcam-arrow-icon {
    transform: rotate(180deg) !important;
    color: #38bdf8 !important;
}
.orcam-dropdown-menu {
    display: none !important;
    position: absolute !important;
    top: 100% !important;
    left: 0 !important;
    min-width: 230px !important;
    background: #1c1c1e !important;
    border: 1px solid #2e2e32 !important;
    border-radius: 8px !important;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6) !important;
    padding: 8px 0 !important;
    list-style: none !important;
    margin: 0 !important;
    z-index: 99999 !important;
    white-space: nowrap !important;
}
.orcam-nav-item:last-child .orcam-dropdown-menu,
.orcam-nav-item:nth-last-child(2) .orcam-dropdown-menu {
    left: auto !important;
    right: 0 !important;
}
.orcam-has-dropdown:hover > .orcam-dropdown-menu {
    display: block !important;
}
.orcam-dropdown-menu li {
    display: block !important;
    margin: 0 !important;
    padding: 0 !important;
    list-style: none !important;
}
.orcam-dropdown-menu a {
    display: block !important;
    padding: 10px 20px !important;
    color: #cbd5e1 !important;
    font-size: 14px !important;
    font-weight: 500 !important;
    text-decoration: none !important;
    transition: all 0.2s ease !important;
}
.orcam-dropdown-menu a:hover {
    background: #27272a !important;
    color: #38bdf8 !important;
    padding-left: 24px !important;
}

/* Responsive Visibility */
@media (min-width: 961px) {
    .orcam-desktop-header-wrap {
        display: block !important;
    }
    .orcam-mobile-header-wrap {
        display: none !important;
    }
}
@media (max-width: 960px) {
    .orcam-desktop-header-wrap,
    #header .desktop-header {
        display: none !important;
    }
    .orcam-mobile-header-wrap {
        display: block !important;
        background: #1c1c1e !important;
        width: 100% !important;
    }
    .orcam-mobile-header-row {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        height: 56px !important;
        padding: 0 16px !important;
        box-sizing: border-box !important;
    }
    .orcam-mobile-menu-trigger {
        background: transparent !important;
        border: none !important;
        color: #ffffff !important;
        cursor: pointer !important;
        padding: 6px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 36px !important;
        height: 36px !important;
    }
    .orcam-mobile-header-center {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
    }
    .orcam-mobile-header-placeholder {
        width: 36px !important;
    }
}

/* Fullscreen Mobile Drawer Modal */
.orcam-mobile-drawer {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    z-index: 999999 !important;
    background: #1c1c1e !important;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
}
.orcam-mobile-drawer-overlay {
    display: none !important;
}
.orcam-mobile-drawer-content {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    background: #1c1c1e !important;
    box-sizing: border-box !important;
    display: flex !important;
    flex-direction: column !important;
    overflow-y: auto !important;
}
.orcam-drawer-header-row {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    height: 56px !important;
    padding: 0 16px !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
    flex-shrink: 0 !important;
}
.orcam-drawer-close {
    background: transparent !important;
    border: none !important;
    color: #ffffff !important;
    width: 36px !important;
    height: 36px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    cursor: pointer !important;
    padding: 6px !important;
}
.orcam-drawer-header-center {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
}
.orcam-drawer-header-placeholder {
    width: 36px !important;
}
.orcam-drawer-nav {
    padding: 8px 20px 40px !important;
    flex: 1 !important;
}
.orcam-drawer-list {
    list-style: none !important;
    margin: 0 !important;
    padding: 0 !important;
}
.orcam-drawer-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
    position: relative !important;
    list-style: none !important;
}
.orcam-drawer-link,
.orcam-drawer-link-text {
    display: block !important;
    color: #ffffff !important;
    font-size: 15px !important;
    font-weight: 500 !important;
    padding: 16px 0 !important;
    text-decoration: none !important;
    letter-spacing: 0.2px !important;
}
.orcam-drawer-link:hover {
    color: #38bdf8 !important;
}
.orcam-drawer-toggle-row {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    cursor: pointer !important;
    user-select: none !important;
}
.orcam-drawer-toggle-btn {
    background: transparent !important;
    border: none !important;
    color: #94a3b8 !important;
    cursor: pointer !important;
    padding: 8px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
}
.orcam-drawer-chevron {
    transition: transform 0.25s ease !important;
    color: #94a3b8 !important;
}
.orcam-drawer-has-sub.is-open .orcam-drawer-chevron {
    transform: rotate(180deg) !important;
    color: #38bdf8 !important;
}
.orcam-drawer-submenu {
    display: none !important;
    list-style: none !important;
    margin: 0 !important;
    padding: 0 0 12px 16px !important;
}
.orcam-drawer-has-sub.is-open .orcam-drawer-submenu {
    display: block !important;
}
.orcam-drawer-submenu li {
    list-style: none !important;
    margin: 0 !important;
    padding: 0 !important;
}
.orcam-drawer-submenu li a {
    display: block !important;
    padding: 10px 0 !important;
    color: #cbd5e1 !important;
    font-size: 14px !important;
    font-weight: 400 !important;
    text-decoration: none !important;
}
.orcam-drawer-submenu li a:hover {
    color: #38bdf8 !important;
}
</style>
<header class="orcam-master-header" id="orcam-masthead">
    <!-- Desktop Header Bar -->
    <div class="orcam-desktop-header-wrap">
        <div class="orcam-header-container">
            <div class="orcam-header-row">
                <div class="orcam-header-brand">
                    <a href="' . $home_url . '" class="orcam-logo-link" rel="home" title="OrCam Việt Nam">
                        <img src="' . esc_url($logo_url) . '" alt="OrCam" class="orcam-logo-img" width="105" height="28" />
                    </a>
                </div>

                <nav class="orcam-header-nav" aria-label="Điều hướng chính">
                    <ul class="orcam-nav-list">
                        <!-- Menu Item: Thị lực kém -->
                        <li class="orcam-nav-item">
                            <a href="' . $low_vision_url . '" class="orcam-nav-link">Thị lực kém</a>
                        </li>

                        <!-- Menu Item: Đọc và học tập -->
                        <li class="orcam-nav-item">
                            <a href="' . $learn_url . '" class="orcam-nav-link">Đọc và học tập</a>
                        </li>

                        <!-- Menu Item: Tài nguyên -->
                        <li class="orcam-nav-item orcam-has-dropdown">
                            <a href="' . $blog_url . '" class="orcam-nav-link">
                                Tài nguyên
                                <svg class="orcam-arrow-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </a>
                            <ul class="orcam-dropdown-menu">
                                <li><a href="' . $blog_url . '">Bài viết</a></li>
                                <li><a href="' . $learn_test_url . '">Cảm nhận về OrCam Learn</a></li>
                                <li><a href="' . $read3_test_url . '">Cảm nhận về OrCam Read 3</a></li>
                                <li><a href="' . $events_url . '">Sự kiện</a></li>
                            </ul>
                        </li>

                        <!-- Menu Item: Giới thiệu -->
                        <li class="orcam-nav-item orcam-has-dropdown">
                            <a href="' . $leadership_url . '" class="orcam-nav-link">
                                Giới thiệu
                                <svg class="orcam-arrow-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </a>
                            <ul class="orcam-dropdown-menu">
                                <li><a href="' . $leadership_url . '">Ban lãnh đạo</a></li>
                                <li><a href="' . $distributor_url . '">Nhà phân phối</a></li>
                                <li><a href="' . $pressroom_url . '">Tin tức</a></li>
                                <li><a href="' . $partners_url . '">Đối tác</a></li>
                                <li><a href="' . $contact_url . '">Liên hệ</a></li>
                            </ul>
                        </li>

                        <!-- Menu Item: Hỗ trợ -->
                        <li class="orcam-nav-item orcam-has-dropdown">
                            <a href="' . $submit_case_url . '" class="orcam-nav-link">
                                Hỗ trợ
                                <svg class="orcam-arrow-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </a>
                            <ul class="orcam-dropdown-menu">
                                <li><a href="' . $helpcenter_url . '" target="_blank" rel="noopener">Trung tâm trợ giúp</a></li>
                                <li><a href="' . $faq_url . '">Câu hỏi thường gặp</a></li>
                                <li><a href="' . $release_notes_url . '">Ghi chú phát hành</a></li>
                                <li><a href="' . $submit_case_url . '">Gửi yêu cầu hỗ trợ</a></li>
                            </ul>
                        </li>

                        <!-- Menu Item: Trường học -->
                        <li class="orcam-nav-item">
                            <a href="' . $schools_url . '" class="orcam-nav-link">Trường học</a>
                        </li>

                        <!-- Menu Item: Sự kiện -->
                        <li class="orcam-nav-item">
                            <a href="' . $events_url . '" class="orcam-nav-link">Sự kiện</a>
                        </li>

                        <!-- Menu Item: Tìm đại lý -->
                        <li class="orcam-nav-item">
                            <a href="' . $distributor_url . '" class="orcam-nav-link">Tìm đại lý gần bạn</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <!-- Mobile Header Bar (Matches Exact Screenshot: Hamburger Left, Logo Center) -->
    <div class="orcam-mobile-header-wrap">
        <div class="orcam-mobile-header-row">
            <button type="button" class="orcam-mobile-menu-trigger" id="orcam-mobile-menu-btn" aria-label="Mở menu">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
            <div class="orcam-mobile-header-center">
                <a href="' . $home_url . '" class="orcam-logo-link" rel="home">
                    <img src="' . esc_url($logo_url) . '" alt="OrCam" class="orcam-logo-img" width="96" height="25" />
                </a>
            </div>
            <div class="orcam-mobile-header-placeholder"></div>
        </div>
    </div>
</header>

<!-- Mobile Drawer Fullscreen Modal (Matches Exact Screenshot: Close Left, Logo Center, Accordion Rows) -->
<div class="orcam-mobile-drawer" id="orcam-mobile-drawer" style="display:none;">
    <div class="orcam-mobile-drawer-overlay" id="orcam-drawer-overlay"></div>
    <div class="orcam-mobile-drawer-content">
        <div class="orcam-drawer-header-row">
            <button type="button" class="orcam-drawer-close" id="orcam-drawer-close" aria-label="Đóng menu">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <div class="orcam-drawer-header-center">
                <a href="' . $home_url . '">
                    <img src="' . esc_url($logo_url) . '" alt="OrCam" class="orcam-logo-img" width="96" height="25" />
                </a>
            </div>
            <div class="orcam-drawer-header-placeholder"></div>
        </div>

        <nav class="orcam-drawer-nav" id="orcam-drawer-nav">
            <ul class="orcam-drawer-list">
                <!-- 1. Thị lực kém -->
                <li class="orcam-drawer-item">
                    <a href="' . $low_vision_url . '" class="orcam-drawer-link">Thị lực kém</a>
                </li>

                <!-- 2. Đọc và học tập -->
                <li class="orcam-drawer-item">
                    <a href="' . $learn_url . '" class="orcam-drawer-link">Đọc và học tập</a>
                </li>

                <!-- 3. Tài nguyên (Accordion) -->
                <li class="orcam-drawer-item orcam-drawer-has-sub">
                    <div class="orcam-drawer-toggle-row">
                        <span class="orcam-drawer-link-text">Tài nguyên</span>
                        <button type="button" class="orcam-drawer-toggle-btn" aria-label="Mở rộng Tài nguyên">
                            <svg class="orcam-drawer-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                    </div>
                    <ul class="orcam-drawer-submenu">
                        <li><a href="' . $blog_url . '">Bài viết</a></li>
                        <li><a href="' . $learn_test_url . '">Cảm nhận về OrCam Learn</a></li>
                        <li><a href="' . $read3_test_url . '">Cảm nhận về OrCam Read 3</a></li>
                        <li><a href="' . $events_url . '">Sự kiện</a></li>
                    </ul>
                </li>

                <!-- 4. Giới thiệu (Accordion) -->
                <li class="orcam-drawer-item orcam-drawer-has-sub">
                    <div class="orcam-drawer-toggle-row">
                        <span class="orcam-drawer-link-text">Giới thiệu</span>
                        <button type="button" class="orcam-drawer-toggle-btn" aria-label="Mở rộng Giới thiệu">
                            <svg class="orcam-drawer-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                    </div>
                    <ul class="orcam-drawer-submenu">
                        <li><a href="' . $leadership_url . '">Ban lãnh đạo</a></li>
                        <li><a href="' . $distributor_url . '">Nhà phân phối</a></li>
                        <li><a href="' . $pressroom_url . '">Tin tức</a></li>
                        <li><a href="' . $partners_url . '">Đối tác</a></li>
                        <li><a href="' . $contact_url . '">Liên hệ</a></li>
                    </ul>
                </li>

                <!-- 5. Hỗ trợ (Accordion) -->
                <li class="orcam-drawer-item orcam-drawer-has-sub">
                    <div class="orcam-drawer-toggle-row">
                        <span class="orcam-drawer-link-text">Hỗ trợ</span>
                        <button type="button" class="orcam-drawer-toggle-btn" aria-label="Mở rộng Hỗ trợ">
                            <svg class="orcam-drawer-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                    </div>
                    <ul class="orcam-drawer-submenu">
                        <li><a href="' . $helpcenter_url . '" target="_blank" rel="noopener">Trung tâm trợ giúp</a></li>
                        <li><a href="' . $faq_url . '">Câu hỏi thường gặp</a></li>
                        <li><a href="' . $release_notes_url . '">Ghi chú phát hành</a></li>
                        <li><a href="' . $submit_case_url . '">Gửi yêu cầu hỗ trợ</a></li>
                    </ul>
                </li>

                <!-- 6. Trường học (Accordion) -->
                <li class="orcam-drawer-item orcam-drawer-has-sub">
                    <div class="orcam-drawer-toggle-row">
                        <span class="orcam-drawer-link-text">Trường học</span>
                        <button type="button" class="orcam-drawer-toggle-btn" aria-label="Mở rộng Trường học">
                            <svg class="orcam-drawer-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                    </div>
                    <ul class="orcam-drawer-submenu">
                        <li><a href="' . $schools_url . '">OrCam Learn dành cho trường học</a></li>
                    </ul>
                </li>

                <!-- 7. Sự kiện -->
                <li class="orcam-drawer-item">
                    <a href="' . $events_url . '" class="orcam-drawer-link">Sự kiện</a>
                </li>

                <!-- 8. Tìm đại lý gần bạn -->
                <li class="orcam-drawer-item">
                    <a href="' . $distributor_url . '" class="orcam-drawer-link">Tìm đại lý gần bạn</a>
                </li>
            </ul>
        </nav>
    </div>
</div>

<script>
(function() {
    var btn = document.getElementById("orcam-mobile-menu-btn");
    var drawer = document.getElementById("orcam-mobile-drawer");
    var closeBtn = document.getElementById("orcam-drawer-close");
    var overlay = document.getElementById("orcam-drawer-overlay");
    
    function openDrawer() { 
        if (drawer) {
            drawer.style.display = "block"; 
            document.body.style.overflow = "hidden";
        }
    }
    function closeDrawer() { 
        if (drawer) {
            drawer.style.display = "none"; 
            document.body.style.overflow = "";
        }
    }
    
    if (btn) btn.addEventListener("click", openDrawer);
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
    if (overlay) overlay.addEventListener("click", closeDrawer);
    
    // Accordion handling for drawer sub-menus
    var toggleRows = document.querySelectorAll(".orcam-drawer-has-sub .orcam-drawer-toggle-row");
    toggleRows.forEach(function(row) {
        row.addEventListener("click", function(e) {
            var parent = row.closest(".orcam-drawer-has-sub");
            if (parent) {
                parent.classList.toggle("is-open");
            }
        });
    });

    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && drawer && drawer.style.display === "block") {
            closeDrawer();
        }
    });
})();
</script>';
}