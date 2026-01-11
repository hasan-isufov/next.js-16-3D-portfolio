import SkillsPage from "@/components/skills/skillsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Technologies | Hasan ISUFOV",
  description:
    "Explore my technical skills and expertise in modern web development. Proficient in JavaScript, TypeScript, React, Next.js, Node.js, Docker, PostgreSQL, MongoDB, and more.",
  keywords: [
    "web development skills",
    "JavaScript developer",
    "TypeScript expert",
    "React.js skills",
    "Next.js expertise",
    "Node.js backend",
    "full stack technologies",
    "Docker containerization",
    "PostgreSQL database",
    "MongoDB",
    "Tailwind CSS",
    "Git version control",
    "AWS cloud",
    "Vue.js",
    "Express.js",
    "Firebase",
    "technical skills",
    "programming languages",
  ],
  openGraph: {
    title: "Skills & Technologies | Hasan ISUFOV - Full Stack Developer",
    description:
      "My technical expertise spans across modern frontend frameworks, backend technologies, databases, and cloud platforms. Over 25+ tools and technologies mastered.",
    type: "website",
    url: "https://www.hasanisufov.co.uk/skills",
    images: [
      {
        url: "/assets/me.jpg",
        width: 1200,
        height: 630,
        alt: "Hasan ISUFOV - Technical Skills",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills & Technologies | Hasan ISUFOV",
    description:
      "Technical expertise in JavaScript, TypeScript, React, Next.js, Node.js, and 20+ other technologies.",
    images: ["/assets/me.jpg"],
  },
  alternates: {
    canonical: "https://www.hasanisufov.co.uk/skills",
  },
};

const page = () => {
  return <SkillsPage />;
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Hasan ISUFOV",
      jobTitle: "Full Stack Developer",
      url: "https://www.hasanisufov.co.uk/skills",
      knowsAbout: [
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Node.js",
        "Vue.js",
        "Express.js",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "Nginx",
        "Tailwind CSS",
        "Firebase",
        "Git",
        "GitHub",
        "AWS",
        "Linux",
        "HTML5",
        "CSS3",
        "VS Code",
        "Vercel",
        "NPM",
        "Yarn",
      ],
      knowsLanguage: ["JavaScript", "TypeScript", "HTML", "CSS"],
    }),
  }}
/>;

export default page;
