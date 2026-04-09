import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms and Conditions",
  description: "Rules and conditions for using this website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12">
      <article className="prose prose-zinc max-w-none">
        <h1>Terms and Conditions</h1>
        <p>
          By using this website, you agree to these terms. Content is provided
          for informational purposes and does not constitute financial advice.
        </p>
        <h2>Use of content</h2>
        <p>
          You may reference our content with attribution. Republishing full
          articles without permission is not allowed.
        </p>
        <h2>Liability</h2>
        <p>
          We are not responsible for losses or outcomes resulting from actions
          taken based on our content.
        </p>
      </article>
    </main>
  );
}
