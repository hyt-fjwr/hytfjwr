import React from "react";
import { getPost } from "../../../data/post";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await getPost(slug);

  return (
    <div>
      <div className="prose dark:prose-invert w-[21rem] flex flex-col md:w-[45rem]">
        <Button variant="ghost" className="w-20 h-8 duration-300">
          <Link href="/blog" className="flex items-center">
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            BACK
          </Link>
        </Button>
        <div className="">
          <post.content />
        </div>
      </div>
    </div>
  );
}
