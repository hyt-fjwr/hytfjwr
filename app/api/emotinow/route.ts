import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const ip =
    req.headers.get("x-real-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    req.ip ||
    "Unknown";

  console.log("取得したIP:", ip);

  if (ip === "Unknown") {
    console.log("IPアドレスが取得できませんでした");
    return NextResponse.json({ error: "IP not found" }, { status: 404 });
  }

  return NextResponse.json({ ip }, { status: 200 });
}
