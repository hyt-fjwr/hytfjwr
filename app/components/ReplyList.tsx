"use client";
import React, { useEffect, useState } from "react";
import { Replies, User } from "../types/Replies";
import Image from "next/image";
import TimeAgo from "./TimeAgo";
import { supabase } from "@/lib/supabase";

export default function ReplyList({ msg_id }: { msg_id: string }) {
  const [replies, setReplies] = useState<Replies[]>([]);

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
          .from("comment_replies")
          .select(`*, user(*)`)
          .eq("msg_id", msg_id)
          .order("created_at", { ascending: true });

        if (error) {
          throw new Error(error.message);
        }

        if (data) {
          console.log(data);
          setReplies(data as Replies[]);
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
          table: "comment_replies",
        },
        async (payload) => {
          const newReplies = payload.new as Replies;
          const userProfile = await fetchUserProfile(newReplies.user_id);
          if (userProfile) {
            setReplies((prevReplies) => [
              ...prevReplies,
              { ...newReplies, user: userProfile },
            ]);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [msg_id]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        const fetchData = async () => {
          try {
            const { data, error } = await supabase
              .from("comment_replies")
              .select(`*, user(*)`)
              .eq("msg_id", msg_id)
              .order("created_at", { ascending: true });

            if (error) {
              throw new Error(error.message);
            }

            if (data) {
              console.log("Fetched replies on visibility change:", data); // デバッグ用ログ
              setReplies(data as Replies[]);
            } else {
              console.error("No replies found for the given page ID");
            }
          } catch (error) {
            console.error(
              "Error fetching replies on visibility change:",
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
  }, [msg_id]);

  return (
    <>
      <div className="max-h-[55vh] overflow-scroll">
        {replies.map((props, index) => (
          <div key={index} className="flex flex-row m-2 pt-1 pb-1 text-left">
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
            <div className="flex flex-col w-[290px] md:w-[340px] bg-text-white text-primary break-words">
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
      </div>
    </>
  );
}
