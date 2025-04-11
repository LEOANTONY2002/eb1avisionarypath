import { Metadata } from "next";
import Blog from "../components/Blog";
import Image from "next/image";
import HeroImage from "@/public/images/hero-bg.webp";
import { Montserrat, Playfair_Display } from "next/font/google";

export const metadata: Metadata = {
  title: "Blog - EB1A Visionary Path",
  description:
    "Explore the latest insights, updates, and expert advice on immigration processes. Stay informed with our curated blog posts.",
  keywords: [
    "EB1A Visionary Path Blog",
    "Immigration insights",
    "Visa updates",
    "Immigration advice",
    "Expert blog",
  ],
  openGraph: {
    title: "Blog - EB1A Visionary Path",
    description:
      "Explore the latest insights, updates, and expert advice on immigration processes. Stay informed with our curated blog posts.",
    url: "https://eb1avisionarypath.com/blog",
    images: [
      {
        url: "/images/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Blog - EB1A Visionary Path",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - EB1A Visionary Path",
    description:
      "Explore the latest insights, updates, and expert advice on immigration processes. Stay informed with our curated blog posts.",
    images: ["/images/hero-bg.webp"],
  },
};

const playfair = Playfair_Display({ subsets: ["latin"], weight: "600" });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function BlogPage() {
  return (
    <div className="bg-white w-screen overflow-x-hidden relative">
      {/* Header Section */}
      <div className="isolate max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-5 sm:px-6 lg:px-8 text-center text-black">
        <div className="absolute w-screen h-[100vh] inset-0 -z-10">
          <Image
            src={HeroImage}
            alt="Immigration success"
            fill
            className="object-cover"
            priority
          />
          <div className="w-screen h-32 absolute bottom-0 bg-gradient-to-b from-transparent to-white"></div>
        </div>
        <div className="inline-flex items-center mt-52 rounded-full bg-white/60 backdrop-blur-sm px-3 py-1 text-xs sm:text-sm font-medium ring-1 ring-inset ring-white/20 shadow-sm">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
          </span>
          Blogs
        </div>
        <h1
          className={`text-5xl font-extrabold sm:text-6xl ${playfair.className}`}
        >
          Latest Insights & Updates
        </h1>
        <p
          className={`my-4 text-xl sm:text-2xl text-gray-800 ${montserrat.className}`}
        >
          Expert insights and updates on immigration processes
        </p>
        <Blog />
      </div>
    </div>
  );
}
