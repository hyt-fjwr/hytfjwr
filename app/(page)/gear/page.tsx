import { Cog } from "lucide-react";
import React from "react";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export default function page() {
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
              Gear <Cog aria-hidden="true" className="h-8 w-7 ml-2" />
            </h1>
            <h2
              className="animate-in mt-2"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              いつも使っているガジェットたち。
            </h2>
          </div>
          <div className="gap-2 grid grid-cols-2 h-20">
            <div className="flex rounded-lg bg-primary/10 ">
              <Image
                src={"https://placehold.jp/150x150.png"}
                width={100}
                height={100}
                className="h-20 object-contain rounded-lg"
                alt=""
              />
              <div className="flex flex-col truncate p-2">
                <div>NAME</div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, veniam illo repellat voluptatum vero accusamus,
                  explicabo iure officia ea laborum omnis, nemo soluta facilis?
                  Temporibus quos dolore doloribus amet quibusdam.
                </div>
              </div>
            </div>
            <div className="bg-black rounded-lg">aaaa</div>
          </div>
        </div>
      </div>
    </>
  );
}
