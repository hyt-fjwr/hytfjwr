import React from "react";
import { SignIn, SignUp, SignedIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import DataList from "./components/DataList";
import ServerActionTest from "./components/ServerActionTest";
import AddData from "./components/AddData";
import { supabase } from "@/lib/supabase";

export default async function Test() {
  const user = await currentUser();

  const { data } = await supabase
    .from("comments")
    .select(`*, user(*)`)
    .order("created_at", { ascending: false });

  if (!user) {
    return <SignIn routing="hash" />;
  }
  const { id } = user;
  const { imageUrl } = user;
  const params = new URLSearchParams();

  params.set("height", "100");
  params.set("width", "100");
  params.set("quality", "100");
  params.set("fit", "crop");

  const imageSrc = `${imageUrl}?${params.toString()}`;
  return (
    <>
      <div>
        <SignedIn>
          <ServerActionTest />
          <AddData userId={id} imageUrl={imageSrc} />
          <DataList serverData={data ?? []} />
        </SignedIn>
      </div>
    </>
  );
}
