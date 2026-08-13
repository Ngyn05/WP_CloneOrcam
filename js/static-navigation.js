(function () {
    'use strict';

    var themeUri = window.orcamThemeUri || '';
    var initialBlogIndex = document.querySelector('.orcam-blog-index');
    var savedBlogIndex = initialBlogIndex ? initialBlogIndex.cloneNode(true) : null;
    var initialBlogArticle = document.querySelector('.orcam-blog');
    var savedBlogArticle = initialBlogArticle ? initialBlogArticle.cloneNode(true) : null;
    var savedBlogArticleLength = savedBlogArticle
        ? (savedBlogArticle.textContent || '').replace(/\s+/g, ' ').trim().length
        : 0;
    var preserveBlogScheduled = false;

    /** Keep exported and hydrated headers on one Vietnamese navigation copy. */
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
            '/vi/orcam-learn-schools': 'OrCam Learn dành cho trường học'
        };
        var scope = root instanceof Element ? root : document;
        var headerSelector = '#header a[href], header a[href]';
        var links = scope.matches && scope.matches(headerSelector)
            ? [scope]
            : Array.prototype.slice.call(scope.querySelectorAll(headerSelector));

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
            var label = labelsByPath[url.pathname.replace(/\/$/, '')];
            if (label && link.textContent.trim() !== label) {
                link.textContent = label;
            }
            if (url.hostname === 'careers.orcam.com' && link.textContent.trim() !== 'Tuyển dụng') {
                link.textContent = 'Tuyển dụng';
            }
        });
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

    if ('MutationObserver' in window) {
        new MutationObserver(function (mutations) {
            var hasChildListChanges = false;
            mutations.forEach(function (mutation) {
                if (mutation.type === 'attributes') {
                    repairAssetUrl(mutation.target);
                    return;
                }

                hasChildListChanges = true;
                mutation.addedNodes.forEach(function (node) {
                    repairAssetUrl(node);
                    if (node instanceof Element) {
                        repairBlogImages(node);
                        normalizeHeaderNavigation(node);
                        replaceGoogleContactForm(node);
                    }
                });
            });

            placeBlogIndex();
            renderSupportCaseForm();
            if (hasChildListChanges) {
                scheduleBlogPreservation();
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
