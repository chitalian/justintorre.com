import Link from "next/link";

const BG = "#16120e";
const TEXT = "#ece5d8";
const BRASS = "#c89b4a";
const VERDIGRIS = "#4fae93";
const COPPER = "#c9704a";

const rad = (d: number) => (d * Math.PI) / 180;

function gearPath(teeth: number, rOuter: number, rRoot: number, rHole: number, c: number): string {
  const pts: string[] = [];
  const step = 360 / teeth;
  for (let i = 0; i < teeth; i++) {
    const a = i * step;
    const seq: Array<[number, number]> = [
      [a + step * 0.06, rRoot],
      [a + step * 0.16, rOuter],
      [a + step * 0.4, rOuter],
      [a + step * 0.5, rRoot],
    ];
    for (const [ang, r] of seq) {
      pts.push(`${(c + r * Math.cos(rad(ang))).toFixed(1)} ${(c + r * Math.sin(rad(ang))).toFixed(1)}`);
    }
  }
  const hole =
    `M${c + rHole} ${c}` +
    `A${rHole} ${rHole} 0 1 0 ${c - rHole} ${c}` +
    `A${rHole} ${rHole} 0 1 0 ${c + rHole} ${c}Z`;
  return `M${pts.join("L")}Z${hole}`;
}

function Gear({
  size,
  teeth,
  spin,
  dur,
  id,
  className,
}: {
  size: number;
  teeth: number;
  spin: "cw" | "ccw";
  dur: number;
  id: string;
  className?: string;
}) {
  const g = `brass-${id}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      aria-hidden="true"
      className={`${spin === "cw" ? "gear-cw" : "gear-ccw"} ${className ?? ""}`}
      style={{ animationDuration: `${dur}s` }}
    >
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e0b96a" />
          <stop offset="0.55" stopColor={BRASS} />
          <stop offset="1" stopColor="#77591c" />
        </linearGradient>
      </defs>
      <path d={gearPath(teeth, 96, 78, 26, 100)} fill={`url(#${g})`} fillRule="evenodd" />
      <circle cx="100" cy="100" r="10" fill="#77591c" />
    </svg>
  );
}

function Filigree({ tint }: { tint: string }) {
  return (
    <div className="flex items-center gap-3" aria-hidden="true">
      <span className="h-px flex-1" style={{ backgroundColor: "rgba(236,229,216,0.18)" }} />
      <svg width="150" height="18" viewBox="0 0 150 18" fill="none">
        <path
          d="M0 9 H44 M150 9 H106"
          stroke={tint}
          strokeWidth="1"
        />
        <path
          d="M44 9 C54 9 58 3 64 3 C69 3 69 9 64 9 C60 9 60 4 65 3 M106 9 C96 9 92 3 86 3 C81 3 81 9 86 9 C90 9 90 4 85 3"
          stroke={tint}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <path
          d="M44 9 C54 9 58 15 64 15 C69 15 69 9 64 9 M106 9 C96 9 92 15 86 15 C81 15 81 9 86 9"
          stroke={tint}
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path d={gearPath(8, 7.5, 5.8, 2.2, 75).replace(/(\d+\.?\d*) (\d+\.?\d*)/g, (m, x, y) => `${(+x - 100 + 75).toFixed(1)} ${(+y - 100 + 9).toFixed(1)}`)} fill={tint} fillRule="evenodd" transform={`translate(0,0)`} />
      </svg>
      <span className="h-px flex-1" style={{ backgroundColor: "rgba(236,229,216,0.18)" }} />
    </div>
  );
}

type Item = {
  date: string;
  title: string;
  href: string;
  external: boolean;
};

const work: Item[] = [
  {
    date: "Jul 2026",
    title: "Helicone joins Mintlify",
    href: "https://x.com/justinstorre/status/2028878183949554127",
    external: true,
  },
  {
    date: "Jul 2026",
    title: "Tracer: One Line Puzzle, an iOS game. 60+ levels, no ads, no tracking",
    href: "https://apps.apple.com/us/app/tracer-one-line-puzzle/id6785311996",
    external: true,
  },
  {
    date: "Jul 2023",
    title: "Helicone re-launch",
    href: "https://x.com/helicone_ai/status/1686840508658876419",
    external: true,
  },
  {
    date: "Apr 2023",
    title: "YC W23 launch: open-source observability for generative AI",
    href: "https://www.ycombinator.com/launches/I73-helicone-open-source-observability-platform-for-generative-ai",
    external: true,
  },
  {
    date: "Feb 2023",
    title: "Scale AI Hackathon, 3rd place",
    href: "https://sfstandard.com/2023/02/02/tom-brady-and-gisele-bundchen-face-off-in-ai-rap-battle/",
    external: true,
  },
];

const writing: Item[] = [
  {
    date: "Jul 2026",
    title: "Allowing your users to query ClickHouse directly using raw SQL",
    href: "/blogs/clickhouse-rls-query-parameters",
    external: false,
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

function Row({ item }: { item: Item }) {
  const className =
    "group grid grid-cols-[8ch_1fr_auto] items-baseline gap-x-4 border-b border-[#ece5d8]/15 py-3 rounded-none hover:bg-[#c89b4a] hover:text-[#16120e]";
  const inner = (
    <>
      <span className="font-mono text-[13px] tabular-nums text-[#c89b4a] group-hover:text-[#16120e]">
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

function Section({
  label,
  tint,
  children,
}: {
  label: string;
  tint: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <Filigree tint={tint} />
      <h2
        className="mt-4 font-mono text-[11px] uppercase tracking-[0.25em]"
        style={{ color: BRASS }}
      >
        {label}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen antialiased" style={{ backgroundColor: BG, color: TEXT }}>
      <style>{`
        @keyframes gear-cw { to { transform: rotate(360deg); } }
        @keyframes gear-ccw { to { transform: rotate(-360deg); } }
        .gear-cw { animation: gear-cw linear infinite; }
        .gear-ccw { animation: gear-ccw linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .gear-cw, .gear-ccw { animation: none; }
        }
      `}</style>

      <div className="mx-auto max-w-[680px] px-6 py-20 sm:py-28">
        <header className="relative pb-14">
          {/* meshed gear cluster */}
          <div className="absolute right-0 top-0 flex items-start opacity-90" aria-hidden="true">
            <Gear id="a" size={72} teeth={12} spin="cw" dur={24} />
            <Gear id="b" size={46} teeth={9} spin="ccw" dur={16} className="-ml-2 mt-10" />
            <Gear id="c" size={30} teeth={8} spin="cw" dur={11} className="-ml-1 mt-2" />
          </div>

          <h1 className="text-[24px] font-bold leading-none tracking-tight">
            Justin Torre
          </h1>
          <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed">
            Founder and engineer. I ran Helicone (YC W23), open-source LLM
            observability, from first commit to $1M+ ARR.
          </p>
          <p
            className="mt-4 font-mono text-[12px] leading-relaxed tabular-nums"
            style={{ color: BRASS }}
          >
            14T+ tokens processed &middot; 36M+ end users tracked &middot; 30k+
            signups &middot; 5.2k GitHub stars
          </p>
        </header>

        <div className="space-y-14">
          <Section label="Now" tint={VERDIGRIS}>
            <p className="text-[15px] leading-relaxed">
              Building the context layer for AI agents at Mintlify. Helicone
              joined Mintlify in July 2026.
            </p>
          </Section>

          <Section label="Work" tint={COPPER}>
            <div>
              {work.map((item) => (
                <Row key={item.href} item={item} />
              ))}
            </div>
          </Section>

          <Section label="Writing" tint={VERDIGRIS}>
            <div>
              {writing.map((item) => (
                <Row key={item.href} item={item} />
              ))}
            </div>
          </Section>

          <Section label="Links" tint={COPPER}>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[15px]">
              {links.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-none underline decoration-[#c89b4a]/60 decoration-1 underline-offset-4 hover:bg-[#c89b4a] hover:text-[#16120e]"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="rounded-none underline decoration-[#c89b4a]/60 decoration-1 underline-offset-4 hover:bg-[#c89b4a] hover:text-[#16120e]"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <footer className="mt-14">
          <Filigree tint={BRASS} />
          <p
            className="mt-4 font-mono text-[11px] uppercase tracking-[0.25em]"
            style={{ color: "rgba(236,229,216,0.45)" }}
          >
            Est. MMXXIII &middot; all gears turning
          </p>
        </footer>
      </div>
    </main>
  );
}
