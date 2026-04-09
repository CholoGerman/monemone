import type { Metadata } from "next";

const SITE_NAME = "PhoneCash Guide";
const DEFAULT_DESCRIPTION =
  "No-BS guides on money-making apps in the US, including realistic earnings and tested strategies.";

function normalizeSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ??
    "https://monemone.vercel.app";
  const noSlash = raw.replace(/\/+$/, "");
  try {
    const u = new URL(noSlash);
    if (u.protocol !== "https:" && u.protocol !== "http:") {
      return "https://monemone.vercel.app";
    }
    return noSlash;
  } catch {
    return "https://monemone.vercel.app";
  }
}

export const siteConfig = {
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  baseUrl: normalizeSiteUrl(),
};

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
  openGraphType = "website",
}: {
  title: string;
  description?: string;
  path?: string;
  openGraphType?: "website" | "article";
}): Metadata {
  const absoluteUrl = new URL(path, siteConfig.baseUrl).toString();

  return {
    title,
    description,
    alternates: { canonical: absoluteUrl },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: openGraphType,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function buildPostMetadata({
  title,
  description,
  slug,
  date,
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
}): Metadata {
  const path = `/blog/${slug}`;
  const absoluteUrl = new URL(path, siteConfig.baseUrl).toString();
  const publishedTime = /^\d{4}-\d{2}-\d{2}$/.test(date)
    ? `${date}T12:00:00.000Z`
    : new Date(date).toISOString();

  return {
    title,
    description,
    alternates: { canonical: absoluteUrl },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "article",
      publishedTime,
      modifiedTime: publishedTime,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
