import Link from "next/link";

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

function NeonRule() {
  return (
    <div
      aria-hidden="true"
      className="h-px w-full bg-gradient-to-r from-cyan-400/80 via-fuchsia-500/80 to-transparent"
    />
  );
}

function Row({ item }: { item: Item }) {
  const className =
    "grid grid-cols-[8ch_1fr_auto] items-baseline gap-x-4 border-b border-fuchsia-500/25 py-3 rounded-none hover:bg-fuchsia-500 hover:text-black hover:border-fuchsia-500";
  const inner = (
    <>
      <span className="font-mono text-[13px] tabular-nums text-cyan-300/70">
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

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section>
      <NeonRule />
      <h2
        className="pt-4 font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-300"
        style={{ textShadow: "0 0 8px rgba(34,211,238,0.55)" }}
      >
        {label}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b0716] text-[#efeaff] antialiased">
      <style>{`
        @keyframes v14-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .v14-cursor { animation: v14-blink 1.1s steps(1) infinite; }
        @media (prefers-reduced-motion: reduce) {
          .v14-cursor { animation: none; }
        }
      `}</style>

      {/* scanlines */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-20"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 4px)",
        }}
      />
      {/* horizon grid, kept faint and low */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 opacity-[0.14]"
        style={{
          background:
            "repeating-linear-gradient(90deg, #22d3ee 0px, #22d3ee 1px, transparent 1px, transparent 60px), repeating-linear-gradient(0deg, #d946ef 0px, #d946ef 1px, transparent 1px, transparent 24px)",
          transform: "perspective(320px) rotateX(58deg)",
          transformOrigin: "bottom",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[680px] px-6 py-20 sm:py-28">
        <header className="pb-14">
          <h1
            className="bg-gradient-to-b from-white via-[#cfd6e4] to-[#8fa0bd] bg-clip-text text-[26px] font-black uppercase leading-none tracking-[0.08em] text-transparent"
            style={{
              filter:
                "drop-shadow(0 0 10px rgba(217,70,239,0.45)) drop-shadow(0 0 22px rgba(34,211,238,0.25))",
            }}
          >
            Justin Torre
          </h1>
          <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-[#d8d2ee]">
            Founder and engineer. I ran Helicone (YC W23), open-source LLM
            observability, from first commit to $1M+ ARR.
          </p>
          <p className="mt-4 font-mono text-[12px] leading-relaxed tabular-nums text-cyan-300/80">
            14T+ tokens processed &middot; 36M+ end users tracked &middot; 30k+
            signups &middot; 5.2k GitHub stars
          </p>
        </header>

        <div className="space-y-14">
          <Section label="Now">
            <p className="text-[15px] leading-relaxed text-[#d8d2ee]">
              Building the context layer for AI agents at{" "}
              <span className="text-fuchsia-400">Mintlify</span>. Helicone
              joined Mintlify in July 2026.
            </p>
          </Section>

          <Section label="Work">
            <div>
              {work.map((item) => (
                <Row key={item.href} item={item} />
              ))}
            </div>
          </Section>

          <Section label="Writing">
            <div>
              {writing.map((item) => (
                <Row key={item.href} item={item} />
              ))}
            </div>
          </Section>

          <Section label="Links">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[15px]">
              {links.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-none underline decoration-cyan-400/60 decoration-1 underline-offset-4 hover:bg-cyan-400 hover:text-black"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="rounded-none underline decoration-cyan-400/60 decoration-1 underline-offset-4 hover:bg-cyan-400 hover:text-black"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <div className="mt-14">
          <NeonRule />
          <p className="pt-4 font-mono text-[12px] uppercase tracking-[0.25em] text-fuchsia-400/80">
            continue? <span className="v14-cursor">▮</span>
          </p>
        </div>
      </div>
    </main>
  );
}
