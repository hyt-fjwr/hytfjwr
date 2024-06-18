import { formatDate } from "@/app/util/formatDate";
import { getProjectPost } from "@/app/util/post";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function PinnedProject({
  ProjectId,
}: {
  ProjectId: string;
}) {
  const post = await getProjectPost(ProjectId);
  return (
    <>
      <button
        className="group animate-in"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Link href={`/project/${ProjectId}`}>
          <div className=" border font-bold bg-slate-50 dark:bg-black w-[23rem] md:w-96 h-54 rounded-t-3xl overflow-hidden cursor-pointer">
            <div className="bg-black group-hover:scale-110 group-hover:rotate-3 duration-500">
              <Image
                width={1920}
                height={1080}
                alt=""
                src={`/images/project/${ProjectId}/thumbnail.jpg`}
                className=" rounded-t-3xl "
              />
            </div>
          </div>
          <div className="group-hover:bg-primary/5 w-[23rem] md:w-96 border-b border-l border-r rounded-b-3xl duration-500">
            <h2 className="text-left items-start text-primary/70 text-wrap text-sm pl-4 pr-4 pt-4 font-semibold">
              {post.tags}
            </h2>
            <h1 className="text-left text-wrap text-xl pl-4 pr-4 pb-2 pt-2 font-semibold">
              {post.title}
            </h1>
            <h2 className="text-left text-primary/70 text-wrap text-sm pl-4 pr-4 pb-4 font-semibold">
              {formatDate(post.publishedAt)}
            </h2>
          </div>
        </Link>
      </button>
    </>
  );
}
