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

function Row({ item }: { item: Item }) {
  const className =
    "grid grid-cols-[8ch_1fr_auto] items-baseline gap-x-4 border-b border-black py-3 rounded-none hover:bg-black hover:text-white";
  const inner = (
    <>
      <span className="font-mono text-[13px] tabular-nums text-neutral-500">
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
    <section className="border-t border-black pt-4">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.25em]">{label}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black antialiased">
      <div className="mx-auto max-w-[680px] px-6 py-20 sm:py-28">
        <header className="pb-14">
          <h1 className="text-[22px] font-bold leading-none tracking-tight">
            Justin Torre
          </h1>
          <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed">
            Founder and engineer. I ran Helicone (YC W23), open-source LLM
            observability, from first commit to $1M+ ARR.
          </p>
          <p className="mt-4 font-mono text-[12px] leading-relaxed tabular-nums">
            14T+ tokens processed &middot; 36M+ end users tracked &middot; 30k+
            signups &middot; 5.2k GitHub stars
          </p>
        </header>

        <div className="space-y-14">
          <Section label="Now">
            <p className="text-[15px] leading-relaxed">
              Building the context layer for AI agents at Mintlify. Helicone
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
                      className="rounded-none underline decoration-1 underline-offset-4 hover:bg-black hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="rounded-none underline decoration-1 underline-offset-4 hover:bg-black hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <div className="mt-14 border-t border-black" aria-hidden="true" />
      </div>
    </main>
  );
}
