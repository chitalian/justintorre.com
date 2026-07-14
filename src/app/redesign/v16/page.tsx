import Link from "next/link";

const BG = "#191410";
const CREAM = "#e9dcbe";
const CYAN = "#9fd6e4";
const ORANGE = "#e8853a";

type LogItem = {
  no: string;
  date: string;
  title: string;
  href: string;
  external: boolean;
  current: boolean;
};

const work: LogItem[] = [
  {
    no: "JT-061",
    date: "MAR 2026",
    title: "Helicone joins Mintlify",
    href: "https://x.com/justinstorre/status/2028878183949554127",
    external: true,
    current: true,
  },
  {
    no: "JT-060",
    date: "JUL 2026",
    title: "Tracer: One Line Puzzle, an iOS game. 60+ levels, no ads, no tracking",
    href: "https://apps.apple.com/us/app/tracer-one-line-puzzle/id6785311996",
    external: true,
    current: true,
  },
  {
    no: "JT-041",
    date: "JUL 2023",
    title: "Helicone re-launch",
    href: "https://x.com/helicone_ai/status/1686840508658876419",
    external: true,
    current: false,
  },
  {
    no: "JT-038",
    date: "APR 2023",
    title: "YC W23 launch: open-source observability for generative AI",
    href: "https://www.ycombinator.com/launches/I73-helicone-open-source-observability-platform-for-generative-ai",
    external: true,
    current: false,
  },
  {
    no: "JT-034",
    date: "FEB 2023",
    title: "Scale AI Hackathon, 3rd place",
    href: "https://sfstandard.com/2023/02/02/tom-brady-and-gisele-bundchen-face-off-in-ai-rap-battle/",
    external: true,
    current: false,
  },
];

const writing: LogItem[] = [
  {
    no: "JT-059",
    date: "JUL 2026",
    title: "Allowing your users to query ClickHouse directly using raw SQL",
    href: "/blogs/clickhouse-rls-query-parameters",
    external: false,
    current: true,
  },
];

const links = [
  { label: "Blog", href: "/blogs", external: false },
  { label: "Videos", href: "/videos", external: false },
  { label: "X", href: "https://twitter.com/justintorre", external: true },
  { label: "GitHub", href: "https://github.com/chitalian", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/justintorre/", external: true },
  { label: "YouTube", href: "https://www.youtube.com/@justintorre694/featured", external: true },
];

const meters = [
  { label: "TOKENS PROCESSED", value: "14T+", filled: 17, hot: true },
  { label: "END USERS TRACKED", value: "36M+", filled: 14, hot: false },
  { label: "SIGNUPS", value: "30K+", filled: 10, hot: false },
  { label: "GITHUB STARS", value: "5.2K", filled: 8, hot: false },
];

const CELLS = 18;

function Meter({ label, value, filled, hot }: (typeof meters)[number]) {
  return (
    <div className="grid grid-cols-[18ch_1fr_auto] items-center gap-x-4">
      <span className="font-mono text-[10px] tracking-[0.18em] text-[#e9dcbe]/60">
        {label}
      </span>
      <span className="flex gap-[3px]">
        {Array.from({ length: CELLS }, (_, i) => (
          <span
            key={i}
            className="h-[10px] w-[7px]"
            style={{
              backgroundColor:
                i < filled
                  ? hot && i === filled - 1
                    ? ORANGE
                    : CYAN
                  : "rgba(233,220,190,0.14)",
            }}
          />
        ))}
      </span>
      <span className="font-mono text-[12px] tabular-nums" style={{ color: CREAM }}>
        {value}
      </span>
    </div>
  );
}

function Lamp({ on }: { on: boolean }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-2 w-2 rounded-full"
      style={{
        backgroundColor: on ? CYAN : "rgba(233,220,190,0.55)",
        boxShadow: on ? `0 0 6px ${CYAN}` : "none",
      }}
    />
  );
}

function Row({ item }: { item: LogItem }) {
  const className =
    "group grid grid-cols-[10px_9ch_1fr_auto] items-baseline gap-x-4 border-b border-[#e9dcbe]/20 py-3 rounded-none hover:bg-[#e9dcbe] hover:text-[#191410] sm:grid-cols-[10px_7ch_9ch_1fr_auto]";
  const inner = (
    <>
      <span className="self-center">
        <Lamp on={item.current} />
      </span>
      <span className="hidden font-mono text-[12px] tracking-[0.08em] text-[#e9dcbe]/50 group-hover:text-[#191410]/60 sm:inline">
        {item.no}
      </span>
      <span className="font-mono text-[12px] tracking-[0.08em] text-[#9fd6e4] group-hover:text-[#191410]">
        {item.date}
      </span>
      <span className="text-[15px] leading-snug">{item.title}</span>
      <span aria-hidden="true" className="font-mono text-[13px]">
        &rarr;
      </span>
    </>
  );
  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={item.href} className={className}>
      {inner}
    </Link>
  );
}

function Section({ label, right, children }: { label: string; right?: string; children: React.ReactNode }) {
  return (
    <section className="pt-4" style={{ borderTop: `3px double ${CREAM}` }}>
      <div className="flex items-baseline justify-between">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.3em]" style={{ color: CYAN }}>
          ▸ {label}
        </h2>
        {right ? (
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#e9dcbe]/40">
            {right}
          </span>
        ) : null}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen antialiased" style={{ backgroundColor: BG, color: CREAM }}>
      <style>{`
        @keyframes v16-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
        .v16-onair { animation: v16-pulse 2.2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .v16-onair { animation: none; } }
      `}</style>

      <div className="mx-auto max-w-[720px] px-6 py-16 sm:py-24">
        {/* letterhead */}
        <div
          className="flex items-center justify-between pb-3"
          style={{ borderBottom: `3px double ${CREAM}` }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#e9dcbe]/60">
            Torre Variance Authority · File JT-1989
          </p>
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: ORANGE }}>
            <span
              aria-hidden="true"
              className="v16-onair inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: ORANGE, boxShadow: `0 0 6px ${ORANGE}` }}
            />
            On air
          </p>
        </div>

        <header className="py-12">
          <h1 className="font-mono text-[24px] font-bold uppercase leading-none tracking-[0.14em]">
            Torre, Justin
          </h1>
          <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed">
            Founder and engineer. I ran Helicone (YC W23), open-source LLM
            observability, from first commit to $1M+ ARR.{" "}
            <span
              className="ml-1 inline-block -rotate-2 border px-1.5 py-0.5 align-middle font-mono text-[10px] uppercase tracking-[0.12em]"
              style={{ borderColor: ORANGE, color: ORANGE }}
            >
              Acquired Mar 2026
            </span>
          </p>
        </header>

        <div className="space-y-14">
          <Section label="Telemetry" right="Inst. cluster 04">
            <div className="space-y-3">
              {meters.map((m) => (
                <Meter key={m.label} {...m} />
              ))}
            </div>
            <p className="mt-3 font-mono text-[10px] tracking-[0.15em] text-[#e9dcbe]/35">
              └─ BAR METERS · DO NOT TAP THE GLASS
            </p>
          </Section>

          <Section label="Current assignment">
            <p className="text-[15px] leading-relaxed">
              Building the context layer for AI agents at Mintlify. Helicone
              joined Mintlify in March 2026.
            </p>
          </Section>

          <Section label="Mission log" right="Ledger JT/26">
            <div>
              {work.map((item) => (
                <Row key={item.href} item={item} />
              ))}
            </div>
            <p className="mt-3 font-mono text-[10px] tracking-[0.15em] text-[#e9dcbe]/35">
              CYAN LAMP: CURRENT CYCLE · CREAM LAMP: ARCHIVED, STILL PROUD OF IT
            </p>
          </Section>

          <Section label="Field notes">
            <div>
              {writing.map((item) => (
                <Row key={item.href} item={item} />
              ))}
            </div>
          </Section>

          <Section label="Channels">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[15px]">
              {links.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-none underline decoration-1 underline-offset-4 hover:bg-[#e9dcbe] hover:text-[#191410]"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="rounded-none underline decoration-1 underline-offset-4 hover:bg-[#e9dcbe] hover:text-[#191410]"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <div className="mt-14 pt-4" style={{ borderTop: `3px double ${CREAM}` }}>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#e9dcbe]/50">
            Warning! Error not detected.
          </p>
        </div>
      </div>
    </main>
  );
}
