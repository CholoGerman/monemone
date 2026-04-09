import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllPosts, getCompiledPost } from "@/lib/content";
import {
  buildArticleJsonLd,
  buildPillarFaqJsonLd,
  PILLAR_SLUG,
} from "@/lib/json-ld";
import { buildPostMetadata, siteConfig } from "@/lib/seo";

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
    date: post.frontmatter.date,
  });
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getCompiledPost(slug);

  if (!post) {
    notFound();
  }

  const postUrl = new URL(
    `/blog/${post.frontmatter.slug}`,
    siteConfig.baseUrl,
  ).toString();

  const articleLd = buildArticleJsonLd({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    url: postUrl,
    datePublished: post.frontmatter.date,
  });

  const faqLd =
    slug === PILLAR_SLUG ? buildPillarFaqJsonLd() : null;

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleLd),
        }}
      />
      {faqLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      ) : null}
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
