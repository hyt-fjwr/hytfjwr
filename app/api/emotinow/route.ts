import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  let ip = req.headers.get("x-real-ip") || req.ip || "Unknown";
  if (!ip) {
    ip = req.headers.get("x-forwarded-for") || req.ip || "Unknown";
  }

  return Response.json({ ip });
}
