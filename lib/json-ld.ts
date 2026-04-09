import { siteConfig } from "@/lib/seo";

export const PILLAR_SLUG = "make-money-with-your-phone-us-2026";

export function buildArticleJsonLd(input: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
}): Record<string, unknown> {
  const iso =
    /^\d{4}-\d{2}-\d{2}$/.test(input.datePublished)
      ? `${input.datePublished}T12:00:00.000Z`
      : new Date(input.datePublished).toISOString();

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: iso,
    dateModified: iso,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": input.url,
    },
  };
}

/** FAQ schema for the main pillar (matches on-page FAQ). */
export function buildPillarFaqJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can you really make money with your phone?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, but think of it as extra income, not a full-time salary.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best app to make money with your phone?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on your goal: for passive earnings Honeygain is a common pick; for faster payouts survey and GPT apps like Swagbucks are often more consistent.",
        },
      },
      {
        "@type": "Question",
        name: "Is it worth using money-making apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, as a side hustle, especially when you stay consistent and focus on trusted platforms with clear payout rules.",
        },
      },
    ],
  };
}
