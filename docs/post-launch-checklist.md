# Post-launch checklist (PhoneCash Guide / monemone)

Use this after the site is live on Vercel. Nothing here replaces Google’s own account settings; it is a concise operator checklist.

## Custom domain and canonical URL

1. In **Vercel** → your project → **Settings** → **Domains**, add your domain and follow DNS instructions until the domain shows as valid.
2. Set **`NEXT_PUBLIC_SITE_URL`** to `https://yourdomain.com` (no trailing slash) for **Production** (and Preview if you use previews with a stable preview URL).
3. **Redeploy** so Next.js bakes the value into metadata, `sitemap.xml`, and `robots.txt`.
4. In **Google Search Console**, use a property that matches how users reach the site (domain property or URL-prefix `https://yourdomain.com/`). Submit `https://yourdomain.com/sitemap.xml` if the host changed.

## Google AdSense (after approval)

1. In AdSense, confirm the site status allows serving ads and check **Policy center** for issues.
2. Complete **Payments** (tax forms and payout method) so earnings can be paid out.
3. Create at least one **display** ad unit; set **`NEXT_PUBLIC_ADSENSE_SLOT_DEFAULT`** in Vercel to the numeric **ad slot** ID, redeploy.
4. On the live site, view source or devtools and confirm `<ins class="adsbygoogle" … data-ad-slot="…">` appears (not only the dashed placeholder).
5. Optional: create separate units for home vs posts and map `NEXT_PUBLIC_ADSENSE_SLOT_HOME`, `_INTRO`, `_MID`, `_PRE_FAQ` (see `components/AdSlot.tsx`).

## Google Analytics 4

1. Set **`NEXT_PUBLIC_GA_MEASUREMENT_ID`** (`G-XXXXXXXXXX`) in Vercel → Production → redeploy.
2. In GA4 → **Reports** → **Realtime**, open your site in another tab and confirm at least one active user.
3. Optional: in **Admin** → **Data streams**, enable enhanced measurement if you want outbound clicks and scrolls (affiliate clicks already fire `affiliate_click` from the site when `gtag` loads).

## Contact and affiliates

1. Set **`NEXT_PUBLIC_CONTACT_EMAIL`** so `/contact` shows a working address.
2. Override **`NEXT_PUBLIC_AFFILIATE_*_URL`** only when you have official referral links; otherwise defaults in `lib/affiliate-links.ts` apply.

## Content rhythm (light)

1. Aim for occasional new guides or small refreshes to the pillar post so dates and examples stay credible.
2. Keep internal links pointing at the main hub: `/blog/make-money-with-your-phone-us-2026`.

## Performance spot-check

1. Run [PageSpeed Insights](https://pagespeed.web.dev/) on the home page and the pillar URL; fix only regressions that are easy wins (large images, blocking scripts you control).
