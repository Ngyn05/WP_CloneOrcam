(function () {
    'use strict';

    var themeUri = window.orcamThemeUri || '';

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
                if (value && /^\/(images|media|fonts|_app)\//i.test(value)) {
                    candidate.setAttribute(attribute, themeUri + value);
                }
            });
        });
    }

    repairAssetUrl(document.documentElement);

    if ('MutationObserver' in window) {
        new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.type === 'attributes') {
                    repairAssetUrl(mutation.target);
                    return;
                }

                mutation.addedNodes.forEach(function (node) {
                    repairAssetUrl(node);
                });
            });
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
