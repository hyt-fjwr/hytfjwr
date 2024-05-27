"use client";
import { Comments, User } from "@/app/types/Comments";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import React, { useEffect, useState } from "react";
import TimeAgo from "./TimeAgo";
import ReplyDrawer from "./ReplyDrawer";

export default function CommentsList({
  serverData,
}: {
  serverData: Comments[];
}) {
  const [data, setData] = useState(serverData);

  const fetchUserProfile = async (userId: string): Promise<User | null> => {
    const { data, error } = await supabase
      .from("user")
      .select("*")
      .eq("id", userId)
      .single();
    if (error) {
      console.error("Error fetching user profile:", error);
      return null;
    }
    return data as User;
  };

  useEffect(() => {
    const channel = supabase
      .channel("realtime posts")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "comments",
        },
        async (payload) => {
          const newComment = payload.new as Comments;
          const userProfile = await fetchUserProfile(newComment.user_id);
          if (userProfile) {
            setData([...data, { ...newComment, user: userProfile }]);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [data, setData]);

  const dataSorted = data.sort(
    (x, y) =>
      new Date(y.created_at).getTime() - new Date(x.created_at).getTime()
  );

  return (
    <>
      <div>
        {dataSorted.map((props, index) => (
          <div
            key={index}
            className="animate-in flex flex-row border-t border-b m-3 pt-2 pb-2"
            style={{ "--index": index } as React.CSSProperties}
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
            <div className="flex flex-col w-[270px] md:w-[551px] bg-text-white">
              <div className="flex flex-row items-center text-center">
                <div className="font-bold">
                  {props.user.firstName} {props.user.lastName}
                </div>
                <div className="text-xs ml-2 text-primary/60 items-center">
                  <TimeAgo timestamp={props.created_at} />
                </div>
              </div>
              <div>
                {props.text}
                <div className="flex flex-row items-center mt-2">
                  <ReplyDrawer msgData={props} />
                  <p className="pl-2 font-thin">{props.count}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
