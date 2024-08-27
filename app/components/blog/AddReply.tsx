import { Button } from "../ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";
import { CircleUserRound } from "lucide-react";
import React, { useRef, useEffect } from "react";
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
export default function AddReply({
  msgId,
  userId,
  redirectPath,
  pageId,
}: {
  msgId: string;
  userId: string;
  redirectPath: string;
  pageId: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const schema = z
    .string()
    .max(200, { message: "200文字以下に収めてください。" });

  useEffect(() => {
    const handleFocus = () => {
      if (inputRef.current) {
        inputRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    };

    const inputElement = inputRef.current;
    if (inputElement) {
      inputElement.addEventListener("focus", handleFocus);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener("focus", handleFocus);
      }
    };
  }, []);

  const addReply = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const text = formData.get("text");

    //validation check make sure text is 200 or fewer characters long.
    try {
      const reply = schema.parse(text);
      if (text && userId) {
        const { error } = await client.from("comment_replies").insert({
          text: reply.toString(),
          user_id: userId.toString(),
          msg_id: msgId.toString(),
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
      <div className="pt-2">
        <SignedOut>
          <div className="flex items-center">
            <CircleUserRound aria-hidden="true" className="h-8 w-8" />
            <input
              name="text"
              placeholder="Sign in to reply!"
              className="p-2 ml-2 rounded-lg h-7 w-52 md:w-full"
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
              <UserButton
                userProfileMode="modal"
                afterSignOutUrl={`/${redirectPath}/${pageId}`}
                signInUrl={`/${redirectPath}/${pageId}`}
              />
            </div>
            <input
              ref={inputRef}
              name="text"
              placeholder="Post your reply!"
              className="p-2 ml-2 rounded-lg h-7 w-full duration-200 "
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
      </div>
    </>
  );
}
