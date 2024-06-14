import PinnedProject from "@/app/components/project/PinnedProject";
import { getAllProjectPosts } from "@/app/util/post";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FolderOpenDot } from "lucide-react";
import { Inter } from "next/font/google";
import { formatDate } from "@/app/util/formatDate";
const inter = Inter({ subsets: ["latin"] });

export default async function page() {
  const posts = await getAllProjectPosts();
  //公開日順にソート
  const postsSorted = posts.sort(
    (x, y) =>
      new Date(y.publishedAt).getTime() - new Date(x.publishedAt).getTime()
  );
  return (
    <>
      <div className="flex flex-col">
        <div className="w-[21rem] flex flex-col md:w-[45rem]">
          <div className="mt-5">
            <h1
              className={cn(
                `${inter.className}`,
                "text-black dark:text-white text-4xl font-bold flex items-center animate-in"
              )}
            >
              Project
              <FolderOpenDot aria-hidden="true" className="h-8 w-7 ml-2" />
            </h1>
            <h2
              className="animate-in mt-1"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              これまでに作成してきた作品です。
              <br />
              個人制作のものも含まれます。
            </h2>
          </div>
          <div className="mt-4 justify-center flex flex-col ">
            <h2
              className="text-lg font-semibold prose dark:prose-invert animate-in"
              style={{ "--index": 2 } as React.CSSProperties}
            >
              Pinned Project...
            </h2>
            <div className="mt-4 flex flex-col items-center">
              <PinnedProject ProjectId="riddle" />
            </div>
            <h2
              className="text-lg font-semibold prose dark:prose-invert animate-in mt-6"
              style={{ "--index": 4 } as React.CSSProperties}
            >
              More Project...
            </h2>
            <div>
              {postsSorted.map((post, index) => (
                <Link href={`/project/${post.id}`}>
                  <div
                    className="flex flex-row border-t w-full mt-2 mb-2 pt-2 pb-2 md:mt-4 md:mb-4 md:pt-4 md:pb-4 pr-2 group hover:bg-primary/5 duration-500 animate-in"
                    style={{ "--index": 5 + index } as React.CSSProperties}
                  >
                    <div className="overflow-hidden w-24 h-24 md:w-28 md:h-28 bg-black rounded-3xl ml-4 mt-2">
                      <Image
                        width={500}
                        height={500}
                        alt=""
                        src={`/images/project/${post.id}/thumbnail.jpg`}
                        className="w-full h-full object-cover group-hover:scale-110 duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <h2 className="text-left items-start text-primary/70 text-wrap md:text-sm text-xs pl-3 md:pl-8 pt-2 md:pt-4 font-semibold">
                        {post.tags}
                      </h2>
                      <h1 className="text-left text-wrap md:text-lg text-base pl-3 md:pl-8 pb-2 pt-2 font-semibold">
                        {post.title}
                      </h1>
                      <h2 className="text-left text-primary/70 text-wrap md:text-sm text-xs pl-3 md:pl-8 pb-1 md:pb-4 font-semibold">
                        {formatDate(post.publishedAt)}
                      </h2>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
