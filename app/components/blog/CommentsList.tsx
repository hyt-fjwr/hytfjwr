"use client";
import { Comments, User } from "@/app/types/Comments";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import React, { useEffect, useState } from "react";
import TimeAgo from "./TimeAgo";
import ReplyDrawer from "./ReplyDrawer";

export default function CommentsList({
  pageId,
  userId,
}: {
  pageId: string;
  userId: string;
}) {
  const [comments, setComments] = useState<Comments[]>([]);

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
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("getcomments")
          .select(`*, user(*)`)
          .eq("page_id", pageId)
          .order("created_at", { ascending: false });

        if (error) {
          throw new Error(error.message);
        }

        if (data) {
          setComments(data as Comments[]);
        } else {
          console.error("No comments found for the given page ID");
        }
      } catch (error) {
        console.error("Error fetching initial comments:", error);
      }
    };

    fetchData();

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
            setComments((prevComments) => [
              ...prevComments,
              { ...newComment, user: userProfile },
            ]);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [pageId]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        const fetchData = async () => {
          try {
            const { data, error } = await supabase
              .from("getcomments")
              .select(`*, user(*)`)
              .eq("page_id", pageId)
              .order("created_at", { ascending: false });

            if (error) {
              throw new Error(error.message);
            }

            if (data) {
              console.log("Fetched comments on visibility change:", data); // デバッグ用ログ
              setComments(data as Comments[]);
            } else {
              console.error("No comments found for the given page ID");
            }
          } catch (error) {
            console.error(
              "Error fetching comments on visibility change:",
              error
            );
          }
        };

        fetchData();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [pageId]);

  const dataSorted = comments.sort(
    (x, y) =>
      new Date(y.created_at).getTime() - new Date(x.created_at).getTime()
  );

  if (comments.length <= 0) {
    return (
      <>
        <div className="animate-in flex flex-row border-t border-b m-3 pt-2 pb-2 justify-center select-none">
          <div className="flex items-center text-center p-5 text-primary/40 text-sm">
            hmm.... it&apos;s quite here....
            <br />
            Let&apos;s leave some comments!😉
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      {dataSorted.map((props, index) => (
        <div
          key={index}
          className="animate-in flex flex-row border-t border-b m-3 pt-2 pb-2"
          style={{ "--index": index } as React.CSSProperties}
        >
          <div className="mr-2 select-none">
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
            <div className="flex flex-row items-center text-center select-none">
              <div className="font-bold select-none">
                {props.user.firstName} {props.user.lastName}
              </div>
              <div className="text-xs ml-1 text-primary/60 items-center select-none">
                @{props.user.userName}&nbsp;|&nbsp;
                <TimeAgo timestamp={props.created_at} />
              </div>
            </div>
            <div>
              <div className="w-full break-words">{props.text}</div>
              <div className="flex flex-row items-center mt-2">
                <ReplyDrawer
                  msgData={props}
                  repliesCount={props.count}
                  userId={userId}
                  redirectPath={pageId}
                />
                <p className="pl-2 font-thin select-none">{props.count}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
