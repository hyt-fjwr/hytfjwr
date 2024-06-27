import SocialLinks from "@/app/components/about/SocialLinks";
import { cn } from "@/lib/utils";
import { ExternalLink, Music, User } from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";
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
        <div
          className="pt-8 w-[21rem] flex flex-col md:flex-row md:w-[45rem] items-center justify-center animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src="/profile_pic.png"
            width={200}
            height={200}
            sizes="(max-width: 768px) 100vw, 33vw"
            alt="美ら海水族館"
            className="rounded-full p-3"
          />
          <p className="w-full text-wrap pb-3">
            &ensp;こんにちは!
            大学を卒業し現在はWebエンジニアとして働いている藤原颯土です。
            <br />
            主にバックエンド側の開発を行っていますが、フロントエンドにも興味があり、フルスタックで活躍できるように目指しています。
            <br />
            趣味は写真と音楽で、旅行の際は必ずカメラを持っていって写真を楽しんでます!🙃
            <Link
              href="/photo"
              className="prose dark:prose-invert prose-sm text-[9px] underline dark:hover:text-white hover:text-black duration-100"
            >
              写真を見る
            </Link>
          </p>
        </div>
        <div>
          <h2
            className="flex items-center text-lg animate-in p-2"
            style={{ "--index": 3 } as React.CSSProperties}
          >
            <ExternalLink aria-hidden="true" className="h-8 w-7 mr-2" />
            Social Links
          </h2>
          <SocialLinks cssIndex={4} />
          <h2
            className="flex items-center text-lg animate-in p-2"
            style={{ "--index": 5 } as React.CSSProperties}
          >
            <Music aria-hidden="true" className="h-8 w-7 mr-2" />
            My Playlist
          </h2>
          <iframe
            src="https://open.spotify.com/embed/playlist/6ZxGQkbhe5FYfrLtjiGzpB?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-2xl animate-in"
            style={{ "--index": 6 } as React.CSSProperties}
          ></iframe>
        </div>
      </div>
    </>
  );
}
