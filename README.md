# Academic CV Website

React + Vite single-page app for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Production build

```bash
npm run build
```

Output goes to `docs/`. Commit the `docs/` folder along with the source and push to GitHub.

## GitHub Pages deployment

1. Push the repo to GitHub.
2. Go to **Settings → Pages**.
3. Set **Source** to `Deploy from a branch`, branch `main`, folder `/docs`.
4. Save. GitHub will serve your site at `https://<username>.github.io/<repo>/`.

### If your site lives at a sub-path

Uncomment and update the `base` option in `vite.config.js`:

```js
base: '/your-repo-name/',
```

Then rebuild and push.

## Updating content

All content is in `src/data/content.js`. Edit the exported objects there — no React knowledge needed for text/link changes.

Replace the `#` placeholder URLs in `profile.links` with real links to your Google Scholar, ORCID, LinkedIn, and UWE profile pages.
