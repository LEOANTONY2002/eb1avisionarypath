"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CalendarIcon, UserIcon, TagIcon } from "@heroicons/react/24/outline";
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
      <article className="min-h-screen py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </div>
        </div>
      </article>
    );
  }
}
