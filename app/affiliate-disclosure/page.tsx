import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Affiliate Disclosure",
  description: "How affiliate links work on this site.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12">
      <article className="prose prose-zinc max-w-none">
        <h1>Affiliate Disclosure</h1>
        <p>
          Some links on this website are affiliate links. If you click and
          purchase or sign up, we may earn a commission at no extra cost to
          you.
        </p>
        <h2>Editorial independence</h2>
        <p>
          We prioritize practical usefulness and transparency. Affiliate
          relationships do not influence our core recommendations.
        </p>
        <h2>Questions</h2>
        <p>Please contact us if you need more details about partner links.</p>
      </article>
    </main>
  );
}
