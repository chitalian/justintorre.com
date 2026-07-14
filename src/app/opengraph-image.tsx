import { ImageResponse } from "next/og";

export const alt =
  "Justin Torre — building the context layer for AI agents at Mintlify";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          color: "#000000",
          padding: "0 120px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            borderTop: "3px solid #000",
            paddingTop: 28,
            fontSize: 24,
            letterSpacing: 6,
            color: "#737373",
          }}
        >
          JUSTIN TORRE
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: -2,
          }}
        >
          Founder and engineer.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 32,
            color: "#404040",
            lineHeight: 1.4,
          }}
        >
          Building the context layer for AI agents at Mintlify. Previously CEO
          of Helicone (YC W23).
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            borderTop: "1px solid #000",
            paddingTop: 20,
            fontSize: 24,
            color: "#737373",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span>justintorre.com</span>
          <span>14T+ tokens · $1M+ ARR · 5.2k stars</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
