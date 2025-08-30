import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Justin Torre | Builder | CEO Helicone",
  description:
    "Justin Torre is a builder, CEO of Helicone, and a full stack developer.",
  openGraph: {
    title: "Justin Torre",
    description: "Justin Torre is a builder, CEO of Helicone, and a full stack developer.",
    images: ["https://www.helicone.ai/_next/image?url=%2Fassets%2Flanding%2Fhelicone-mobile.webp&w=384&q=75"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
