import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const Title = searchParams.get("title");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundImage:
            "url(https://raw.githubusercontent.com/hyt-fjwr/hytfjwr/master/public/og/og.png)",
        }}
      >
        <h1
          style={{
            marginLeft: 205,
            marginRight: 205,
            display: "flex",
            fontSize: 120,
            letterSpacing: "-0.025em",
            fontStyle: "normal",
            fontWeight: "bold",
            color: "white",
            whiteSpace: "pre-wrap",
            backgroundColor: "rgba(15, 15,19, .5)",
            paddingLeft: "25px",
            paddingRight: "25px",
            borderRadius: "25px",
          }}
        >
          {Title}
        </h1>
        <h2
          style={{
            marginLeft: 205,
            marginRight: 205,
            display: "flex",
            fontSize: 50,
            letterSpacing: "-0.025em",
            fontStyle: "normal",
            fontWeight: "bold",
            color: "white",
            whiteSpace: "pre-wrap",
            backgroundColor: "rgba(15, 15,19, .5)",
            paddingLeft: "25px",
            paddingRight: "25px",
            borderRadius: "25px",
          }}
        >
          Hayato Fujiwara
        </h2>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    }
  );
}
