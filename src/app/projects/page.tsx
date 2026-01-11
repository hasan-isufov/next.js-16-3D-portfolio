import ProjectsPage from "@/components/projects/projectsPage";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Hasan ISUFOV",
  description:
    "Explore my portfolio of web development projects including accounting platforms, movie discovery apps, and interactive 3D portfolios. Built with Next.js, React, TypeScript, and modern web technologies.",
  keywords: [
    "web development projects",
    "Next.js projects",
    "React applications",
    "TypeScript projects",
    "full stack portfolio",
    "Hasan ISUFOV projects",
    "movie app",
    "accounting website",
    "3D portfolio",
    "interactive web apps",
    "TMDB API",
    "Tailwind CSS projects",
  ],
  openGraph: {
    title: "Projects | Hasan ISUFOV - Full Stack Development Portfolio",
    description:
      "View my latest web development projects featuring Next.js, React, TypeScript, and 3D animations. From corporate websites to interactive applications.",
    type: "website",
    url: "https://www.hasanisufov.co.uk/projects",
    images: [
      {
        url: "/assets/projects-screenshots/myportfolio/hasan-isufov.png",
        width: 1200,
        height: 630,
        alt: "Hasan ISUFOV Projects Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Hasan ISUFOV",
    description:
      "Explore my web development projects built with Next.js, React, and TypeScript.",
    images: ["/assets/projects-screenshots/myportfolio/hasan-isufov.png"],
  },
  alternates: {
    canonical: "https://www.hasanisufov.co.uk/projects",
  },
};

const page = () => {
  return (
    <div className="flex flex-col justify-center  py-8 lg:py-16 px-4  mx-auto  min-h-screen">
      <ProjectsPage />
    </div>
  );
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Web Development Projects by Hasan ISUFOV",
      description: "Portfolio of web development projects",
      url: "https://www.hasanisufov.co.uk/projects",
      author: {
        "@type": "Person",
        name: "Hasan ISUFOV",
        jobTitle: "Full Stack Developer",
      },
      hasPart: [
        {
          "@type": "CreativeWork",
          name: "Ada & Co Accounts",
          description: "Corporate accounting and financial services website",
          url: "https://ada-co.vercel.app/",
          image:
            "/assets/projects-screenshots/ada-accounts-projet/ada-accounts-projet.png",
        },
        {
          "@type": "CreativeWork",
          name: "Movie Discovery App",
          description: "Movie and TV show discovery application with TMDB API",
          url: "https://movie-app-lovat-five.vercel.app/",
          image: "/assets/projects-screenshots/movie-app/Moster-app-home.png",
        },
        {
          "@type": "CreativeWork",
          name: "3D Interactive Portfolio",
          description:
            "Interactive portfolio with 3D animations and modern design",
          url: "https://hasanisufov.co.uk/",
          image: "/assets/projects-screenshots/myportfolio/hasan-isufov.png",
        },
      ],
    }),
  }}
/>;

export default page;
