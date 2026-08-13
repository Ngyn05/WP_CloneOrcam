# WP_CloneOrcam

Hybrid WordPress theme that preserves the complete OrCam Svelte export while
also supporting normal editable WordPress pages, posts, archives and menus.

## Installation

1. Copy this directory to `wp-content/themes/orcam_theme`.
2. Activate **OrCam Theme** in WordPress.
3. Select a pretty permalink structure under **Settings > Permalinks**.

## Structure

- `static-pages/`: exported HTML documents and blog articles.
- `help-center/`: local public Helpjuice knowledge-base mirror.
- `_app/`: compiled Svelte CSS and JavaScript.
- `fonts/`, `images/`, `media/`: local page assets.
- `front-page.php` and `404.php`: bridge clean legacy routes into WordPress.
- `page.php`, `single.php`, `archive.php`: native WordPress content templates.
- `functions.php`: theme setup, static route resolution and URL rewriting.
- `js/static-navigation.js`: full-page navigation compatibility for the static export.

Assign the **Primary navigation** and **Footer navigation** menu locations in
Appearance > Menus. Existing exported OrCam routes continue to render their
bundled navigation, while new WordPress content uses these editable menus.

## Google API key

The exported JavaScript reads its Google API key at runtime so credentials are
not committed to the repository. Copy `.env.example` to `.env` and add a newly
rotated key:

```dotenv
ORCAM_GOOGLE_API_KEY=your-restricted-google-api-key
```

The local `.env` is ignored by Git. A server-level environment variable or an
`ORCAM_GOOGLE_API_KEY` constant in `wp-config.php` takes precedence. Restrict
the key to the production HTTP referrers and only the Google APIs used by this
site.
