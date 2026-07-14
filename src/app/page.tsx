import Link from "next/link";

type Item = {
  date: string;
  title: string;
  href: string;
  external: boolean;
};

const news: Item[] = [
  {
    date: "Mar 2026",
    title: "Helicone joins Mintlify",
    href: "/projects/mintlify",
    external: false,
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
];

const mainQuests = [
  {
    name: "Mintlify",
    line: "Building the context layer for AI agents.",
    href: "/projects/mintlify",
  },
  {
    name: "Helicone",
    line: "Open-source LLM observability, YC W23. 14T+ tokens, acquired.",
    href: "/projects/helicone",
  },
];

const sideQuests = [
  {
    name: "Tracer: One Line Puzzle",
    line: "An iOS puzzle game. One stroke, no lifting your finger.",
    href: "/projects/tracer",
  },
  {
    name: "17 versions of this website",
    line: "One homepage, seventeen designs, one plain winner.",
    href: "/projects/website-redesigns",
  },
  {
    name: "Scale AI Hackathon",
    line: "3rd place, with an AI rap battle in the demo.",
    href: "/projects/scale-ai-hackathon",
  },
  {
    name: "aitrolleyproblem.com",
    line: "Which model provider would you trust to govern humanity?",
    href: "https://www.aitrolleyproblem.com",
    external: true,
  },
  {
    name: "offensive-ai-speak",
    line: "A Claude skill that stops AI from writing slop.",
    href: "https://github.com/chitalian/offensive-ai-speak",
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
    "grid grid-cols-[8ch_1fr_auto] items-baseline gap-x-4 border-b border-black last:border-b-0 py-3 rounded-none transition-colors duration-150 hover:bg-neutral-100";
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

function ProjectRow({
  project,
}: {
  project: { name: string; line: string; href: string; external?: boolean };
}) {
  const className =
    "grid grid-cols-[1fr_auto] items-baseline gap-x-4 border-b border-black last:border-b-0 py-3 rounded-none transition-colors duration-150 hover:bg-neutral-100";
  const inner = (
    <>
      <span>
        <span className="text-[15px] font-semibold">{project.name}</span>
        <span className="ml-3 hidden text-sm text-neutral-600 sm:inline">
          {project.line}
        </span>
      </span>
      <span aria-hidden="true" className="font-mono text-[13px]">
        &rarr;
      </span>
    </>
  );
  if (project.external) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={project.href} className={className}>
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
      <div className="mx-auto max-w-[780px] px-6 py-20 sm:py-28">
        <header className="pb-14">
          <h1 className="text-[22px] font-bold leading-none tracking-tight">
            Justin Torre
          </h1>
          <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed">
            Ex-Founder and engineer. I ran Helicone (YC W23), open-source LLM
            observability, from first commit to $1M+ ARR. Now I am building an
            FDE team at Mintlify as their Head of Enterprise Solutions.
          </p>
          <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed">
            Hiring a team to help us build the context layer for AI agents.{" "}
            <a
              href="https://x.com/justinstorre/status/2074950678724911474"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap underline decoration-1 underline-offset-4 transition-colors duration-150 hover:bg-neutral-100"
            >
              more info &rarr;
            </a>
          </p>
        </header>

        <div className="space-y-14">
          <Section label="Main quests">
            <div>
              {mainQuests.map((p) => (
                <ProjectRow key={p.href} project={p} />
              ))}
            </div>
          </Section>

          <Section label="Side quests">
            <div>
              {sideQuests.map((p) => (
                <ProjectRow key={p.href} project={p} />
              ))}
            </div>
          </Section>

          <Section label="News">
            <div>
              {news.map((item) => (
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
