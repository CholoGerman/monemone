/**
 * AdSense publisher ID. Override with NEXT_PUBLIC_ADSENSE_CLIENT on Vercel if it changes.
 */
export const ADSENSE_PUBLISHER_ID =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim() ??
  "ca-pub-5459119696334592";
