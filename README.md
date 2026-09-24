# Mahadev Book — Static UI Snapshot

Fully self-contained, script-free static mirror of the site.
All JavaScript, event handlers, and forms are neutralized.
Internal links navigate between the local pages; external links are
inert. WhatsApp CTAs point to `https://wa.link/ultra`. The mobile
hamburger menu works via CSS-only checkbox toggles. All assets live
in `assets/`.

## Deploy

**Vercel (recommended)** — deploy this folder as a static site:

```sh
vercel deploy --prod
```

Or import the GitHub repo in the Vercel dashboard — framework preset
"Other", no build command, output directory `.`.

**Any static host** — Netlify, GitHub Pages, S3, cPanel, etc. Upload
the whole folder; `index.html` is the entry page.

> Do NOT add a `server.js`/`index.js` to the project root — Vercel
> will treat the site as a Node app and assets will 404.
