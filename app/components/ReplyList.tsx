"use client";
import React from "react";
import { Replies } from "../types/Replies";
import Image from "next/image";
import TimeAgo from "./TimeAgo";

export default function ReplyList({ replies }: { replies: Replies[] }) {
  const repliesSorted = replies.sort(
    (x, y) =>
      new Date(y.created_at).getTime() - new Date(x.created_at).getTime()
  );
  return (
    <>
      {repliesSorted.map((props, index) => (
        <div
          key={index}
          className="animate-in flex flex-row m-2 pt-1 pb-1 text-left"
        >
          <div className="mr-2">
            <Image
              src={props.user.profileImageUrl}
              width={30}
              height={30}
              quality={70}
              style={{
                objectFit: "cover",
                borderRadius: "100%",
              }}
              className="w-[30px] h-[30px]"
              loading="lazy"
              alt="profile pic"
            />
          </div>
          <div className="flex flex-col w-[290px] md:w-[340px] bg-text-white  text-primary">
            <div className="flex flex-row items-center text-center">
              <div className="font-bold">
                {props.user.firstName} {props.user.lastName}
              </div>
              <div className="text-xs ml-2 text-primary/60 items-center">
                @{props.user.userName}&nbsp;|&nbsp;
                <TimeAgo timestamp={props.created_at} />
              </div>
            </div>
            <div>{props.text}</div>
          </div>
        </div>
      ))}
    </>
  );
}
