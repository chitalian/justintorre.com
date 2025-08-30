"use client";

import StarBackground from "../components/starField/star";
import Image from "next/image";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaGitlab } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaYCombinator } from "react-icons/lia";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import TerminalInput from "@/components/terminalCursor";
import { Terminal } from "@/components/terminal";

const contacts: {
  url: string;
  name: string;
  icon: React.FC<{
    className: string;
  }>;
}[] = [
  {
    url: "https://twitter.com/justintorre",
    name: "Twitter",
    icon: FaXTwitter,
  },
  {
    url: "https://github.com/chitalian",
    name: "Github",
    icon: AiOutlineGithub,
  },
  {
    url: "https://gitlab.com/justintorre75",
    name: "Gitlab",
    icon: FaGitlab,
  },
  {
    url: "https://www.linkedin.com/in/justintorre/",
    name: "Linkedin",
    icon: AiOutlineLinkedin,
  },
  {
    url: "https://www.youtube.com/@justintorre694/featured",
    name: "Youtube",
    icon: AiOutlineYoutube,
  },
  {
    url: "https://www.ycombinator.com/companies/helicone",
    name: "YCombinator",
    icon: LiaYCombinator,
  },
];

const recentProjects: {
  title: string;
  description: string;
  url: string;
  date: Date;
}[] = [
  {
    title: "Helicone Re-launch",
    description: "A platform for monitoring AI models.",
    url: "https://x.com/helicone_ai/status/1686840508658876419?s=20",
    date: new Date("2023-07-01"),
  },
  {
    title: "YC W23 Batch",
    description: "I recently finished YCombinator's W23 batch.",
    url: "https://www.ycombinator.com/launches/I73-helicone-open-source-observability-platform-for-generative-ai",
    date: new Date("2023-04-01"),
  },
  {
    title: "Scale AI Hackathon",
    description: "Won 3rd place in Scale AI's Hackathon.",
    url: "https://sfstandard.com/2023/02/02/tom-brady-and-gisele-bundchen-face-off-in-ai-rap-battle/",
    date: new Date("2023-02-02"),
  },
];

export default function Home() {
  const image =
    "https://www.helicone.ai/_next/image?url=%2Fassets%2Flanding%2Fhelicone-mobile.webp&w=384&q=75";

  return (
    <>
      <StarBackground />

      <main className="z-30 flex min-h-screen flex-col items-center justify-between py-28 lg:p-28 w-full gap-8">
        <p className="z-50 font-mono text-lg fixed left-0 top-0 flex w-full justify-center bg-gradient-to-b backdrop-blur-2xl p-8">
          Justin Torre
        </p>
        <p className="z-50 font-mono text-lg fixed left-0 bottom-0 w-full  p-5 flex justify-center gap-1 lg:gap-5 backdrop-blur-2xl">
          {contacts.map((contact) => (
            <Link
              href={contact.url}
              key={contact.name}
              className="flex items-center hover:border-neutral-700 hover:bg-neutral-800/30 p-2 lg:p-5 rounded-lg border border-transparent  transition-transform hover:scale-105 motion-reduce:transform-none"
            >
              <contact.icon className="mr-2 h-6 w-6" />
              <span className="hidden lg:block">{contact.name}</span>
            </Link>
          ))}
        </p>
        <div className="h-[500px] w-full max-w-4xl">
          <Terminal />
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
          {recentProjects.map((project) => (
            <Link
              href={project.url}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                {project.title}{" "}
              </h2>
              <h3
                className={`m-0 max-w-[30ch] text-sm opacity-50 mb-2 text-gray-500`}
              >
                {project.date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
