import React from "react";
import { toast } from "react-toastify";
import { z } from "zod";
import { Button } from "../ui/button";
import { supabase } from "@/lib/supabase";

const client = supabase;

export default function AddEmotion({ emotion }: { emotion: string }) {
  const addEmotion = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (emotion) {
        const { error } = await client.from("emotionow").insert({
          content: emotion,
        });

        if (error) {
          console.error("Error inserting data:", error.message);
          toast.error("データの挿入中にエラーが発生しました。");
        } else {
          toast.success("データが正常に挿入されました。");
        }
      } else {
        toast.warn("感情を入力してください。");
      }
    } catch (err) {
      toast.error("予期せぬエラーが発生しました。");
    }
  };

  return (
    <div>
      <form onSubmit={addEmotion}>
        <Button
          type="submit"
          className="m-2 w-12 h-12 bg-white rounded-2xl text-4xl"
        >
          {emotion}
        </Button>
      </form>
    </div>
  );
}
