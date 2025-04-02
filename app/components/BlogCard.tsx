import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  slug: string;
  date: string;
}

export default function BlogCard({
  title,
  excerpt,
  image,
  category,
  slug,
  date,
}: BlogCardProps) {
  return (
    <article className="flex flex-col items-start">
      <div className="relative w-full">
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
      </div>
      <div className="max-w-xl">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={date} className="text-gray-500">
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-600">
            {category}
          </span>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link href={`/blog/${slug}`}>
              <span className="absolute inset-0" />
              {title}
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {excerpt}
          </p>
        </div>
      </div>
    </article>
  );
}
