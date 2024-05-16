import { Cog } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <>
      <div className="w-[21rem] flex flex-col md:w-[45rem]">
        <div className="mt-8">
          <h1 className="text-black dark:text-white text-4xl font-bold flex items-center">
            Gear <Cog aria-hidden="true" className="h-8 w-8 ml-2" />
          </h1>
          <h2>From daily necessities to hobbies.</h2>
        </div>
      </div>
    </>
  );
}
