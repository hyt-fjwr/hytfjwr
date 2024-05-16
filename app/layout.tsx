import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "./components/Theme-Provider";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="py-6 container flex justify-center">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
