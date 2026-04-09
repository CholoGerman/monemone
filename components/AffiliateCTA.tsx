import type { AffiliateProgram } from "@/lib/affiliate-links";

import AffiliateLink from "./AffiliateLink";

type AffiliateCTAProps = {
  appName: string;
  position: string;
  program?: AffiliateProgram;
  href?: string;
  ctaLabel?: string;
  note?: string;
};

const DEFAULT_NOTE =
  "This is an affiliate link. We may earn a commission at no extra cost to you.";

export default function AffiliateCTA({
  appName,
  position,
  program,
  href,
  ctaLabel = "Start earning",
  note = DEFAULT_NOTE,
}: AffiliateCTAProps) {
  if (!program && !href) {
    return null;
  }

  return (
    <div className="my-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
      <p className="text-sm font-medium text-emerald-900">
        Ready to try {appName}?
      </p>
      <div className="mt-3">
        <AffiliateLink
          program={program}
          href={href}
          position={position}
          className="inline-flex rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          {ctaLabel}
        </AffiliateLink>
      </div>
      <p className="mt-3 text-xs text-emerald-900/80">{note}</p>
    </div>
  );
}
