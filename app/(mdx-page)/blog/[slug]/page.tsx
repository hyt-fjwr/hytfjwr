import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import { getPost } from "../../../data/post";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

type Props = {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPost(params.slug);

  const { title, publishedAt: publishedTime, postId } = post;

  const metadata: Metadata = {
    metadataBase: new URL("https://hytfjwr.com"),
    title: `${title} | Hayato Fujiwara`,
    description: "BLOG PAGE",
    openGraph: {
      title: `${title} | Hayato Fujiwara`,
      description: "BLOG PAGE",
      type: "article",
      publishedTime,
      url: `https://hytfjwr.com/blog/${postId}`,
      images: {
        url: `https://hytfjwr.com/api/og?title=${title}`,
        alt: "hytfjwr.com",
      },
    },
  };

  return metadata;
}

export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await getPost(slug);

  const metadata: Metadata = {
    title: post.title,
    description:
      "My portfolio created with Nextjs, Radix Primitives, Framer Motion, Tailwind",
    openGraph: {
      title: "Hayato Fujiwara",
      description:
        "My portfolio created with Nextjs, Radix Primitives, Framer Motion, Tailwind",
      type: "website",
      url: "https://hytfjwr.com",
      images: [
        {
          url: "https://hytfjwr.com/api/og?title=hytfjwr.com",
          alt: "hytfjwr.com",
        },
      ],
    },
  };

  return (
    <div>
      <div className="prose dark:prose-invert w-[21rem] flex flex-col md:w-[45rem]">
        <Button variant="ghost" className="w-20 h-8 duration-300">
          <Link href="/blog" className="flex items-center">
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            BACK
          </Link>
        </Button>
        <div className="">
          <h1>{post.title}</h1>
          <post.content />
        </div>
      </div>
    </div>
  );
}
