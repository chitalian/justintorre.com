export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Justin Torre",
    jobTitle: "CEO & Founder",
    url: "https://justintorre.com",
    sameAs: [
      "https://twitter.com/justintorre",
      "https://github.com/chitalian",
      "https://gitlab.com/justintorre75",
      "https://www.linkedin.com/in/justintorre/",
      "https://www.youtube.com/@justintorre694",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Helicone",
      url: "https://www.helicone.ai",
      description: "Open-source observability platform for generative AI",
      foundingDate: "2023",
      founder: {
        "@type": "Person",
        name: "Justin Torre",
      },
    },
    alumniOf: {
      "@type": "Organization",
      name: "Y Combinator",
      description: "W23 Batch",
    },
    knowsAbout: [
      "Software Engineering",
      "Full Stack Development",
      "AI/ML",
      "Observability",
      "Drone Technology",
      "Entrepreneurship",
      "React",
      "Next.js",
      "TypeScript",
      "Python",
    ],
    description: "Builder, CEO of Helicone, and full stack developer specializing in AI observability and innovative software solutions.",
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
    description: "Personal website of Justin Torre, CEO of Helicone and full stack developer.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://justintorre.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Helicone",
    url: "https://www.helicone.ai",
    logo: "https://www.helicone.ai/assets/landing/helicone-logo.png",
    founder: {
      "@type": "Person",
      name: "Justin Torre",
    },
    foundingDate: "2023",
    description: "Open-source observability platform for generative AI",
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