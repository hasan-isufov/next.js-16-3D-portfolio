"use client";
import Image from "next/image";
import Link from "next/link";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Accounting site",
    description: `Ada & Co Accounts is a corporate website that provides professional
            accounting and financial services. The site introduces accounting,
            tax return, payroll management, and financial consultancy services
            for small and medium-sized businesses as well as self-employed
            individuals. With its user-friendly design, visitors can easily
            access information about the services offered, learn more about the
            company, and quickly get in touch through the available contact
            channels. The website has a modern structure that reflects the
            company’s reliability and professional approach.`,
    link: "https://ada-co.vercel.app/",
    images: [
      "/assets/projects-screenshots//ada-accounts-projet/ada-accounts-projet.png",
      "/assets/projects-screenshots/ada-accounts-projet/ada-about-us.png",
      "/assets/projects-screenshots/ada-accounts-projet/ada-our-services.png",
    ],
  },
  {
    id: 2,
    name: "Movie App Project",
    description: `This website is a movie and TV show discovery application designed
            to help users explore popular, top-rated, upcoming, and currently
            trending content. It provides a clean and intuitive interface where
            users can browse movies and series, view detailed information, and
            manage a personal watchlist. All data is fetched from The Movie
            Database (TMDB) API to ensure up-to-date and accurate content. The
            application was built using **Next.js 16** and styled with modern
            frontend practices to deliver a fast, responsive, and user-friendly
            experience across all devices.`,
    link: "https://github.com/hasan-isufov/movie-app",
    images: [
      "/assets/projects-screenshots/movie-app/Moster-app-home.png",
      "/assets/projects-screenshots/movie-app/popular-movie.png",
      "/assets/projects-screenshots/movie-app/moster-app-details.png",
      ,
    ],
  },
  {
    id: 3,
    name: "Portfolio",
    description: `Welcome to my digital playground, where creativity meets code in the
            dopest way possible.`,
    link: "https://www.abhijitzende.com/",
    images: [
      "/assets/projects-screenshots/myportfolio/hasan-isufov.png",
      "/assets/projects-screenshots/myportfolio/hasan-isufov-skills.png",
      "/assets/projects-screenshots/myportfolio/hasan-project.png",
      "/assets/projects-screenshots/myportfolio/hasan-isufov-contact.png",
    ],
  },
];
function Page() {
  return (
    <>
      <div className="container  mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl  mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image||""}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
