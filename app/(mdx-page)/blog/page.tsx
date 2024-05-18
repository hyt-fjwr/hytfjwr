import { NotebookPen } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAllPosts } from "@/app/data/post";

export default async function page() {
  const posts = await getAllPosts();
  return (
    <>
      <div className="w-[21rem] flex flex-col md:w-[45rem]">
        <div className="mt-5">
          <h1 className="text-black dark:text-white text-4xl font-bold flex items-center">
            Blog
            <NotebookPen aria-hidden="true" className="h-8 w-8 ml-2" />
          </h1>
          <h2>
            The post will be updated on an occasionaly. <br />
            There are currently 1 posts.
          </h2>
        </div>
      </div>
      <div className="flex mt-4">
        {posts.map((post) => (
          <div key={post.postId} className="flex flex-col">
            <Button variant="ghost" className="bg-primary/5 flex flex-col">
              <Link href={`/blog/${post.postId}`}>{post.postId}</Link>
            </Button>
          </div>
        ))}

        {posts.map((post) => (
          <button key={post.postId} className=" w-72 h-52">
            <Link href={`/blog/${post.postId}`}>
              <div className="w-72 rounded-lg">
                <Image
                  width={1280}
                  height={720}
                  src={`https://hytfjwr.com/api/og?title=${post.title}`}
                  alt={post.title}
                  className="rounded-t-lg border-r border-t border-l border-b border-zinc-700"
                  quality={70}
                />
              </div>
              <div className=" h-11 rounded-b-lg border-r border-b border-l border-zinc-700">
                <div className="h-11 text-wrap truncate ... text-sm">
                  {post.title}
                </div>
              </div>
            </Link>
          </button>
        ))}
      </div>
    </>
  );
}
