import Link from "next/link";

export default function AffiliateTopDisclosure() {
  return (
    <aside className="my-4 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700">
      <strong>Disclosure:</strong> This guide contains affiliate links. If you
      sign up through them, we may earn a commission at no extra cost to you.{" "}
      <Link href="/affiliate-disclosure" className="font-medium underline">
        Affiliate Disclosure
      </Link>
    </aside>
  );
}
