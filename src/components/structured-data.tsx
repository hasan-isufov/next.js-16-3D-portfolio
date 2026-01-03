export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hasan Isufov",
    url: "https://hasanisufov.co.uk",
    image: "https://hasanisufov.co.uk/og-image.png",
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://hasanisufov.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Skills",
        item: "https://hasanisufov.co.uk/#skills",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projects",
        item: "https://hasanisufov.co.uk/#projects",
      },

      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "https://hasanisufov.co.uk/#contact",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "About",
        item: "https://hasanisufov.co.uk/about",
      },
    ],

    address: {
      "@type": "PostalAddress",
      addressLocality: "Sheffield",
      addressCountry: "GB",
    },
    email: "hsnsvs.work@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/hasan-isufov-a8043a313",
      "https://github.com/hasan-isufov",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Full Stack Development",
      "3D Web Design",
      "Web Development",
      "Small Business Solutions",
      "AI Integration",
      "E-commerce Solutions",
      "SEO Optimization",
      "Spline",
      "Framer Motion",
      "AWS",
      "DevSecOps",
      "AIOps",
      "Azure",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
