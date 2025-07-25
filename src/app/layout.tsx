import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Austin Luk | CS @ UBC | Creative Developer",
  description: "Austin Luk - Computer Science student at UBC, creative developer, and digital innovator. Exploring the intersection of technology, design, and human experience.",
  keywords: ["austin luk", "computer science", "ubc", "developer", "portfolio", "thenstep", "creative coding"],
  authors: [{ name: "Austin Luk" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Austin Luk | CS @ UBC | Creative Developer",
    description: "Computer Science student at UBC, creative developer, and digital innovator",
    type: "website",
    url: "https://austinluk.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
