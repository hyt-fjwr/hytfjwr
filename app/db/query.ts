import { supabase } from "@/lib/supabase";
import { Replies } from "../types/Replies";
import { Comments } from "../types/Comments";

export async function getReplies(msg_id: string): Promise<Replies[]> {
  const { data, error } = await supabase
    .from("comment_replies")
    .select()
    .eq("msg_id", msg_id)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data as unknown as Replies[];
}
