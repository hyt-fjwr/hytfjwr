import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import remarkSlug from "remark-slug";

const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    domains: ["tailwindui.com", "hytfjwr.com", "localhost", "img.clerk.com"],
  },
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [rehypePrettyCode],
    remarkPlugins: [remarkSlug],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
