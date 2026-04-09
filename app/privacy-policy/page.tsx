import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How we collect, use, and protect your data.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12">
      <article className="prose prose-zinc max-w-none">
        <h1>Privacy Policy</h1>
        <p>
          We collect limited analytics data to improve the website experience.
          We do not sell personal information.
        </p>
        <h2>Information we collect</h2>
        <p>
          We may collect anonymized usage data, browser information, and
          referral data through analytics tools.
        </p>
        <h2>Advertising and third parties</h2>
        <p>
          This site may use Google AdSense and affiliate programs. These
          partners may use cookies to personalize ads and measure performance.
        </p>
        <h2>Contact</h2>
        <p>For policy requests, contact us through the contact form.</p>
      </article>
    </main>
  );
}
