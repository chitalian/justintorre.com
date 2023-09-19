"use client";

import Head from "next/head";
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

function Terminal() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null); // Step 1: Create a ref

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input when the div is clicked
    }
  };

  return (
    <div
      className="min-w-[70vw] min-h-[600px] h-max flex-1  rounded-lg flex flex-col relative"
      onClick={handleDivClick} // Step 2: Add an onClick event handler to the parent div
    >
      <div
        className={`fadeOutAnimation absolute text-xl w-full h-full flex justify-center items-center`}
      >
        <div className="border-2 p-10 rounded-lg bg-black">
          Hello! Welcome to my personal website 🚀
        </div>
      </div>
      <div className="flex-1 flex flex-row justify-between fadeInAnimation w-full h-full items-stretch font-mono rounded-lg border-gray-400 border-2 text-xs bg-cyan-800">
        <div className="flex flex-col border-r-2 text-center h-auto border-gray-400">
          <div className="border-b text-left py-1 px-6">/terminal</div>
          <div className="border-b text-left py-1 px-6">/images</div>
          <div className="border-b text-left py-1 px-6">/videos</div>
          <div className="border-b text-left py-1 px-6">
            /blog {"(coming soon)"}
          </div>
        </div>
        <div className="flex-grow flex flex-col justify-end bg-black rounded-r-lg bg-opacity-50 px-5 py-1">
          <div>~/justintorre.com {">"} ./run_website</div>
          <div className="flex flex-row items-center">
            <div>~/justintorre.com {">"}</div>

            <TerminalInput
              className="flex-grow"
              ref={inputRef} // Pass the ref to the TerminalInput component
              placeholder=""
              value={inputValue}
              onChange={setInputValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

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
    url: "",
    name: "Github",
    icon: AiOutlineGithub,
  },
  {
    url: "",
    name: "Gitlab",
    icon: FaGitlab,
  },
  {
    url: "",
    name: "Linkedin",
    icon: AiOutlineLinkedin,
  },
  {
    url: "",
    name: "Youtube",
    icon: AiOutlineYoutube,
  },
  {
    url: "",
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
    url: "https://helicone.ai",
    date: new Date("2023-07-01"),
  },
  {
    title: "YC W23 Batch",
    description: "I recently finished YCombinator's W23 batch.",
    url: "https://www.ycombinator.com/",
    date: new Date("2023-04-01"),
  },
  {
    title: "Scale AI Hackathon",
    description: "Won 3rd place in Scale AI's Hackathon.",
    url: "#",
    date: new Date("2023-03-01"),
  },
];

export default function Home() {
  const image =
    "https://www.helicone.ai/_next/image?url=%2Fassets%2Flanding%2Fhelicone-mobile.webp&w=384&q=75";

  return (
    <>
      <Head>
        <title>{`Justin Torre | Builder | CEO Helicone`}</title>
        <link rel="icon" href="/assets/landing/helicone-mobile.webp" />
        <meta property="og:title" content={"Justin Torre"} />
        <meta
          property="og:description"
          name="description"
          content="Justin Torre is a builder, CEO of Helicone, and a full stack developer."
          key="desc"
        />
        <meta
          property="og:image"
          content={
            image
              ? image
              : "https://www.helicone.ai/_next/image?url=%2Fassets%2Flanding%2Fhelicone-mobile.webp&w=384&q=75"
          }
        />
      </Head>
      <StarBackground />

      <main className="z-30 flex min-h-screen flex-col items-center justify-between p-28 w-full gap-8">
        <p className="z-50 font-mono text-lg fixed left-0 top-0 flex w-full justify-center bg-gradient-to-b backdrop-blur-2xl p-8">
          Justin Torre{""}
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
        <Terminal />

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
