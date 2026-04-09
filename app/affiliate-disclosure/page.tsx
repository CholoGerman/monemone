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
          PhoneCash Guide may earn compensation when you click certain links
          and sign up, purchase, or complete actions on third-party websites or
          apps. These are known as <strong>affiliate links</strong>.
        </p>
        <h2>What this means for you</h2>
        <p>
          If you use an affiliate link, you are not charged extra. Any commission
          is paid by the partner, not added to your price. Offers and
          availability can change at any time and are controlled by each
          partner&apos;s terms.
        </p>
        <h2>How we label affiliate links</h2>
        <p>
          Affiliate CTAs on this site include a short disclosure near the
          button. Outbound affiliate links use{" "}
          <code>rel=&quot;nofollow sponsored&quot;</code> where appropriate.
        </p>
        <h2>Tracking parameters</h2>
        <p>
          Affiliate URLs may include standard tracking parameters (for example{" "}
          <code>utm_source</code>, <code>utm_medium</code>,{" "}
          <code>utm_campaign</code>, and <code>utm_content</code>) so we can
          understand which pages and placements help readers find useful tools.
        </p>
        <h2>Editorial independence</h2>
        <p>
          We prioritize practical usefulness and transparency. Affiliate
          relationships do not determine whether a product or app is mentioned,
          and we still recommend reading each provider&apos;s official terms and
          privacy policy before signing up.
        </p>
        <h2>Not financial advice</h2>
        <p>
          Content on this site is for informational purposes only and is not
          financial, legal, or tax advice. Earnings vary by user, effort, and
          eligibility.
        </p>
        <h2>Questions</h2>
        <p>
          If you need clarification about a specific link or partnership, please
          contact us through your site&apos;s official contact channel.
        </p>
      </article>
    </main>
  );
}
