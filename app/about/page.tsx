import React from "react";
import { ThemeToggle } from "../components/Theme-Toggle";

export default function page() {
  return (
    <>
      <div className="w-[21rem] flex flex-col md:w-[45rem]">
        <div className="mt-8">
          <h1 className="text-black dark:text-white text-4xl font-bold">
            About
          </h1>
          <h2>Get to know me.</h2>
        </div>
      </div>
    </>
  );
}
