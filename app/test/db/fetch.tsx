import { supabase } from "@/lib/suabase";

export const getTestData = async () => {
  const data = await supabase.from("test").select("*");
  return data.data;
};
