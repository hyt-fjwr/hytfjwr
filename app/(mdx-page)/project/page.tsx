import { getAllProjectPosts } from "@/app/util/post";
import { cn } from "@/lib/utils";
import { FolderOpenDot } from "lucide-react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

function convertDateFormat(dateStr: string): string {
  // 正規表現を使って "/" を "-" に置き換える
  return dateStr.replace(/\/+/g, "-");
}

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
          <div className={cn(`${inter.className}`, "mt-5")}>
            <h1 className="text-black dark:text-white text-4xl font-bold flex items-center animate-in">
              Project
              <FolderOpenDot aria-hidden="true" className="h-8 w-7 ml-2" />
            </h1>
            <h2
              className="animate-in"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              Get to know about me.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
