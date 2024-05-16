import { NotebookPen } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="w-[21rem] flex flex-col md:w-[45rem]">
        <div className="mt-5">
          <h1 className="text-black dark:text-white text-4xl font-bold flex items-center">
            Blog
            <NotebookPen aria-hidden="true" className="h-8 w-8 ml-2" />
          </h1>
          <h2>
            The post will be updated on an occasionaly. <br />
            There are currently 1 posts.
          </h2>
        </div>
      </div>
      <div className="flex mt-4">
        <Button variant="ghost">
          <Link href="/blog/GenerateOGP">GenerateOGP</Link>
        </Button>
      </div>
    </>
  );
}
