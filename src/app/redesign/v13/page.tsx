"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/* Pixel icon maps. '#' = black, 'w' = white, '.' = transparent.       */
/* ------------------------------------------------------------------ */

const MAP_MAC = [
  "................",
  "..##########....",
  "..#wwwwwwww#....",
  "..#w######w#....",
  "..#w#wwww#w#....",
  "..#w#wwww#w#....",
  "..#w######w#....",
  "..#wwwwwwww#....",
  "..#www####w#....",
  "..#wwwwwwww#....",
  "..##########....",
  "..#wwwwwwww#....",
  "..##########....",
  "................",
];

const MAP_MERGE = [
  "................",
  ".##########.....",
  ".#wwwwwwww#.....",
  ".##########.....",
  ".#wwwwwwww#.....",
  ".#www##########.",
  ".#www#wwwwwwww#.",
  ".#www##########.",
  ".#www#wwwwwwww#.",
  ".#####wwwwwwww#.",
  ".....#wwwwwwww#.",
  ".....#wwwwwwww#.",
  ".....#wwwwwwww#.",
  ".....##########.",
  "................",
];

const MAP_TRACER = [
  "################",
  "#wwwwwwwwwwwwww#",
  "#w##wwwwwwwwwww#",
  "#w##wwwwwwwwwww#",
  "#ww#wwwwwwwwwww#",
  "#ww########wwww#",
  "#wwwwwwwww#wwww#",
  "#wwwwwwwww#wwww#",
  "#www########www#",
  "#www#wwwwwwwwww#",
  "#www#wwwwwwwwww#",
  "#www##########w#",
  "#wwwwwwwwwww##w#",
  "#wwwwwwwwwww##w#",
  "#wwwwwwwwwwwwww#",
  "################",
];

const MAP_DOC = [
  "...#########....",
  "...#wwwwwww##...",
  "...#wwwwwww#w#..",
  "...#wwwwwww####.",
  "...#wwwwwwwwww#.",
  "...#w########w#.",
  "...#wwwwwwwwww#.",
  "...#w########w#.",
  "...#wwwwwwwwww#.",
  "...#w########w#.",
  "...#wwwwwwwwww#.",
  "...#w#####wwww#.",
  "...#wwwwwwwwww#.",
  "...############.",
  "................",
];

const MAP_ROCKET = [
  ".......##.......",
  "......####......",
  "......#ww#......",
  ".....##ww##.....",
  ".....#wwww#.....",
  ".....#w##w#.....",
  ".....#w##w#.....",
  ".....#wwww#.....",
  "....##wwww##....",
  "...#.#wwww#.#...",
  "..##.######.##..",
  "..#...#..#...#..",
  "......#..#......",
  ".......##.......",
  "................",
];

const MAP_YC = [
  "################",
  "################",
  "##ww########ww##",
  "###ww######ww###",
  "####ww####ww####",
  "#####ww##ww#####",
  "######wwww######",
  "#######ww#######",
  "#######ww#######",
  "#######ww#######",
  "#######ww#######",
  "#######ww#######",
  "#######ww#######",
  "################",
  "################",
  "################",
];

const MAP_TROPHY = [
  "................",
  ".##############.",
  ".#wwwwwwwwwwww#.",
  "##wwwwwwwwwwww##",
  "#.#wwwwwwwwww#.#",
  "#.#wwwwwwwwww#.#",
  "##.#wwwwwwww#.##",
  "....#wwwwww#....",
  ".....#wwww#.....",
  "......####......",
  ".......##.......",
  ".......##.......",
  ".....######.....",
  "....#wwwwww#....",
  "....########....",
  "................",
];

const MAP_TV = [
  "................",
  "....#.....#.....",
  ".....#...#......",
  "......#.#.......",
  ".##############.",
  ".#wwwwwwwwwwww#.",
  ".#w##########w#.",
  ".#w#wwwwwwww#w#.",
  ".#w#wwwwwwww#w#.",
  ".#w#wwwwwwww#w#.",
  ".#w##########w#.",
  ".#wwwwwwwwwwww#.",
  ".##############.",
  ".....#....#.....",
  "....########....",
  "................",
];

const MAP_CAT = [
  "................",
  "..#........#....",
  "..##......##....",
  "..#w#....#w#....",
  "..#w######w#....",
  "..#wwwwwwww#....",
  ".#wwwwwwwwww#...",
  ".#w##wwww##w#...",
  ".#wwwwwwwwww#...",
  ".#www#ww#www#...",
  ".#wwww##wwww#...",
  "..#wwwwwwww#....",
  "..#w#w##w#w#....",
  "...########.....",
  "................",
];

const MAP_X = [
  "################",
  "#wwwwwwwwwwwwww#",
  "#w##wwwwwwww##w#",
  "#w###wwwwww###w#",
  "#ww###wwww###ww#",
  "#www###ww###www#",
  "#wwww######wwww#",
  "#wwwww####wwwww#",
  "#wwwww####wwwww#",
  "#wwww######wwww#",
  "#www###ww###www#",
  "#ww###wwww###ww#",
  "#w###wwwwww###w#",
  "#w##wwwwwwww##w#",
  "#wwwwwwwwwwwwww#",
  "################",
];

const MAP_TRASH = [
  "................",
  "......####......",
  ".....##ww##.....",
  "..############..",
  "..#wwwwwwwwww#..",
  "..############..",
  "...#w#w##w#w#...",
  "...#w#w##w#w#...",
  "...#w#w##w#w#...",
  "...#w#w##w#w#...",
  "...#w#w##w#w#...",
  "...#w#w##w#w#...",
  "...#w#w##w#w#...",
  "...##########...",
  "................",
  "................",
];

const MAP_APPLE = [
  ".....#....",
  "....##....",
  "..######..",
  ".########.",
  "##########",
  "##########",
  "##########",
  ".########.",
  "..######..",
  "..##..##..",
];

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

function PixelIcon({ map, size = 32 }: { map: string[]; size?: number }) {
  const cols = map[0].length;
  const rows = map.length;
  return (
    <svg
      width={size}
      height={Math.round((size * rows) / cols)}
      viewBox={`0 0 ${cols} ${rows}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {map.flatMap((row, y) =>
        row.split("").map((c, x) => {
          if (c === "#")
            return <rect key={`${x}.${y}`} x={x} y={y} width={1} height={1} fill="#000" />;
          if (c === "w")
            return <rect key={`${x}.${y}`} x={x} y={y} width={1} height={1} fill="#fff" />;
          return null;
        })
      )}
    </svg>
  );
}

function S7Window({
  title,
  className = "",
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`s7-win ${className}`}>
      <div className="s7-titlebar">
        <span className="s7-stripes" aria-hidden="true" />
        <span className="s7-closebox" aria-hidden="true" />
        <span className="s7-title">{title}</span>
      </div>
      {children}
    </section>
  );
}

function MemoryRow({ name, value, pct }: { name: string; value: string; pct: number }) {
  return (
    <div className="s7-memrow">
      <span className="s7-memname">{name}</span>
      <span className="s7-memval">{value}</span>
      <span className="s7-membar">
        <span className="s7-memfill" style={{ width: `${pct}%` }} />
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const PROJECTS: {
  name: string;
  date: string;
  href: string;
  map: string[];
  internal?: boolean;
}[] = [
  {
    name: "Helicone joins Mintlify",
    date: "Jul 2026",
    href: "https://x.com/justinstorre/status/2028878183949554127",
    map: MAP_MERGE,
  },
  {
    name: "Tracer: One Line Puzzle",
    date: "Jul 2026",
    href: "https://apps.apple.com/us/app/tracer-one-line-puzzle/id6785311996",
    map: MAP_TRACER,
  },
  {
    name: "ClickHouse raw SQL",
    date: "Jul 2026",
    href: "/blogs/clickhouse-rls-query-parameters",
    map: MAP_DOC,
    internal: true,
  },
  {
    name: "Helicone Re-launch",
    date: "Jul 2023",
    href: "https://x.com/helicone_ai/status/1686840508658876419",
    map: MAP_ROCKET,
  },
  {
    name: "YC W23",
    date: "Apr 2023",
    href: "https://www.ycombinator.com/launches/I73-helicone-open-source-observability-platform-for-generative-ai",
    map: MAP_YC,
  },
  {
    name: "Scale AI Hackathon, 3rd",
    date: "Feb 2023",
    href: "https://sfstandard.com/2023/02/02/tom-brady-and-gisele-bundchen-face-off-in-ai-rap-battle/",
    map: MAP_TROPHY,
  },
];

const DESK_ICONS: { name: string; href: string; map: string[]; internal?: boolean }[] = [
  { name: "Blog", href: "/blogs", map: MAP_DOC, internal: true },
  { name: "Videos", href: "/videos", map: MAP_TV, internal: true },
  { name: "GitHub", href: "https://github.com/chitalian", map: MAP_CAT },
  { name: "X", href: "https://twitter.com/justintorre", map: MAP_X },
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function RedesignV13() {
  const [clock, setClock] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      let h = d.getHours();
      const ampm = h >= 12 ? "PM" : "AM";
      h = h % 12 || 12;
      const m = String(d.getMinutes()).padStart(2, "0");
      setClock(`${DAYS[d.getDay()]} ${h}:${m} ${ampm}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const trashIcon = (extra: string) => (
    <Link
      href="/blogs"
      title="nothing is ever really deleted"
      className={`s7-dicon ${extra}`}
    >
      <span className="s7-ic">
        <PixelIcon map={MAP_TRASH} size={34} />
      </span>
      <span className="s7-lbl">Trash</span>
    </Link>
  );

  return (
    <div className="s7-root s7-desktop">
      <style>{`
        .s7-root {
          font-family: "Chicago", "Charcoal", "Geneva", "Helvetica Neue", Helvetica, Arial, sans-serif;
          letter-spacing: -0.01em;
          color: #000;
          min-height: 100vh;
        }
        .s7-desktop {
          background-color: #c2c2c2;
          background-image:
            linear-gradient(45deg, #a3a3a3 25%, transparent 25%, transparent 75%, #a3a3a3 75%),
            linear-gradient(45deg, #a3a3a3 25%, transparent 25%, transparent 75%, #a3a3a3 75%);
          background-size: 4px 4px;
          background-position: 0 0, 2px 2px;
        }
        .s7-root ::selection { background: #000; color: #fff; }
        .s7-root a { color: #000; }

        /* ---- menu bar ---- */
        .s7-menubar {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center;
          height: 26px; padding: 0 10px;
          background: #fff; border-bottom: 1px solid #000;
          font-size: 13px; font-weight: 700;
        }
        .s7-menubar .s7-menuitem {
          padding: 3px 10px; cursor: default; user-select: none;
        }
        .s7-menubar .s7-menuitem:hover { background: #000; color: #fff; }
        .s7-menubar .s7-menuitem:hover svg rect { fill: #fff; }
        .s7-clock {
          margin-left: auto; padding: 3px 4px;
          font-weight: 700; font-variant-numeric: tabular-nums;
          min-width: 92px; text-align: right; white-space: nowrap;
        }

        /* ---- windows ---- */
        .s7-win {
          background: #fff;
          border: 1px solid #000;
          box-shadow: 2px 2px 0 #000;
        }
        .s7-titlebar {
          position: relative; height: 20px;
          background: #fff; border-bottom: 1px solid #000;
          display: flex; align-items: center; justify-content: center;
        }
        .s7-stripes {
          position: absolute; left: 3px; right: 3px; top: 3px; bottom: 3px;
          background: repeating-linear-gradient(180deg, #000 0, #000 1px, #fff 1px, #fff 3px);
        }
        .s7-closebox {
          position: absolute; left: 9px; top: 4px;
          width: 11px; height: 11px;
          background: #fff; border: 1px solid #000;
          box-shadow: 0 0 0 2px #fff;
        }
        .s7-closebox:active { background: #000; }
        .s7-title {
          position: relative; z-index: 1;
          background: #fff; padding: 0 8px;
          font-size: 12px; font-weight: 700; line-height: 19px;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
          max-width: 70%;
        }

        /* ---- About window ---- */
        .s7-about-head { display: flex; align-items: center; gap: 12px; padding: 14px 14px 10px; }
        .s7-about-head h1 { font-size: 16px; font-weight: 700; margin: 0; }
        .s7-about-head p { font-size: 11px; margin: 2px 0 0; }
        .s7-rule { border: 0; border-top: 1px solid #000; margin: 0 10px; }
        .s7-sysline {
          display: flex; justify-content: space-between; gap: 12px;
          font-size: 11px; padding: 3px 14px;
        }
        .s7-sysline b { font-weight: 700; }
        .s7-bio { font-size: 12px; line-height: 1.5; padding: 8px 14px 4px; margin: 0; }
        .s7-memtable { padding: 8px 14px 14px; display: grid; gap: 5px; }
        .s7-memrow {
          display: grid; grid-template-columns: 92px 78px 1fr;
          align-items: center; gap: 8px; font-size: 11px;
        }
        .s7-memname { font-weight: 700; white-space: nowrap; }
        .s7-memval { text-align: right; font-variant-numeric: tabular-nums; white-space: nowrap; }
        .s7-membar { display: block; height: 11px; border: 1px solid #000; background: #fff; }
        .s7-memfill {
          display: block; height: 100%;
          background-image: repeating-linear-gradient(90deg, #000 0, #000 3px, #555 3px, #555 4px);
          background-color: #000;
        }

        /* ---- Finder / Projects window ---- */
        .s7-finder { display: flex; align-items: stretch; }
        .s7-finder-main { flex: 1 1 auto; min-width: 0; }
        .s7-finder-status {
          display: flex; justify-content: space-between; gap: 8px;
          font-size: 10px; padding: 3px 10px;
          border-bottom: 1px solid #000;
        }
        .s7-projgrid {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 6px 4px; padding: 12px 8px 14px;
        }
        @media (min-width: 480px) { .s7-projgrid { grid-template-columns: repeat(3, 1fr); } }
        .s7-proj {
          display: flex; flex-direction: column; align-items: center;
          gap: 5px; padding: 8px 4px 6px; text-decoration: none; text-align: center;
        }
        .s7-ic {
          display: inline-flex; padding: 4px; background: transparent;
          border: 1px solid transparent; outline: 1px solid transparent; outline-offset: 2px;
        }
        .s7-proj:hover .s7-ic, .s7-proj:focus-visible .s7-ic {
          border-color: #000; outline-color: #000;
        }
        .s7-proj .s7-nm { font-size: 11px; font-weight: 700; padding: 0 3px; }
        .s7-proj .s7-dt { font-size: 10px; }
        .s7-proj:hover .s7-nm, .s7-proj:focus-visible .s7-nm { background: #000; color: #fff; }
        .s7-scrollbar {
          flex: 0 0 15px; border-left: 1px solid #000;
          display: flex; flex-direction: column;
        }
        .s7-scrollbtn {
          height: 15px; border-bottom: 1px solid #000;
          display: flex; align-items: center; justify-content: center; background: #fff;
        }
        .s7-scrollbtn.bottom { border-top: 1px solid #000; border-bottom: 0; }
        .s7-scrolltrack {
          flex: 1 1 auto;
          background-image:
            linear-gradient(45deg, #bbb 25%, transparent 25%, transparent 75%, #bbb 75%),
            linear-gradient(45deg, #bbb 25%, transparent 25%, transparent 75%, #bbb 75%);
          background-size: 4px 4px; background-position: 0 0, 2px 2px;
          background-color: #eee; position: relative;
        }
        .s7-scrollthumb {
          position: absolute; top: 4px; left: 1px; right: 1px; height: 22px;
          background: #fff; border: 1px solid #000;
        }
        .s7-growbox {
          height: 15px; border-top: 1px solid #000; background: #fff; position: relative;
        }
        .s7-growbox::before {
          content: ""; position: absolute; top: 3px; left: 3px;
          width: 7px; height: 7px; border: 1px solid #000; background: #fff;
        }
        .s7-growbox::after {
          content: ""; position: absolute; top: 5px; left: 5px;
          width: 7px; height: 7px; border: 1px solid #000; background: #fff;
        }

        /* ---- Note Pad ---- */
        .s7-note { position: relative; padding: 12px 14px 30px; font-size: 12px; line-height: 1.55; }
        .s7-note p { margin: 0 0 10px; }
        .s7-note b { font-weight: 700; }
        .s7-note a { text-decoration: underline; text-underline-offset: 2px; }
        .s7-note a:hover { background: #000; color: #fff; }
        .s7-pageno { position: absolute; right: 12px; bottom: 8px; font-size: 10px; }

        /* ---- desktop icons ---- */
        .s7-dicon {
          display: flex; flex-direction: column; align-items: center; gap: 3px;
          text-decoration: none; width: 76px;
        }
        .s7-dicon .s7-lbl {
          font-size: 11px; font-weight: 700; background: #fff;
          padding: 0 4px 1px; border: 1px solid transparent; text-align: center;
        }
        .s7-dicon:hover .s7-ic, .s7-dicon:focus-visible .s7-ic {
          border-color: #000; outline-color: #000; background: #fff;
        }
        .s7-dicon:hover .s7-lbl, .s7-dicon:focus-visible .s7-lbl {
          background: #000; color: #fff;
        }

        .s7-root :focus-visible { outline: 1px dotted #000; outline-offset: 2px; }

        /* ---- layout ---- */
        .s7-stage {
          position: relative;
          display: flex; flex-direction: column; gap: 22px;
          padding: 18px 14px 40px;
          max-width: 560px; margin: 0 auto;
        }
        .s7-deskrow {
          display: flex; flex-wrap: wrap; gap: 14px 6px; justify-content: center;
        }
        .s7-trash-desktop { display: none; }

        @media (min-width: 1280px) {
          .s7-stage {
            max-width: none; margin: 0; padding: 0;
            height: calc(100vh - 26px); min-height: 800px; display: block;
          }
          .s7-win-about { position: absolute; left: 42px; top: 46px; width: 470px; z-index: 10; }
          .s7-win-note { position: absolute; right: 130px; top: 64px; width: 310px; z-index: 10; }
          .s7-win-proj { position: absolute; left: 330px; top: 372px; width: 640px; z-index: 20; }
          .s7-deskrow {
            position: absolute; right: 22px; top: 44px;
            display: flex; flex-direction: column; gap: 22px;
          }
          .s7-trash-desktop {
            display: flex; position: absolute; right: 26px; bottom: 34px;
          }
          .s7-trash-inline { display: none; }
        }
      `}</style>

      {/* Menu bar */}
      <header className="s7-menubar">
        <span className="s7-menuitem" aria-hidden="true">
          <PixelIcon map={MAP_APPLE} size={13} />
        </span>
        <span className="s7-menuitem">File</span>
        <span className="s7-menuitem">Edit</span>
        <span className="s7-menuitem hidden sm:inline-block">View</span>
        <span className="s7-menuitem hidden sm:inline-block">Special</span>
        <time className="s7-clock" suppressHydrationWarning>
          {clock}
        </time>
      </header>

      <main className="s7-stage">
        {/* About This Builder */}
        <S7Window title="About This Builder" className="s7-win-about">
          <div className="s7-about-head">
            <PixelIcon map={MAP_MAC} size={44} />
            <div>
              <h1>Justin Torre</h1>
              <p>System Software J.T. 2026</p>
            </div>
          </div>
          <hr className="s7-rule" />
          <div className="s7-sysline" style={{ paddingTop: 8 }}>
            <span>
              <b>Built-in Memory:</b> 14T+ tokens
            </span>
          </div>
          <div className="s7-sysline">
            <span>
              <b>Largest Unused Block:</b> weekends
            </span>
          </div>
          <p className="s7-bio">
            Building the context layer for AI agents at Mintlify. Before that,
            co-founder and CEO of Helicone (YC W23), open source LLM
            observability, until Helicone joined Mintlify in July 2026.
          </p>
          <div className="s7-memtable">
            <MemoryRow name="Helicone" value="14T+ tokens" pct={94} />
            <MemoryRow name="End users" value="36M+" pct={62} />
            <MemoryRow name="Signups" value="30k+" pct={41} />
            <MemoryRow name="GitHub stars" value="5.2k" pct={27} />
            <MemoryRow name="ARR" value="$1M+" pct={48} />
          </div>
        </S7Window>

        {/* Note Pad */}
        <S7Window title="Note Pad" className="s7-win-note">
          <div className="s7-note">
            <p>
              <b>Now.</b> At Mintlify, building the context layer for AI
              agents. Helicone joined Mintlify in July 2026.
            </p>
            <p>
              <b>Before.</b> Co-founder and CEO of Helicone. Open source LLM
              observability, 14 trillion tokens and counting.
            </p>
            <p>
              <b>Elsewhere.</b>{" "}
              <a
                href="https://www.linkedin.com/in/justintorre/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              {" and "}
              <a
                href="https://www.youtube.com/@justintorre694/featured"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
              .
            </p>
            <span className="s7-pageno">1</span>
            {/* torn corner */}
            <svg
              width="24"
              height="24"
              style={{ position: "absolute", left: -1, bottom: -1 }}
              aria-hidden="true"
            >
              <defs>
                <pattern id="s7dither" width="4" height="4" patternUnits="userSpaceOnUse">
                  <rect width="4" height="4" fill="#c2c2c2" />
                  <rect width="2" height="2" fill="#a3a3a3" />
                  <rect x="2" y="2" width="2" height="2" fill="#a3a3a3" />
                </pattern>
              </defs>
              <path d="M0 0 L24 24 L0 24 Z" fill="url(#s7dither)" />
              <path d="M0.5 0.5 L23.5 23.5 L23.5 0.5 Z" fill="#fff" stroke="#000" />
            </svg>
          </div>
        </S7Window>

        {/* Projects */}
        <S7Window title="Projects" className="s7-win-proj">
          <div className="s7-finder">
            <div className="s7-finder-main">
              <div className="s7-finder-status">
                <span>6 items</span>
                <span>14.2T in disk</span>
                <span>0K available</span>
              </div>
              <div className="s7-projgrid">
                {PROJECTS.map((p) =>
                  p.internal ? (
                    <Link key={p.name} href={p.href} className="s7-proj">
                      <span className="s7-ic">
                        <PixelIcon map={p.map} size={34} />
                      </span>
                      <span className="s7-nm">{p.name}</span>
                      <span className="s7-dt">{p.date}</span>
                    </Link>
                  ) : (
                    <a
                      key={p.name}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="s7-proj"
                    >
                      <span className="s7-ic">
                        <PixelIcon map={p.map} size={34} />
                      </span>
                      <span className="s7-nm">{p.name}</span>
                      <span className="s7-dt">{p.date}</span>
                    </a>
                  )
                )}
              </div>
            </div>
            <div className="s7-scrollbar" aria-hidden="true">
              <span className="s7-scrollbtn">
                <svg width="7" height="5" viewBox="0 0 7 5">
                  <path d="M3.5 0 L7 5 L0 5 Z" fill="#000" />
                </svg>
              </span>
              <span className="s7-scrolltrack">
                <span className="s7-scrollthumb" />
              </span>
              <span className="s7-scrollbtn bottom">
                <svg width="7" height="5" viewBox="0 0 7 5">
                  <path d="M3.5 5 L0 0 L7 0 Z" fill="#000" />
                </svg>
              </span>
              <span className="s7-growbox" />
            </div>
          </div>
        </S7Window>

        {/* Desktop icons */}
        <nav className="s7-deskrow" aria-label="Pages and profiles">
          {DESK_ICONS.map((d) =>
            d.internal ? (
              <Link key={d.name} href={d.href} className="s7-dicon">
                <span className="s7-ic">
                  <PixelIcon map={d.map} size={34} />
                </span>
                <span className="s7-lbl">{d.name}</span>
              </Link>
            ) : (
              <a
                key={d.name}
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="s7-dicon"
              >
                <span className="s7-ic">
                  <PixelIcon map={d.map} size={34} />
                </span>
                <span className="s7-lbl">{d.name}</span>
              </a>
            )
          )}
          {trashIcon("s7-trash-inline")}
        </nav>

        {trashIcon("s7-trash-desktop")}
      </main>
    </div>
  );
}
