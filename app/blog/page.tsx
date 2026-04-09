import type { Metadata } from "next";
import Link from "next/link";

import { getAllPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog — money app guides",
  description:
    "Money app strategies, comparisons, and tested guides for US readers.",
  path: "/blog",
  openGraphType: "website",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
        Blog
      </h1>
      <p className="mt-3 text-zinc-600">
        Tested app strategies, realistic earning ranges, and no-fluff guides.
      </p>

      <div className="mt-10 space-y-6">
        {posts.length === 0 ? (
          <p className="rounded-xl border border-zinc-200 bg-white p-5 text-zinc-600">
            No posts yet. Add `.mdx` files inside `content/posts`.
          </p>
        ) : null}
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl border border-zinc-200 bg-white p-5"
          >
            <p className="text-sm text-zinc-500">
              {new Date(post.date).toLocaleDateString("en-US")}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-zinc-900">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-zinc-600">{post.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
