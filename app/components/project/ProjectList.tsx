import { Post } from "@/app/types/Post";
import { formatDate } from "@/app/util/formatDate";
import Image from "next/image";
import Link from "next/link";

export default function ProjectList({
  props,
  cssIndex,
}: {
  props: Post[];
  cssIndex: number;
}) {
  return (
    <div>
      {props.map((post, index) => (
        <Link href={`/project/${post.id}`}>
          <div
            className="flex flex-row border-t w-full pt-2 pb-4 md:pb-4 pr-2 group hover:bg-primary/5 duration-500 animate-in"
            style={{ "--index": cssIndex + index } as React.CSSProperties}
          >
            <div className="overflow-hidden w-24 h-24 md:w-28 md:h-28 bg-black rounded-3xl ml-4 mt-2">
              <Image
                width={500}
                height={500}
                alt=""
                src={`/images/project/${post.id}/thumbnail.jpg`}
                className="w-full h-full object-cover group-hover:scale-110 duration-500"
              />
            </div>
            <div className="flex flex-col justify-between">
              <h2 className="text-left items-start text-primary/70 text-wrap md:text-sm text-xs pl-3 md:pl-8 pt-2 md:pt-4 font-semibold">
                {post.tags}
              </h2>
              <h1 className="text-left text-wrap md:text-lg text-base pl-3 md:pl-8 pb-2 pt-2 font-semibold">
                {post.title}
              </h1>
              <h2 className="text-left text-primary/70 text-wrap md:text-sm text-xs pl-3 md:pl-8 pb-1 md:pb-4 font-semibold">
                {formatDate(post.publishedAt)}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
