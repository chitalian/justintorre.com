"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

const POSTHOG_KEY =
  process.env.NEXT_PUBLIC_POSTHOG_KEY ??
  "phc_mtvfTfAAWVjwgrS9yw9C59tvMiUYmTp5nSTLezT45hh4";
const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

export default function PostHogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      // 2025-05-24 defaults: automatic pageviews (including SPA history
      // changes), pageleaves, and web vitals
      defaults: "2025-05-24",
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
