/**
 * AdSense publisher ID. Override with NEXT_PUBLIC_ADSENSE_CLIENT on Vercel if it changes.
 */
export const ADSENSE_PUBLISHER_ID =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim() ??
  "ca-pub-5459119696334592";

/** ads.txt uses `pub-…` (no `ca-` prefix). */
export function adsTxtPublisherToken(): string {
  return ADSENSE_PUBLISHER_ID.startsWith("ca-")
    ? ADSENSE_PUBLISHER_ID.slice(3)
    : ADSENSE_PUBLISHER_ID;
}

/** Single authorized seller line for Google AdSense / ads.txt. */
export function getAdsTxtBody(): string {
  return `google.com, ${adsTxtPublisherToken()}, DIRECT, f08c47fec0942fa0\n`;
}
