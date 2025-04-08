"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, UserIcon, TagIcon } from "@heroicons/react/24/outline";
import Header from "../components/Header";
import Loading from "@/app/loading";
import HeroImage from "@/public/images/hero-bg.svg";
import { Montserrat, Playfair_Display } from "next/font/google";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  image: string;
  category: string;
  tags: string[];
  createdAt: string;
}

const playfair = Playfair_Display({ subsets: ["latin"], weight: "600" });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blog");
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 text-lg font-semibold mb-4">
          Error: {error}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Retry
        </button>
      </div>
    );
  }

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

        {/* Blog Cards Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-white transform hover:scale-100"
              >
                <div className="relative h-48">
                  <div className="w-full h-36 bg-gradient-to-b from-transparent to-white absolute z-[100] bottom-0"></div>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 pt-0 text-left">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center ml-4">
                      <UserIcon className="h-4 w-4 mr-1" />
                      {blog.author}
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 text-[12px] mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        <TagIcon className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex w-full justify-center items-center px-4 py-3 bg-gradient-to-r from-[#34A1FF] to-[#FF6C85] text-white rounded-full shadow-[-10px_20px_40px_var(--shadow1),10px_20px_40px_var(--shadow2)]"
                  >
                    Read more
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
