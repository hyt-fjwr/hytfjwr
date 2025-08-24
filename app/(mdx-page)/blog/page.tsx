import { NotebookPen } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { getAllBlogPosts } from "@/app/util/post";
import { cn } from "@/lib/utils";
import { getCategoryColor } from "@/app/util/tagColorizer";
import { Inter } from "next/font/google";
import { formatDate } from "@/app/util/formatDate";
const inter = Inter({ subsets: ["latin"] });

export default async function page() {
  const posts = await getAllBlogPosts();
  //公開日順にソート
  const postsSorted = posts.sort(
    (x, y) =>
      new Date(y.publishedAt).getTime() - new Date(x.publishedAt).getTime()
  );

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-[21rem] flex flex-col md:w-[45rem]">
          <div className="mt-5">
            <h1
              className={cn(
                `${inter.className}`,
                "text-black dark:text-white text-4xl font-bold flex items-center animate-in"
              )}
            >
              Blog
              <NotebookPen aria-hidden="true" className="h-8 w-8 ml-2" />
            </h1>
            <h2
              className="animate-in mt-2"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              不定期で投稿の更新をしてます。
              <br />
              現在の投稿数は{postsSorted.length}件です。
            </h2>
          </div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 hide-scroll-bar justify-center"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          {postsSorted.map((post, index) => (
            <button
              key={post.id}
              className="m-1.5 md:m-6 w-72 h-[219px] hover:bg-primary/10 duration-200 rounded-lg animate-in"
              style={{ "--index": index + 2 } as React.CSSProperties}
            >
              <Link href={`/blog/${post.id}`}>
                <div className="w-72 rounded-lg ">
                  <Image
                    width={1280}
                    height={720}
                    src={`https://hytfjwr.vercel.app/api/og?title=${post.title}`}
                    alt={post.title}
                    className="rounded-t-lg border-r border-t border-l border-b border-zinc-700"
                    quality={70}
                  />
                </div>
                <div className="h-14 rounded-b-lg border-r border-b border-l border-zinc-700">
                  <div className="h-14 text-wrap text-left ml-2 text-sm flex flex-row ">
                    <div className="flex flex-col h-5 font-thin mt-0.5">
                      {formatDate(post.publishedAt)}
                      <div className="flex">
                        {post.tags.map((tag: string) => (
                          <Link key={tag} href={`/blog/tag/${tag}`}>
                            <button
                              className={cn(
                                getCategoryColor(tag),
                                "flex m-1 pb-px pt-px pl-2 pr-2 text-xs border rounded-full duration-100 z-20 font-normal dark:font-light"
                              )}
                            >
                              {tag}
                            </button>
                          </Link>
                        ))}
                      </div>
                    </div>
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
