import { Metadata } from "next";
import Blog from "../components/Blog";

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

export default function BlogPage() {
  return <Blog />;
}
