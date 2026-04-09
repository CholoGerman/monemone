import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import AdSlot from "@/components/AdSlot";
import AffiliateCTA from "@/components/AffiliateCTA";
import AffiliateTopDisclosure from "@/components/AffiliateTopDisclosure";
import ComparisonTable from "@/components/ComparisonTable";

const POSTS_DIRECTORY = path.join(process.cwd(), "content", "posts");

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags?: string[];
  featured?: boolean;
};

export type PostSummary = PostFrontmatter;

function getPostFiles() {
  if (!fs.existsSync(POSTS_DIRECTORY)) {
    return [];
  }

  return fs
    .readdirSync(POSTS_DIRECTORY)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));
}

export function getAllPosts(): PostSummary[] {
  const files = getPostFiles();

  return files
    .map((file) => {
      const fullPath = path.join(POSTS_DIRECTORY, file);
      const fileContent = fs.readFileSync(fullPath, "utf-8");
      const { data } = matter(fileContent);

      const slug = file.replace(/\.(md|mdx)$/, "");

      return {
        title: String(data.title ?? slug),
        description: String(data.description ?? ""),
        date: String(data.date ?? new Date().toISOString()),
        slug: String(data.slug ?? slug),
        tags: Array.isArray(data.tags)
          ? data.tags.map((tag) => String(tag))
          : undefined,
        featured: Boolean(data.featured ?? false),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
  const targetPath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);
  if (!fs.existsSync(targetPath)) {
    return null;
  }

  const source = fs.readFileSync(targetPath, "utf-8");
  const { content, data } = matter(source);

  return {
    frontmatter: {
      title: String(data.title ?? slug),
      description: String(data.description ?? ""),
      date: String(data.date ?? new Date().toISOString()),
      slug: String(data.slug ?? slug),
      tags: Array.isArray(data.tags)
        ? data.tags.map((tag) => String(tag))
        : undefined,
      featured: Boolean(data.featured ?? false),
    } satisfies PostFrontmatter,
    content,
  };
}

export async function getCompiledPost(slug: string) {
  const post = getPostBySlug(slug);
  if (!post) {
    return null;
  }

  const compiled = await compileMDX<PostFrontmatter>({
    source: post.content,
    components: {
      AdSlot,
      AffiliateCTA,
      AffiliateTopDisclosure,
      ComparisonTable,
    },
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return {
    frontmatter: post.frontmatter,
    content: compiled.content,
  };
}
