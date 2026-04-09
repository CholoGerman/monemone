import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Contact PhoneCash Guide for corrections, disclosures, or general inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12">
      <article className="prose prose-zinc max-w-none">
        <h1>Contact</h1>
        <p>
          Use the channel you prefer. Replace the placeholder below with a
          public contact email or form URL when you are ready for production.
        </p>
        <h2>Email</h2>
        <p>
          <a href="mailto:hello@example.com">hello@example.com</a>
        </p>
        <p className="text-sm text-zinc-600">
          Tip: create an address like <code>hello@yourdomain.com</code> and
          forward it to your main inbox. Update this page and your legal pages
          to match.
        </p>
        <h2>What to include</h2>
        <ul>
          <li>URL of the page you are writing about</li>
          <li>Whether you are reporting an error, a policy concern, or a partnership idea</li>
        </ul>
      </article>
    </main>
  );
}
