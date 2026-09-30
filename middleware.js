// Per-domain SEO for this static site on Vercel.
// Every domain added to the project serves the same files, but each
// gets its own canonical host in robots.txt, sitemap.xml and HTML
// (<link rel="canonical">, og:url, absolute URLs).

const PRIMARY = "https://www.mahadevbookbets.live";
const PRIMARY_HOST = "www.mahadevbookbets.live";

const REDIRECTS = {"best-5-cricket-betting-strategies-mahadev-book":"/blog/best-betting-strategies-mahadev-book/","mahadev-book-cricket-betting-strategies":"/blog/best-betting-strategies-mahadev-book/","master-odds-with-mahadev-book-cricket-betting-id-strategy-guide":"/blog/best-betting-strategies-mahadev-book/","mahadev-book-id-winning-strategies":"/blog/best-betting-strategies-mahadev-book/","mahadev-book-for-ipl-betting-in-india":"/blog/best-betting-strategies-mahadev-book/","mahadev-book-whatsapp-number-for-24x7-help":"/blog/mahadev-book-whatsapp-support/","mahadev-book-whatsapp-number-for-instant-account-opening":"/blog/mahadev-book-whatsapp-support/","mahadev-book-whatsapp-number-get-instant-betting-support-24-7":"/blog/mahadev-book-whatsapp-support/","easy-fast-betting-activation-process-mahadev-book":"/blog/easy-and-fast-betting-activation-process-on-mahadev-book/","how-to-register-and-get-your-mahadev-book-id-instantly":"/blog/simple-steps-create-your-first-mahadev-book-betting-id/","get-your-mahadev-book-id-unlock-daily-offers":"/blog/simple-steps-create-your-first-mahadev-book-betting-id/","mahadev-book-instantly-get-your-online-cricket-id-for-ipl-betting":"/blog/simple-steps-create-your-first-mahadev-book-betting-id/","mahadev-book-app-download-fast-safe-easy-setup":"/blog/mahadev-betting-app-download-easy-installation-guide/","top-features-of-mahadev-betting-platform":"/blog/mahadev-betting-app-overview-features/","top-features-of-mahadev-book-mobile-app":"/blog/mahadev-betting-app-overview-features/","how-to-claim-_500-welcome-bonus-on-mahadev-book":"/blog/mahadev-book-instant-welcome-bonus-on-signup/","loss-back-bonuses-on-mahadev-betting-app":"/blog/super-cashback-offers-for-mahadev-book-users/","mahadev-book-mega-cash-prize-drops":"/blog/daily-prize-drops-on-mahadev-book/","play-fantasy-sports-earn-daily-cash-on-mahadev-book":"/blog/play-fantasy-sports-earn-daily-cash-prizes/","live-gaming-and-rewards-with-mahadev-book-app":"/blog/experience-live-gaming-with-instant-withdrawals-only-on-mahadev-book/","mahadev-book-demo-id":"/blog/mahadev-book-demo-account-guide/","mahadev-book-security-measures":"/blog/is-mahadev-book-safe/","mahadev-book-security-responsible-betting-guide":"/blog/mahadev-book-responsible-play-guide/","mahadev-book-responsible-betting":"/blog/mahadev-book-responsible-play-guide/","instant-withdrawals-how-mahadev-book-makes-it-easy":"/blog/safe-deposit-and-withdraw-guide/","live-match-odds-instant-withdrawals-with-mahadev-book":"/blog/safe-deposit-and-withdraw-guide/","comparing-mahadev-book-id-other-betting-ids":"/blog/mahadev-book-vs-competitors/","breaking-down-the-odds-with-mahadev-book-a-beginners-guide-to-online-sports-betting":"/blog/how-to-read-betting-odds-mahadev-book/","mahadev-book-live-odds-explained-get-the-best-rates":"/blog/how-to-read-betting-odds-mahadev-book/","multiple-flexible-betting-options-on-mahadev-book":"/blog/mahadev-book-online-bet-types-guide/","mahadev-book-id-multiple-betting-markets":"/blog/mahadev-book-online-bet-types-guide/","mahadev-online-book-betting-markets":"/blog/mahadev-book-online-bet-types-guide/","mahadev-book-key-choices-benefits-many-options":"/blog/mahadev-book-online-bet-types-guide/","mahadev-book-sports-betting-guide":"/blog/top-sports-to-bet-on-with-mahadev-book-id/","top-sports-to-bet-on-mahadev-book-app":"/blog/top-sports-to-bet-on-with-mahadev-book-id/","multi-sport-betting-mahadev-book-id":"/blog/top-sports-to-bet-on-with-mahadev-book-id/","mahadev-book-top-online-cricket-id-provider-in-india-2024":"/blog/mahadev-book-top-trusted-online-betting-id-in-india/","want-to-bet-on-cricket-check-out-mahadevs-book-the-biggest-provider-of-online-sports-betting-ids":"/blog/mahadev-book-top-trusted-online-betting-id-in-india/","mahadev-book-your-ultimate-online-cricket-betting-id":"/blog/mahadev-book-top-trusted-online-betting-id-in-india/","why-mahadev-book-id-is-essential-for-every-user":"/blog/why-a-mahadev-book-id-before-betting-online/","why-choose-mahadev-book-online-betting":"/blog/why-a-mahadev-book-id-before-betting-online/","faster-live-betting-with-mahadev-book-id":"/blog/24x7-live-sports-betting-mahadev-book-id/","cricket-casino-kabaddi-more-5000-live-events-daily":"/blog/5000-live-events-daily-on-mahadev-book-cricket-casino-kabaddi/","aviator-smart-cashout-tips-on-the-mahadev-book":"/blog/mahadev-book-aviator-game-review-winning-guide/","classic-card-game-on-mahadev-book-compete-daily-win-instantly":"/blog/mahadev-book-card-games/","benefits-of-mahadev-club":"/blog/mahadev-club-benefits-advanced-bettors/","vip-high-roller-ranks-explained-on-mahadev-book":"/blog/mahadev-book-vip-betting-program/","mahadev-book-trusted-brand-mahadev-book":"/blog/mahadev-book-most-trusted-and-legal-platform/","top-benefits-of-using-mahadev-club-login-for-betting":"/blog/mahadev-club-login-step-by-step-guide/","mahadev-book-common-support-queries-guide":"/blog/mahadev-book-id-support-and-account-help-guide/","mahadev-book-login-help-desk-and-access-guide":"/blog/mahadev-book-id-support-and-account-help-guide/","online-betting-experience-with-mahadev-book":"/blog/modern-online-betting-with-mahadev-book-id/","the-best-live-betting-offers-on-mahadev-book":"/blog/top-live-betting-markets-on-mahadev-book/"};

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

  // per-domain sitemap files (swap host inside the canonical XML)
  if (/^\/sitemap[^/]*\.xml$/i.test(p)) {
    const r = await fetchStatic(req);
    if (!r.ok) return r;
    const t = await r.text();
    return new Response(t.split(PRIMARY).join(base), {
      headers: { "content-type": "application/xml; charset=utf-8" },
    });
  }

  // old post URLs moved to /blog/<slug>/
  if (p === "/blogs.html")
    return Response.redirect(base + "/blog/", 308);

  // only transform HTML pages; everything else serves untouched
  if (!/(\.html?|\/)$/i.test(p)) return;

  const r = await fetchStatic(req);
  if (!r.ok) {
    // merged/removed posts -> canonical winner
    const sm = p.match(/^\/blog\/([^/]+)\/?$/i) || p.match(/^\/([^/]+)\.html$/i);
    if (sm && REDIRECTS[sm[1]])
      return Response.redirect(base + REDIRECTS[sm[1]], 308);
    // 301 old flat post URL to /blog/<slug>/ when it exists
    const m = p.match(/^\/([^/]+)\.html$/i);
    if (m) {
      const target = "/blog/" + m[1] + "/";
      const chk = await fetch(new URL(target, req.url), { headers: { "x-mw-pass": "1" } });
      if (chk.ok) return Response.redirect(base + target, 308);
    }
    return r;
  }
  let t = await r.text();

  const canon = base + p;
  if (t.includes(PRIMARY)) t = t.split(PRIMARY).join(base);
  // bare domain mentions in visible text follow the request host too
  if (host !== PRIMARY_HOST) {
    t = t.split(PRIMARY_HOST).join(host);
    t = t.split("mahadevbookbets.live").join(host);
  }
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
