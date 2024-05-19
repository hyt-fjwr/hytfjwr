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
      <div className="flex flex-col">
        <div className="w-[21rem] flex flex-col md:w-[45rem]">
          <div className="mt-5">
            <h1 className="text-black dark:text-white text-4xl font-bold flex items-center aniamte-in">
              Blog
              <NotebookPen aria-hidden="true" className="h-8 w-8 ml-2" />
            </h1>
            <h2
              className="animate-in"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              The post will be updated on an occasionaly. <br />
              There are currently 1 posts.
            </h2>
          </div>
        </div>
        <div
          className="flex overflow-x-scroll pb-10 hide-scroll-bar m-4 md:w-[45rem] w-[21rem] animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          {posts.map((post) => (
            <button key={post.postId} className="m-4 w-72 h-52">
              <Link href={`/blog/${post.postId}`}>
                <div className="w-72 rounded-lg ">
                  <Image
                    width={1280}
                    height={720}
                    src={`http://localhost:3000/api/og?title=${post.title}`}
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
      </div>
    </>
  );
}
