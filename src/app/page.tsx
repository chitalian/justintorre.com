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
    title: "17 versions of this website. I couldn't pick, so scroll through every one",
    href: "/projects/website-redesigns",
    external: false,
  },
  {
    date: "Jul 2026",
    title: "Tracer: One Line Puzzle, an iOS game. 60+ levels, no ads, no tracking",
    href: "/projects/tracer",
    external: false,
  },
  {
    date: "Jul 2026",
    title: "offensive-ai-speak, a Claude skill that stops AI from writing slop",
    href: "https://github.com/chitalian/offensive-ai-speak",
    external: true,
  },
  {
    date: "Mar 2026",
    title: "Helicone joins Mintlify",
    href: "/projects/mintlify",
    external: false,
  },
  {
    date: "Jan 2026",
    title: "aitrolleyproblem.com: which model provider would you trust to govern humanity?",
    href: "https://www.aitrolleyproblem.com",
    external: true,
  },
  {
    date: "Aug 2024",
    title: "Helicone hits #1 Product of the Day on Product Hunt",
    href: "https://www.helicone.ai/blog/product-hunt-automate",
    external: true,
  },
  {
    date: "Jul 2023",
    title: "Helicone re-launch",
    href: "/projects/helicone",
    external: false,
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
    href: "/projects/scale-ai-hackathon",
    external: false,
  },
];

const writing: Item[] = [
  {
    date: "Jul 2026",
    title: "Allowing your users to query ClickHouse directly using raw SQL",
    href: "/blogs/clickhouse-rls-query-parameters",
    external: false,
  },
  {
    date: "Mar 2026",
    title: "What three years of watching AI in production taught us",
    href: "https://www.mintlify.com/blog/why-we-joined-mintlify",
    external: true,
  },
];

const links = [
  { label: "About", href: "/about", external: false },
  { label: "Projects", href: "/projects", external: false },
  { label: "Blog", href: "/blogs", external: false },
  { label: "Videos", href: "/videos", external: false },
  { label: "X", href: "https://twitter.com/justintorre", external: true },
  { label: "GitHub", href: "https://github.com/chitalian", external: true },
  { label: "GitLab", href: "https://gitlab.com/justintorre75", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/justintorre/", external: true },
  { label: "YouTube", href: "https://www.youtube.com/@justintorre694/featured", external: true },
  { label: "YC", href: "https://www.ycombinator.com/companies/helicone", external: true },
];

function Row({ item }: { item: Item }) {
  const className =
    "grid grid-cols-[8ch_1fr_auto] items-baseline gap-x-4 border-b border-black py-3 rounded-none transition-colors duration-150 hover:bg-neutral-100";
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

export default function Home() {
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
              joined Mintlify in March 2026.
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
                      className="rounded-none underline decoration-1 underline-offset-4 transition-colors duration-150 hover:bg-neutral-100"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="rounded-none underline decoration-1 underline-offset-4 transition-colors duration-150 hover:bg-neutral-100"
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
