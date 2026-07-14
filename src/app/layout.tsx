import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import PostHogProvider from "@/components/PostHogProvider";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Justin Torre | Mintlify, prev. CEO of Helicone (YC W23)",
    template: "%s | Justin Torre",
  },
  description:
    "Justin Torre is Head of Enterprise Solutions at Mintlify, building the context layer for AI agents. Previously co-founder and CEO of Helicone (YC W23), open-source LLM observability, acquired by Mintlify in 2026.",
  keywords: [
    "Justin Torre",
    "Mintlify",
    "Helicone",
    "context layer for AI agents",
    "LLM observability",
    "AI infrastructure",
    "ClickHouse",
    "YC W23",
    "startup founder",
    "software engineer",
    "Tracer One Line Puzzle",
    "drone technology",
  ],
  authors: [{ name: "Justin Torre" }],
  creator: "Justin Torre",
  publisher: "Justin Torre",
  metadataBase: new URL("https://justintorre.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://justintorre.com",
    siteName: "Justin Torre",
    title: "Justin Torre | Mintlify, prev. CEO of Helicone (YC W23)",
    description:
      "Justin Torre is Head of Enterprise Solutions at Mintlify, building the context layer for AI agents. Previously co-founder and CEO of Helicone (YC W23).",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Torre | Mintlify, prev. CEO of Helicone (YC W23)",
    description:
      "Justin Torre is Head of Enterprise Solutions at Mintlify, building the context layer for AI agents. Previously co-founder and CEO of Helicone (YC W23).",
    creator: "@justinstorre",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
        <StructuredData />
      </head>
      <body className={inter.className}>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
