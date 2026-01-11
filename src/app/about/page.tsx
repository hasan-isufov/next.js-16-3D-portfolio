import AboutPage from "@/components/about/aboutPage";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hasan ISUFOV | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, React, and WordPress. Over 2 years of experience building responsive, high-performance web applications for UK-based businesses.",
  keywords: [
    "Yorkshire Developer",
    "Sheffield Developer",
    "JavaScript Developer",
    "Chesterfield Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "WordPress Developer",
    "TypeScript",
    "Node.js",
    "Hasan ISUFOV",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "UK Developer",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
  ],
  authors: [{ name: "Hasan ISUFOV" }],
  creator: "Hasan ISUFOV",
  publisher: "Hasan ISUFOV",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.hasanisufov.co.uk/about",
    title: "Hasan ISUFOV | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, and WordPress. Building scalable web applications with focus on performance and user experience.",
    siteName: "Hasan ISUFOV Portfolio",
    images: [
      {
        url: "/assets/me.jpg",
        width: 1200,
        height: 630,
        alt: "Hasan ISUFOV - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasan ISUFOV | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, and WordPress.",
    images: ["/assets/me.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.hasanisufov.co.uk/about",
  },
};

const page = () => {
  return (
    <div>
      <AboutPage />
    </div>
  );
};
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Hasan ISUFOV",
      jobTitle: "Full Stack Developer",
      email: "hsnsvs.work@gmail.com",
      telephone: "07737407394",
      url: "https://www.hasanisufov.co.uk/",
      sameAs: [
        "https://github.com/hasan-isufov",
        "https://www.linkedin.com/in/hasan-isufov-a8043a313/",
      ],
      knowsAbout: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "WordPress",
      ],
    }),
  }}
/>;
export default page;
