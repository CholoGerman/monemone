import type { Metadata } from "next";

const SITE_NAME = "PhoneCash Guide";
const DEFAULT_DESCRIPTION =
  "No-BS guides on money-making apps in the US, including realistic earnings and tested strategies.";

export const siteConfig = {
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  baseUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://example.com",
};

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
}: {
  title: string;
  description?: string;
  path?: string;
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
      type: "article",
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
}: {
  title: string;
  description: string;
  slug: string;
}): Metadata {
  return buildMetadata({
    title,
    description,
    path: `/blog/${slug}`,
  });
}
