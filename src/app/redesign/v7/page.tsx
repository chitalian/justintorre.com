import Link from "next/link";
import type { Metadata } from "next";
import { FaXTwitter, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "The Torre Times | Justin Torre",
  description:
    "Justin Torre. Building the context layer for AI agents at Mintlify. Previously co-founder and CEO of Helicone (YC W23).",
};

const INK = "#1c1913";
const FAINT = "#5c554a";

const briefs = [
  {
    tag: "JUL 2023",
    title: "Helicone re-launches to the public",
    body: "Open-source LLM observability, rebuilt and shipped again. The second first impression sticks.",
    href: "https://x.com/helicone_ai/status/1686840508658876419",
  },
  {
    tag: "APR 2023",
    title: "Helicone accepted into Y Combinator, W23 batch",
    body: "An open-source observability platform for generative AI enters the world's most watched incubator.",
    href: "https://www.ycombinator.com/launches/I73-helicone-open-source-observability-platform-for-generative-ai",
  },
  {
    tag: "FEB 2023",
    title: "Third place at the Scale AI hackathon",
    body: "Tom Brady and Gisele face off in an AI rap battle. The judges laughed. The trophy is real.",
    href: "https://sfstandard.com/2023/02/02/tom-brady-and-gisele-bundchen-face-off-in-ai-rap-battle/",
  },
];

const classifieds = [
  { label: "FOLLOW", text: "@justintorre, opinions daily, retractions never.", href: "https://twitter.com/justintorre", icon: FaXTwitter },
  { label: "CODE", text: "github.com/chitalian, commits at odd hours.", href: "https://github.com/chitalian", icon: FaGithub },
  { label: "WORK", text: "linkedin.com/in/justintorre, suit not included.", href: "https://www.linkedin.com/in/justintorre/", icon: FaLinkedin },
  { label: "FILM", text: "youtube.com/@justintorre694, drones and engineering.", href: "https://www.youtube.com/@justintorre694/featured", icon: FaYoutube },
];

export default function TorreTimes() {
  return (
    <main
      className="min-h-screen bg-[#f7f3e9] text-[#1c1913] font-serif antialiased"
      style={{ color: INK }}
    >
      <style>{`
        .tt-cols { column-gap: 2.5rem; }
        @media (min-width: 768px) { .tt-cols { column-count: 2; column-rule: 3px double #1c191333; } }
        @media (min-width: 1100px) { .tt-cols { column-count: 3; } }
        .tt-dropcap::first-letter {
          float: left;
          font-size: 3.6em;
          line-height: 0.82;
          padding: 0.04em 0.08em 0 0;
          font-weight: 700;
        }
        .tt-headline { letter-spacing: -0.015em; text-wrap: balance; }
        .tt-rule-double { border-top: 1px solid ${INK}; border-bottom: 3px double ${INK}; height: 6px; }
        .tt-link { text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }
        .tt-link:hover { background: ${INK}; color: #f7f3e9; text-decoration: none; }
      `}</style>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 pb-16">
        {/* Top ear line */}
        <div className="flex items-baseline justify-between border-b border-[#1c1913] py-2 text-[10px] sm:text-xs uppercase tracking-[0.18em]">
          <span>Vol. III, No. 7</span>
          <span className="hidden sm:inline">All the tokens fit to print</span>
          <span>Weather: fog, clearing by demo day</span>
        </div>

        {/* Masthead */}
        <header className="py-6 sm:py-9 text-center">
          <h1 className="tt-headline text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-none">
            The Torre Times
          </h1>
          <div className="mt-4 tt-rule-double" />
          <div className="flex flex-wrap items-center justify-center gap-x-3 py-2 text-[10px] sm:text-xs uppercase tracking-[0.22em]">
            <span>San Francisco</span>
            <span aria-hidden>&middot;</span>
            <span>Est. YC W23</span>
            <span aria-hidden>&middot;</span>
            <span>Sunday, July 13, 2026</span>
            <span aria-hidden>&middot;</span>
            <span>Free forever</span>
          </div>
          <div className="tt-rule-double" />
        </header>

        {/* Index / inside strip */}
        <nav
          aria-label="Site sections"
          className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs sm:text-sm uppercase tracking-[0.14em]"
        >
          <span className="font-bold">Inside:</span>
          <Link href="/blogs" className="tt-link">The Blog, sec. B</Link>
          <Link href="/videos" className="tt-link">Drone &amp; Engineering Films, sec. C</Link>
          <a href="https://www.ycombinator.com/companies/helicone" className="tt-link">Company Records, sec. D</a>
        </nav>

        {/* Lead story */}
        <article className="border-b-2 border-[#1c1913] pb-10">
          <a
            href="https://x.com/justinstorre/status/2028878183949554127"
            className="group block text-center"
          >
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#5c554a]">
              The Acquisition Desk
            </p>
            <h2 className="tt-headline mt-3 text-4xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.95] group-hover:underline decoration-2 underline-offset-8">
              Helicone Joins Mintlify
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base sm:text-xl italic leading-snug text-[#3a352c]">
              After 14 trillion tokens and a million dollars in annual revenue,
              the open-source observability company signs on to build the
              context layer for AI agents.
            </p>
          </a>
          <p className="mt-3 text-center text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#5c554a]">
            By Justin Torre &middot; Special to the Times &middot; July 2026
          </p>

          <div className="tt-cols mt-8 text-[15px] sm:text-base leading-[1.65]">
            <p className="tt-dropcap">
              SAN FRANCISCO. Helicone, the open-source LLM observability
              platform founded in the winter of 2023, has joined Mintlify.
              Justin Torre, its co-founder and chief executive, will lead work
              on the context layer for AI agents, the infrastructure that
              decides what an agent knows before it acts.
            </p>
            <p className="mt-4">
              The numbers from the Helicone run read like a wire report from a
              faster decade. More than 14 trillion tokens processed. Over
              30,000 signups. Some 36 million end users tracked through the
              platform. 5,200 stars on GitHub, earned one developer at a time,
              and revenue that crossed $1 million a year.
            </p>
            <blockquote className="my-6 border-y-2 border-[#1c1913] py-4 text-center text-xl sm:text-2xl font-bold italic leading-tight [break-inside:avoid]">
              &ldquo;Agents are only as good as the context you hand
              them.&rdquo;
            </blockquote>
            <p>
              Helicone began as a single proxy line in front of the OpenAI
              API and grew into the ledger of record for teams shipping LLM
              products. Every request, every latency spike, every dollar of
              spend, written down and queryable. The company came out of Y
              Combinator&apos;s W23 batch and kept its code open the whole way.
            </p>
            <p className="mt-4">
              At Mintlify, the bet inverts. Observability told you what your
              model did. Context decides what it will do. Documentation, code,
              and institutional knowledge become the raw material agents draw
              on, and somebody has to build the plumbing.
            </p>
            <p className="mt-4">
              Asked for comment, Torre kept it short. The full statement runs
              on the wire, one click above this column.
            </p>
          </div>
        </article>

        {/* Secondary stories */}
        <section className="grid gap-8 border-b border-[#1c1913] py-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[#1c191355]">
          {/* Tracer */}
          <article className="md:pr-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#5c554a]">Arts &amp; Leisure</p>
            <a
              href="https://apps.apple.com/us/app/tracer-one-line-puzzle/id6785311996"
              className="group mt-2 block"
            >
              <h3 className="tt-headline text-2xl sm:text-3xl font-black leading-tight group-hover:underline underline-offset-4">
                One Line, Sixty Levels: &lsquo;Tracer&rsquo; Arrives on iOS
              </h3>
              <figure className="mt-4 border border-[#1c1913] bg-[#efe9da] p-4 transition-colors group-hover:bg-[#e9e1cd]">
                <svg
                  viewBox="0 0 200 120"
                  role="img"
                  aria-label="A one-stroke puzzle path drawn in a single line"
                  className="mx-auto h-28 w-full"
                >
                  <path
                    d="M20 100 L20 30 L70 30 L70 100 L120 100 L120 30 L180 30 L180 100 L70 100 M120 30 L70 30"
                    fill="none"
                    stroke={INK}
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="20" cy="100" r="7" fill={INK} />
                  <circle cx="180" cy="100" r="7" fill="none" stroke={INK} strokeWidth="4" />
                </svg>
                <figcaption className="mt-3 border-t border-[#1c191355] pt-2 text-[11px] italic leading-snug text-[#5c554a]">
                  Level 12, reconstructed by our graphics desk. Draw every
                  segment without lifting your finger.
                </figcaption>
              </figure>
              <p className="mt-4 text-[15px] leading-relaxed">
                A one-stroke puzzle game, released July 2026. Sixty-plus
                levels. No ads, no tracking. The rarest genre on the App
                Store: software that wants nothing from you.
              </p>
            </a>
          </article>

          {/* ClickHouse blog */}
          <article className="md:px-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#5c554a]">Technology</p>
            <Link href="/blogs/clickhouse-rls-query-parameters" className="group mt-2 block">
              <h3 className="tt-headline text-2xl sm:text-3xl font-black leading-tight group-hover:underline underline-offset-4">
                Let Users Query ClickHouse Directly, in Raw SQL
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed">
                Handing customers a SQL prompt sounds like a security
                incident waiting to file itself. With row-level security and
                query parameters, it is a feature instead. A field report
                from production, July 2026.
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] underline underline-offset-4">
                Continued in section B
              </p>
            </Link>
            <div className="mt-8 border-t-2 border-[#1c1913] pt-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#5c554a]">Notice</p>
              <p className="mt-2 text-sm italic leading-relaxed text-[#3a352c]">
                The Times also prints moving pictures. Drone and engineering
                films are archived in{" "}
                <Link href="/videos" className="tt-link not-italic">section C</Link>.
              </p>
            </div>
          </article>

          {/* News in brief */}
          <article className="md:pl-8">
            <h3 className="border-b-2 border-[#1c1913] pb-2 text-sm font-black uppercase tracking-[0.24em]">
              News in Brief
            </h3>
            <ul className="divide-y divide-[#1c191333]">
              {briefs.map((b) => (
                <li key={b.title}>
                  <a href={b.href} className="group block py-4">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[#5c554a]">{b.tag}</p>
                    <p className="mt-1 text-lg font-bold leading-snug group-hover:underline underline-offset-4">
                      {b.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#3a352c]">{b.body}</p>
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </section>

        {/* Stats ticker */}
        <section
          aria-label="Helicone by the numbers"
          className="grid grid-cols-2 gap-y-6 border-b-2 border-[#1c1913] py-8 text-center sm:grid-cols-5"
        >
          {[
            ["14T+", "tokens processed"],
            ["30k+", "signups"],
            ["36M+", "end users tracked"],
            ["5.2k", "GitHub stars"],
            ["$1M+", "annual revenue"],
          ].map(([n, label]) => (
            <div key={label}>
              <p className="tt-headline text-3xl sm:text-4xl font-black">{n}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#5c554a]">{label}</p>
            </div>
          ))}
        </section>

        {/* Classifieds footer */}
        <footer className="pt-8">
          <h3 className="text-center text-sm font-black uppercase tracking-[0.3em]">
            Classified Advertisements
          </h3>
          <p className="mt-1 text-center text-[10px] uppercase tracking-[0.2em] text-[#5c554a]">
            Ten cents a line. Replies held at this office.
          </p>
          <div className="mt-5 grid gap-px border border-[#1c1913] bg-[#1c191355] sm:grid-cols-2">
            {classifieds.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group flex items-start gap-3 bg-[#f7f3e9] p-4 font-mono text-[11px] sm:text-xs leading-relaxed transition-colors hover:bg-[#1c1913] hover:text-[#f7f3e9]"
              >
                <c.icon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <span>
                  <span className="font-bold">{c.label}:</span> {c.text}
                </span>
              </a>
            ))}
          </div>
          <div className="mt-6 flex flex-col items-center gap-1 border-t border-[#1c1913] pt-4 text-[10px] uppercase tracking-[0.2em] text-[#5c554a] sm:flex-row sm:justify-between">
            <span>&copy; 2026 Justin Torre, publisher &amp; sole reporter</span>
            <span>Printed nightly on the edge network</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
