# Affiliate links and click tracking

## Environment variables

In **Vercel** → your project → **Settings** → **Environment Variables** → scope **Production** (redeploy after changes).

Set `NEXT_PUBLIC_SITE_URL` for correct canonical URLs, sitemap, and robots.

For production affiliate URLs, set one or more of:

- `NEXT_PUBLIC_AFFILIATE_HONEYGAIN_URL`
- `NEXT_PUBLIC_AFFILIATE_SWAGBUCKS_URL`
- `NEXT_PUBLIC_AFFILIATE_YSENSE_URL`
- `NEXT_PUBLIC_AFFILIATE_INBOXDOLLARS_URL`
- `NEXT_PUBLIC_AFFILIATE_TOLUNA_URL`
- `NEXT_PUBLIC_AFFILIATE_GAMEE_URL`

If a variable is missing, the site falls back to the brand’s public homepage URL.

## UTM convention

Outbound affiliate links append (when not already present):

- `utm_source=phonecashguide`
- `utm_medium=affiliate`
- `utm_campaign=<page slug>` (derived from the URL path, e.g. the MDX post slug)
- `utm_content=<position>` (set per CTA in MDX, e.g. `afterHoneygainSection`)

## Click events (GTM / GA4)

On click, the client pushes:

```json
{
  "event": "affiliate_click",
  "affiliate_program": "honeygain",
  "affiliate_position": "afterHoneygainSection",
  "page_path": "/blog/make-money-with-your-phone-us-2026"
}
```

If `gtag` is available, the same data is sent as a GA4 event named `affiliate_click`.

### Google Tag Manager

Create a trigger on **Custom Event** `affiliate_click` and pass the variables `affiliate_program`, `affiliate_position`, and `page_path` to GA4 or your ads platform.

## Code map

- Registry and URL builder: `lib/affiliate-links.ts`
- Click helper: `lib/track-affiliate-click.ts`
- Tracked link UI: `components/AffiliateLink.tsx`, `components/AffiliateCTA.tsx`

## Google AdSense (when you are ready)

1. Apply in the [Google AdSense](https://www.google.com/adsense/) console once you have enough useful pages and some traffic.
2. After approval, create **display ad units** and copy your publisher ID (`ca-pub-…`) and each **ad slot** ID.
3. Set `NEXT_PUBLIC_ADSENSE_CLIENT` and the `NEXT_PUBLIC_ADSENSE_SLOT_*` variables in Vercel (Production), then redeploy.
4. `components/AdSlot.tsx` shows real ads when those variables are set; otherwise it keeps the dashed placeholder (policy-safe while you grow).
5. Keep ad density moderate; pair with your existing cookie banner and legal pages.
