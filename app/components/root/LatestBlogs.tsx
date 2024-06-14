import { getAllBlogPosts } from "@/app/util/post";
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
    </div>
  );
}
