import PinnedProject from "@/app/components/project/PinnedProject";
import { getAllProjectPosts } from "@/app/util/post";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FolderOpenDot } from "lucide-react";
import { Inter } from "next/font/google";
import { formatDate } from "@/app/util/formatDate";
import ProjectList from "@/app/components/project/ProjectList";
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
              自主制作のものも含まれます。
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
              className="text-lg font-semibold prose dark:prose-invert animate-in mt-6 mb-3"
              style={{ "--index": 4 } as React.CSSProperties}
            >
              More Projects...
            </h2>
            <ProjectList props={postsSorted} cssIndex={5} />
          </div>
        </div>
      </div>
    </>
  );
}
