import { Cog } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-[21rem] flex flex-col md:w-[45rem]">
          <div className="mt-5">
            <h1 className="text-black dark:text-white text-4xl font-bold flex items-center animate-in">
              Gear <Cog aria-hidden="true" className="h-8 w-7 ml-2" />
            </h1>
            <h2
              className="animate-in"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              From daily necessities to hobbies.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
