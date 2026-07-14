export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Justin Torre",
    jobTitle: "Head of Enterprise Solutions",
    url: "https://justintorre.com",
    image: "https://justintorre.com/justin.png",
    sameAs: [
      "https://twitter.com/justintorre",
      "https://x.com/justinstorre",
      "https://github.com/chitalian",
      "https://gitlab.com/justintorre75",
      "https://www.linkedin.com/in/justintorre/",
      "https://www.youtube.com/@justintorre694",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Mintlify",
      url: "https://mintlify.com",
      description: "The context layer for AI agents",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Northeastern University",
      },
      {
        "@type": "Organization",
        name: "Y Combinator",
        description: "W23 Batch",
      },
    ],
    knowsAbout: [
      "LLM Observability",
      "AI Infrastructure",
      "ClickHouse",
      "Software Engineering",
      "Startups",
      "TypeScript",
      "Rust",
      "iOS Development",
      "Drone Technology",
    ],
    description:
      "Justin Torre is Head of Enterprise Solutions at Mintlify, building the context layer for AI agents. Previously co-founder and CEO of Helicone (YC W23), open-source LLM observability, acquired by Mintlify in 2026.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Justin Torre",
    url: "https://justintorre.com",
    author: {
      "@type": "Person",
      name: "Justin Torre",
    },
    description:
      "Personal website of Justin Torre: projects, writing, and videos.",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Helicone",
    url: "https://www.helicone.ai",
    founder: {
      "@type": "Person",
      name: "Justin Torre",
    },
    foundingDate: "2023",
    dissolutionDate: "2026",
    description:
      "Open-source observability platform for generative AI, acquired by Mintlify in March 2026",
    sameAs: [
      "https://twitter.com/helicone_ai",
      "https://github.com/Helicone",
      "https://www.ycombinator.com/companies/helicone",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
