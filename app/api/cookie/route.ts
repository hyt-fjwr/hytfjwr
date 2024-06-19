"use server";
import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({ message: "Cookie set successfully" });

  response.cookies.set("isOpened", "true", {
    path: "/",
  });

  return response;
}
