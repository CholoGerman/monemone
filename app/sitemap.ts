import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/posts-index";
import { siteConfig } from "@/lib/seo";

/** Build-time sitemap; avoids runtime fs misses on serverless. */
export const dynamic = "force-static";

function safeLastModified(isoDate: string): Date {
  const d = new Date(isoDate);
  return Number.isNaN(d.getTime()) ? new Date() : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteConfig.baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteConfig.baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const legalRoutes = [
    "/privacy-policy",
    "/cookie-policy",
    "/terms",
    "/affiliate-disclosure",
  ].map((route) => ({
    url: `${siteConfig.baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  let posts: MetadataRoute.Sitemap = [];
  try {
    posts = getAllPosts().map((post) => ({
      url: `${siteConfig.baseUrl}/blog/${encodeURIComponent(post.slug)}`,
      lastModified: safeLastModified(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  } catch {
    posts = [];
  }

  return [...staticRoutes, ...legalRoutes, ...posts];
}
