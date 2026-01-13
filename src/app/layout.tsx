import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import ElasticCursor from "@/components/ui/ElasticCursor";
import Particles from "@/components/Particles";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header/header";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import Preloader from "@/components/preloader";
import EasterEggs from "@/components/easter-eggs";
import { config } from "@/data/config";
import SocketContextProvider from "@/contexts/socketio";
import RemoteCursors from "@/components/realtime/remote-cursors";
import { StructuredData } from "@/components/structured-data";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://hasanisufov.co.uk"),
  title: {
    default: config.title,
    template: `%s | ${config.title}`,
  },
  description: config.description.long,
  keywords: config.keywords,
  authors: [{ name: config.author, url: "https://hasanisufov.co.uk" }],
  creator: config.author,
  publisher: config.author,

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: config.site,
    siteName: config.title,
    title: config.title,
    description: config.description.short,
    images: [
      {
        url: config.ogImg,
        width: 1200,
        height: 630,
        alt: "Hasan Isufov Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description.short,
    images: [config.ogImg],
    creator: "@hasanisufov",
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
    canonical: config.site,
  },
};

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={archivoBlack.className} suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Particles
            className="fixed inset-0 -z-10 animate-fade-in"
            quantity={100}
          />
          <Preloader>
            <SocketContextProvider>
              <RemoteCursors />
              <TooltipProvider>
                <Header />
                {children}
                <Footer />
              </TooltipProvider>
            </SocketContextProvider>
            <Toaster />
            <EasterEggs />
            <ElasticCursor />
          </Preloader>
        </ThemeProvider>
        <GoogleAnalytics gaId="G-BZNQGEKMKY" />
      </body>
    </html>
  );
}
