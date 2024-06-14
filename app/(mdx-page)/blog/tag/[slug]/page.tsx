import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogPostsByTags } from "@/app/util/post";
import { cn } from "@/lib/utils";
import { getCategoryColor } from "@/app/util/tagColorizer";
import { Button } from "@/app/components/ui/button";
import { formatDate } from "@/app/util/formatDate";

export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const posts = await getAllBlogPostsByTags(slug);
  //公開日順にソート
  const postsSorted = posts.sort(
    (x, y) =>
      new Date(y.publishedAt).getTime() - new Date(x.publishedAt).getTime()
  );
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
              <div
                className={cn(
                  getCategoryColor(slug),
                  "flex m-1 pb-px pt-px pl-2 pr-2 text-base border rounded-full duration-100 z-20 font-normal dark:font-light"
                )}
              >
                {slug}
              </div>
            </h2>
          </div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 hide-scroll-bar justify-center animate-in"
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
                    src={`https://hytfjwr.com/api/og?title=${post.title}`}
                    alt={post.title}
                    className="rounded-t-lg border-r border-t border-l border-b border-zinc-700"
                    quality={70}
                  />
                </div>
                <div className=" h-14 rounded-b-lg border-r border-b border-l border-zinc-700">
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
