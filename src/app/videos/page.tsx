import React from "react";
import Link from "next/link";
import { videoData } from "./VideoData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos | Justin Torre - Drone Projects & Tech Content",
  description: "Watch Justin Torre's collection of drone videos, tech projects, and innovative engineering demonstrations. Featuring autonomous drones, computer vision, and creative builds.",
  keywords: [
    "drone videos",
    "autonomous drones",
    "tech projects",
    "engineering videos",
    "Justin Torre videos",
    "drone technology",
    "computer vision",
    "robotics"
  ],
  openGraph: {
    title: "Videos | Justin Torre",
    description: "Watch Justin Torre's collection of drone videos and tech projects",
    type: "website",
    url: "https://justintorre.com/videos",
    images: [
      {
        url: "https://www.helicone.ai/_next/image?url=%2Fassets%2Flanding%2Fhelicone-mobile.webp&w=384&q=75",
        width: 1200,
        height: 630,
        alt: "Justin Torre Videos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
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

const YoutubeIFrame: React.FC<{ video: VideoProps }> = ({ video }) => (
  <iframe
    className="w-full h-64"
    src={video.youtube_src}
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);

const LocalVideoFrame: React.FC<{ video: VideoProps }> = ({ video }) => (
  <video className="w-full h-64" controls autoPlay>
    <source src={video.local_src} type={video.video_type} />
    Your browser does not support HTML video.
  </video>
);

const VideoObject: React.FC<{ video: VideoProps }> = ({ video }) => {
  const DescriptionComponent = video.description_component || null;
  const descriptionList = video.description_list || [];
  const ReadMoreComponent = video.read_more_link ? (
    <a href={video.read_more_link} className="text-blue-500 hover:underline">
      Click here to read more
    </a>
  ) : null;

  let VideoFrame: React.FC<{ video: VideoProps }>;
  if (video.youtube_src) {
    VideoFrame = YoutubeIFrame;
  } else if (video.local_src) {
    VideoFrame = LocalVideoFrame;
  } else {
    console.error("video doesn't have valid src property!");
    return null;
  }

  return (
    <div className="p-4 border rounded shadow-md">
      <h1 className="text-xl font-bold">{video.name}</h1>
      <VideoFrame video={video} />
      <ul className="p-2">
        {descriptionList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="max-w-5xl">
        {DescriptionComponent}
        {ReadMoreComponent}
      </div>
    </div>
  );
};

const VideoHighlight: React.FC = () => (
  <div>
    <div className="p-4 border rounded shadow-md">
      <h3 className="text-lg font-semibold">
        This is a highlight reel of all my favorite videos
      </h3>
      <div className="flex items-center">
        <span>For more videos please checkout</span>
        <Link
          href="https://www.youtube.com/channel/UCvyR2nnfjFFIaUcicUT-qJg/videos"
          className="text-blue-500 hover:underline flex items-center ml-2"
        >
          <span>my YouTube channel</span>
          <i className="fab fa-youtube ml-2 text-xl"></i>
        </Link>
      </div>
    </div>
    {videoData.map((video, index) => (
      <VideoObject key={index} video={video} />
    ))}
  </div>
);

export default VideoHighlight;
