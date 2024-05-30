import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";
import { CircleUserRound } from "lucide-react";
import React, { useRef } from "react";

function createClerkSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  return createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      fetch: async (url, options = {}) => {
        const clerkToken = await window.Clerk.session?.getToken({
          template: "hytfjwr-supabase",
        });
        const headers = new Headers(options?.headers);
        headers.set("Authorization", `Bearer ${clerkToken}`);
        return fetch(url, {
          ...options,
          headers,
        });
      },
    },
  });
}

const client = createClerkSupabaseClient();

export default function AddReply({
  msgId,
  userId,
}: {
  msgId: string;
  userId: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  const addReply = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const text = formData.get("text");

    if (text && userId) {
      const { error } = await client.from("comment_replies").insert({
        text: text.toString(),
        user_id: userId.toString(),
        msg_id: msgId.toString(),
      });

      if (error) {
        console.error("Error inserting data:", error.message);
        return;
      }

      if (formRef.current) {
        formRef.current.reset();
      }
    }
  };

  return (
    <>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,maximum-scale=1.0"
      />
      <SignedOut>
        <div className="flex items-center">
          <CircleUserRound aria-hidden="true" className="h-8 w-8" />
          <input
            name="text"
            placeholder="Sign in to reply!"
            className="ml-2 rounded-lg h-7 w-52 md:w-full"
            disabled
            required
          />
          <SignInButton mode="modal">
            <Button
              variant="ghost"
              className="font-bold text-sm border pl-2 pr-2 duration-100"
            >
              Sign In
            </Button>
          </SignInButton>
        </div>
      </SignedOut>
      <SignedIn>
        <form onSubmit={addReply} ref={formRef} className="flex items-center">
          <div className="">
            <UserButton userProfileMode="modal" />
          </div>
          <input
            name="text"
            placeholder="Post your reply!"
            className="ml-2 text-sm rounded-lg h-7 w-full duration-200"
            required
          />
          <Button
            type="submit"
            variant={"ghost"}
            className="font-bold text-sm ml-2 pl-2 pr-2 rounded-full hover:bg-sky-400 duration-100 border"
          >
            Reply
          </Button>
        </form>
      </SignedIn>
    </>
  );
}
