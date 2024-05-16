import { User } from "lucide-react";
import React, { useEffect } from "react";

export default function page() {
  return (
    <>
      <div className="w-[21rem] flex flex-col md:w-[45rem]">
        <div className="mt-5">
          <h1 className="text-black dark:text-white text-4xl font-bold flex items-center">
            About
            <User aria-hidden="true" className="h-8 w-7 ml-2" />
          </h1>
          <h2>Get to know me.</h2>
        </div>
      </div>
    </>
  );
}
