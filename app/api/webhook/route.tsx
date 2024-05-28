import { Webhook } from "svix";
import { headers } from "next/headers";
import { NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";

const webhookSecret: string = process.env.NGROK_WEBHOOK_SECRET || "";

export async function POST(req: NextRequest) {
  const payload = await req.json();
  const payloadString = JSON.stringify(payload);
  const headerPayload = headers();
  const svixId = headerPayload.get("svix-id");
  const svixIdTimeStamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");
  if (!svixId || !svixIdTimeStamp || !svixSignature) {
    console.log("svixId", svixId);
    console.log("svixIdTimeStamp", svixIdTimeStamp);
    console.log("svixSignature", svixSignature);
    return new Response("Error occured", {
      status: 400,
    });
  }
  const svixHeaders = {
    "svix-id": svixId,
    "svix-timestamp": svixIdTimeStamp,
    "svix-signature": svixSignature,
  };
  const wh = new Webhook(webhookSecret);
  let evt: Event | null = null;
  try {
    evt = wh.verify(payloadString, svixHeaders) as Event;
  } catch (_) {
    console.log("error");
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Handle the webhook
  const eventType: EventType = evt.type;
  if (eventType === "user.created") {
    const {
      id,
      created_at,
      updated_at,
      first_name,
      last_name,
      username,
      profile_image_url,
      ...attributes
    } = evt.data;
    console.log("user.created: ", id);

    const { error } = await supabase.from("user").insert({
      id: id,
      created_at: new Date(created_at).toISOString(),
      updated_at: new Date(updated_at).toISOString(),
      userName: username,
      firstName: first_name,
      lastName: last_name,
      profileImageUrl: profile_image_url,
    });

    if (error) {
      console.error("Error inserting data:", error.message);
      return;
    }

    return new Response("", {
      status: 201, // 201 Created
    });
  } else if (eventType === "user.deleted") {
    const { id, ...attributes } = evt.data;
    console.log("user.deleted: ", id);
    const res = supabase.from("user").delete().eq("id", id);

    return new Response("", {
      status: 200, // 200 OK
    });
  } else if (eventType === "user.updated") {
    const {
      id,
      created_at,
      updated_at,
      first_name,
      last_name,
      username,
      profile_image_url,
      ...attributes
    } = evt.data;
    console.log("user.updated: ", id);

    const { error } = await supabase
      .from("user")
      .update({
        updated_at: new Date(updated_at).toISOString(),
        userName: username,
        firstName: first_name,
        lastName: last_name,
        profileImageUrl: profile_image_url,
      })
      .eq("id", id);

    if (error) {
      console.error("Error updating data:", error.message);
      return;
    }

    return new Response("", {
      status: 200, // 200 OK
    });
  }
  return new Response("bad request", {
    status: 400, // 400 Bad Request
  });
}

type Event = {
  data: Record<string, string | number>;
  object: "event";
  type: EventType;
};

type EventType = "user.created" | "user.deleted" | "user.updated";
