import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "PhoneCash Guide helps US readers compare legit phone income apps with realistic expectations.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12">
      <article className="prose prose-zinc max-w-none">
        <h1>About PhoneCash Guide</h1>
        <p>
          PhoneCash Guide publishes practical, US-focused guides on apps and
          platforms that claim to pay users for surveys, tasks, games, and
          passive sharing. We emphasize realistic earning ranges, how to
          combine apps, and how to spot offers that waste time.
        </p>
        <h2>What we do</h2>
        <ul>
          <li>Tested breakdowns of popular money apps and survey platforms</li>
          <li>Comparison tables and quick rankings for different goals</li>
          <li>Clear disclosures when links are affiliate or sponsored</li>
        </ul>
        <h2>What we are not</h2>
        <p>
          We are not financial advisors. Earnings depend on eligibility,
          effort, and platform rules. Always read each provider&apos;s terms and
          privacy policy before signing up.
        </p>
        <h2>Contact</h2>
        <p>
          For corrections or partnership questions, use our{" "}
          <a href="/contact">contact page</a>.
        </p>
      </article>
    </main>
  );
}
