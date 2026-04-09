import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Contact PhoneCash Guide for corrections, disclosures, or general inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12">
      <article className="prose prose-zinc max-w-none">
        <h1>Contact</h1>
        <p>
          Use email for corrections, disclosure questions, or partnership
          inquiries. Please include the exact page URL you are referring to.
        </p>
        <h2>Email</h2>
        {email ? (
          <p>
            <a href={`mailto:${encodeURIComponent(email)}`}>{email}</a>
          </p>
        ) : (
          <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950 not-prose">
            <p className="m-0 font-medium">Public email not configured yet</p>
            <p className="mt-2 mb-0 text-amber-900/90">
              Add{" "}
              <code className="rounded bg-amber-100 px-1 py-0.5">
                NEXT_PUBLIC_CONTACT_EMAIL
              </code>{" "}
              in Vercel → Project → Settings → Environment Variables
              (Production), then redeploy. See{" "}
              <code className="rounded bg-amber-100 px-1 py-0.5">
                .env.example
              </code>{" "}
              in the repo.
            </p>
          </div>
        )}
        <h2>What to include</h2>
        <ul>
          <li>URL of the page you are writing about</li>
          <li>
            Whether you are reporting an error, a policy concern, or a
            partnership idea
          </li>
        </ul>
      </article>
    </main>
  );
}
