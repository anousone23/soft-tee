import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "soft. — heavyweight cotton t-shirt",
  description:
    "Heavyweight 240gsm cotton t-shirt. Built to live in your closet, not the bin.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} antialiased`}
    >
      <body className="min-h-screen bg-clay-cream text-clay-ink">
        <a
          href="#top-main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:border-[2px] focus:border-clay-ink focus:bg-clay-butter focus:px-4 focus:py-2 focus:font-bold focus:clay-shadow-sm"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
