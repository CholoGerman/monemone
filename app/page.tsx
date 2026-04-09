import type { Metadata } from "next";
import Link from "next/link";

import AdSlot from "@/components/AdSlot";
import { getAllPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Make money with your phone (US)",
  description:
    "Honest US guides to apps that pay: surveys, passive income, realistic earnings, and how to combine platforms without the hype.",
  path: "/",
  openGraphType: "website",
});

export default function HomePage() {
  const posts = getAllPosts();
  const featuredPost = posts.find((post) => post.featured) ?? posts[0];

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12">
      <section className="rounded-2xl border border-zinc-200 bg-white p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          US market guide
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900">
          Make Money With Your Phone Without the Hype
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-600">
          Realistic, strategy-based guides on apps that actually pay in the US.
          We focus on tested methods, expected earnings, and safe monetization
          choices.
        </p>
        {featuredPost ? (
          <div className="mt-6">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="inline-flex rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700"
            >
              Read the main guide
            </Link>
          </div>
        ) : null}
      </section>

      <AdSlot label="Homepage ad placement" variant="home" />

      <section className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
          Latest Guides
        </h2>
        <div className="mt-4 space-y-4">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-xl border border-zinc-200 bg-white p-5"
            >
              <h3 className="text-lg font-semibold text-zinc-900">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 text-zinc-600">{post.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
