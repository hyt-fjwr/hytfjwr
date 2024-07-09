import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EMOTINOW",
  description: "Share your emotion with emoji ;)",
  openGraph: {
    title: "EMOTINOW",
    description: "Share your emotion with emoji ;)",
    type: "website",
    url: "https://hytfjwr.com/emotinow",
    images: [
      {
        url: "https://hytfjwr.com/api/og?title=EMOTINOW",
        alt: "hytfjwr.com/emotinow",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <SpeedInsights />
      <Analytics />
      <body className={`${inter.className}`}>
        <main>{children}</main>
      </body>
      <GoogleAnalytics gaId="G-KY907GJVK2" />
    </html>
  );
}
