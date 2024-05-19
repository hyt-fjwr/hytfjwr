import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";

const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    domains: ["tailwindui.com", "hytfjwr.com", "localhost"],
  },
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [rehypePrettyCode],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
