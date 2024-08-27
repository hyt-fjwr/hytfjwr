import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import { getProjectPost } from "../../../util/post";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import CommentsList from "@/app/components/blog/CommentsList";
import AddComment from "@/app/components/blog/AddComment";
import { Button } from "@/app/components/ui/button";
import { Toc } from "@/app/components/blog/Toc";
import { formatDate } from "@/app/util/formatDate";

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
  const post = await getProjectPost(params.slug);
  const { title, publishedAt: publishedTime, id } = post;

  const metadata: Metadata = {
    metadataBase: new URL("https://hytfjwr.com"),
    title: `${title} | Hayato Fujiwara`,
    description: "Project Page",
    openGraph: {
      title: `${title} | Hayato Fujiwara`,
      description: "Project Page",
      type: "article",
      publishedTime,
      url: `https://hytfjwr.com/project/${id}`,
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
  const post = await getProjectPost(slug);

  const user = await currentUser();
  if (!user) {
    return (
      <>
        {" "}
        <div>
          <div className="prose dark:prose-invert w-[21rem] flex flex-col md:w-[45rem]">
            <Button variant="ghost" className="w-20 h-8 duration-300">
              <Link href="/project" className="flex items-center">
                <ChevronLeft aria-hidden="true" className="h-5 w-5" />
                BACK
              </Link>
            </Button>
            <Toc />
            <h3 className="flex inset-0 p-1 m-0 text-xs w-full justify-end text-primary/60">
              {formatDate(post.publishedAt)}
            </h3>
            <div id="post-content" className="post-content">
              <h1>{post.title}</h1>
              <post.content />
            </div>
          </div>
          <AddComment userId={""} pageId={slug} redirectPath="project" />
          <CommentsList userId={""} pageId={slug} redirectPath="project" />
        </div>
      </>
    );
  }
  const { id } = user;
  return (
    <div>
      <div className="prose dark:prose-invert w-[21rem] flex flex-col md:w-[45rem]">
        <Button variant="ghost" className="w-20 h-8 duration-300">
          <Link href="/project" className="flex items-center">
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            BACK
          </Link>
        </Button>
        <Toc />
        <h3 className="flex inset-0 p-1 m-0 text-xs w-full justify-end text-primary/60">
          {formatDate(post.publishedAt)}
        </h3>
        <div id="post-content" className="post-content text-primary">
          <h1 className="text-center">{post.title}</h1>
          <post.content />
        </div>
      </div>
      <AddComment userId={""} pageId={slug} redirectPath="project" />
      <CommentsList userId={""} pageId={slug} redirectPath="project" />
    </div>
  );
}
