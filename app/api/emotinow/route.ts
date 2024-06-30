import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const ip =
    req.headers.get("x-real-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    req.ip ||
    "Unknown";

  // ここがポイント！CORSヘッダーを追加しちゃう！
  return NextResponse.json(
    { ip },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    }
  );
}
