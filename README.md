# WP_CloneOrcam

WordPress theme that serves the bundled OrCam Svelte static export through
clean WordPress routes.

## Installation

1. Copy this directory to `wp-content/themes/orcam_theme`.
2. Activate **OrCam Theme** in WordPress.
3. Select a pretty permalink structure under **Settings > Permalinks**.

## Structure

- `static-pages/`: exported HTML documents and blog articles.
- `_app/`: compiled Svelte CSS and JavaScript.
- `fonts/`, `images/`, `media/`: local page assets.
- `functions.php`: static route resolution and asset URL rewriting.
- `js/static-navigation.js`: full-page navigation compatibility for the static export.

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
