import { ImageResponse } from "next/og";

export const alt =
  "Allowing your users to query ClickHouse directly using raw SQL";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CYAN = "#06b6d4";
const ORANGE = "#fb923c";
const GREEN = "#99ffe4";

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

function Row({
  allowed,
  label,
}: {
  allowed: boolean;
  label: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        width: 330,
        height: 44,
        borderRadius: 8,
        padding: "0 14px",
        backgroundColor: allowed ? "rgba(6,182,212,0.18)" : "#171717",
        border: allowed ? `2px solid ${CYAN}` : "2px solid #262626",
        opacity: allowed ? 1 : 0.45,
      }}
    >
      <div
        style={{
          display: "flex",
          width: 14,
          height: 14,
          borderRadius: 9999,
          backgroundColor: allowed ? CYAN : "#404040",
        }}
      />
      <div
        style={{
          display: "flex",
          fontSize: 19,
          color: allowed ? "#e5f9ff" : "#737373",
        }}
      >
        {label}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginLeft: "auto",
          fontSize: 19,
          color: allowed ? GREEN : "#525252",
        }}
      >
        {allowed ? (
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path
              d="M20 6L9 17l-5-5"
              stroke={GREEN}
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
        <div style={{ display: "flex" }}>{allowed ? "visible" : "hidden"}</div>
      </div>
    </div>
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
          padding: 56,
          backgroundColor: "#000",
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(6,182,212,0.22), rgba(0,0,0,0) 55%), radial-gradient(circle at 90% 100%, rgba(6,182,212,0.12), rgba(0,0,0,0) 45%)",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <Star x={180} y={90} r={4} o={0.9} />
        <Star x={420} y={50} r={3} o={0.6} />
        <Star x={700} y={110} r={4} o={0.8} />
        <Star x={960} y={60} r={3} o={0.7} />
        <Star x={1100} y={180} r={4} o={0.5} />
        <Star x={90} y={300} r={3} o={0.5} />
        <Star x={1140} y={420} r={3} o={0.8} />
        <Star x={620} y={560} r={3} o={0.5} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 24,
            color: "#737373",
          }}
        >
          <div style={{ display: "flex", color: CYAN }}>~/justin-torre</div>
          <div style={{ display: "flex" }}>·</div>
          <div style={{ display: "flex" }}>blog</div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 56,
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.12,
            maxWidth: 1050,
          }}
        >
          Allowing your users to query ClickHouse directly using raw SQL
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 40,
            gap: 36,
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 620,
              borderRadius: 14,
              border: "2px solid #262626",
              backgroundColor: "#0a0a0a",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 18px",
                borderBottom: "2px solid #1c1c1c",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 12,
                  height: 12,
                  borderRadius: 9999,
                  backgroundColor: "#ff5f57",
                }}
              />
              <div
                style={{
                  display: "flex",
                  width: 12,
                  height: 12,
                  borderRadius: 9999,
                  backgroundColor: "#febc2e",
                }}
              />
              <div
                style={{
                  display: "flex",
                  width: 12,
                  height: 12,
                  borderRadius: 9999,
                  backgroundColor: "#28c840",
                }}
              />
              <div
                style={{
                  display: "flex",
                  marginLeft: 10,
                  fontSize: 18,
                  color: "#525252",
                }}
              >
                row_policy.sql
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "18px 22px",
                fontSize: 23,
                lineHeight: 1.55,
              }}
            >
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ display: "flex", color: ORANGE }}>
                  CREATE ROW POLICY
                </div>
                <div style={{ display: "flex", color: "#e5e5e5" }}>
                  org_filter
                </div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ display: "flex", color: ORANGE, marginLeft: 32 }}>
                  ON
                </div>
                <div style={{ display: "flex", color: "#e5e5e5" }}>
                  request_response_rmt
                </div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ display: "flex", color: ORANGE, marginLeft: 32 }}>
                  USING
                </div>
                <div style={{ display: "flex", color: "#e5e5e5" }}>
                  organization_id =
                </div>
              </div>
              <div style={{ display: "flex", marginLeft: 64 }}>
                <div style={{ display: "flex", color: "#e5e5e5" }}>
                  getSetting(
                </div>
                <div style={{ display: "flex", color: GREEN }}>
                  &apos;SQL_org_id&apos;
                </div>
                <div style={{ display: "flex", color: "#e5e5e5" }}>)</div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ display: "flex", color: ORANGE, marginLeft: 32 }}>
                  TO
                </div>
                <div style={{ display: "flex", color: "#e5e5e5" }}>
                  hql_user;
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              paddingTop: 6,
            }}
          >
            <Row allowed={false} label="org_acme" />
            <Row allowed={true} label="org_yours" />
            <Row allowed={false} label="org_globex" />
            <Row allowed={false} label="org_initech" />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "auto",
            alignItems: "center",
            gap: 12,
            fontSize: 24,
          }}
        >
          <div style={{ display: "flex", color: "#fff" }}>justintorre.com</div>
          <div style={{ display: "flex", color: "#525252" }}>·</div>
          <div style={{ display: "flex", color: "#737373" }}>
            written while building Helicone
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
