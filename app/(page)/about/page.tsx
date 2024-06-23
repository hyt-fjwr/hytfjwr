import SocialLinks from "@/app/components/about/SocialLinks";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function page() {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-[21rem] flex flex-col md:w-[45rem]">
          <div className={cn(`${inter.className}`, "mt-5")}>
            <h1 className="text-black dark:text-white text-4xl font-bold flex items-center animate-in">
              About
              <User aria-hidden="true" className="h-8 w-7 ml-2" />
            </h1>
            <h2
              className="animate-in"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              Get to know about me.
            </h2>
          </div>
        </div>
        <div className="w-[21rem] flex flex-col md:w-[45rem]">
          <p className="w-full text-wrap">
            こんにちは、藤原颯土です。大学を卒業し現在はWebエンジニアとして働いています。
            <br />
            主にバックエンド側の開発を行っていますが、フロントエンドにも興味があり、フルスタックで活躍できるように目指しています。
            <br />
            趣味は写真と音楽で、旅行の際は必ずカメラを持っていって写真を楽しんでます!🙃
            <Link href="/photo" className="prose prose-sm text-[9px] ">
              写真を見る
            </Link>
          </p>
          <iframe
            src="https://open.spotify.com/embed/playlist/6ZxGQkbhe5FYfrLtjiGzpB?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-2xl"
          ></iframe>
        </div>
      </div>
    </>
  );
}
