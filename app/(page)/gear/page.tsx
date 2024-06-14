import { Cog } from "lucide-react";
import React from "react";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
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
        </div>
      </div>
    </>
  );
}
