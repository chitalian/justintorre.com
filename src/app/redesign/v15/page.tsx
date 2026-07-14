import Link from "next/link";

const BG = "#3f3c52";
const PANEL = "#33314a";
const PANEL_DEEP = "#2c2a40";
const LAVENDER = "#d9d5ec";
const PINK = "#f79ad6";
const MINT = "#b9f0c8";
const MINT_INK = "#1d3a28";
const GREEN = "#9fe8b8";
const TEAL = "#4be0b8";
const OLIVE = "#d8d29a";
const BLUE = "#5b6cf0";
const YELLOW = "#f4f07a";

const projects = [
  {
    date: "JUL 2026",
    title: "Helicone joins Mintlify",
    href: "https://x.com/justinstorre/status/2028878183949554127",
  },
  {
    date: "JUL 2026",
    title: "Tracer: One Line Puzzle, iOS. 60+ levels, no ads, no tracking",
    href: "https://apps.apple.com/us/app/tracer-one-line-puzzle/id6785311996",
  },
  {
    date: "JUL 2026",
    title: "Allowing your users to query ClickHouse directly using raw SQL",
    href: "/blogs/clickhouse-rls-query-parameters",
  },
  {
    date: "JUL 2023",
    title: "Helicone re-launch",
    href: "https://x.com/helicone_ai/status/1686840508658876419",
  },
  {
    date: "APR 2023",
    title: "YC W23 launch",
    href: "https://www.ycombinator.com/launches/I73-helicone-open-source-observability-platform-for-generative-ai",
  },
  {
    date: "FEB 2023",
    title: "Scale AI Hackathon, 3rd place",
    href: "https://sfstandard.com/2023/02/02/tom-brady-and-gisele-bundchen-face-off-in-ai-rap-battle/",
  },
];

const chips = [
  { label: "BLOG", href: "/blogs", external: false },
  { label: "VIDEOS", href: "/videos", external: false },
  { label: "X", href: "https://twitter.com/justintorre", external: true },
  { label: "GITHUB", href: "https://github.com/chitalian", external: true },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/justintorre/", external: true },
  { label: "YOUTUBE", href: "https://www.youtube.com/@justintorre694/featured", external: true },
];

function SectionChip({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <span
        className="px-4 py-1.5 font-mono text-[12px] tracking-[0.25em]"
        style={{ backgroundColor: "#57536e", color: LAVENDER }}
      >
        {children}
      </span>
    </div>
  );
}

function TechFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative border border-dashed p-[14px]"
      style={{ borderColor: "rgba(217,213,236,0.4)" }}
    >
      {["-top-px -left-px", "-top-px -right-px", "-bottom-px -left-px", "-bottom-px -right-px"].map(
        (pos) => (
          <span
            key={pos}
            aria-hidden="true"
            className={`absolute ${pos} h-3 w-3 border`}
            style={{ borderColor: LAVENDER, backgroundColor: BG }}
          />
        )
      )}
      {children}
    </div>
  );
}

function WireSphere({ size = 120 }: { size?: number }) {
  const r = 45;
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} fill="none" aria-hidden="true">
      <circle cx="50" cy="50" r={r} stroke="white" strokeOpacity="0.85" strokeWidth="0.8" />
      {[0.25, 0.55, 0.8].map((k) => (
        <ellipse key={`v${k}`} cx="50" cy="50" rx={r * k} ry={r} stroke="white" strokeOpacity="0.55" strokeWidth="0.6" />
      ))}
      {[0.25, 0.55, 0.8].map((k) => (
        <ellipse key={`h${k}`} cx="50" cy="50" rx={r} ry={r * k} stroke="white" strokeOpacity="0.55" strokeWidth="0.6" />
      ))}
      <line x1="5" y1="50" x2="95" y2="50" stroke="white" strokeOpacity="0.55" strokeWidth="0.6" />
      <line x1="50" y1="5" x2="50" y2="95" stroke="white" strokeOpacity="0.55" strokeWidth="0.6" />
    </svg>
  );
}

function WarpGrid({ color = OLIVE }: { color?: string }) {
  return (
    <svg viewBox="0 0 200 100" className="h-full w-full" fill="none" aria-hidden="true" preserveAspectRatio="none">
      {Array.from({ length: 9 }, (_, i) => {
        const t = i / 8;
        const y = 10 + t * 80;
        const bow = Math.sin(t * Math.PI) * 14;
        return (
          <path
            key={`h${i}`}
            d={`M0 ${y} Q 50 ${y - bow} 100 ${y} T 200 ${y}`}
            stroke={color}
            strokeOpacity="0.7"
            strokeWidth="0.7"
          />
        );
      })}
      {Array.from({ length: 13 }, (_, i) => {
        const x = (i / 12) * 200;
        const lean = (x - 100) * 0.1;
        return (
          <path
            key={`v${i}`}
            d={`M${x} 10 Q ${x + lean} 50 ${x} 90`}
            stroke={color}
            strokeOpacity="0.5"
            strokeWidth="0.6"
          />
        );
      })}
    </svg>
  );
}

function AgentChip({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1 font-mono text-[11px] tracking-[0.12em]"
      style={{ backgroundColor: MINT, color: MINT_INK }}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
        <rect x="1" y="3" width="8" height="5" fill={MINT_INK} />
        <rect x="3" y="1" width="1.6" height="2" fill={MINT_INK} />
        <rect x="5.4" y="1" width="1.6" height="2" fill={MINT_INK} />
      </svg>
      {label}
    </span>
  );
}

function Sq({ color, className }: { color: string; className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute h-2.5 w-2.5 ${className}`}
      style={{ backgroundColor: color }}
    />
  );
}

export default function Page() {
  return (
    <main
      className="min-h-screen antialiased"
      style={{
        backgroundColor: BG,
        color: LAVENDER,
        backgroundImage:
          "linear-gradient(rgba(217,213,236,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(217,213,236,0.05) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }}
    >
      {/* ruler strip */}
      <div
        aria-hidden="true"
        className="h-4 w-full border-b"
        style={{
          borderColor: "rgba(217,213,236,0.25)",
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(217,213,236,0.45) 0 1px, transparent 1px 12px), repeating-linear-gradient(90deg, rgba(217,213,236,0.7) 0 1px, transparent 1px 96px)",
          backgroundSize: "100% 6px, 100% 12px",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom, bottom",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 pb-24">
        {/* hero */}
        <section className="grid items-center gap-12 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
          <div>
            <p className="font-mono text-[12px] tracking-[0.3em]" style={{ color: GREEN }}>
              FILE 001 / PERSONNEL
            </p>
            <h1 className="mt-4 text-5xl font-bold leading-[1.02] tracking-tight text-white md:text-6xl">
              Justin Torre
            </h1>
            <p className="mt-3 text-2xl font-semibold" style={{ color: PINK }}>
              Builds the systems that watch AI work.
            </p>
            <p className="mt-5 max-w-md leading-relaxed" style={{ color: LAVENDER }}>
              Now building the context layer for AI agents at Mintlify.
              Previously co-founder and CEO of Helicone (YC W23), open-source
              LLM observability.
            </p>
            <p className="mt-6 font-mono text-[12px] leading-relaxed tracking-[0.08em]" style={{ color: GREEN }}>
              14T+ TOKENS &middot; 36M+ USERS &middot; 30K+ SIGNUPS &middot; 5.2K
              STARS &middot; $1M+ ARR
            </p>
          </div>
          <TechFrame>
            <div
              className="relative flex h-72 items-center justify-center overflow-hidden"
              style={{ backgroundColor: PANEL_DEEP }}
            >
              <div className="absolute inset-x-6 top-4 h-16 opacity-70">
                <WarpGrid color={TEAL} />
              </div>
              <div className="absolute inset-x-6 bottom-4 h-16 opacity-70">
                <WarpGrid color={TEAL} />
              </div>
              <div
                className="relative flex h-36 w-36 items-center justify-center"
                style={{ backgroundColor: BLUE }}
              >
                <WireSphere size={128} />
              </div>
              <Sq color={YELLOW} className="left-10 top-10" />
              <Sq color={PINK} className="right-12 top-16" />
              <Sq color={PINK} className="bottom-12 left-16" />
              <Sq color={YELLOW} className="bottom-16 right-10" />
            </div>
          </TechFrame>
        </section>

        {/* how it works */}
        <SectionChip>HOW IT WORKS</SectionChip>
        <section className="mt-12 grid gap-10 md:grid-cols-3">
          {/* step 01 */}
          <div>
            <TechFrame>
              <div className="relative flex h-56 items-center justify-center overflow-hidden" style={{ backgroundColor: PANEL }}>
                <div className="absolute inset-4">
                  <WarpGrid color={OLIVE} />
                </div>
                <div className="relative flex h-24 w-24 items-center justify-center" style={{ backgroundColor: BLUE }}>
                  <WireSphere size={84} />
                </div>
                <Sq color={PINK} className="left-6 top-8" />
                <Sq color={YELLOW} className="right-8 top-6" />
                <Sq color={PINK} className="bottom-8 right-10" />
              </div>
            </TechFrame>
            <p className="mt-6 font-mono text-[12px] tracking-[0.25em]" style={{ color: GREEN }}>
              STEP 01
            </p>
            <h2 className="mt-2 text-2xl font-semibold" style={{ color: PINK }}>
              Built the observability layer
            </h2>
            <p className="mt-3 leading-relaxed">
              Helicone, out of YC W23. Open-source, one shared ClickHouse
              table, and a graph of everything the models did.
            </p>
          </div>
          {/* step 02 */}
          <div>
            <TechFrame>
              <div className="relative flex h-56 flex-col items-start justify-center gap-3 overflow-hidden pl-6" style={{ backgroundColor: PANEL }}>
                <div className="absolute inset-x-4 top-3 h-14 opacity-60">
                  <WarpGrid color={TEAL} />
                </div>
                <div className="absolute inset-x-4 bottom-3 h-14 opacity-60">
                  <WarpGrid color={TEAL} />
                </div>
                <AgentChip label="CONTEXT AGENT" />
                <AgentChip label="CONTEXT AGENT" />
                <AgentChip label="CONTEXT AGENT" />
                <div className="absolute right-6 top-1/2 h-20 w-20 -translate-y-1/2" style={{ backgroundColor: BLUE }}>
                  <WireSphere size={80} />
                </div>
                <Sq color={YELLOW} className="right-28 top-10" />
                <Sq color={PINK} className="bottom-10 right-10" />
              </div>
            </TechFrame>
            <p className="mt-6 font-mono text-[12px] tracking-[0.25em]" style={{ color: GREEN }}>
              STEP 02
            </p>
            <h2 className="mt-2 text-2xl font-semibold" style={{ color: PINK }}>
              Folded it into Mintlify
            </h2>
            <p className="mt-3 leading-relaxed">
              Helicone joined Mintlify in July 2026. Same bet from a bigger
              surface: agents are only as good as the context you hand them.
            </p>
          </div>
          {/* step 03 */}
          <div>
            <TechFrame>
              <div className="relative flex h-56 flex-col items-center justify-center gap-2 overflow-hidden px-5" style={{ backgroundColor: PANEL }}>
                <svg viewBox="0 0 200 120" className="absolute inset-0 h-full w-full opacity-40" fill="none" aria-hidden="true">
                  <ellipse cx="60" cy="60" rx="55" ry="48" stroke={LAVENDER} strokeWidth="0.6" />
                  <ellipse cx="140" cy="60" rx="55" ry="48" stroke={LAVENDER} strokeWidth="0.6" />
                  <ellipse cx="100" cy="60" rx="95" ry="40" stroke={LAVENDER} strokeWidth="0.5" />
                </svg>
                <div className="relative w-full bg-white px-3 py-2 text-[11px] leading-snug text-black">
                  <span className="font-bold">connor</span>
                  <br />
                  am i tripping or is it a different app every time i see a
                  tweet from you
                </div>
                <div className="relative w-full bg-white px-3 py-2 text-[11px] leading-snug text-black">
                  <span className="font-bold">justin</span>
                  <br />
                  <span style={{ color: "#0e9f6e" }}>Making note of this!</span>
                </div>
                <Sq color={PINK} className="right-6 top-5" />
                <Sq color={YELLOW} className="bottom-5 left-6" />
              </div>
            </TechFrame>
            <p className="mt-6 font-mono text-[12px] tracking-[0.25em]" style={{ color: GREEN }}>
              STEP 03
            </p>
            <h2 className="mt-2 text-2xl font-semibold" style={{ color: PINK }}>
              Keeps shipping anyway
            </h2>
            <p className="mt-3 leading-relaxed">
              Tracer, an iOS one-stroke puzzle. Drone videos. Write-ups like
              the ClickHouse row-level security post.
            </p>
          </div>
        </section>

        {/* catalog */}
        <div className="mt-24">
          <SectionChip>THE CATALOG</SectionChip>
        </div>
        <section className="mt-12">
          <TechFrame>
            <div style={{ backgroundColor: PANEL_DEEP }}>
              {projects.map((p) => {
                const inner = (
                  <div
                    className="grid grid-cols-[9ch_1fr_auto] items-baseline gap-x-5 border-b px-5 py-4 transition-colors hover:bg-white/5"
                    style={{ borderColor: "rgba(217,213,236,0.12)" }}
                  >
                    <span className="font-mono text-[11px] tracking-[0.15em]" style={{ color: GREEN }}>
                      {p.date}
                    </span>
                    <span className="font-medium text-white">{p.title}</span>
                    <span style={{ color: PINK }}>&rarr;</span>
                  </div>
                );
                return p.href.startsWith("/") ? (
                  <Link key={p.href} href={p.href} className="block">
                    {inner}
                  </Link>
                ) : (
                  <a key={p.href} href={p.href} target="_blank" rel="noopener noreferrer" className="block">
                    {inner}
                  </a>
                );
              })}
            </div>
          </TechFrame>
        </section>

        {/* footer */}
        <footer className="mt-24 flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center gap-3">
            {chips.map((c) =>
              c.external ? (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 font-mono text-[12px] tracking-[0.15em] transition-transform hover:-translate-y-0.5"
                  style={{ backgroundColor: MINT, color: MINT_INK }}
                >
                  {c.label}
                </a>
              ) : (
                <Link
                  key={c.label}
                  href={c.href}
                  className="px-4 py-1.5 font-mono text-[12px] tracking-[0.15em] transition-transform hover:-translate-y-0.5"
                  style={{ backgroundColor: MINT, color: MINT_INK }}
                >
                  {c.label}
                </Link>
              )
            )}
          </div>
          <p className="font-mono text-[11px] tracking-[0.3em]" style={{ color: "rgba(217,213,236,0.5)" }}>
            JUSTINTORRE.COM / DRAWN TO SCALE / 2026
          </p>
        </footer>
      </div>
    </main>
  );
}
