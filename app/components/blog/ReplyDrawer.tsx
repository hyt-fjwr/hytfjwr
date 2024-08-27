"use client";
import { MessageCircleMore } from "lucide-react";
import React, { use } from "react";
import { Comments } from "../../types/Comments";
import Image from "next/image";
import TimeAgo from "./TimeAgo";
import ReplyList from "./ReplyList";
import AddReply from "./AddReply";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

export default function ReplyDrawer({
  msgData,
  repliesCount,
  userId,
  redirectPath,
  pageId,
}: {
  msgData: Comments;
  repliesCount: string;
  userId: string;
  redirectPath: string;
  pageId: string;
}) {
  if (repliesCount != "0") {
    return (
      <>
        <Drawer scrollLockTimeout={1000}>
          <DrawerTrigger asChild>
            <button>
              <MessageCircleMore
                aria-hidden="true"
                size={20}
                strokeWidth={1}
                className="opacity-60 hover:opacity-100 hover:scale-110 duration-100"
              />
            </button>
          </DrawerTrigger>
          <DrawerContent className="flex flex-col fixed bottom-0 left-0 right-0 max-h-[96%] rounded-t-[10px] bg-background">
            <div className="max-w-md w-full mx-auto flex flex-col overflow-auto p-4">
              <DrawerHeader>
                <DrawerTitle>Replies</DrawerTitle>
                <DrawerDescription className="text-left text-primary">
                  <div className="flex flex-row m-2 pt-1 pb-3 border-b">
                    <div className="mr-2 select-none">
                      <Image
                        src={msgData.user.profileImageUrl}
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
                    <div className="flex flex-col w-[290px] md:w-[340px] bg-text-white text-primary ">
                      <div className="flex flex-row items-center text-left">
                        <div className="font-bold">
                          {msgData.user.firstName} {msgData.user.lastName}
                        </div>
                        <div className="text-xs ml-2 text-primary/60 text-left">
                          @{msgData.user.userName}&nbsp;|&nbsp;
                          <TimeAgo timestamp={msgData.created_at} />
                        </div>
                      </div>
                      <div>{msgData.text}</div>
                    </div>
                  </div>
                  <ReplyList msg_id={msgData.id} />
                  <AddReply
                    msgId={msgData.id}
                    userId={userId}
                    redirectPath={redirectPath}
                    pageId={pageId}
                  />
                </DrawerDescription>
              </DrawerHeader>
            </div>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  console.log(pageId);
  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <button>
            <MessageCircleMore
              aria-hidden="true"
              size={20}
              strokeWidth={1}
              className="opacity-60 hover:opacity-100 hover:scale-110 duration-100"
            />
          </button>
        </DrawerTrigger>
        <DrawerContent className="flex flex-col fixed bottom-0 left-0 right-0 max-h-[96%] rounded-t-[10px] bg-background">
          <div className="max-w-md w-full mx-auto flex flex-col overflow-auto p-4">
            <DrawerHeader>
              <DrawerTitle>Replies</DrawerTitle>
              <DrawerDescription className="text-left text-primary">
                <div className="flex flex-row m-2 pt-1 pb-3 border-b">
                  <div className="mr-2">
                    <Image
                      src={msgData.user.profileImageUrl}
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
                        {msgData.user.firstName} {msgData.user.lastName}
                      </div>
                      <div className="text-xs ml-2 text-primary/60 items-center">
                        @{msgData.user.userName}&nbsp;|&nbsp;
                        <TimeAgo timestamp={msgData.created_at} />
                      </div>
                    </div>
                    <div>{msgData.text}</div>
                  </div>
                </div>
              </DrawerDescription>
              <AddReply
                msgId={msgData.id}
                userId={userId}
                redirectPath={redirectPath}
                pageId={pageId}
              />
            </DrawerHeader>
            <DrawerFooter></DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

{
}
