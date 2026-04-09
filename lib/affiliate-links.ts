/**
 * Central affiliate link registry. Override any URL in Vercel with NEXT_PUBLIC_* vars.
 * UTM convention: utm_source=phonecashguide, utm_medium=affiliate,
 * utm_campaign=<pageSlug or custom>, utm_content=<position id>.
 */

export const AFFILIATE_UTM_SOURCE = "phonecashguide";

export type AffiliateProgram =
  | "honeygain"
  | "swagbucks"
  | "ysense"
  | "inboxdollars"
  | "toluna"
  | "gamee";

const DEFAULT_URLS: Record<AffiliateProgram, string> = {
  honeygain: "https://join.honeygain.com/XRCHO92F09",
  swagbucks:
    "https://www.swagbucks.com/p/register?rb=232665570&rp=1",
  ysense: "https://www.ysense.com/?rb=232665816",
  inboxdollars: "https://www.inboxdollars.com/",
  toluna: "https://www.toluna.com/",
  gamee: "https://gamee.com/",
};

const ENV_VAR_BY_PROGRAM: Record<AffiliateProgram, string> = {
  honeygain: "NEXT_PUBLIC_AFFILIATE_HONEYGAIN_URL",
  swagbucks: "NEXT_PUBLIC_AFFILIATE_SWAGBUCKS_URL",
  ysense: "NEXT_PUBLIC_AFFILIATE_YSENSE_URL",
  inboxdollars: "NEXT_PUBLIC_AFFILIATE_INBOXDOLLARS_URL",
  toluna: "NEXT_PUBLIC_AFFILIATE_TOLUNA_URL",
  gamee: "NEXT_PUBLIC_AFFILIATE_GAMEE_URL",
};

export function getAffiliateBaseUrl(program: AffiliateProgram): string {
  const envKey = ENV_VAR_BY_PROGRAM[program];
  const fromEnv =
    typeof process !== "undefined" ? process.env[envKey] : undefined;
  if (fromEnv && fromEnv.trim().length > 0) {
    return fromEnv.trim();
  }
  return DEFAULT_URLS[program];
}

export function appendAffiliateTracking(
  href: string,
  params: {
    pageSlug: string;
    position: string;
    campaign?: string;
  },
): string {
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return href;
  }

  if (!url.searchParams.has("utm_source")) {
    url.searchParams.set("utm_source", AFFILIATE_UTM_SOURCE);
  }
  if (!url.searchParams.has("utm_medium")) {
    url.searchParams.set("utm_medium", "affiliate");
  }
  url.searchParams.set("utm_campaign", params.campaign ?? params.pageSlug);
  url.searchParams.set("utm_content", params.position);

  return url.toString();
}

export function buildAffiliateUrl(
  program: AffiliateProgram,
  params: {
    pageSlug: string;
    position: string;
    campaign?: string;
  },
): string {
  const base = getAffiliateBaseUrl(program);
  return appendAffiliateTracking(base, params);
}

export function buildTrackedOutboundUrl(
  href: string,
  params: {
    pageSlug: string;
    position: string;
    campaign?: string;
  },
): string {
  return appendAffiliateTracking(href, params);
}
