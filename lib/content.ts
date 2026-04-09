import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import AdSlot from "@/components/AdSlot";
import AffiliateCTA from "@/components/AffiliateCTA";
import AffiliateTopDisclosure from "@/components/AffiliateTopDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import {
  getAllPosts,
  getPostBySlug,
  type PostFrontmatter,
  type PostSummary,
} from "@/lib/posts-index";

export type { PostFrontmatter, PostSummary };
export { getAllPosts, getPostBySlug };

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
