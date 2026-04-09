import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description: "How cookies are used on this website.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12">
      <article className="prose prose-zinc max-w-none">
        <h1>Cookie Policy</h1>
        <p>
          We use cookies and similar technologies to remember preferences,
          measure traffic, and deliver relevant ads.
        </p>
        <h2>Types of cookies</h2>
        <ul>
          <li>Necessary cookies for basic functionality.</li>
          <li>Analytics cookies to understand user behavior.</li>
          <li>Advertising cookies for ad personalization and reporting.</li>
        </ul>
        <h2>Managing cookies</h2>
        <p>
          You can control cookies in your browser settings. Disabling some
          cookies may affect website functionality.
        </p>
      </article>
    </main>
  );
}
