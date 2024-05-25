"use client";
import { Button } from "@/components/ui/button";
import { createClient } from "@supabase/supabase-js";

function createClerkSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  return createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      // Get the Supabase token with a custom fetch method
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

export default function AddData({
  userId,
  imageUrl,
}: {
  userId: string;
  imageUrl: string;
}) {
  const addData = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const text = formData.get("text");

    if (text && userId) {
      const { error } = await client.from("test").insert({
        text: text.toString(),
        user_id: userId.toString(),
        imageUrl: imageUrl.toString(),
      });

      if (error) {
        console.error("Error inserting data:", error.message);
        return;
      }
    }
  };

  return (
    <form onSubmit={addData}>
      <input name="text" required />
      <Button type="submit">submit data</Button>
    </form>
  );
}
