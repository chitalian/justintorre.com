const PERSON_ID = "https://justintorre.com/#person";
const WEBSITE_ID = "https://justintorre.com/#website";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Justin Torre",
  alternateName: ["justinstorre", "chitalian"],
  givenName: "Justin",
  familyName: "Torre",
  jobTitle: "Head of Enterprise Solutions",
  url: "https://justintorre.com",
  mainEntityOfPage: "https://justintorre.com/about",
  image: {
    "@type": "ImageObject",
    url: "https://justintorre.com/justin-headshot.jpg",
    width: 800,
    height: 800,
    caption: "Justin Torre",
  },
  homeLocation: {
    "@type": "Place",
    name: "San Francisco, California, United States",
  },
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
    sameAs: [
      "https://www.linkedin.com/company/mintlify",
      "https://x.com/mintlify",
    ],
    description: "The context layer for AI agents",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Northeastern University",
      sameAs: "https://www.northeastern.edu",
    },
    {
      "@type": "Organization",
      name: "Y Combinator",
      sameAs: "https://www.ycombinator.com",
      description: "W23 batch, with Helicone",
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
    "Justin Torre is Head of Enterprise Solutions at Mintlify, building the context layer for AI agents. Previously co-founder and CEO of Helicone (YC W23), open-source LLM observability, acquired by Mintlify in March 2026.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Justin Torre",
  url: "https://justintorre.com",
  author: { "@id": PERSON_ID },
  publisher: { "@id": PERSON_ID },
  description:
    "Personal website of Justin Torre: projects, writing, and videos.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Helicone",
  url: "https://www.helicone.ai",
  founder: { "@id": PERSON_ID },
  foundingDate: "2023",
  description:
    "Open-source observability platform for generative AI, acquired by Mintlify in March 2026",
  sameAs: [
    "https://twitter.com/helicone_ai",
    "https://github.com/Helicone",
    "https://www.ycombinator.com/companies/helicone",
    "https://www.crunchbase.com/organization/helicone",
  ],
};

export default function StructuredData() {
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
