// Per-domain SEO for this static site on Vercel.
// Every domain added to the project serves the same files, but each
// gets its own canonical host in robots.txt, sitemap.xml and HTML
// (<link rel="canonical">, og:url, absolute URLs).

const PRIMARY = "https://www.mahadevbookbets.live";
const ORIGINAL = "https://mahadevbookz.com";

export const config = { matcher: "/:path*" };

export default async function middleware(req) {
  // internal sub-requests fetch the underlying static file
  if (req.headers.get("x-mw-pass")) return;
  if (req.method !== "GET" && req.method !== "HEAD") return;

  const url = new URL(req.url);
  const host = req.headers.get("host") || "";
  if (!host) return;
  const base = "https://" + host;
  const p = url.pathname;

  // per-domain robots.txt
  if (p === "/robots.txt") {
    return new Response(
      `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`,
      { headers: { "content-type": "text/plain; charset=utf-8" } }
    );
  }

  // per-domain sitemap.xml (swap host inside the canonical sitemap)
  if (p === "/sitemap.xml") {
    const r = await fetchStatic(req);
    if (!r.ok) return r;
    const t = await r.text();
    return new Response(t.split(PRIMARY).join(base), {
      headers: { "content-type": "application/xml; charset=utf-8" },
    });
  }

  // only transform HTML pages; everything else serves untouched
  if (!/(\.html?|\/)$/i.test(p)) return;

  const r = await fetchStatic(req);
  if (!r.ok) return r;
  let t = await r.text();

  const canon = base + p;
  if (t.includes(ORIGINAL)) t = t.split(ORIGINAL).join(base);
  if (t.includes(PRIMARY)) t = t.split(PRIMARY).join(base);
  if (/property="og:url"/.test(t))
    t = t.replace(/property="og:url" content="[^"]*"/, `property="og:url" content="${canon}"`);
  if (/rel="canonical"/i.test(t))
    t = t.replace(/rel="canonical" href="[^"]*"/i, `rel="canonical" href="${canon}"`);
  else if (/<\/head>/i.test(t))
    t = t.replace(/<\/head>/i, `<link rel="canonical" href="${canon}">\n</head>`);

  const h = new Headers(r.headers);
  h.set("content-type", "text/html; charset=utf-8");
  h.delete("content-length");
  h.delete("content-encoding");
  return new Response(t, { status: r.status, headers: h });
}

// fetch the real file, skipping middleware on the sub-request
function fetchStatic(req) {
  const u = new URL(req.url);
  const r = new Request(u, { headers: { "x-mw-pass": "1" } });
  return fetch(r);
}
