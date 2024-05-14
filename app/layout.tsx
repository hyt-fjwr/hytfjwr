import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "./components/Theme-Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hayato Fujiwara",
  description: "PORTFOLIO OF MINE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        <main className="py-6 container">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
