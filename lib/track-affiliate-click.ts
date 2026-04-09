export type AffiliateClickPayload = {
  program: string;
  position: string;
  pagePath: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Pushes to dataLayer (GTM) and fires gtag if present.
 * Works without GA/GTM installed (no-op side effects beyond dataLayer init).
 */
export function trackAffiliateClick(payload: AffiliateClickPayload): void {
  if (typeof window === "undefined") {
    return;
  }

  const eventPayload = {
    event: "affiliate_click",
    affiliate_program: payload.program,
    affiliate_position: payload.position,
    page_path: payload.pagePath,
  };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(eventPayload);

  if (typeof window.gtag === "function") {
    window.gtag("event", "affiliate_click", {
      affiliate_program: payload.program,
      affiliate_position: payload.position,
      page_path: payload.pagePath,
    });
  }
}
