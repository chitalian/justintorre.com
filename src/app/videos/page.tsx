import React from "react";
import Link from "next/link";
import { videoData } from "./VideoData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos: Drone Projects & Engineering Builds",
  description:
    "Watch Justin Torre's collection of drone videos, tech projects, and engineering demonstrations. Featuring autonomous drones, computer vision, and creative builds.",
  keywords: [
    "drone videos",
    "autonomous drones",
    "tech projects",
    "engineering videos",
    "Justin Torre videos",
    "drone technology",
    "computer vision",
    "robotics",
  ],
  openGraph: {
    title: "Videos | Justin Torre",
    description: "Watch Justin Torre's collection of drone videos and tech projects",
    type: "website",
    url: "https://justintorre.com/videos",
  },
  twitter: {
    card: "summary",
    title: "Videos | Justin Torre",
    description: "Watch Justin Torre's collection of drone videos and tech projects",
    creator: "@justintorre",
  },
  alternates: {
    canonical: "/videos",
  },
};

type VideoProps = {
  youtube_src?: string;
  local_src?: string;
  video_type?: string;
  name: string;
  description_component?: React.ReactNode;
  description_list?: string[];
  read_more_link?: string;
};

function VideoFrame({ video }: { video: VideoProps }) {
  if (video.youtube_src) {
    return (
      <iframe
        className="aspect-video w-full border border-black"
        src={video.youtube_src}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }
  if (video.local_src) {
    return (
      <video className="aspect-video w-full border border-black" controls>
        <source src={video.local_src} type={video.video_type} />
        Your browser does not support HTML video.
      </video>
    );
  }
  return null;
}

export default function VideosPage() {
  return (
    <main className="mx-auto max-w-[680px] px-6 py-20 text-black sm:py-28">
      <header className="mb-14">
        <Link
          href="/"
          className="font-mono text-sm text-neutral-500 transition-colors hover:text-black"
        >
          ~/justin-torre
        </Link>
        <h1 className="mt-4 text-[22px] font-bold tracking-tight">Videos</h1>
        <p className="mt-3 text-[15px] text-neutral-600">
          Drone builds and other projects. More on{" "}
          <a
            href="https://www.youtube.com/channel/UCvyR2nnfjFFIaUcicUT-qJg/videos"
            className="underline decoration-1 underline-offset-4 hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          .
        </p>
      </header>

      <div className="flex flex-col gap-14">
        {(videoData as VideoProps[]).map((video) => (
          <section key={video.name} className="border-t border-black pt-4">
            <h2 className="mb-4 text-lg font-semibold">{video.name}</h2>
            <VideoFrame video={video} />
            {video.description_list && video.description_list.length > 0 ? (
              <ul className="mt-4 list-disc pl-5 text-sm leading-relaxed text-neutral-600">
                {video.description_list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : null}
            {video.description_component ? (
              <div className="mt-4 text-sm leading-relaxed text-neutral-600">
                {video.description_component}
              </div>
            ) : null}
            {video.read_more_link ? (
              <a
                href={video.read_more_link}
                className="mt-3 inline-block text-sm underline decoration-1 underline-offset-4 hover:no-underline"
              >
                Read more &rarr;
              </a>
            ) : null}
          </section>
        ))}
      </div>
    </main>
  );
}
