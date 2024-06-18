import { getAllBlogPosts } from "@/app/util/post";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function LatestBlogs({ cssIndex }: { cssIndex: number }) {
  const posts = await getAllBlogPosts();
  //公開日順にソート
  const postsSorted = posts.sort(
    (x, y) =>
      new Date(y.publishedAt).getTime() - new Date(x.publishedAt).getTime()
  );
  return (
    <div
      className="animate-in mt-5 flex flex-col"
      style={{ "--index": cssIndex } as React.CSSProperties}
    >
      <h1 className="text-primary prose-xl font-semibold mb-2">Latest Blogs</h1>
      <div className="flex flex-col self-center bg-primary/5 rounded-xl p-2 w-full md:w-[37rem]">
        {postsSorted.map((post, index) => (
          <Link
            key={index}
            href={`/blog/${post.id}`}
            className=" flex flex-row gap-2 items-center hover:bg-primary/10 rounded-full duration-150 p-0.5 pl-2 truncate w-full m-0.5 animate-in"
            style={{ "--index": cssIndex + index } as React.CSSProperties}
          >
            <p className="text-primary/30 text-sm">{post.publishedAt}</p>
            <h1 className="ml-3 truncate">{post.title}</h1>
          </Link>
        ))}
      </div>
      <div
        className="w-full flex justify-end items-end animate-in"
        style={{ "--index": cssIndex } as React.CSSProperties}
      >
        <Link
          href="/blog"
          className="flex flex-row items-center prose dark:prose-invert text-xs group hover:text-primary duration-100 pt-3 md:pr-5"
        >
          <p className="flex flex-row justify-center items-center hover:bg-slate-200 hover:dark:bg-slate-800 px-2 py-1 rounded-full duration-200">
            See more blogs
            <ChevronRight
              width={15}
              height={15}
              className="-left-2 group-hover:translate-x-1 duration-100"
            />
          </p>
        </Link>
      </div>
    </div>
  );
}
