"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";
import { CircleUserRound } from "lucide-react";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { toast } from "react-toastify";
import { z } from "zod";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "next-themes";

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
  redirectPath,
}: {
  userId: string;
  pageId: string;
  redirectPath: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const schema = z
    .string()
    .max(200, { message: "200文字以下に収めてください。" });

  const addComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const text = formData.get("text");

    //validation check make sure text is 200 or fewer characters long.
    try {
      const comment = schema.parse(text);
      if (text && userId) {
        const { error } = await client.from("comments").insert({
          text: comment.toString(),
          user_id: userId.toString(),
          page_id: pageId.toString(),
        });

        if (error) {
          console.error("Error inserting data:", error.message);
          toast.error("DB更新でエラーが発生しました。", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: resolvedTheme.theme,
          });
        }

        // Clear the input field after successful submission
        if (formRef.current) {
          formRef.current.reset();
        }
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        toast.error(err.errors[0].message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: resolvedTheme.theme,
        });
      } else {
        toast("予期せぬエラーが発生しました。");
      }
    }
  };
  const resolvedTheme = useTheme();
  return (
    <>
      <div className="m-2 font-bold">Comments:</div>
      <SignedOut>
        <div className="flex items-center">
          <CircleUserRound aria-hidden="true" className="h-8 w-8 ml-3" />
          <input
            name="text"
            placeholder="Sign in to comment"
            className="p-2 ml-2 rounded-lg h-9 w-52 md:w-96"
            disabled
            required
          />
          <SignInButton
            mode="modal"
            forceRedirectUrl={`/${redirectPath}/${pageId}`}
            fallbackRedirectUrl={`/${redirectPath}/${pageId}`}
            signUpForceRedirectUrl={`/${redirectPath}/${pageId}`}
            signUpFallbackRedirectUrl={`/${redirectPath}/${pageId}`}
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
              afterSignOutUrl={`/${redirectPath}/${pageId}`}
              signInUrl={`/${redirectPath}/${pageId}`}
            />
          </div>
          <input
            name="text"
            placeholder="Something to share"
            className="p-2 ml-2 rounded-lg h-9 w-52 md:w-96 duration-200  "
            required
          />
          <Button
            type="submit"
            className="ml-2 p-1.5 pl-2 pr-2 rounded-full hover:bg-sky-400 duration-100"
          >
            Share
          </Button>
        </form>
      </SignedIn>
    </>
  );
}
