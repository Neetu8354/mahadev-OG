# Mahadev Book — Static UI Snapshot

Fully self-contained, script-free static mirror of the site.
All JavaScript, event handlers, and forms are neutralized — no
interaction can crash the page. Internal links navigate between the
local pages; external links are inert. All assets live in `assets/`.

## Deploy (pick any one)

**Any static host** — upload the whole folder to Netlify, Vercel,
GitHub Pages, S3, cPanel, etc. No build step needed.

**Docker (nginx)**

```sh
docker build -t mahadev-static .
docker run -p 8080:80 mahadev-static
```

**Node (no dependencies)**

```sh
node server.js 8080
```
