"use client";

import Link from "next/link";
import footer_bg from "@/public/images/footer.png";
import Image from "next/image";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/#faq" },
    { name: "Blog", href: "/blog" },
  ],
  social: [
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
      href: "#",
      icon: (props: any) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          viewBox="0 0 30 30"
          {...props}
        >
          <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="relative flex justify-end max-h-[70vh] pt-32 overflow-visible pb-64">
      <Image
        src={footer_bg}
        alt=""
        className="absolute w-screen bottom-0 -z-10 h-[70vh]"
        objectFit="cover"
      />
      <div className="mx-auto max-w-7xl text-white overflow-visible px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="flex justify-center flex-wrap gap-5 space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className="text-sm leading-6 opacity-55 hover:opacity-100 white"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="opacity-55 hover:opacity-100 white"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5">
          &copy; {new Date().getFullYear()} EB1A Visionary Path. All rights
          reserved.
        </p>
        <div className="mt-10 text-center text-xs leading-5">
          <p>
            EB1A Visionary Path is not a law firm and does not provide legal
            advice. Our services are limited to profile building and evidence
            collection.
          </p>
        </div>
      </div>
    </footer>
  );
}
