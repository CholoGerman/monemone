import Link from "next/link";

type AffiliateCTAProps = {
  appName: string;
  href: string;
  ctaLabel?: string;
  note?: string;
};

export default function AffiliateCTA({
  appName,
  href,
  ctaLabel = "Start earning",
  note = "This is an affiliate link. We may earn a commission at no extra cost to you.",
}: AffiliateCTAProps) {
  return (
    <div className="my-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
      <p className="text-sm font-medium text-emerald-900">
        Ready to try {appName}?
      </p>
      <div className="mt-3">
        <Link
          href={href}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-flex rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          {ctaLabel}
        </Link>
      </div>
      <p className="mt-3 text-xs text-emerald-900/80">{note}</p>
    </div>
  );
}
