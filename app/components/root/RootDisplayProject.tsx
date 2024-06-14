import { formatDate } from "@/app/util/formatDate";
import { getProjectPost } from "@/app/util/post";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function RootDisplayProject({
  ProjectId,
  cssIndex,
}: {
  ProjectId: string[];
  cssIndex: number;
}) {
  const postLeft = await getProjectPost(ProjectId[0]);
  const postRight = await getProjectPost(ProjectId[1]);
  return (
    <>
      <div className=" flex flex-row gap-3 justify-center items-center">
        <button
          className="group animate-in"
          style={{ "--index": cssIndex } as React.CSSProperties}
        >
          <Link href={`/project/${ProjectId[0]}`}>
            <div className=" border font-bold bg-slate-50 dark:bg-black w-[10rem] md:w-72 h-[5rem] md:h-40 rounded-t-3xl overflow-hidden cursor-pointer">
              <div className="bg-black group-hover:scale-110 group-hover:rotate-3 duration-500">
                <Image
                  width={1920}
                  height={1080}
                  alt=""
                  src={`/images/project/${ProjectId[0]}/thumbnail.jpg`}
                  className=" rounded-t-3xl "
                />
              </div>
            </div>
            <div className="group-hover:bg-primary/5 w-[10rem] md:w-72 border-b border-l border-r rounded-b-3xl duration-500">
              <h2 className="text-left items-start text-primary/70 text-xs md:text-sm pl-4 pr-4 pt-4 font-semibold">
                {postLeft.tags}
              </h2>
              <h1 className="text-left truncate text-sm md:text-xl pl-4 pr-4 pb-2 pt-2 font-semibold">
                {postLeft.title}
              </h1>
              <h2 className="text-left text-primary/70  text-xs md:text-sm pl-4 pr-4 pb-4 font-semibold">
                {formatDate(postLeft.publishedAt)}
              </h2>
            </div>
          </Link>
        </button>
        <button
          className="group animate-in"
          style={{ "--index": cssIndex + 1 } as React.CSSProperties}
        >
          <Link href={`/project/${ProjectId[1]}`}>
            <div className=" border font-bold bg-slate-50 dark:bg-black w-[10rem] md:w-72 h-[5rem] md:h-40 rounded-t-3xl overflow-hidden cursor-pointer">
              <div className="bg-black group-hover:scale-110 group-hover:rotate-3 duration-500">
                <Image
                  width={1920}
                  height={1080}
                  alt=""
                  src={`/images/project/${ProjectId[1]}/thumbnail.jpg`}
                  className=" rounded-t-3xl "
                />
              </div>
            </div>
            <div className="group-hover:bg-primary/5 w-[10rem] md:w-72 border-b border-l border-r rounded-b-3xl duration-500">
              <h2 className="text-left items-start text-primary/70 text-xs md:text-sm pl-4 pr-4 pt-4 font-semibold">
                {postRight.tags}
              </h2>
              <h1 className="text-left truncate text-sm md:text-xl pl-4 pr-4 pb-2 pt-2 font-semibold">
                {postRight.title}
              </h1>
              <h2 className="text-left text-primary/70 text-xs md:text-sm pl-4 pr-4 pb-4 font-semibold">
                {formatDate(postRight.publishedAt)}
              </h2>
            </div>
          </Link>
        </button>
      </div>
      <div
        className="w-full flex justify-end items-end animate-in"
        style={{ "--index": cssIndex + 2 } as React.CSSProperties}
      >
        <Link
          href="/project"
          className="flex flex-row items-center prose dark:prose-invert text-xs group hover:text-primary duration-100 pt-3 md:pr-5"
        >
          <p className="flex flex-row justify-center items-center hover:bg-slate-200 hover:dark:bg-slate-800 px-2 py-1 rounded-full duration-200">
            See more projects
            <ChevronRight
              width={15}
              height={15}
              className="-left-2 group-hover:translate-x-1 duration-100"
            />
          </p>
        </Link>
      </div>
    </>
  );
}
