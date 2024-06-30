import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const ip = request.nextUrl.searchParams.get("ip");
  const response = await fetch(
    `https://api.iplocation.net/?cmd=ip-country&ip=${ip}`
  );
  const data = await response.json();
  return NextResponse.json(data);
}
