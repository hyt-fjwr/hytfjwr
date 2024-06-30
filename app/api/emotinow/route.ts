import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const ip = req.ip || "Unknown";

  return NextResponse.json({ ip });
}
