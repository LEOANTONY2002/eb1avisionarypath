"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import Chevron from "@/public/images/chevron.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-10 bg-[#ffffff9f] backdrop-blur-md">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image src={Logo} width={120} alt={"EB1A Visionary Path"} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/#services"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/#testimonials"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="/blog"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
          >
            Blog
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="flex sm:flex-row gap-4 items-center justify-center ">
            <div className="w-max px-4 flex gap-2 items-center sm:px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#34A1FF] to-[#ff4747] rounded-lg shadow-[-10px_20px_40px_var(--shadow1),10px_20px_40px_var(--shadow2)] ">
              <span className="">Contact</span>
              <Image src={Chevron} alt={"Chevron Right"} />
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            href="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/#services"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/#testimonials"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="/blog"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block rounded-md bg-blue-600 px-3 py-2 text-base font-medium text-white hover:bg-blue-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
