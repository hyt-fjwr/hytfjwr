import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const ip = request.nextUrl.searchParams.get("ip");
  console.log("getCountryに渡されたIP:", ip); // ログ追加

  if (!ip) {
    console.log("IPが見つかりません");
    return NextResponse.json({ error: "IP not provided" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.iplocation.net/?cmd=ip-country&ip=${ip}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("IPLocation APIのレスポンス:", data); // ログ追加
    return NextResponse.json(data);
  } catch (error) {
    console.error("IPLocation APIエラー:", error);
    return NextResponse.json(
      { error: "Failed to fetch country data" },
      { status: 500 }
    );
  }
}
