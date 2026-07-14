import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tracer — Privacy Policy",
  description: "Privacy policy for Tracer, a one-stroke line-tracing puzzle game.",
  alternates: {
    canonical: "/apps/tracer/privacy",
  },
};

const PrivacyPolicy: React.FC = () => (
  <main className="max-w-2xl mx-auto px-5 py-12 text-neutral-800 leading-relaxed">
    <h1 className="text-3xl font-bold tracking-wide text-black">Tracer — Privacy Policy</h1>
    <p className="text-sm text-neutral-500 mt-1">Last updated: June 27, 2026</p>

    <p className="mt-6">Tracer is a one-stroke line-tracing puzzle game.</p>

    <h2 className="text-xl font-semibold mt-7 text-black">What we collect</h2>
    <p className="mt-2">
      <strong className="text-black">Nothing personal.</strong> Tracer does not collect, store, or share any
      personally identifiable information. There is no account, and we do not ask for your
      name, email, contacts, location, photos, or similar data.
    </p>

    <h2 className="text-xl font-semibold mt-7 text-black">On-device data</h2>
    <p className="mt-2">
      Your progress (which levels you&apos;ve solved and game settings) is stored{" "}
      <strong className="text-black">locally on your device only</strong>. It is not transmitted to us or any
      third party. Deleting the app removes this data.
    </p>

    <h2 className="text-xl font-semibold mt-7 text-black">Analytics &amp; tracking</h2>
    <p className="mt-2">
      Tracer does not use third-party analytics, advertising SDKs, or cross-app tracking,
      and does not use the Advertising Identifier (IDFA).
    </p>

    <h2 className="text-xl font-semibold mt-7 text-black">Children</h2>
    <p className="mt-2">
      Tracer is suitable for all ages and does not knowingly collect data from anyone.
    </p>

    <h2 className="text-xl font-semibold mt-7 text-black">Changes</h2>
    <p className="mt-2">
      If this policy changes, the updated version will be posted at this URL with a new date.
    </p>

    <h2 className="text-xl font-semibold mt-7 text-black">Contact</h2>
    <p className="mt-2">
      Questions? Email{" "}
      <a className="text-blue-400 hover:underline" href="mailto:justintorre75@gmail.com">
        justintorre75@gmail.com
      </a>
      .
    </p>
  </main>
);

export default PrivacyPolicy;
