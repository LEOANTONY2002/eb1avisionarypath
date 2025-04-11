import { Metadata } from "next";
import CoreValues from "../components/CoreValues";
import Mission from "../components/Mission";
import HeroAbout from "../components/HeroAbout";

export const metadata: Metadata = {
  title: "About Us - EB1A Visionary Path",
  description:
    "Learn more about EB1A Visionary Path, our mission, vision, and core values. We are dedicated to guiding EB1A aspirants with personalized support and expert insights.",
  keywords: [
    "EB1A Visionary Path",
    "About EB1A",
    "Immigration services",
    "Mission and Vision",
    "Core values",
  ],
  openGraph: {
    title: "About Us - EB1A Visionary Path",
    description:
      "Learn more about EB1A Visionary Path, our mission, vision, and core values. We are dedicated to guiding EB1A aspirants with personalized support and expert insights.",
    url: "https://eb1avisionarypath.com/about",
    images: [
      {
        url: "/images/about-bg.webp",
        width: 1200,
        height: 630,
        alt: "About Us - EB1A Visionary Path",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - EB1A Visionary Path",
    description:
      "Learn more about EB1A Visionary Path, our mission, vision, and core values. We are dedicated to guiding EB1A aspirants with personalized support and expert insights.",
    images: ["/images/about-bg.webp"],
  },
};

export default function About() {
  return (
    <main id="about" className="bg-white w-screen overflow-x-hidden relative">
      <HeroAbout />
      <Mission />
      <CoreValues />
    </main>
  );
}
