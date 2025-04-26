"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CalendarIcon, TagIcon } from "@heroicons/react/24/outline";
import { use } from "react";
import Loading from "@/app/loading";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  content: string;
  author: string;
  image: string;
  category: string;
  tags: string[];
  createdAt: string;
}

const social = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/eb1a-visionary-path",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 30 30" {...props}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.06-1.273-1.16-1.273-1.17 0-1.33.91-1.33 1.235v5.642h-3v-11h3v1.493c.43-.623 1.122-1.243 2.313-1.243 2.401 0 2.6 1.699 2.6 3.888v6.862z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/eb1avisionarypath",
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 30 30"
        {...props}
      >
        <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
      </svg>
    ),
  },
];

export default function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params); // Unwrap the params Promise

  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`/api/blog/${slug}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog post");
        }
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="text-center h-screen my-auto py-12">
        <p className="text-red-500 text-lg font-semibold mb-4">
          Error: {error}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-gradient-to-r from-[#34A1FF] to-[#ff4747] cursor-pointer text-white rounded-lg"
        >
          Retry
        </button>
      </div>
    );
  }

  if (blog) {
    return (
      <article className="min-h-screen max-w-7xl py-32 mx-auto flex flex-wrap lg:flex-nowrap text-black">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className=" rounded-[50px] shadow-lg overflow-hidden">
            <div className="relative m-8 rounded-3xl border border-white/45 h-96">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover rounded-3xl"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  {new Date(blog.createdAt).toLocaleDateString()}
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                {blog.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-8">
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
              <div
                className="prose text-black prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 m-10">
          <p>Follow us on</p>
          <div className="flex gap-3 items-center">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                className="opacity-80 hover:opacity-100"
              >
                <span className="sr-only">{item.name}</span>
                <div className="bg-[#c0c0c04d] flex items-center justify-center p-3 rounded-full">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              if (navigator.share) {
                navigator
                  .share({
                    title: blog.title,
                    text: "Check out this blog post on EB1A Visionary Path!",
                    url: window.location.href,
                  })
                  .catch((error) =>
                    console.error("Error sharing content:", error)
                  );
              } else {
                alert("Sharing is not supported on this device.");
              }
            }}
            className="block mt-4 px-10 py-3 bg-gradient-to-r text-center text-white from-[#34A1FF] to-[#ff4747] rounded-full cursor-pointer shadow-[-10px_20px_40px_var(--shadow1),10px_20px_40px_var(--shadow2)]"
          >
            Share
          </button>
        </div>
      </article>
    );
  }
}
