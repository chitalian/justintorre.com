import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Justin Torre | Builder | CEO Helicone",
  description:
    "Justin Torre is a builder, CEO of Helicone, and a full stack developer specializing in AI observability, drone technology, and innovative software solutions.",
  keywords: [
    "Justin Torre",
    "Helicone",
    "CEO",
    "software engineer",
    "full stack developer",
    "AI observability",
    "YCombinator",
    "W23",
    "drone technology",
    "machine learning",
    "startup founder",
    "tech entrepreneur"
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
    title: "Justin Torre | Builder | CEO Helicone",
    description: "Justin Torre is a builder, CEO of Helicone, and a full stack developer specializing in AI observability and innovative software solutions.",
    images: [
      {
        url: "https://www.helicone.ai/_next/image?url=%2Fassets%2Flanding%2Fhelicone-mobile.webp&w=384&q=75",
        width: 1200,
        height: 630,
        alt: "Justin Torre - CEO of Helicone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Torre | Builder | CEO Helicone",
    description: "Justin Torre is a builder, CEO of Helicone, and a full stack developer specializing in AI observability and innovative software solutions.",
    creator: "@justintorre",
    images: ["https://www.helicone.ai/_next/image?url=%2Fassets%2Flanding%2Fhelicone-mobile.webp&w=384&q=75"],
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
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
        <meta name="theme-color" content="#06b6d4" />
        <StructuredData />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
