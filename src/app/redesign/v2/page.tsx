import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Justin Torre",
  description:
    "Building the context layer for AI agents at Mintlify. Previously co-founder and CEO of Helicone (YC W23).",
};

const RED = "#E3120B";

type Row = {
  year: string;
  title: string;
  detail: string;
  href: string;
  external: boolean;
};

const work: Row[] = [
  {
    year: "2026",
    title: "Helicone joins Mintlify",
    detail: "The next chapter. Building context for AI agents.",
    href: "https://x.com/justinstorre/status/2028878183949554127",
    external: true,
  },
  {
    year: "2026",
    title: "Tracer: One Line Puzzle",
    detail: "iOS one-stroke puzzle game. 60+ levels, no ads, no tracking.",
    href: "https://apps.apple.com/us/app/tracer-one-line-puzzle/id6785311996",
    external: true,
  },
  {
    year: "2023",
    title: "Helicone re-launch",
    detail: "Open-source LLM observability, rebuilt in public.",
    href: "https://x.com/helicone_ai/status/1686840508658876419",
    external: true,
  },
  {
    year: "2023",
    title: "Y Combinator, W23",
    detail: "Launched Helicone out of the batch.",
    href: "https://www.ycombinator.com/launches/I73-helicone-open-source-observability-platform-for-generative-ai",
    external: true,
  },
  {
    year: "2023",
    title: "Scale AI Hackathon, 3rd place",
    detail: "Tom Brady vs. Gisele in an AI rap battle. Press covered it.",
    href: "https://sfstandard.com/2023/02/02/tom-brady-and-gisele-bundchen-face-off-in-ai-rap-battle/",
    external: true,
  },
];

const stats = [
  { value: "14T+", label: "tokens processed" },
  { value: "36M+", label: "end users tracked" },
  { value: "30k+", label: "signups" },
  { value: "5.2k", label: "github stars" },
  { value: "$1M+", label: "arr" },
];

const elsewhere = [
  { label: "X / Twitter", handle: "@justintorre", href: "https://twitter.com/justintorre" },
  { label: "GitHub", handle: "chitalian", href: "https://github.com/chitalian" },
  { label: "LinkedIn", handle: "in/justintorre", href: "https://www.linkedin.com/in/justintorre/" },
  { label: "YouTube", handle: "@justintorre694", href: "https://www.youtube.com/@justintorre694/featured" },
  { label: "Y Combinator", handle: "helicone", href: "https://www.ycombinator.com/companies/helicone" },
];

function SectionLabel({ n, name }: { n: string; name: string }) {
  return (
    <div className="col-span-12 md:col-span-3">
      <span className="font-mono text-xs tracking-widest text-neutral-500">
        {n}&nbsp;&nbsp;{name}
      </span>
    </div>
  );
}

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="row-arrow inline-block text-xl leading-none transition-transform duration-200"
    >
      &#8599;
    </span>
  );
}

export default function RedesignV2() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 antialiased">
      <style>{`
        .row-link:hover .row-arrow,
        .row-link:focus-visible .row-arrow {
          transform: translate(3px, -3px);
          color: ${RED};
        }
        .row-link:hover .row-title,
        .row-link:focus-visible .row-title {
          color: ${RED};
        }
        .else-link:hover .else-handle,
        .else-link:focus-visible .else-handle {
          color: ${RED};
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Masthead */}
        <header className="flex items-baseline justify-between pt-8 pb-6">
          <span className="font-mono text-xs tracking-widest text-neutral-500">
            justintorre.com
          </span>
          <nav className="flex gap-5 font-mono text-xs tracking-widest">
            <Link href="/blogs" className="text-neutral-500 transition-colors hover:text-neutral-950">
              blog
            </Link>
            <Link href="/videos" className="text-neutral-500 transition-colors hover:text-neutral-950">
              videos
            </Link>
          </nav>
        </header>

        <div className="border-t-2 border-neutral-950" />

        {/* Hero */}
        <section className="grid grid-cols-12 gap-x-6 pt-14 pb-16 md:pt-20 md:pb-24">
          <div className="col-span-12">
            <h1 className="text-[17vw] font-extrabold leading-[0.9] tracking-[-0.04em] md:text-[9.5rem]">
              Justin
              <br />
              Torre<span style={{ color: RED }}>.</span>
            </h1>
          </div>
          <div className="col-span-12 mt-10 md:col-start-7 md:col-span-6 md:mt-14">
            <p className="max-w-md text-lg leading-relaxed text-neutral-700 md:text-xl">
              Building the context layer for AI agents at{" "}
              <a
                href="https://mintlify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-950"
              >
                Mintlify
              </a>
              . Before that, co-founder and CEO of Helicone, open-source LLM
              observability out of YC W23.
            </p>
          </div>
        </section>

        {/* 01 Now */}
        <section className="border-t border-neutral-950 py-12 md:py-16">
          <div className="grid grid-cols-12 gap-x-6 gap-y-8">
            <SectionLabel n="01" name="now" />
            <div className="col-span-12 md:col-span-9">
              <p className="max-w-2xl text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                Helicone joined Mintlify in July 2026. Same problem from a new
                angle: agents are only as good as the context you hand them.
              </p>
              <div className="mt-12 grid grid-cols-2 gap-px bg-neutral-200 sm:grid-cols-3 lg:grid-cols-5">
                {stats.map((s) => (
                  <div key={s.label} className="bg-white py-5 pr-4">
                    <div className="text-3xl font-bold tracking-tight md:text-4xl">
                      {s.value}
                    </div>
                    <div className="mt-1 font-mono text-[11px] tracking-widest text-neutral-500">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-3 font-mono text-[11px] tracking-widest text-neutral-400">
                the helicone run, 2023&ndash;2026
              </p>
            </div>
          </div>
        </section>

        {/* 02 Work */}
        <section className="border-t border-neutral-950 py-12 md:py-16">
          <div className="grid grid-cols-12 gap-x-6 gap-y-8">
            <SectionLabel n="02" name="work" />
            <div className="col-span-12 md:col-span-9">
              <ul>
                {work.map((row, i) => (
                  <li
                    key={row.title}
                    className={i === 0 ? "" : "border-t border-neutral-200"}
                  >
                    <a
                      href={row.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="row-link group grid grid-cols-[3.5rem_1fr_auto] items-baseline gap-x-4 py-5 md:grid-cols-[5rem_1fr_auto] md:gap-x-6"
                    >
                      <span className="font-mono text-xs tracking-widest text-neutral-500">
                        {row.year}
                      </span>
                      <span>
                        <span className="row-title block text-lg font-semibold tracking-tight transition-colors md:text-xl">
                          {row.title}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-neutral-500">
                          {row.detail}
                        </span>
                      </span>
                      <Arrow />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 03 Writing */}
        <section className="border-t border-neutral-950 py-12 md:py-16">
          <div className="grid grid-cols-12 gap-x-6 gap-y-8">
            <SectionLabel n="03" name="writing" />
            <div className="col-span-12 md:col-span-9">
              <Link
                href="/blogs/clickhouse-rls-query-parameters"
                className="row-link group grid grid-cols-[3.5rem_1fr_auto] items-baseline gap-x-4 py-1 md:grid-cols-[5rem_1fr_auto] md:gap-x-6"
              >
                <span className="font-mono text-xs tracking-widest text-neutral-500">
                  2026
                </span>
                <span>
                  <span className="row-title block text-lg font-semibold tracking-tight transition-colors md:text-xl">
                    Allowing your users to query ClickHouse directly using raw
                    SQL
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-neutral-500">
                    Row-level security with query parameters, without a proxy
                    layer.
                  </span>
                </span>
                <Arrow />
              </Link>
              <div className="mt-8 border-t border-neutral-200 pt-5">
                <Link
                  href="/blogs"
                  className="font-mono text-xs tracking-widest text-neutral-500 transition-colors hover:text-neutral-950"
                >
                  all posts &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 04 Elsewhere */}
        <section className="border-t border-neutral-950 py-12 md:py-16">
          <div className="grid grid-cols-12 gap-x-6 gap-y-8">
            <SectionLabel n="04" name="elsewhere" />
            <div className="col-span-12 md:col-span-9">
              <ul>
                {elsewhere.map((s, i) => (
                  <li
                    key={s.label}
                    className={i === 0 ? "" : "border-t border-neutral-200"}
                  >
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="else-link flex items-baseline justify-between gap-4 py-4"
                    >
                      <span className="text-base font-semibold tracking-tight">
                        {s.label}
                      </span>
                      <span className="else-handle font-mono text-xs tracking-widest text-neutral-500 transition-colors">
                        {s.handle}
                      </span>
                    </a>
                  </li>
                ))}
                <li className="border-t border-neutral-200">
                  <Link
                    href="/videos"
                    className="else-link flex items-baseline justify-between gap-4 py-4"
                  >
                    <span className="text-base font-semibold tracking-tight">
                      Videos
                    </span>
                    <span className="else-handle font-mono text-xs tracking-widest text-neutral-500 transition-colors">
                      drone + engineering
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-2 border-neutral-950 pb-10 pt-6">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <span className="font-mono text-xs tracking-widest text-neutral-500">
              &copy; 2026 justin torre
            </span>
            <span className="font-mono text-xs tracking-widest text-neutral-500">
              set in inter <span style={{ color: RED }}>&#9632;</span> san
              francisco
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
