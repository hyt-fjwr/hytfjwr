import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import remarkSlug from "remark-slug";

const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    domains: [
      "tailwindui.com",
      "hytfjwr.vercel.app",
      "localhost",
      "img.clerk.com",
      "images.clerk.dev",
      "www.gravatar.com",
      "m.media-amazon.com",
    ],
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "https://hytfjwr.vercel.app" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
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
