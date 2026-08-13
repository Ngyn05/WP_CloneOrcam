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

    repairAssetUrl(document.documentElement);

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
                    }
                });
            });

            placeBlogIndex();
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
