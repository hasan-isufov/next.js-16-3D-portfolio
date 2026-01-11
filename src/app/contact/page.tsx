import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Me | Hasan ISUFOV",
  description:
    "Get in touch with Hasan ISUFOV for web development services, project inquiries, or collaboration opportunities. Full Stack Developer specializing in Next.js, React, and WordPress.",
  keywords: [
    "contact",
    "web developer contact",
    "hire full stack developer",
    "freelance developer",
    "Hasan ISUFOV contact",
    "web development services",
    "project inquiry",
    "collaboration",
    "Next.js developer contact",
    "React developer contact",
    "WordPress developer contact",
    "Sheffield web developer contact",
    "UK web developer contact",
    "Yorkshire web developer contact",
  ],
  openGraph: {
    title: "Contact Me | Hasan ISUFOV",
    description:
      "Reach out for web development projects, collaborations, or any inquiries. I specialize in Next.js, React, and WordPress development.",
    type: "website",
    url: "https://www.hasanisufov.co.uk/contact",
    images: [
      {
        url: "/assets/me.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Hasan ISUFOV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Me | Hasan ISUFOV",
    description:
      "Get in touch for web development services and collaborations.",
    images: ["/assets/me.jpg"],
  },
  alternates: {
    canonical: "https://www.hasanisufov.co.uk/contact",
  },
};

function Page() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <section>
      <div className=" flex flex-col justify-center py-8 lg:py-16 px-4  mx-auto max-w-screen-md min-h-screen">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-zinc-200">
          Contact Me
        </h2>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let me know how I can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 border-[.5px] border-zinc-600 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            // onClick={handleSubmit}
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Page;
