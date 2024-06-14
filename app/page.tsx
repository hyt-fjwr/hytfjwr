import { cn } from "@/lib/utils";
import SlideTextAnim from "./components/root/SlideTextAnim";
import ShowFirstTime from "./components/root/ShowFirstTime";
import LatestBlogs from "./components/root/LatestBlogs";
import SocialLinks from "./components/about/SocialLinks";
import { Inter } from "next/font/google";
import RootDisplayProject from "./components/root/RootDisplayProject";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main>
      <ShowFirstTime />
      <div className="flex flex-col items-center">
        <h1
          className={cn(
            `${inter.className}`,
            "text-black dark:text-white text-4xl font-bold animate-in"
          )}
          style={{ "--index": 20 } as React.CSSProperties}
        >
          Hayato Fujiwara
        </h1>
        <h2
          className="mt-2 animate-in"
          style={{ "--index": 21 } as React.CSSProperties}
        >
          Hey there👋 I&apos;m experienced in :
        </h2>
        <SlideTextAnim />
      </div>
      <div className="w-[21rem] flex flex-col md:w-[45rem]">
        <div className="mt-2">
          <h1
            className={cn(
              `${inter.className}`,
              "text-primary prose-xl font-semibold animate-in flex mt-5 mb-2"
            )}
            style={{ "--index": 22 } as React.CSSProperties}
          >
            Featured Projects
          </h1>
          <RootDisplayProject ProjectId={["bmw", "riddle"]} cssIndex={23} />
          <LatestBlogs cssIndex={25} />
          <h1
            className={cn(
              `${inter.className}`,
              "text-primary font-semibold animate-in justify-center flex p-4 mt-4 w-full border-t"
            )}
            style={{ "--index": 30 } as React.CSSProperties}
          >
            Social Links
          </h1>
          <SocialLinks cssIndex={31} />
        </div>
      </div>
    </main>
  );
}
