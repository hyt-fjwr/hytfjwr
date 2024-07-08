"use client";
import { createClient } from "@supabase/supabase-js";
import React from "react";
import { toast } from "react-toastify";
import { z } from "zod";

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

export default function AddEmotion({ emotion }: { emotion: string }) {
  const schema = z
    .string()
    .max(200, { message: "200文字以下に収めてください。" });
  const addEmotion = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //validation check make sure text is 200 or fewer characters long.
    try {
      if (emotion) {
        const { error } = await client.from("emotinow").insert({
          conten: emotion,
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
          });
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
        });
      } else {
        toast("予期せぬエラーが発生しました。");
      }
    }
  };
  return (
    <>
      <div>
        <form onSubmit={addEmotion}>
          <button
            type="submit"
            className="m-2 w-12 h-12 bg-white rounded-2xl text-4xl"
          >
            {emotion}
          </button>
        </form>
      </div>
    </>
  );
}
