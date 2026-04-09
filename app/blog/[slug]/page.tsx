import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllPosts, getCompiledPost } from "@/lib/content";
import { buildPostMetadata } from "@/lib/seo";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getCompiledPost(slug);

  if (!post) {
    return {};
  }

  return buildPostMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    slug: post.frontmatter.slug,
  });
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getCompiledPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12">
      <article className="prose prose-zinc max-w-none">
        <h1>{post.frontmatter.title}</h1>
        <p className="!mt-2 text-sm text-zinc-500">
          {new Date(post.frontmatter.date).toLocaleDateString("en-US")}
        </p>
        {post.content}
      </article>
    </main>
  );
}
