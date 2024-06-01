import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import { ThemeProvider } from "./components/header/Theme-Provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const notoSansJp = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hayato Fujiwara",
  description:
    "My portfolio created with Nextjs, clerk, Supabase, Radix Primitives, shadcn/ui, Framer Motion, Tailwind",
  openGraph: {
    title: "Hayato Fujiwara",
    description:
      "My portfolio created with Nextjs, clerk, Supabase, Radix Primitives, shadcn/ui, Framer Motion, Tailwind",
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
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="ja" suppressHydrationWarning>
        <GoogleAnalytics gaId="G-KY907GJVK2" />
        <SpeedInsights />
        <Analytics />
        <body className={`${notoSansJp.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            storageKey="theme"
          >
            <Header />
            <main className="py-6 container flex justify-center">
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
