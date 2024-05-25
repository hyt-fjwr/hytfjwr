import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "./components/Theme-Provider";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const notoSansJp = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hayato Fujiwara",
  description:
    "My portfolio created with Nextjs, Radix Primitives, Framer Motion, Tailwind",
  openGraph: {
    title: "Hayato Fujiwara",
    description:
      "My portfolio created with Nextjs, Radix Primitives, Framer Motion, Tailwind",
    type: "website",
    url: "https://hytfjwr.com",
    images: [
      {
        url: "https://hytfjwr.com/api/og?title=hytfjwr.com",
        alt: "hytfjwr.com",
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
      <GoogleAnalytics gaId="G-KY907GJVK2" />
      <SpeedInsights />
      <Analytics />
      <body className={`${notoSansJp.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider
            appearance={{
              baseTheme: dark,
            }}
          >
            <Header />
            <main className="py-6 container flex justify-center">
              {children}
            </main>
            <Footer />
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
