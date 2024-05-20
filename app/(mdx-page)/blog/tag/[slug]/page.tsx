import { getAllPostsByTags } from "@/app/data/post";
import { ChevronLeft, NotebookPen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function convertDateFormat(dateStr: string): string {
  // 正規表現を使って "/" を "-" に置き換える
  return dateStr.replace(/\/+/g, "-");
}

export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const posts = await getAllPostsByTags(slug);
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-[21rem] flex flex-col md:w-[45rem]">
          <div className="mt-3">
            <Button variant="ghost" className="w-20 h-8 duration-300">
              <Link href="/blog" className="flex items-center">
                <ChevronLeft aria-hidden="true" className="h-5 w-5" />
                BACK
              </Link>
            </Button>
            <h2
              className="animate-in flex flex-row items-center"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              Tagged with{" "}
              <div className="flex m-1 pl-1 pr-1 font-light text-sm border border-sky-700 rounded-lg  duration-100 dark:bg-primary/10 bg-zinc-100 hover:bg-primary/20 dark:hover:bg-slate-600">
                {slug}
              </div>
            </h2>
          </div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-3 hide-scroll-bar justify-center animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          {posts.map((post, index) => (
            <button
              key={post.postId}
              className="m-1.5 md:m-6 w-72 h-[219px] hover:bg-primary/10 duration-200 rounded-lg animate-in"
              style={{ "--index": index + 2 } as React.CSSProperties}
            >
              <Link href={`/blog/${post.postId}`}>
                <div className="w-72 rounded-lg ">
                  <Image
                    width={1280}
                    height={720}
                    src={`https://hytfjwr.com/api/og?title=${post.title}`}
                    alt={post.title}
                    className="rounded-t-lg border-r border-t border-l border-b border-zinc-700"
                    quality={70}
                  />
                </div>
                <div className=" h-14 rounded-b-lg border-r border-b border-l border-zinc-700">
                  <div className="h-14 text-wrap text-left ml-2 text-sm flex flex-row ">
                    <div className="flex flex-col h-5 font-thin mt-0.5">
                      {convertDateFormat(post.publishedAt)}
                      <div className="flex">
                        {post.tags.map((tag: string) => (
                          <Link key={tag} href={`/blog/tag/${tag}`}>
                            <button className="flex m-1 pl-1 pr-1 font-light text-xs border border-sky-700 rounded-lg  duration-100 dark:bg-primary/10 bg-zinc-100 hover:bg-primary/20 dark:hover:bg-slate-600 z-20">
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
