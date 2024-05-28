"use client";
import { Button } from "@/components/ui/button";
import {
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
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

export default function AddComment({
  userId,
  pageId,
}: {
  userId: string;
  pageId: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  const addComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const text = formData.get("text");

    if (text && userId) {
      const { error } = await client.from("comments").insert({
        text: text.toString(),
        user_id: userId.toString(),
        page_id: pageId.toString(),
      });

      if (error) {
        console.error("Error inserting data:", error.message);
        return;
      }

      // Clear the input field after successful submission
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  };

  return (
    <>
      <div className="m-2 font-bold">Comments:</div>
      <SignedOut>
        <div className="flex items-center">
          <CircleUserRound aria-hidden="true" className="h-8 w-8 ml-3" />
          <input
            name="text"
            placeholder="Sign in to comment"
            className="ml-2 rounded-lg h-9 w-52 md:w-96"
            disabled
            required
          />
          <SignInButton
            mode="modal"
            forceRedirectUrl={`/blog/${pageId}`}
            fallbackRedirectUrl={`/blog/${pageId}`}
            signUpForceRedirectUrl={`/blog/${pageId}`}
            signUpFallbackRedirectUrl={`/blog/${pageId}`}
          >
            <Button
              variant="ghost"
              className="font-bold border ml-2 p-1.5 pl-2 pr-2 duration-100"
            >
              Sign In
            </Button>
          </SignInButton>
        </div>
      </SignedOut>
      <SignedIn>
        <form onSubmit={addComment} ref={formRef} className="flex items-center">
          <div className="ml-3">
            <UserButton
              userProfileMode="modal"
              afterSignOutUrl={`/blog/${pageId}`}
              signInUrl={`/blog/${pageId}`}
            />
          </div>
          <input
            name="text"
            placeholder="Something to share"
            className="ml-2 rounded-lg h-9 w-52 md:w-96 duration-200"
            required
          />
          <Button
            type="submit"
            className="font-bold ml-2 p-1.5 pl-2 pr-2 rounded-full hover:bg-sky-400 duration-100"
          >
            Share
          </Button>
        </form>
      </SignedIn>
    </>
  );
}
