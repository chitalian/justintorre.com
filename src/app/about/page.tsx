import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Justin Torre is an engineer and founder in San Francisco, Head of Enterprise Solutions at Mintlify, and previously co-founder and CEO of Helicone (YC W23).",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Justin Torre",
    description:
      "Justin Torre is an engineer and founder in San Francisco, Head of Enterprise Solutions at Mintlify, and previously co-founder and CEO of Helicone (YC W23).",
    url: "https://justintorre.com/about",
    type: "profile",
  },
};

type CareerRow = {
  dates: string;
  name: string;
  role: string;
  detail?: string;
  href?: string;
  external?: boolean;
};

const career: CareerRow[] = [
  {
    dates: "2026–",
    name: "Mintlify",
    role: "Head of Enterprise Solutions",
    detail: "Joined when Mintlify acquired Helicone in March 2026.",
    href: "https://mintlify.com",
    external: true,
  },
  {
    dates: "2023–2026",
    name: "Helicone",
    role: "Co-founder and CEO",
    detail:
      "YC W23. Open-source LLM observability, built with my co-founder Cole Gottdank. We processed 14T+ tokens, passed $1M ARR, and were acquired by Mintlify.",
    href: "/projects/helicone",
  },
  {
    dates: "2021–2022",
    name: "Sisu",
    role: "Product engineer",
    detail: "Wrote Rust for scalable data and AI products.",
  },
  {
    dates: "2022",
    name: "rwtp.org",
    role: "Software contractor",
    detail: "YC S22, part-time. EVM, Solidity, and TypeScript.",
  },
  {
    dates: "2020–2021",
    name: "Apple",
    role: "Software engineer",
    detail: "CoreOS, in Cupertino.",
  },
  {
    dates: "2019",
    name: "Intel",
    role: "Software engineering co-op",
  },
  {
    dates: "2018",
    name: "Lutron Electronics",
    role: "Embedded engineering co-op",
  },
  {
    dates: "2017",
    name: "North Atlantic Industries",
    role: "Software engineering internship",
  },
];

const lessons: string[] = [
  "A 5-person team can do an absurd amount if everyone is locked in. Headcount is not a moat.",
  "If you have data at scale and need analytics, just pick ClickHouse. Don't overthink it.",
  "The grind is real and it's fun, but try not to be stressed when you aren't grinding. That one took me too long to learn.",
  "It's never too late to pivot and try new things.",
  "Charge more for your product.",
];

type ProjectRow = {
  name: string;
  detail: string;
  href: string;
  external?: boolean;
};

const projects: ProjectRow[] = [
  {
    name: "Tracer: One Line Puzzle",
    detail: "An iOS game.",
    href: "/projects/tracer",
  },
  {
    name: "aitrolleyproblem.com",
    detail: "Which model provider would you trust to govern humanity?",
    href: "https://www.aitrolleyproblem.com",
    external: true,
  },
  {
    name: "offensive-ai-speak",
    detail: "A Claude skill that stops AI from writing slop.",
    href: "https://github.com/chitalian/offensive-ai-speak",
    external: true,
  },
  {
    name: "This website",
    detail: "All 17 versions of it.",
    href: "/projects/website-redesigns",
  },
  {
    name: "Drone videos",
    detail: "Shot around wherever I happen to be.",
    href: "/videos",
  },
];

const elsewhere = [
  { name: "X", href: "https://twitter.com/justintorre" },
  { name: "GitHub", href: "https://github.com/chitalian" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/justintorre/" },
  { name: "YouTube", href: "https://www.youtube.com/@justintorre694/featured" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="border-t border-black pt-4 font-mono text-[11px] uppercase tracking-[0.25em]">
      {children}
    </h2>
  );
}

function CareerRowContent({ row }: { row: CareerRow }) {
  return (
    <>
      <span className="font-mono text-[13px] tabular-nums text-neutral-500">
        {row.dates}
      </span>
      <span className="text-[15px] leading-relaxed text-neutral-800">
        <span className="font-medium text-black">{row.name}</span>
        {", "}
        {row.role}
        {row.detail ? (
          <span className="block text-[13px] leading-relaxed text-neutral-500">
            {row.detail}
          </span>
        ) : null}
      </span>
    </>
  );
}

export default function AboutPage() {
  const rowClass =
    "grid grid-cols-[10ch_1fr] items-baseline gap-x-4 border-b border-black py-3";
  const linkRowClass = `${rowClass} transition-colors duration-150 hover:bg-neutral-100`;
  const inlineLink = "underline decoration-1 underline-offset-4 hover:no-underline";

  return (
    <main className="mx-auto max-w-[680px] px-6 py-20 text-black sm:py-28">
      <Link
        href="/"
        className="font-mono text-sm text-neutral-500 transition-colors hover:text-black"
      >
        ~/justin-torre
      </Link>

      <h1 className="mt-10 text-[22px] font-bold tracking-tight">About</h1>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/justin.png"
        alt="Justin Torre at a picnic in a San Francisco park"
        width={204}
        height={192}
        className="mt-6 w-40 border border-black"
      />

      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-neutral-800">
        <p>
          I&apos;m Justin Torre, an engineer and founder living in San
          Francisco. Today I&apos;m Head of Enterprise Solutions at Mintlify,
          where we&apos;re building the context layer for AI agents. My job is
          to stand up a new team and take our enterprise product from zero to
          one.
        </p>
        <p>
          I got here by way of Helicone, the open-source LLM observability
          company I started with Cole Gottdank in 2023. We went through Y
          Combinator in the W23 batch, processed more than 14 trillion tokens,
          grew past $1M in annual recurring revenue, and were acquired by
          Mintlify in March 2026. Before that I wrote Rust at Sisu, worked on
          CoreOS at Apple, and spent my college years rotating through co-ops
          in embedded systems and low-level software. I like working close to
          the machine and close to the customer, and the two have more in
          common than people expect.
        </p>
      </div>

      <div className="mt-14 space-y-14">
        <section>
          <SectionLabel>Career</SectionLabel>
          <div className="mt-4">
            {career.map((row) =>
              row.href ? (
                row.external ? (
                  <a
                    key={row.dates + row.name}
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkRowClass}
                  >
                    <CareerRowContent row={row} />
                  </a>
                ) : (
                  <Link
                    key={row.dates + row.name}
                    href={row.href}
                    className={linkRowClass}
                  >
                    <CareerRowContent row={row} />
                  </Link>
                )
              ) : (
                <div key={row.dates + row.name} className={rowClass}>
                  <CareerRowContent row={row} />
                </div>
              )
            )}
          </div>
        </section>

        <section>
          <SectionLabel>Education</SectionLabel>
          <div className="mt-4 border-b border-black py-3">
            <p className="text-[15px] leading-relaxed text-neutral-800">
              <span className="font-medium text-black">
                Northeastern University
              </span>
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-neutral-800">
              While I was there, I was a student developer at Sandbox,
              Northeastern&apos;s student-led software consultancy, and I
              tutored at the First Year Engineering Center. The internships and
              co-ops above at Intel, Lutron Electronics, and North Atlantic
              Industries all came through Northeastern&apos;s co-op program,
              which is most of the reason I picked the school. Alternating
              semesters of classes with semesters of full-time engineering work
              taught me more about shipping software than any course did.
            </p>
          </div>
        </section>

        <section>
          <SectionLabel>Lessons</SectionLabel>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-800">
            Things I learned building Helicone, from the note I wrote when we
            were acquired.
          </p>
          <ul className="mt-2">
            {lessons.map((lesson) => (
              <li
                key={lesson}
                className="border-b border-black py-3 text-[15px] leading-relaxed text-neutral-800"
              >
                {lesson}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionLabel>Side Projects</SectionLabel>
          <div className="mt-4">
            {projects.map((project) => {
              const content = (
                <>
                  <span className="text-[15px] leading-relaxed text-neutral-800">
                    <span className="font-medium text-black">
                      {project.name}
                    </span>
                    <span className="block text-[13px] leading-relaxed text-neutral-500">
                      {project.detail}
                    </span>
                  </span>
                </>
              );
              return project.external ? (
                <a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-b border-black py-3 transition-colors duration-150 hover:bg-neutral-100"
                >
                  {content}
                </a>
              ) : (
                <Link
                  key={project.name}
                  href={project.href}
                  className="block border-b border-black py-3 transition-colors duration-150 hover:bg-neutral-100"
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </section>

        <section>
          <SectionLabel>Elsewhere</SectionLabel>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-800">
            {elsewhere.map((item, i) => (
              <span key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={inlineLink}
                >
                  {item.name}
                </a>
                {i < elsewhere.length - 1 ? " / " : ""}
              </span>
            ))}
          </p>
        </section>
      </div>
    </main>
  );
}
