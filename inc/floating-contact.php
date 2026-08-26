<?php
/**
 * OrCam Vietnam - Floating Contact Button & Office Locations Modal
 * Palette: Blue, Black, White (Xanh - Đen - Trắng)
 * Typography: Same theme font (Roboto, Arial, sans-serif, inherit)
 * Icon: Official Zalo App Icon
 * 
 * @package orcam_theme
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('wp_footer', 'orcam_render_floating_contact_widget', 99);

function orcam_render_floating_contact_widget(): void {
    if (is_admin()) {
        return;
    }
    echo orcam_get_floating_contact_widget_html();
}

function orcam_get_floating_contact_widget_html(): string {
    ob_start();
    ?>
    <!-- OrCam Vietnam Floating Contact Widget (Blue - Black - White) -->
    <div id="orcam-contact-widget" class="orcam-cw-root">
        <!-- Floating Action Button -->
        <button id="orcam-cw-trigger" class="orcam-cw-fab" type="button" aria-label="Liên hệ với OrCam Việt Nam" title="Liên hệ với OrCam Việt Nam">
            <span class="orcam-cw-pulse"></span>
            <span class="orcam-cw-fab-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.47 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.09 6.09l1.81-1.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
            </span>
        </button>

        <!-- Quick Contact Popup -->
        <div id="orcam-cw-quick-popup" class="orcam-cw-quick-menu" aria-hidden="true">
            <div class="orcam-cw-quick-header">
                <div class="orcam-cw-quick-title">Liên hệ với OrCam VN</div>
                <button type="button" class="orcam-cw-close-btn" id="orcam-cw-quick-close" aria-label="Đóng menu">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#ffffff" stroke-width="2.5" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
            <div class="orcam-cw-quick-body">
                <!-- Hotline Item -->
                <a href="tel:1900638400" class="orcam-cw-item orcam-cw-item-hotline">
                    <div class="orcam-cw-item-icon orcam-cw-icon-blue">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.47 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.09 6.09l1.81-1.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                    </div>
                    <div class="orcam-cw-item-content">
                        <span class="orcam-cw-item-label">Số điện thoại Hotline</span>
                        <strong class="orcam-cw-item-value orcam-cw-val-blue">1900.63.8400</strong>
                    </div>
                </a>

                <!-- Zalo Item (Official Zalo Chat Icon) -->
                <a href="https://zalo.me/0917834532" target="_blank" rel="noopener noreferrer" class="orcam-cw-item orcam-cw-item-zalo">
                    <div class="orcam-cw-item-icon orcam-cw-icon-zalo">
                        <svg viewBox="0 0 44 44" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="44" height="44" rx="12" fill="#0068FF"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 8.5C14.544 8.5 8.5 13.784 8.5 20.3c0 3.76 2.015 7.118 5.183 9.319-.229 1.98-1.173 4.61-1.235 4.795-.125.387.177.764.56.632 2.215-.745 5.19-2.062 6.594-2.94.757.13 1.55.194 2.398.194 7.456 0 13.5-5.284 13.5-11.8S29.456 8.5 22 8.5z" fill="#FFFFFF"/>
                            <path d="M12.4 23.5h3.6c.3 0 .5-.2.5-.5v-.2c0-.3-.2-.5-.5-.5h-2.3l2.8-3.9c.1-.2.1-.4 0-.6-.1-.2-.3-.3-.5-.3h-3.4c-.3 0-.5.2-.5.5v.2c0 .3.2.5.5.5h2.1l-2.8 3.9c-.1.2-.1.4 0 .6.1.2.3.3.5.3z" fill="#0068FF"/>
                            <path d="M19.4 23.6c1.5 0 2.5-.9 2.5-2.2v-2.6c0-.3-.2-.5-.5-.5h-.4c-.3 0-.5.2-.5.5v.3c-.3-.5-.9-.9-1.6-.9-1.4 0-2.4 1.1-2.4 2.7 0 1.6 1 2.7 2.4 2.7zm.2-1.1c-.8 0-1.4-.7-1.4-1.6 0-.9.6-1.6 1.4-1.6.8 0 1.4.7 1.4 1.6 0 .9-.6 1.6-1.4 1.6z" fill="#0068FF"/>
                            <path d="M23.5 23.5h.4c.3 0 .5-.2.5-.5v-4.7c0-.3-.2-.5-.5-.5h-.4c-.3 0-.5.2-.5.5V23c0 .3.2.5.5.5z" fill="#0068FF"/>
                            <path d="M28.2 23.6c1.6 0 2.7-1.2 2.7-2.7 0-1.6-1.1-2.7-2.7-2.7s-2.7 1.1-2.7 2.7c0 1.5 1.1 2.7 2.7 2.7zm0-1.1c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6c0 .9-.7 1.6-1.6 1.6z" fill="#0068FF"/>
                        </svg>
                    </div>
                    <div class="orcam-cw-item-content">
                        <span class="orcam-cw-item-label">Chat qua Zalo</span>
                        <span class="orcam-cw-item-desc orcam-cw-val-blue">Nhắn tin tư vấn ngay</span>
                    </div>
                </a>

                <!-- Offices Modal Trigger Item -->
                <button type="button" class="orcam-cw-item orcam-cw-item-office" id="orcam-cw-open-offices">
                    <div class="orcam-cw-item-icon orcam-cw-icon-dark">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                    </div>
                    <div class="orcam-cw-item-content">
                        <span class="orcam-cw-item-label">Công ty OrCam Việt Nam</span>
                        <span class="orcam-cw-item-desc orcam-cw-val-muted">Xem hệ thống văn phòng</span>
                    </div>
                    <span class="orcam-cw-arrow-indicator">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </span>
                </button>
            </div>
        </div>

        <!-- Full Office Locations Modal (Overlay) -->
        <div id="orcam-cw-offices-modal" class="orcam-cw-modal-backdrop" aria-hidden="true">
            <div class="orcam-cw-modal-container" role="dialog" aria-modal="true" aria-labelledby="orcam-modal-heading">
                <!-- Modal Header -->
                <div class="orcam-cw-modal-header">
                    <div class="orcam-cw-modal-header-left">
                        <div class="orcam-cw-modal-badge-icon">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 21h18M3 7v14M21 7v14M6 7V3h12v4M9 11h.01M9 15h.01M15 11h.01M15 15h.01"/>
                            </svg>
                        </div>
                        <div class="orcam-cw-modal-header-text">
                            <span class="orcam-cw-modal-sub">ORCAM VIỆT NAM</span>
                            <h3 id="orcam-modal-heading" class="orcam-cw-modal-title">Hệ thống văn phòng</h3>
                        </div>
                    </div>
                    <button type="button" class="orcam-cw-close-btn orcam-cw-modal-close" id="orcam-cw-modal-close" aria-label="Đóng hệ thống văn phòng">
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="#ffffff" stroke-width="2.5" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>

                <!-- Modal Body: 2 Branches -->
                <div class="orcam-cw-modal-body">
                    <div class="orcam-cw-branches-grid">
                        <!-- Hanoi Branch -->
                        <div class="orcam-cw-branch-card">
                            <div class="orcam-cw-branch-top">
                                <span class="orcam-cw-city-tag">HÀ NỘI</span>
                                <span class="orcam-cw-region-tag">Chi nhánh miền Bắc</span>
                            </div>
                            <h4 class="orcam-cw-branch-name">Công ty OrCam Việt Nam – Chi nhánh Hà Nội</h4>
                            <div class="orcam-cw-branch-info-list">
                                <div class="orcam-cw-info-row">
                                    <div class="orcam-cw-info-icon">
                                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                                    </div>
                                    <div class="orcam-cw-info-detail">
                                        <span class="orcam-cw-info-label">Địa chỉ</span>
                                        <p class="orcam-cw-info-text">Số 226 Đường Láng, Phường Thịnh Quang, Quận Đống Đa, Hà Nội</p>
                                        <a href="https://maps.google.com/?q=226+Đường+Láng,+Thịnh+Quang,+Đống+Đa,+Hà+Nội" target="_blank" rel="noopener noreferrer" class="orcam-cw-map-link">
                                            Xem trên Google Maps <span class="orcam-cw-arrow">→</span>
                                        </a>
                                    </div>
                                </div>

                                <div class="orcam-cw-info-row">
                                    <div class="orcam-cw-info-icon">
                                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    </div>
                                    <div class="orcam-cw-info-detail">
                                        <span class="orcam-cw-info-label">Email</span>
                                        <a href="mailto:contact@orcam.vn" class="orcam-cw-email-link">contact@orcam.vn</a>
                                    </div>
                                </div>

                                <div class="orcam-cw-info-row">
                                    <div class="orcam-cw-info-icon">
                                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    </div>
                                    <div class="orcam-cw-info-detail">
                                        <span class="orcam-cw-info-label">Giờ làm việc</span>
                                        <p class="orcam-cw-info-text">7:00 – 21:00 · Tất cả các ngày trong tuần</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Ho Chi Minh Branch -->
                        <div class="orcam-cw-branch-card">
                            <div class="orcam-cw-branch-top">
                                <span class="orcam-cw-city-tag">TP. HỒ CHÍ MINH</span>
                                <span class="orcam-cw-region-tag">Chi nhánh miền Nam</span>
                            </div>
                            <h4 class="orcam-cw-branch-name">Công ty OrCam Việt Nam – Chi nhánh Hồ Chí Minh</h4>
                            <div class="orcam-cw-branch-info-list">
                                <div class="orcam-cw-info-row">
                                    <div class="orcam-cw-info-icon">
                                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                                    </div>
                                    <div class="orcam-cw-info-detail">
                                        <span class="orcam-cw-info-label">Địa chỉ</span>
                                        <p class="orcam-cw-info-text">Số 137 Đường Hòa Hưng, Phường 12, Quận 10, TP. Hồ Chí Minh</p>
                                        <a href="https://maps.google.com/?q=137+Hòa+Hưng,+Phường+12,+Quận+10,+Thành+phố+Hồ+Chí+Minh" target="_blank" rel="noopener noreferrer" class="orcam-cw-map-link">
                                            Xem trên Google Maps <span class="orcam-cw-arrow">→</span>
                                        </a>
                                    </div>
                                </div>

                                <div class="orcam-cw-info-row">
                                    <div class="orcam-cw-info-icon">
                                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    </div>
                                    <div class="orcam-cw-info-detail">
                                        <span class="orcam-cw-info-label">Email</span>
                                        <a href="mailto:contact@orcam.vn" class="orcam-cw-email-link">contact@orcam.vn</a>
                                    </div>
                                </div>

                                <div class="orcam-cw-info-row">
                                    <div class="orcam-cw-info-icon">
                                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    </div>
                                    <div class="orcam-cw-info-detail">
                                        <span class="orcam-cw-info-label">Giờ làm việc</span>
                                        <p class="orcam-cw-info-text">8:00 – 20:30 · Thứ 2 đến Thứ 7</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modal Footer -->
                <div class="orcam-cw-modal-footer">
                    <div class="orcam-cw-modal-footer-cta">
                        <span class="orcam-cw-footer-title">Cần tư vấn ngay?</span>
                        <span class="orcam-cw-footer-desc">Đội ngũ chuyên viên OrCam luôn sẵn sàng hỗ trợ bạn</span>
                    </div>
                    <a href="tel:1900638400" class="orcam-cw-footer-hotline-btn">
                        <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.47 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.09 6.09l1.81-1.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        <span>HOTLINE 1900.63.8400</span>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Styles: Only 3 colors: Blue (#2563eb / #1d4ed8), Black (#0f172a / #1e293b), White (#ffffff / #f8fafc) + Shared Theme Font -->
    <style>
        .orcam-cw-root,
        .orcam-cw-root *,
        .orcam-cw-root *::before,
        .orcam-cw-root *::after {
            box-sizing: border-box !important;
            font-family: inherit, "Roboto", Arial, sans-serif !important;
        }

        .orcam-cw-root {
            --orcam-blue: #2563eb;
            --orcam-blue-dark: #1d4ed8;
            --orcam-blue-gradient: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
            --orcam-blue-light: #eff6ff;
            --orcam-blue-border: #dbeafe;
            --orcam-black: #0f172a;
            --orcam-dark: #1e293b;
            --orcam-muted: #64748b;
            --orcam-white: #ffffff;
            --orcam-bg-light: #f8fafc;
            --orcam-border: #e2e8f0;
            position: fixed !important;
            bottom: 24px !important;
            right: 24px !important;
            z-index: 999990 !important;
        }

        /* Floating Action Button (Blue - Black - White) */
        .orcam-cw-fab {
            position: relative !important;
            width: 60px !important;
            height: 60px !important;
            border-radius: 50% !important;
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%) !important;
            border: 2.5px solid #ffffff !important;
            cursor: pointer !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            color: #ffffff !important;
            box-shadow: 0 8px 24px -4px rgba(37, 99, 235, 0.5), 0 4px 10px rgba(15, 23, 42, 0.15) !important;
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease !important;
            outline: none !important;
            padding: 0 !important;
            z-index: 10 !important;
        }

        .orcam-cw-fab:hover {
            transform: scale(1.08) translateY(-2px) !important;
            box-shadow: 0 12px 28px -2px rgba(37, 99, 235, 0.65), 0 6px 14px rgba(15, 23, 42, 0.2) !important;
            background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%) !important;
        }

        .orcam-cw-fab:active {
            transform: scale(0.96) !important;
        }

        .orcam-cw-fab-icon {
            width: 28px !important;
            height: 28px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            color: #ffffff !important;
        }

        .orcam-cw-fab-icon svg {
            width: 100% !important;
            height: 100% !important;
            stroke: #ffffff !important;
            filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2)) !important;
        }

        /* Pulse wave (Blue) */
        .orcam-cw-pulse {
            position: absolute !important;
            top: -4px !important;
            left: -4px !important;
            right: -4px !important;
            bottom: -4px !important;
            border-radius: 50% !important;
            border: 2.5px solid rgba(37, 99, 235, 0.7) !important;
            animation: orcamCwPulse 2.2s cubic-bezier(0.24, 0, 0.38, 1) infinite !important;
            pointer-events: none !important;
        }

        @keyframes orcamCwPulse {
            0% {
                transform: scale(0.95);
                opacity: 0.9;
            }
            70% {
                transform: scale(1.4);
                opacity: 0;
            }
            100% {
                transform: scale(1.4);
                opacity: 0;
            }
        }

        /* Quick Contact Popup Menu */
        .orcam-cw-quick-menu {
            position: absolute !important;
            bottom: 74px !important;
            right: 0 !important;
            width: 320px !important;
            background: #ffffff !important;
            border-radius: 18px !important;
            border: 1px solid rgba(15, 23, 42, 0.08) !important;
            box-shadow: 0 20px 48px -8px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04) !important;
            overflow: hidden !important;
            opacity: 0 !important;
            visibility: hidden !important;
            transform: translateY(16px) scale(0.95) !important;
            transform-origin: bottom right !important;
            transition: opacity 0.28s ease, transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.28s !important;
            z-index: 20 !important;
        }

        .orcam-cw-quick-menu.is-active {
            opacity: 1 !important;
            visibility: visible !important;
            transform: translateY(0) scale(1) !important;
        }

        .orcam-cw-quick-header {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%) !important;
            color: #ffffff !important;
            padding: 16px 20px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            border-bottom: 2px solid #2563eb !important;
        }

        .orcam-cw-quick-title {
            font-size: 15.5px !important;
            font-weight: 700 !important;
            letter-spacing: -0.01em !important;
            color: #ffffff !important;
        }

        .orcam-cw-close-btn {
            background: rgba(255, 255, 255, 0.12) !important;
            border: none !important;
            border-radius: 50% !important;
            width: 28px !important;
            height: 28px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            color: #ffffff !important;
            cursor: pointer !important;
            transition: background 0.2s ease, transform 0.2s ease !important;
            outline: none !important;
            padding: 0 !important;
        }

        .orcam-cw-close-btn:hover {
            background: rgba(37, 99, 235, 0.5) !important;
            transform: scale(1.08) !important;
        }

        .orcam-cw-quick-body {
            padding: 14px !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 10px !important;
            background: #ffffff !important;
        }

        .orcam-cw-item {
            display: flex !important;
            align-items: center !important;
            gap: 14px !important;
            padding: 12px 14px !important;
            border-radius: 12px !important;
            background: #f8fafc !important;
            border: 1px solid #e2e8f0 !important;
            text-decoration: none !important;
            cursor: pointer !important;
            transition: all 0.22s ease !important;
            width: 100% !important;
            text-align: left !important;
        }

        .orcam-cw-item:hover {
            background: #ffffff !important;
            border-color: #2563eb !important;
            box-shadow: 0 4px 14px rgba(37, 99, 235, 0.1) !important;
            transform: translateY(-1px) !important;
        }

        .orcam-cw-item-icon {
            width: 44px !important;
            height: 44px !important;
            border-radius: 12px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex-shrink: 0 !important;
            transition: transform 0.2s ease !important;
            overflow: hidden !important;
        }

        .orcam-cw-item:hover .orcam-cw-item-icon {
            transform: scale(1.06) !important;
        }

        .orcam-cw-icon-blue {
            background: #eff6ff !important;
            color: #2563eb !important;
            border: 1px solid #dbeafe !important;
        }

        .orcam-cw-icon-zalo {
            background: transparent !important;
            box-shadow: 0 2px 8px rgba(0, 104, 255, 0.25) !important;
        }

        .orcam-cw-icon-dark {
            background: #0f172a !important;
            color: #ffffff !important;
        }

        .orcam-cw-item-content {
            display: flex !important;
            flex-direction: column !important;
            gap: 2px !important;
            flex-grow: 1 !important;
        }

        .orcam-cw-item-label {
            font-size: 13px !important;
            font-weight: 700 !important;
            color: #0f172a !important;
            line-height: 1.25 !important;
        }

        .orcam-cw-item-value {
            font-size: 14.5px !important;
            font-weight: 800 !important;
            letter-spacing: 0.2px !important;
        }

        .orcam-cw-val-blue {
            color: #2563eb !important;
        }

        .orcam-cw-item-desc {
            font-size: 12.5px !important;
            font-weight: 500 !important;
            line-height: 1.2 !important;
        }

        .orcam-cw-val-muted {
            color: #64748b !important;
        }

        .orcam-cw-arrow-indicator {
            color: #94a3b8 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: transform 0.2s ease, color 0.2s ease !important;
        }

        .orcam-cw-item:hover .orcam-cw-arrow-indicator {
            color: #2563eb !important;
            transform: translateX(2px) !important;
        }

        /* Full Office Locations Modal (Overlay) */
        .orcam-cw-modal-backdrop {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            background: rgba(15, 23, 42, 0.7) !important;
            backdrop-filter: blur(6px) !important;
            -webkit-backdrop-filter: blur(6px) !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 16px !important;
            z-index: 999999 !important;
            opacity: 0 !important;
            visibility: hidden !important;
            transition: opacity 0.3s ease, visibility 0.3s ease !important;
        }

        .orcam-cw-modal-backdrop.is-active {
            opacity: 1 !important;
            visibility: visible !important;
        }

        .orcam-cw-modal-container {
            width: 100% !important;
            max-width: 820px !important;
            max-height: 92vh !important;
            background: #ffffff !important;
            border-radius: 20px !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            box-shadow: 0 24px 60px -12px rgba(15, 23, 42, 0.4) !important;
            overflow: hidden !important;
            display: flex !important;
            flex-direction: column !important;
            transform: translateY(20px) scale(0.96) !important;
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .orcam-cw-modal-backdrop.is-active .orcam-cw-modal-container {
            transform: translateY(0) scale(1) !important;
        }

        .orcam-cw-modal-header {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%) !important;
            color: #ffffff !important;
            padding: 18px 24px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            flex-shrink: 0 !important;
            border-bottom: 3px solid #2563eb !important;
        }

        .orcam-cw-modal-header-left {
            display: flex !important;
            align-items: center !important;
            gap: 14px !important;
        }

        .orcam-cw-modal-badge-icon {
            width: 40px !important;
            height: 40px !important;
            border-radius: 10px !important;
            background: #2563eb !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            color: #ffffff !important;
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35) !important;
        }

        .orcam-cw-modal-header-text {
            display: flex !important;
            flex-direction: column !important;
        }

        .orcam-cw-modal-sub {
            font-size: 11px !important;
            font-weight: 800 !important;
            letter-spacing: 1px !important;
            text-transform: uppercase !important;
            color: #38bdf8 !important;
        }

        .orcam-cw-modal-title {
            font-size: 20px !important;
            font-weight: 800 !important;
            margin: 0 !important;
            line-height: 1.2 !important;
            color: #ffffff !important;
        }

        .orcam-cw-modal-body {
            padding: 22px !important;
            overflow-y: auto !important;
            background: #f8fafc !important;
            flex-grow: 1 !important;
        }

        .orcam-cw-branches-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 18px !important;
        }

        .orcam-cw-branch-card {
            background: #ffffff !important;
            border-radius: 16px !important;
            border: 1px solid #e2e8f0 !important;
            padding: 20px !important;
            display: flex !important;
            flex-direction: column !important;
            box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;
            transition: all 0.25s ease !important;
        }

        .orcam-cw-branch-card:hover {
            border-color: #2563eb !important;
            box-shadow: 0 8px 24px rgba(37, 99, 235, 0.08) !important;
        }

        .orcam-cw-branch-top {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            margin-bottom: 12px !important;
        }

        .orcam-cw-city-tag {
            font-size: 11px !important;
            font-weight: 800 !important;
            color: #1d4ed8 !important;
            background: #eff6ff !important;
            padding: 4px 10px !important;
            border-radius: 6px !important;
            letter-spacing: 0.4px !important;
            border: 1px solid #dbeafe !important;
        }

        .orcam-cw-region-tag {
            font-size: 11.5px !important;
            font-weight: 600 !important;
            color: #64748b !important;
        }

        .orcam-cw-branch-name {
            font-size: 15px !important;
            font-weight: 700 !important;
            color: #0f172a !important;
            margin: 0 0 16px 0 !important;
            line-height: 1.35 !important;
        }

        .orcam-cw-branch-info-list {
            display: flex !important;
            flex-direction: column !important;
            gap: 14px !important;
            margin-top: auto !important;
        }

        .orcam-cw-info-row {
            display: flex !important;
            align-items: flex-start !important;
            gap: 10px !important;
        }

        .orcam-cw-info-icon {
            width: 26px !important;
            height: 26px !important;
            border-radius: 6px !important;
            background: #eff6ff !important;
            color: #2563eb !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex-shrink: 0 !important;
            margin-top: 1px !important;
            border: 1px solid #dbeafe !important;
        }

        .orcam-cw-info-detail {
            display: flex !important;
            flex-direction: column !important;
            gap: 2px !important;
            flex-grow: 1 !important;
        }

        .orcam-cw-info-label {
            font-size: 11.5px !important;
            font-weight: 700 !important;
            color: #0f172a !important;
            text-transform: uppercase !important;
            letter-spacing: 0.3px !important;
        }

        .orcam-cw-info-text {
            font-size: 13px !important;
            color: #475569 !important;
            margin: 0 !important;
            line-height: 1.45 !important;
        }

        .orcam-cw-map-link {
            font-size: 12.5px !important;
            font-weight: 700 !important;
            color: #2563eb !important;
            text-decoration: none !important;
            display: inline-flex !important;
            align-items: center !important;
            gap: 4px !important;
            margin-top: 3px !important;
            transition: color 0.2s ease, gap 0.2s ease !important;
        }

        .orcam-cw-map-link:hover {
            color: #1d4ed8 !important;
            gap: 6px !important;
        }

        .orcam-cw-email-link {
            font-size: 13px !important;
            font-weight: 700 !important;
            color: #2563eb !important;
            text-decoration: none !important;
            transition: color 0.2s ease !important;
        }

        .orcam-cw-email-link:hover {
            color: #1d4ed8 !important;
            text-decoration: underline !important;
        }

        /* Modal Footer Bar (Black - Blue - White) */
        .orcam-cw-modal-footer {
            background: #ffffff !important;
            border-top: 1px solid #e2e8f0 !important;
            padding: 14px 24px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            flex-shrink: 0 !important;
            gap: 16px !important;
            flex-wrap: wrap !important;
        }

        .orcam-cw-modal-footer-cta {
            display: flex !important;
            flex-direction: column !important;
        }

        .orcam-cw-footer-title {
            font-size: 14px !important;
            font-weight: 800 !important;
            color: #0f172a !important;
        }

        .orcam-cw-footer-desc {
            font-size: 12.5px !important;
            color: #64748b !important;
        }

        .orcam-cw-footer-hotline-btn {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%) !important;
            color: #ffffff !important;
            padding: 10px 22px !important;
            border-radius: 30px !important;
            font-size: 14px !important;
            font-weight: 800 !important;
            text-decoration: none !important;
            display: inline-flex !important;
            align-items: center !important;
            gap: 8px !important;
            box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4) !important;
            transition: all 0.22s ease !important;
            letter-spacing: 0.3px !important;
        }

        .orcam-cw-footer-hotline-btn:hover {
            transform: translateY(-1px) !important;
            box-shadow: 0 6px 18px rgba(37, 99, 235, 0.55) !important;
            background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%) !important;
            color: #ffffff !important;
        }

        /* Responsive Breakpoints */
        @media (max-width: 680px) {
            .orcam-cw-root {
                bottom: 18px !important;
                right: 18px !important;
            }

            .orcam-cw-quick-menu {
                width: calc(100vw - 36px) !important;
                max-width: 320px !important;
                right: 0 !important;
            }

            .orcam-cw-branches-grid {
                grid-template-columns: 1fr !important;
                gap: 14px !important;
            }

            .orcam-cw-modal-body {
                padding: 16px !important;
            }

            .orcam-cw-modal-footer {
                flex-direction: column !important;
                align-items: stretch !important;
                text-align: center !important;
                gap: 10px !important;
                padding: 14px 18px !important;
            }

            .orcam-cw-footer-hotline-btn {
                justify-content: center !important;
            }
        }
    </style>

    <!-- OrCam Vietnam Contact Widget Interactions -->
    <script>
    (function() {
        function initOrCamContactWidget() {
            var trigger = document.getElementById('orcam-cw-trigger');
            var quickPopup = document.getElementById('orcam-cw-quick-popup');
            var quickClose = document.getElementById('orcam-cw-quick-close');
            var openOfficesBtn = document.getElementById('orcam-cw-open-offices');
            var officesModal = document.getElementById('orcam-cw-offices-modal');
            var modalClose = document.getElementById('orcam-cw-modal-close');

            if (!trigger || !quickPopup || trigger.dataset.bound) return;
            trigger.dataset.bound = 'true';

            function toggleQuickPopup(e) {
                if (e) e.stopPropagation();
                var isActive = quickPopup.classList.contains('is-active');
                if (isActive) {
                    closeQuickPopup();
                } else {
                    quickPopup.classList.add('is-active');
                    quickPopup.setAttribute('aria-hidden', 'false');
                }
            }

            function closeQuickPopup() {
                quickPopup.classList.remove('is-active');
                quickPopup.setAttribute('aria-hidden', 'true');
            }

            function openOfficesModal(e) {
                if (e) e.stopPropagation();
                closeQuickPopup();
                if (officesModal) {
                    officesModal.classList.add('is-active');
                    officesModal.setAttribute('aria-hidden', 'false');
                    document.body.style.overflow = 'hidden';
                }
            }

            function closeOfficesModal() {
                if (officesModal) {
                    officesModal.classList.remove('is-active');
                    officesModal.setAttribute('aria-hidden', 'true');
                    document.body.style.overflow = '';
                }
            }

            // Event listeners
            trigger.addEventListener('click', toggleQuickPopup);
            if (quickClose) quickClose.addEventListener('click', closeQuickPopup);
            if (openOfficesBtn) openOfficesBtn.addEventListener('click', openOfficesModal);
            if (modalClose) modalClose.addEventListener('click', closeOfficesModal);

            // Click outside to close quick menu
            document.addEventListener('click', function(e) {
                if (!quickPopup.contains(e.target) && !trigger.contains(e.target)) {
                    closeQuickPopup();
                }
            });

            // Click on backdrop to close modal
            if (officesModal) {
                officesModal.addEventListener('click', function(e) {
                    if (e.target === officesModal) {
                        closeOfficesModal();
                    }
                });
            }

            // Close on Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' || e.keyCode === 27) {
                    closeQuickPopup();
                    closeOfficesModal();
                }
            });
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initOrCamContactWidget);
        } else {
            initOrCamContactWidget();
        }
        setTimeout(initOrCamContactWidget, 500);
        setTimeout(initOrCamContactWidget, 1500);
    })();
    </script>
    <?php
    return (string) ob_get_clean();
}
