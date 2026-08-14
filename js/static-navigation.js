(function () {
    'use strict';

    var themeUri = window.orcamThemeUri || '';
    if (window.orcamAuthoritativeTitle) {
        document.title = window.orcamAuthoritativeTitle;
    }
    var initialBlogIndex = document.querySelector('.orcam-blog-index');
    var savedBlogIndex = initialBlogIndex ? initialBlogIndex.cloneNode(true) : null;
    var initialBlogArticle = document.querySelector('.orcam-blog');
    var savedBlogArticle = initialBlogArticle ? initialBlogArticle.cloneNode(true) : null;
    var savedBlogArticleLength = savedBlogArticle
        ? (savedBlogArticle.textContent || '').replace(/\s+/g, ' ').trim().length
        : 0;
    var preserveBlogScheduled = false;
    var nativeWooContent = document.querySelector('article#mainBody > .orcam-shop, article#mainBody > .orcam-default-product, article#mainBody > .orcam-checkout');
    var savedNativeWooContent = nativeWooContent ? nativeWooContent.cloneNode(true) : null;
    var preserveNativeWooScheduled = false;

    /** Keep exported and hydrated headers, mobile drawers, submenus and footers in Vietnamese. */
    function normalizeHeaderNavigation(root) {
        var labelsByPath = {
            '/vi/low-vision': 'Thị lực kém',
            '/vi/orcam-learn': 'Đọc và học tập',
            '/vi/blog': 'Bài viết',
            '/vi/orcam-learn-testimonials': 'Cảm nhận về OrCam Learn',
            '/vi/orcam-read-3-testimonials': 'Cảm nhận về OrCam Read 3',
            '/vi/orcam-documents': 'Tài liệu',
            '/vi/events': 'Sự kiện',
            '/vi/leadership': 'Ban lãnh đạo',
            '/vi/pressroom': 'Tin tức',
            '/vi/contact-us': 'Liên hệ',
            '/vi/faq': 'Câu hỏi thường gặp',
            '/vi/release-notes': 'Ghi chú phát hành',
            '/vi/submit-case': 'Gửi yêu cầu hỗ trợ',
            '/vi/orcam-learn-schools': 'OrCam Learn dành cho trường học',
            '/vi/shop': 'Tất cả sản phẩm',
            '/vi/shop/': 'Tất cả sản phẩm'
        };

        var textDict = {
            'Low Vision': 'Thị lực kém',
            'Reading and Learning': 'Đọc và học tập',
            'Reading & Learning': 'Đọc và học tập',
            'Resources': 'Tài nguyên',
            'About': 'Giới thiệu',
            'Support': 'Hỗ trợ',
            'Schools': 'Trường học',
            'Events': 'Sự kiện',
            'Find Us Near You': 'Tìm đại lý gần bạn',
            'Products': 'Sản phẩm',
            'Blog': 'Bài viết',
            'Leadership': 'Ban lãnh đạo',
            'Distributors': 'Nhà phân phối',
            'News': 'Tin tức',
            'Affiliates': 'Đối tác',
            'Careers': 'Tuyển dụng',
            'Help Center': 'Trung tâm trợ giúp',
            'Release Notes': 'Ghi chú phát hành',
            'Submit a case': 'Gửi yêu cầu hỗ trợ',
            'Contact Us': 'Liên hệ',
            'Contact us': 'Liên hệ',
            'Contact Us ': 'Liên hệ',
            'Learn More': 'Tìm hiểu thêm',
            'Learn more': 'Tìm hiểu thêm',
            'Show More': 'Tải thêm',
            'Show more': 'Tải thêm',
            'Hiển thị thêm': 'Tải thêm',
            'Buy Now': 'Mua ngay',
            'Buy now': 'Mua ngay',
            'Order Now': 'Đặt hàng ngay',
            'Back to top': 'Về đầu trang',
            'Speak with an OrCam Specialist': 'Tư vấn với chuyên viên OrCam',
            'Talk to OrCam Specialist': 'Trò chuyện với chuyên viên OrCam',
            'OrCam Learn Testimonials': 'Cảm nhận về OrCam Learn',
            'OrCam Read 3 Testimonials': 'Cảm nhận về OrCam Read 3',
            'OrCam Learn For Schools': 'OrCam Learn dành cho trường học',
            'Accessibility': 'Trợ năng',
            'Cookies Policy': 'Chính sách cookie',
            'Terms Of Use': 'Điều khoản sử dụng',
            'Privacy Statement': 'Chính sách quyền riêng tư',
            'Terms & Conditions': 'Điều khoản và điều kiện',
            'Patent': 'Bằng sáng chế',
            'Identify Objects': 'Nhận diện đồ vật',
            'Identify Products, Nhận biết tiền tệ and Màu sắc': 'Nhận diện sản phẩm, tiền tệ và màu sắc',
            'Recognize Money notes,  Product & Màu sắc': 'Nhận diện tiền tệ, sản phẩm & màu sắc',
            'Recognize Money notes, Product & Màu sắc': 'Nhận diện tiền tệ, sản phẩm & màu sắc',
            'Recognize Faces': 'Nhận diện khuôn mặt',
            'Recognize loved ones': 'Nhận diện người thân',
            'Identify Products': 'Nhận diện sản phẩm',
            'Identifying Products': 'Nhận diện sản phẩm',
            'Money Notes': 'Nhận biết tiền tệ',
            'Color Detection': 'Nhận diện màu sắc',
            'Colors': 'Màu sắc',
            'Barcodes': 'Mã vạch',
            'Read Barcodes': 'Đọc mã vạch',
            'Your Voice is Key': 'Giọng nói của bạn là chìa khóa',
            '"Hey OrCam" Voice Commands': 'Lệnh thoại "Hey OrCam"',
            'Voice commands': 'Lệnh bằng giọng nói',
            'Your Interactive Reading Companion, Everywhere You Go': 'Người bạn đọc tương tác của bạn, mọi lúc mọi nơi',
            'Your Personal Reading Assistant Awaits!': 'Trợ lý đọc cá nhân đang chờ đón bạn!',
            'Your Reading, Your Rules': 'Cách bạn đọc, do bạn làm chủ',
            'Your Reading, <br>Your Rules': 'Cách bạn đọc, <br>do bạn làm chủ',
            'Your pocket-sized reading assistant.': 'Trợ lý đọc sách bỏ túi của bạn.',
            'Zoom in & out': 'Phóng to & thu nhỏ',
            'Zoom in&out': 'Phóng to & thu nhỏ',
            'Change contrast': 'Thay đổi độ tương phản',
            'Extract and copy text': 'Trích xuất và sao chép văn bản',
            'Converts image text to digital text': 'Chuyển văn bản hình ảnh thành văn bản số',
            'Connect to any screen': 'Kết nối với mọi màn hình',
            'Connect to most screens': 'Kết nối với hầu hết màn hình',
            'Supports over 140 languages': 'Hỗ trợ hơn 140 ngôn ngữ',
            'Stationary Reader': 'Thiết bị đọc cố định',
            'Works offline': 'Hoạt động ngoại tuyến',
            'Wireless': 'Không dây',
            'Portable': 'Di động',
            'Reading light': 'Đèn đọc sách',
            'Touch Bar': 'Thanh cảm ứng',
            'Handheld Device': 'Thiết bị cầm tay',
            'Handheld': 'Cầm tay',
            'Wearable': 'Thiết bị đeo',
            '1 Year Warranty': 'Bảo hành 1 năm',
            '2 Year Warranty': 'Bảo hành 2 năm',
            '1.5-2 Hours of active use': 'Thời lượng pin: 1,5-2 giờ',
            '4 Hours': 'Thời lượng pin: 4 giờ',
            'Smart reading': 'Đọc thông minh',
            'Smart Reading': 'Đọc thông minh',
            'Text reading': 'Đọc văn bản',
            'Reads handwriting': 'Đọc chữ viết tay',
            'Product Comparison': 'So sánh sản phẩm',
            'Summarize text': 'Tóm tắt văn bản',
            'Summarize text into main topics': 'Tóm tắt văn bản thành các chủ đề chính',
            'Utilizes intext and outsourced data': 'Sử dụng dữ liệu trong văn bản và dữ liệu mở rộng',
            'Advanced Magnification Meets the Power of AI': 'Khả năng phóng đại tiên tiến kết hợp sức mạnh của AI',
            'Advanced Magnification': 'Khả năng phóng đại tiên tiến',
            'Interactive AI Assistant': 'Trợ lý AI tương tác',
            'AI Assistant': 'Trợ lý AI',
            'AI Assistant-': 'Trợ lý AI - ',
            'AI Assistant -': 'Trợ lý AI - ',
            'Just ask': 'Chỉ cần hỏi',
            'Just Ask': 'Chỉ cần hỏi',
            'Uses intext and': 'Sử dụng dữ liệu',
            'outsource information': 'trong văn bản & mở rộng',
            'outsourced information': 'trong văn bản & mở rộng',
            'outsource data': 'trong văn bản & mở rộng',
            'Your Di động AI Assistant': 'Trợ lý AI di động của bạn',
            'Your Mobile AI Assistant': 'Trợ lý AI di động của bạn',
            'Kính lúp thông minh with AI Assistant': 'Kính lúp thông minh tích hợp Trợ lý AI',
            'The Kính lúp thông minh\'s "Just Ask" feature allows for intuitive interaction with the AI assistant for instant responses to all questions text-related or otherwise.': 'Tính năng "Chỉ cần hỏi" của Kính lúp thông minh cho phép bạn tương tác trực quan với trợ lý AI để nhận câu trả lời tức thì cho mọi câu hỏi, dù là về văn bản hay các chủ đề khác.',
            'The Kính lúp thông minh\'s  "Just Ask" feature allows for intuitive interaction with the AI assistant for instant responses to all questions text-related or otherwise.': 'Tính năng "Chỉ cần hỏi" của Kính lúp thông minh cho phép bạn tương tác trực quan với trợ lý AI để nhận câu trả lời tức thì cho mọi câu hỏi, dù là về văn bản hay các chủ đề khác.',
            'Discover the "Just Ask" feature while using OrCam\'s Kính lúp thông minh. Interact naturally with the AI assistant and receive immediate responses to all your questions, whether related to text or other subjects.': 'Khám phá tính năng "Chỉ cần hỏi" khi sử dụng Kính lúp thông minh của OrCam. Tương tác tự nhiên với trợ lý AI và nhận câu trả lời tức thì cho mọi câu hỏi của bạn, dù liên quan đến văn bản hay các chủ đề khác.',
            'Take advantage of the "Just Ask" Feature while using OrCam\'s Smart magnifier. Engage with the AI assistant naturally and get instant answers to your questions, whether about text or other topics.': 'Tận dụng tính năng "Chỉ cần hỏi" khi sử dụng Kính lúp thông minh của OrCam. Tương tác tự nhiên với trợ lý AI và nhận câu trả lời tức thì cho mọi thắc mắc của bạn, từ văn bản đến các chủ đề khác.',
            'United States / English / USD': 'Việt Nam / Tiếng Việt / VND',
            'United States / Tiếng Anh / USD': 'Việt Nam / Tiếng Việt / VND'
        };

        var scope = root instanceof Element ? root : document;

        // 1. Dịch các đường link bằng URL hoặc text map
        var links = scope.matches && scope.matches('a[href]')
            ? [scope]
            : Array.prototype.slice.call(scope.querySelectorAll('a[href]'));

        links.forEach(function (link) {
            if (link.matches('.desktop-header__logo, .mobile-header__logo')) {
                link.setAttribute('href', window.orcamHomeUrl || (window.location.origin + '/vi/home'));
                return;
            }
            var url;
            try {
                url = new URL(link.getAttribute('href'), document.baseURI);
            } catch (error) {
                return;
            }
            var pathKey = url.pathname.replace(/\/$/, '');
            var label = labelsByPath[pathKey];
            if (label && link.textContent.trim() !== label && !link.querySelector('img, svg')) {
                link.textContent = label;
                return;
            }
            if (url.hostname === 'careers.orcam.com' && link.textContent.trim() !== 'Tuyển dụng') {
                link.textContent = 'Tuyển dụng';
                return;
            }
            var rawText = link.textContent.trim();
            if (textDict[rawText] && !link.querySelector('img, svg')) {
                link.textContent = textDict[rawText];
            }
        });

        // 2. Dịch các button, heading, text trong Mobile drawer, Submenu và Footer
        var textTargets = scope.matches && scope.matches('button, p, span, h1, h2, h3, h4, h5, h6')
            ? [scope]
            : Array.prototype.slice.call(scope.querySelectorAll(
                '.mobile-header__menu button, .mobile-header__menu p, .mobile-header__menu span, ' +
                '.mobile-submenu-item p, .mobile-submenu-item button, ' +
                '.mobile-footer button, .mobile-footer p, .mobile-footer a, .mobile-footer span, ' +
                '.desktop-submenu p, .desktop-submenu button, ' +
                '.desktop-footer p, .desktop-footer span, .desktop-footer a, ' +
                'button, .p1, .p2, .p3, .p4, .h1, .h2, .h3, .h4, .h5, .h6'
            ));

        textTargets.forEach(function (el) {
            if (el.querySelector && el.querySelector('img, svg, iframe, input, textarea, form')) {
                return;
            }
            var text = el.textContent.trim();
            if (textDict[text]) {
                var icon = el.querySelector ? el.querySelector('.material-icons, i') : null;
                if (icon) {
                    Array.prototype.slice.call(el.childNodes).forEach(function (child) {
                        if (child.nodeType === 3 && child.textContent.trim() && textDict[child.textContent.trim()]) {
                            child.textContent = textDict[child.textContent.trim()];
                        }
                    });
                } else {
                    el.textContent = textDict[text];
                }
            }
        });
    }

    /** Restore WooCommerce products after Svelte hydration rebuilds submenu for Low Vision. */
    function syncDynamicProductSubmenu() {
        var shopUrl = window.orcamShopUrl || (window.location.origin + '/vi/shop/');
        var products = Array.isArray(window.orcamDynamicProducts) ? window.orcamDynamicProducts : [];
        var isCurrentShop = false;
        try {
            isCurrentShop = (window.location.pathname.replace(/\/$/, '') === new URL(shopUrl, document.baseURI).pathname.replace(/\/$/, ''));
        } catch (e) {
            isCurrentShop = false;
        }

        // 1. Desktop Submenu
        var desktopSubmenu = document.querySelector('.desktop-submenu');
        if (desktopSubmenu) {
            var logoEl = desktopSubmenu.querySelector('.desktop-submenu__logo p');
            var logoText = logoEl ? logoEl.textContent.trim() : '';
            var isLowVision = (logoText === 'Thị lực kém' || logoText === 'Low Vision');

            if (!isLowVision) {
                // Remove any erroneously injected shop link from non-low-vision submenus (like Tài nguyên, Trường học, Learn)
                var strayLinks = desktopSubmenu.querySelectorAll('.desktop-submenu__items a');
                Array.prototype.slice.call(strayLinks).forEach(function (link) {
                    if (link.textContent.trim() === 'Tất cả sản phẩm' || (link.getAttribute('href') && link.getAttribute('href').indexOf('/shop') !== -1)) {
                        var parent = link.closest('.d-flex') || link;
                        parent.remove();
                    }
                });
            } else {
                var container = desktopSubmenu.querySelector('.desktop-submenu__items');
                if (container) {
                    // Find all existing "Tất cả sản phẩm" links in the submenu
                    var allLinks = Array.prototype.slice.call(container.querySelectorAll('a[href]')).filter(function (link) {
                        var text = link.textContent.trim();
                        var href = link.getAttribute('href') || '';
                        if (text === 'Tất cả sản phẩm' || text === 'All Products' || href.indexOf('/shop') !== -1) {
                            return true;
                        }
                        try {
                            return new URL(link.href, document.baseURI).pathname.replace(/\/$/, '') === new URL(shopUrl, document.baseURI).pathname.replace(/\/$/, '');
                        } catch (error) {
                            return false;
                        }
                    });

                    var allLink = null;
                    if (allLinks.length > 0) {
                        allLink = allLinks[0];
                        // Remove any duplicate "Tất cả sản phẩm" links
                        for (var i = 1; i < allLinks.length; i++) {
                            var dupParent = allLinks[i].closest('.d-flex') || allLinks[i];
                            dupParent.remove();
                        }
                    }

                    if (!allLink) {
                        var allItem = document.createElement('div');
                        allItem.className = 'd-flex';
                        allLink = document.createElement('a');
                        allLink.className = 'p3 desktop-submenu__submenu-link svelte-alcb1y' + (isCurrentShop ? ' orcam-submenu__active' : '');
                        allLink.href = shopUrl;
                        allLink.target = '_self';
                        allLink.textContent = 'Tất cả sản phẩm';
                        allItem.appendChild(allLink);
                        container.insertBefore(allItem, container.firstChild);
                    } else {
                        allLink.textContent = 'Tất cả sản phẩm';
                        allLink.href = shopUrl;
                        if (isCurrentShop && !allLink.classList.contains('orcam-submenu__active')) {
                            allLink.classList.add('orcam-submenu__active');
                        } else if (!isCurrentShop && allLink.classList.contains('orcam-submenu__active')) {
                            allLink.classList.remove('orcam-submenu__active');
                        }
                        var parentEl = allLink.closest('.d-flex') || allLink;
                        if (parentEl !== container.firstElementChild) {
                            container.insertBefore(parentEl, container.firstChild);
                        }
                    }

                    // Deduplicate any repeated product links
                    var seenPaths = {};
                    try {
                        seenPaths[new URL(shopUrl, document.baseURI).pathname.replace(/\/$/, '')] = true;
                    } catch (e) {}

                    Array.prototype.slice.call(container.querySelectorAll('a[href]')).forEach(function (link) {
                        if (link === allLink) return;
                        try {
                            var path = new URL(link.href, document.baseURI).pathname.replace(/\/$/, '');
                            if (seenPaths[path]) {
                                (link.closest('.d-flex') || link).remove();
                            } else {
                                seenPaths[path] = true;
                            }
                        } catch (e) {}
                    });

                    products.forEach(function (product) {
                        var exists = Array.prototype.some.call(container.querySelectorAll('a[href]'), function (link) {
                            try {
                                return new URL(link.href, document.baseURI).pathname.replace(/\/$/, '') === new URL(product.url, document.baseURI).pathname.replace(/\/$/, '');
                            } catch (error) {
                                return false;
                            }
                        });
                        if (exists) {
                            return;
                        }

                        var item = document.createElement('div');
                        item.className = 'd-flex';
                        var link = document.createElement('a');
                        link.className = 'p3 desktop-submenu__submenu-link svelte-alcb1y';
                        link.href = product.url;
                        link.target = '_self';
                        link.textContent = product.title;
                        item.appendChild(link);
                        container.appendChild(item);
                    });
                }
            }
        }

        // 2. Mobile Submenu (.mobile-submenu-item)
        var mobileSubmenus = document.querySelectorAll('.mobile-submenu-item');
        Array.prototype.slice.call(mobileSubmenus).forEach(function (mobileSubmenu) {
            var headerEl = mobileSubmenu.querySelector('.smui-accordion__header, .h5, p');
            var headerText = headerEl ? headerEl.textContent.trim() : '';
            var isMobileLowVision = (headerText.indexOf('Thị lực kém') !== -1 || headerText.indexOf('Low Vision') !== -1);

            if (!isMobileLowVision) {
                return;
            }

            var links = mobileSubmenu.querySelectorAll('a[href]');
            var firstItemLink = Array.prototype.find.call(links, function (link) {
                return link.matches('.mobile-submenu-item__item') || link.closest('.smui-paper__content') || link.closest('.smui-accordion__panel');
            }) || links[0];

            var mobileContainer = firstItemLink
                ? firstItemLink.parentElement
                : (mobileSubmenu.querySelector('.smui-paper__content') || mobileSubmenu.querySelector('.smui-accordion__panel') || mobileSubmenu);

            if (!mobileContainer) {
                return;
            }

            // Find all existing "Tất cả sản phẩm" links in mobile submenu
            var allMobileLinks = Array.prototype.slice.call(mobileSubmenu.querySelectorAll('a[href]')).filter(function (link) {
                var text = link.textContent.trim();
                var href = link.getAttribute('href') || '';
                if (text === 'Tất cả sản phẩm' || text === 'All Products' || href.indexOf('/shop') !== -1) {
                    return true;
                }
                try {
                    return new URL(link.href, document.baseURI).pathname.replace(/\/$/, '') === new URL(shopUrl, document.baseURI).pathname.replace(/\/$/, '');
                } catch (error) {
                    return false;
                }
            });

            var allMobileLink = null;
            if (allMobileLinks.length > 0) {
                allMobileLink = allMobileLinks[0];
                for (var j = 1; j < allMobileLinks.length; j++) {
                    allMobileLinks[j].remove();
                }
            }

            if (!allMobileLink) {
                allMobileLink = document.createElement('a');
                allMobileLink.className = 'd-block black-text mobile-submenu-item__item fill-width p2 px-0 py-6 text-start svelte-1kk8lqw' + (isCurrentShop ? ' orcam-submenu__active' : '');
                allMobileLink.href = shopUrl;
                allMobileLink.target = '_self';
                allMobileLink.textContent = 'Tất cả sản phẩm';

                if (firstItemLink && firstItemLink.parentElement === mobileContainer) {
                    mobileContainer.insertBefore(allMobileLink, firstItemLink);
                } else if (mobileContainer.firstChild) {
                    mobileContainer.insertBefore(allMobileLink, mobileContainer.firstChild);
                } else {
                    mobileContainer.appendChild(allMobileLink);
                }
            } else {
                allMobileLink.textContent = 'Tất cả sản phẩm';
                allMobileLink.href = shopUrl;
                if (isCurrentShop && !allMobileLink.classList.contains('orcam-submenu__active')) {
                    allMobileLink.classList.add('orcam-submenu__active');
                } else if (!isCurrentShop && allMobileLink.classList.contains('orcam-submenu__active')) {
                    allMobileLink.classList.remove('orcam-submenu__active');
                }
                if (firstItemLink && allMobileLink !== mobileContainer.firstElementChild) {
                    mobileContainer.insertBefore(allMobileLink, mobileContainer.firstElementChild);
                }
            }

            // Deduplicate any repeated product links on mobile
            var seenMobilePaths = {};
            try {
                seenMobilePaths[new URL(shopUrl, document.baseURI).pathname.replace(/\/$/, '')] = true;
            } catch (e) {}

            Array.prototype.slice.call(mobileContainer.querySelectorAll('a[href]')).forEach(function (link) {
                if (link === allMobileLink) return;
                try {
                    var path = new URL(link.href, document.baseURI).pathname.replace(/\/$/, '');
                    if (seenMobilePaths[path]) {
                        link.remove();
                    } else {
                        seenMobilePaths[path] = true;
                    }
                } catch (e) {}
            });

            products.forEach(function (product) {
                var exists = Array.prototype.some.call(mobileSubmenu.querySelectorAll('a[href]'), function (link) {
                    try {
                        return new URL(link.href, document.baseURI).pathname.replace(/\/$/, '') === new URL(product.url, document.baseURI).pathname.replace(/\/$/, '');
                    } catch (error) {
                        return false;
                    }
                });
                if (exists) {
                    return;
                }

                var productLink = document.createElement('a');
                productLink.className = 'd-block black-text mobile-submenu-item__item fill-width p2 px-0 py-6 text-start svelte-1kk8lqw';
                productLink.href = product.url;
                productLink.target = '_self';
                productLink.textContent = product.title;
                mobileContainer.appendChild(productLink);
            });
        });
    }

    /** Keep prices and product images across Comparison tables & Cards in sync with WooCommerce. */
    function syncDynamicProductPricesAndImages() {
        var dataMap = window.orcamProductDataMap || {};
        if (!dataMap || typeof dataMap !== 'object') return;

        var priceReplacements = [
            { pattern: /\$4490\s*\$4250|\$4,490\s*\$4,250|\$4490|\$4,490/g, slug: 'orcam-myeye-3-pro' },
            { pattern: /\$4250|\$4,250/g, slug: 'orcam-myeye-2-pro' },
            { pattern: /\$2790|\$2,790|\$2490|\$2,490/g, slug: 'orcam-read-3' },
            { pattern: /\$3990|\$3,990/g, slug: 'orcam-read-5' },
            { pattern: /\$1990|\$1,990/g, slug: 'orcam-read' },
            { pattern: /\$599/g, slug: 'orcam-learn' }
        ];

        var monthlyPattern = /\s*or\s+\$\d+\s*\/\s*mo\.?/gi;

        // Scan all text nodes / elements
        var elements = document.querySelectorAll('.orcam-flex, .orcam-tile, .desktop-submenu, .comparison-table, .orcam-pricing-card, table, p, span, h1, h2, h3, h4, h5');
        elements.forEach(function (el) {
            if (el.children.length === 0 && el.textContent) {
                var text = el.textContent;
                if (monthlyPattern.test(text)) {
                    el.textContent = text.replace(monthlyPattern, '');
                }
                priceReplacements.forEach(function (rep) {
                    if (dataMap[rep.slug] && dataMap[rep.slug].formattedPrice) {
                        if (rep.pattern.test(el.textContent)) {
                            el.textContent = el.textContent.replace(rep.pattern, dataMap[rep.slug].formattedPrice);
                        }
                    }
                });
            }
        });

        // Sync comparison table and card product images from database
        Object.keys(dataMap).forEach(function (slug) {
            var prod = dataMap[slug];
            if (prod && prod.imageUrl) {
                var selectorMap = {
                    'orcam-myeye-3-pro': 'img[src*="MYEYE_on%20floor"], img[src*="MYEYE_on floor"]',
                    'orcam-myeye-2-pro': 'img[src*="MYEYE_2_Pro"], img[src*="0165"]',
                    'orcam-read-3': 'img[src*="Group%203676"], img[src*="Group 3676"], img[src*="Read3"]',
                    'orcam-read-5': 'img[src*="Read5"], img[src*="Read 5"]',
                    'orcam-read': 'img[src*="Read_on"], img[src*="Read.webp"]',
                    'orcam-learn': 'img[src*="Group%204151"], img[src*="Group 4151"]'
                };
                if (selectorMap[slug]) {
                    var imgs = document.querySelectorAll(selectorMap[slug]);
                    imgs.forEach(function (img) {
                        if (img.src !== prod.imageUrl) {
                            img.src = prod.imageUrl;
                        }
                    });
                }

                var headings = document.querySelectorAll('.comparison-table p, .comparison-table h1, .comparison-table h2, .comparison-table h3, .comparison-table h4, .comparison-table h5, table th, table td, .orcam-tile p, .orcam-tile h4');
                headings.forEach(function (head) {
                    if (head.textContent && prod.title && head.textContent.trim() === prod.title.trim()) {
                        var col = head.closest('.flex-element, .orcam-tile, tr, td, th, .smui-paper') || head.parentElement;
                        if (col) {
                            var colImg = col.querySelector('img');
                            if (colImg && colImg.src !== prod.imageUrl) {
                                colImg.src = prod.imageUrl;
                            }
                        }
                    }
                });
            }
        });
    }

    /** Manage header navigation and clean up any duplicate dropdowns. */
    function ensureHeaderDropdowns() {
        // Remove any duplicate or legacy dropdown boxes injected into header
        var oldDropdowns = document.querySelectorAll('.orcam-header-dropdown');
        Array.prototype.slice.call(oldDropdowns).forEach(function (el) {
            el.remove();
        });

        // Remove any top login/get-started notification banners
        var banners = document.querySelectorAll('#section_422r6xj0, #section_jvpy486r, a[href*="get-started"], a[href*="user-area"]');
        Array.prototype.slice.call(banners).forEach(function (el) {
            if (el.matches('#section_422r6xj0, #section_jvpy486r')) {
                el.remove();
            } else if (el.closest('#section_422r6xj0, #section_jvpy486r')) {
                var parentBanner = el.closest('#section_422r6xj0, #section_jvpy486r');
                if (parentBanner) parentBanner.remove();
            } else if (el.textContent && (el.textContent.indexOf('OrCam Magnifier') !== -1 || el.textContent.indexOf('sở hữu') !== -1)) {
                var parentSec = el.closest('.orcam-flex');
                if (parentSec) {
                    parentSec.remove();
                }
            }
        });

        // Ensure "Đọc và học tập" is a direct link without dropdown
        var wrappers = document.querySelectorAll('.desktop-header__menu-items > .d-flex.flex-column');
        wrappers.forEach(function (wrapper) {
            var btn = wrapper.querySelector(':scope > button');
            var btnText = btn ? btn.textContent.trim() : '';

            if (btn && (btnText === 'Đọc và học tập' || btnText.indexOf('Đọc') === 0)) {
                var directLink = document.createElement('a');
                directLink.className = 'p3 white-text svelte-12kzc4m';
                directLink.href = window.location.origin + '/vi/orcam-learn';
                directLink.target = '_self';
                directLink.textContent = 'Đọc và học tập';
                wrapper.replaceChild(directLink, btn);
                var oldDd = wrapper.querySelector('.desktop-header__sub-menu');
                if (oldDd) oldDd.remove();
            }
        });
    }

    /** Keep WooCommerce body while allowing Svelte to hydrate header/footer. */
    function preserveNativeWooBody() {
        if (!savedNativeWooContent) return;
        var main = document.querySelector('article#mainBody');
        if (!main) return;

        // Clean out any Svelte product sections injected into mainBody during client hydration
        var children = Array.prototype.slice.call(main.children);
        children.forEach(function (child) {
            if (!child.matches('.orcam-shop, .orcam-default-product, .orcam-checkout, nav.orcam-footer, section#bottomPage')) {
                child.remove();
            }
        });

        // Also clean any rogue sections injected into body
        var rogue = document.querySelectorAll('body > section:not(#header):not(#bottomPage)');
        Array.prototype.slice.call(rogue).forEach(function (el) {
            if (!el.closest('.orcam-shop, .orcam-default-product, .orcam-checkout, nav.orcam-footer, #header')) {
                el.remove();
            }
        });

        var current = main.querySelector(':scope > .orcam-shop, :scope > .orcam-default-product, :scope > .orcam-checkout');
        if (!current) {
            var footer = main.querySelector(':scope > nav.orcam-footer');
            main.insertBefore(savedNativeWooContent.cloneNode(true), footer || main.firstChild);
        }

        if (window.orcamAuthoritativeTitle && document.title !== window.orcamAuthoritativeTitle) {
            document.title = window.orcamAuthoritativeTitle;
        }
    }

    function scheduleNativeWooPreservation() {
        if (!savedNativeWooContent || preserveNativeWooScheduled) return;
        preserveNativeWooScheduled = true;
        window.setTimeout(function () {
            preserveNativeWooScheduled = false;
            preserveNativeWooBody();
        }, 0);
    }

    /** Replace unavailable blog thumbnails with a bundled image. */
    function repairBlogImages(root) {
        var images = root instanceof Element && root.matches('.orcam-blog-card__image')
            ? [root]
            : Array.prototype.slice.call((root || document).querySelectorAll('.orcam-blog-card__image'));

        images.forEach(function (image) {
            if (image.dataset.fallbackReady) {
                return;
            }

            image.dataset.fallbackReady = 'true';
            var useFallback = function () {
                var fallback = image.getAttribute('data-fallback-src');
                if (fallback && image.getAttribute('src') !== fallback) {
                    image.setAttribute('src', fallback);
                }
            };

            image.addEventListener('error', useFallback);
            if (image.complete && image.naturalWidth === 0) {
                useFallback();
            }
        });
    }

    /** Keep the server-rendered blog grid ahead of the footer after hydration. */
    function placeBlogIndex() {
        if (!savedBlogIndex) {
            return;
        }

        var footer = document.querySelector('nav.orcam-footer');
        if (!footer || !footer.parentNode) {
            return;
        }

        var blogIndex = document.querySelector('.orcam-blog-index');
        if (!blogIndex) {
            blogIndex = savedBlogIndex.cloneNode(true);
        }

        if (blogIndex.nextElementSibling !== footer) {
            footer.parentNode.insertBefore(blogIndex, footer);
        }
    }

    /** Find the hydrated FAQ section and keep it after the article content. */
    function moveFaqToBottom(article, searchRoot) {
        if (!article) {
            return null;
        }

        searchRoot = searchRoot || article;
        var faqMarker = Array.prototype.find.call(
            searchRoot.querySelectorAll('h1, h2, h3, h4, h5, h6, p, strong'),
            function (element) {
                return /^(?:frequently asked questions|faqs?|câu hỏi thường gặp)/i.test(
                    (element.textContent || '').replace(/\s+/g, ' ').trim()
                );
            }
        );
        var faqSection = faqMarker ? faqMarker.closest('.orcam-flex') : null;

        if (faqSection && article.lastElementChild !== faqSection) {
            article.appendChild(faqSection);
        }

        return faqSection;
    }

    /** Keep the related-posts block below the article and immediately before FAQ. */
    function moveRelatedPostsToBottom(article, searchRoot, faqSection) {
        if (!article) {
            return null;
        }

        searchRoot = searchRoot || article;
        var relatedMarker = Array.prototype.find.call(
            searchRoot.querySelectorAll('h1, h2, h3, h4, h5, h6, p, strong'),
            function (element) {
                return /^(?:more stories|related (?:posts|articles)|bài viết liên quan)$/i.test(
                    (element.textContent || '').replace(/\s+/g, ' ').trim()
                );
            }
        );
        var relatedSection = relatedMarker ? relatedMarker.closest('.orcam-flex') : null;

        var isAlreadyPlaced = relatedSection && (
            (faqSection && relatedSection.nextElementSibling === faqSection) ||
            (!faqSection && article.lastElementChild === relatedSection)
        );

        if (relatedSection && !isAlreadyPlaced) {
            article.insertBefore(relatedSection, faqSection && faqSection.parentNode === article ? faqSection : null);
        }

        return relatedSection;
    }

    /** Put the post header, sharing, hero and body before promotional sections. */
    function normalizePrimaryArticle(main, article) {
        if (!main || !article) {
            return;
        }

        if (article.parentNode === main && main.firstElementChild !== article) {
            main.insertBefore(article, main.firstElementChild);
        }

        var title = article.querySelector('.blog h1');
        var sharing = article.querySelector('a[href*="sharer"], a[href*="intent/tweet"]');
        var body = article.querySelector('article.blog');
        var titleSection = title ? title.closest('.orcam-flex') : null;
        var sharingSection = sharing ? sharing.closest('.orcam-flex') : null;
        var bodySection = body ? body.closest('.orcam-flex') : null;
        var heroSection = bodySection ? bodySection.previousElementSibling : null;
        var primarySections = [titleSection, sharingSection, heroSection, bodySection].filter(function (section, index, sections) {
            return section && section.parentNode === article && sections.indexOf(section) === index;
        });
        var currentSections = Array.prototype.slice.call(article.children, 0, primarySections.length);
        var isNormalized = primarySections.length && primarySections.every(function (section, index) {
            return currentSections[index] === section;
        });

        if (!isNormalized && primarySections.length) {
            var primaryFragment = document.createDocumentFragment();
            primarySections.forEach(function (section) {
                primaryFragment.appendChild(section);
            });
            article.insertBefore(primaryFragment, article.firstChild);
        }
    }

    /** Preserve the complete server-rendered post if Svelte hydration drops sections. */
    function preserveBlogArticle() {
        if (!savedBlogArticle) {
            return;
        }

        var main = document.querySelector('article#mainBody');
        var article = document.querySelector('.orcam-blog');
        normalizePrimaryArticle(main, article);
        var hydratedFaq = moveFaqToBottom(article, main || article);
        var hydratedRelatedPosts = moveRelatedPostsToBottom(article, main || article, hydratedFaq);
        if (hydratedFaq && article && article.lastElementChild !== hydratedFaq) {
            article.appendChild(hydratedFaq);
        }
        var currentLength = article
            ? (article.textContent || '').replace(/\s+/g, ' ').trim().length
            : 0;

        if (article && currentLength >= savedBlogArticleLength * 0.8) {
            return;
        }

        if (!main) {
            return;
        }

        var restoredArticle = savedBlogArticle.cloneNode(true);
        normalizePrimaryArticle(main, restoredArticle);
        if (hydratedFaq) {
            var restoredFaq = moveFaqToBottom(restoredArticle, restoredArticle);
            if (restoredFaq) {
                restoredFaq.remove();
            }
            restoredArticle.appendChild(hydratedFaq.cloneNode(true));
        }
        if (hydratedRelatedPosts) {
            var restoredFaqAtBottom = moveFaqToBottom(restoredArticle, restoredArticle);
            var restoredRelatedPosts = moveRelatedPostsToBottom(
                restoredArticle,
                restoredArticle,
                restoredFaqAtBottom
            );
            if (restoredRelatedPosts) {
                restoredRelatedPosts.remove();
            }
            restoredArticle.insertBefore(
                hydratedRelatedPosts.cloneNode(true),
                restoredFaqAtBottom || null
            );
        }
        if (article) {
            article.parentNode.replaceChild(restoredArticle, article);
            return;
        }

        var footer = main.querySelector(':scope > nav.orcam-footer');
        main.insertBefore(restoredArticle, footer || null);
    }

    /** Collapse a burst of hydration mutations into one article-order check. */
    function scheduleBlogPreservation() {
        if (preserveBlogScheduled || !savedBlogArticle) {
            return;
        }

        preserveBlogScheduled = true;
        window.setTimeout(function () {
            preserveBlogScheduled = false;
            preserveBlogArticle();
        }, 0);
    }

    placeBlogIndex();
    preserveBlogArticle();
    repairBlogImages(document);
    document.addEventListener('DOMContentLoaded', function () {
        placeBlogIndex();
        preserveBlogArticle();
    });
    window.addEventListener('load', function () {
        placeBlogIndex();
        preserveBlogArticle();
    });

    /** Fix root-relative assets created by the hydrated Svelte application. */
    function repairAssetUrl(element) {
        if (!themeUri || !(element instanceof Element)) {
            return;
        }

        var candidates = element.matches('[src], [poster]')
            ? [element]
            : Array.prototype.slice.call(element.querySelectorAll('[src], [poster]'));

        candidates.forEach(function (candidate) {
            ['src', 'poster'].forEach(function (attribute) {
                var value = candidate.getAttribute(attribute);
                if (!value || /^(?:data:|blob:)/i.test(value)) {
                    return;
                }

                var assetMatch = value.match(/^(?:\.\.\/|\.\/|\/)*(images|media|fonts|_app)\/(.+)$/i);
                if (assetMatch) {
                    candidate.setAttribute(
                        attribute,
                        themeUri + '/' + assetMatch[1] + '/' + assetMatch[2].replace(/ /g, '%20')
                    );
                }
            });
        });
    }

    /** Replace the exported Google Form with a native form ready for wp_mail/SMTP. */
    function replaceGoogleContactForm(root) {
        if (!window.orcamContactForm || !(root instanceof Element || root instanceof Document)) {
            return;
        }

        var selector = 'iframe[src*="docs.google.com/forms"], iframe[src*="#orcam-contact-form-replaced"]';
        var frames = root.matches && root.matches(selector)
            ? [root]
            : Array.prototype.slice.call(root.querySelectorAll(selector));

        frames.forEach(function (frame) {
            var container = frame.closest('.iframe-container') || frame.parentElement;
            if (!container || container.querySelector('.orcam-consultation-form')) {
                return;
            }

            var status = new URLSearchParams(window.location.search).get('contact');
            var notice = '';
            if (status === 'success') {
                notice = '<p class="orcam-form-notice is-success" role="status">Cảm ơn bạn! Yêu cầu tư vấn đã được gửi thành công.</p>';
            } else if (status === 'error') {
                notice = '<p class="orcam-form-notice is-error" role="alert">Chưa thể gửi email. Vui lòng kiểm tra cấu hình SMTP và thử lại.</p>';
            } else if (status === 'invalid') {
                notice = '<p class="orcam-form-notice is-error" role="alert">Vui lòng kiểm tra và điền đầy đủ thông tin bắt buộc.</p>';
            }

            container.classList.add('orcam-contact-form-container');
            container.innerHTML = '<section class="orcam-contact-card">'
                + '<header><h2>Gửi Yêu Cầu Tư Vấn &amp; Báo Giá</h2><p>Quý khách vui lòng để lại thông tin, đội ngũ chuyên viên OrCam sẽ liên hệ hỗ trợ trong thời gian sớm nhất.</p></header>'
                + notice
                + '<form class="orcam-consultation-form" action="' + window.orcamContactForm.action + '" method="post">'
                + '<input type="hidden" name="action" value="orcam_consultation">'
                + '<input type="hidden" name="orcam_consultation_nonce" value="' + window.orcamContactForm.nonce + '">'
                + '<div class="orcam-form-honeypot" aria-hidden="true"><label>Website<input name="website" tabindex="-1" autocomplete="off"></label></div>'
                + '<div class="orcam-form-row"><label>Họ và tên <span>*</span><input name="full_name" type="text" placeholder="Nhập họ và tên" autocomplete="name" required></label>'
                + '<label>Số điện thoại <span>*</span><input name="phone" type="tel" placeholder="Nhập số điện thoại" autocomplete="tel" required></label></div>'
                + '<label>Email liên hệ <span>*</span><input name="email" type="email" placeholder="Nhập email của bạn" autocomplete="email" required></label>'
                + '<label>Nội dung tư vấn <span>*</span><textarea name="message" rows="5" placeholder="Nhập nhu cầu tư vấn hoặc nội dung câu hỏi..." required></textarea></label>'
                + '<button type="submit">Gửi yêu cầu tư vấn</button>'
                + '</form></section>';
        });
    }

    /** Replace the legacy support widget with a Vietnamese email ticket form. */
    function renderSupportCaseForm() {
        if (!window.orcamContactForm || !/\/submit-case\/?$/.test(window.location.pathname)) {
            return;
        }
        var main = document.querySelector('article#mainBody');
        if (!main || main.querySelector('.orcam-support-form')) {
            return;
        }
        var status = new URLSearchParams(window.location.search).get('case_status');
        var notice = status === 'success'
            ? '<p class="orcam-form-notice is-success" role="status">Yêu cầu hỗ trợ đã được gửi. Chúng tôi sẽ liên hệ với bạn sớm nhất.</p>'
            : status === 'error'
                ? '<p class="orcam-form-notice is-error" role="alert">Chưa thể gửi email. Vui lòng kiểm tra cấu hình SMTP và thử lại.</p>'
                : status === 'invalid'
                    ? '<p class="orcam-form-notice is-error" role="alert">Vui lòng kiểm tra và điền đầy đủ các trường bắt buộc.</p>'
                    : '';
        main.innerHTML = '<section class="orcam-contact-form-container orcam-support-case-container"><div class="orcam-contact-card">'
            + '<header><h1>Gửi Yêu Cầu Hỗ Trợ Khách Hàng</h1><p>Vui lòng cung cấp thông tin bên dưới. Bộ phận hỗ trợ OrCam sẽ tiếp nhận và phản hồi qua email hoặc điện thoại.</p></header>'
            + notice
            + '<form class="orcam-consultation-form orcam-support-form" action="' + window.orcamContactForm.action + '" method="post">'
            + '<input type="hidden" name="action" value="orcam_support_case"><input type="hidden" name="orcam_support_nonce" value="' + window.orcamContactForm.supportNonce + '">'
            + '<div class="orcam-form-honeypot" aria-hidden="true"><label>Website<input name="website" tabindex="-1" autocomplete="off"></label></div>'
            + '<label>Mối quan hệ với OrCam <span>*</span><select name="connection" required><option value="">Chọn một tùy chọn</option><option>Người dùng OrCam</option><option>Nhà phân phối OrCam</option><option>Đơn vị trường học/tổ chức</option><option>Cơ quan nhà nước</option><option>Yêu cầu chung</option></select></label>'
            + '<label>Họ và tên người liên hệ <span>*</span><input name="contact_name" autocomplete="name" required></label>'
            + '<label>Email <span>*</span><input name="email" type="email" autocomplete="email" required></label>'
            + '<label>Số điện thoại <span>*</span><input name="phone" type="tel" placeholder="Ví dụ: 0901 234 567" autocomplete="tel" required></label>'
            + '<div class="orcam-form-row"><label>Thành phố<input name="city" autocomplete="address-level2"></label><label>Quốc gia<input name="country" value="Việt Nam" autocomplete="country-name"></label></div>'
            + '<label>Tỉnh/Thành<input name="state" autocomplete="address-level1"></label>'
            + '<label>Thiết bị OrCam<select name="device"><option value="">Chọn thiết bị</option><option>OrCam MyEye</option><option>OrCam Read 5</option><option>OrCam Read 3</option><option>OrCam Read</option><option>OrCam Learn</option><option>Khác</option></select></label>'
            + '<label>Số sê-ri thiết bị<input name="serial_number" placeholder="Nhập số sê-ri nếu có"></label>'
            + '<label>Loại yêu cầu <span>*</span><select name="case_type" required><option value="">Chọn loại yêu cầu</option><option>Hỗ trợ kỹ thuật</option><option>Bảo hành và sửa chữa</option><option>Hướng dẫn sử dụng</option><option>Đơn hàng và thanh toán</option><option>Đổi trả sản phẩm</option><option>Yêu cầu khác</option></select></label>'
            + '<label>Mô tả chi tiết <span>*</span><textarea name="description" rows="6" placeholder="Mô tả vấn đề hoặc nội dung bạn cần hỗ trợ..." required></textarea></label>'
            + '<button type="submit">Gửi yêu cầu hỗ trợ</button></form></div></section>';
    }

    repairAssetUrl(document.documentElement);
    replaceGoogleContactForm(document);
    renderSupportCaseForm();
    normalizeHeaderNavigation(document);
    syncDynamicProductSubmenu();
    syncDynamicProductPricesAndImages();
    ensureHeaderDropdowns();
    preserveNativeWooBody();

    var mutationScheduled = false;
    function scheduleBatchUpdate() {
        if (mutationScheduled) return;
        mutationScheduled = true;
        (window.requestAnimationFrame || window.setTimeout)(function () {
            mutationScheduled = false;
            normalizeHeaderNavigation(document);
            syncDynamicProductSubmenu();
            syncDynamicProductPricesAndImages();
            ensureHeaderDropdowns();
            repairBlogImages(document);
            replaceGoogleContactForm(document);
            placeBlogIndex();
            renderSupportCaseForm();
            scheduleNativeWooPreservation();
            scheduleBlogPreservation();
        }, 16);
    }

    if ('MutationObserver' in window) {
        new MutationObserver(function (mutations) {
            var needsUpdate = false;
            for (var i = 0; i < mutations.length; i++) {
                var mutation = mutations[i];
                if (mutation.type === 'attributes') {
                    repairAssetUrl(mutation.target);
                } else if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    needsUpdate = true;
                }
            }
            if (needsUpdate) {
                scheduleBatchUpdate();
            }
        }).observe(document.documentElement, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['src', 'poster']
        });
    }

    document.addEventListener('click', function (event) {
        if (
            event.defaultPrevented ||
            event.button !== 0 ||
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey ||
            !(event.target instanceof Element)
        ) {
            return;
        }

        var link = event.target.closest('a[href]');
        if (!link || link.target === '_blank' || link.hasAttribute('download')) {
            return;
        }

        var url;
        try {
            url = new URL(link.href, document.baseURI);
        } catch (error) {
            return;
        }

        if (url.origin !== window.location.origin || !/^https?:$/.test(url.protocol)) {
            return;
        }

        if (
            url.pathname === window.location.pathname &&
            url.search === window.location.search &&
            url.hash
        ) {
            return;
        }

        event.preventDefault();
        event.stopImmediatePropagation();
        window.location.assign(url.href);
    }, true);
}());
