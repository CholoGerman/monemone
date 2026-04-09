"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { AffiliateProgram } from "@/lib/affiliate-links";
import {
  buildAffiliateUrl,
  buildTrackedOutboundUrl,
} from "@/lib/affiliate-links";
import { trackAffiliateClick } from "@/lib/track-affiliate-click";

function pageSlugFromPath(pathname: string): string {
  const trimmed = pathname.replace(/^\/+|\/+$/g, "");
  if (!trimmed) {
    return "home";
  }
  if (trimmed.startsWith("blog/")) {
    return trimmed.slice("blog/".length) || "blog";
  }
  return trimmed.replaceAll("/", "_");
}

type AffiliateLinkProps = {
  program?: AffiliateProgram;
  href?: string;
  position: string;
  campaign?: string;
  className?: string;
  children: React.ReactNode;
};

export default function AffiliateLink({
  program,
  href,
  position,
  campaign,
  className,
  children,
}: AffiliateLinkProps) {
  const pathname = usePathname() ?? "/";
  const pageSlug = pageSlugFromPath(pathname);

  let url: string;
  if (href !== undefined) {
    url = buildTrackedOutboundUrl(href, { pageSlug, position, campaign });
  } else if (program !== undefined) {
    url = buildAffiliateUrl(program, { pageSlug, position, campaign });
  } else {
    return <span className={className}>{children}</span>;
  }

  const programKey = program ?? "external";

  return (
    <Link
      href={url}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className={className}
      onClick={() =>
        trackAffiliateClick({
          program: programKey,
          position,
          pagePath: pathname,
        })
      }
    >
      {children}
    </Link>
  );
}
