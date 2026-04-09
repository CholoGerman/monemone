import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  outputFileTracingIncludes: {
    "/sitemap.xml": ["./content/posts/**/*"],
  },
};

export default nextConfig;
