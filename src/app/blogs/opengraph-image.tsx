import { ImageResponse } from "next/og";

export const alt = "Justin Torre's blog — engineering notes from building Helicone";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CYAN = "#06b6d4";

function Star({ x, y, r, o }: { x: number; y: number; r: number; o: number }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: r,
        height: r,
        borderRadius: 9999,
        backgroundColor: "#fff",
        opacity: o,
      }}
    />
  );
}

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          backgroundImage:
            "radial-gradient(circle at 50% 120%, rgba(6,182,212,0.25), rgba(0,0,0,0) 60%)",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <Star x={150} y={120} r={4} o={0.8} />
        <Star x={380} y={70} r={3} o={0.6} />
        <Star x={720} y={100} r={4} o={0.9} />
        <Star x={980} y={150} r={3} o={0.6} />
        <Star x={1080} y={90} r={4} o={0.7} />
        <Star x={220} y={480} r={3} o={0.5} />
        <Star x={900} y={520} r={4} o={0.6} />
        <Star x={80} y={320} r={3} o={0.6} />
        <Star x={1130} y={350} r={3} o={0.7} />

        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: CYAN,
          }}
        >
          ~/justin-torre
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 96,
            fontWeight: 700,
            color: "#fff",
          }}
        >
          Blog
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 32,
            color: "#a3a3a3",
          }}
        >
          Writing from Justin Torre
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 48,
            fontSize: 26,
            color: "#737373",
          }}
        >
          justintorre.com/blogs
        </div>
      </div>
    ),
    { ...size }
  );
}
