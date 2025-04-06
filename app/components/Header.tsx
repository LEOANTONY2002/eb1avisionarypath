"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Use usePathname for Next.js 13
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import Chevron from "@/public/images/chevron.svg";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#whyus", label: "Why Us" },
  // { href: "/#about", label: "About" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Set initial active section to "home"
  const pathname = usePathname();

  useEffect(() => {
    if (sessionStorage.getItem("hash")) {
      const hash = sessionStorage.getItem("hash");
      if (hash) {
        if (hash === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }
      }
      sessionStorage.removeItem("hash");
    }

    // Set up intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        let isAnyIntersecting = false;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            isAnyIntersecting = true;
          }
        });
        if (!isAnyIntersecting && window.scrollY >= 100) {
          setActiveSection("");
        }
      },
      { threshold: 0.3 } // Trigger when 50% of the section is visible
    );

    // Observe all sections
    links.forEach((link) => {
      const sectionId = link.href.split("#")[1];
      if (sectionId && sectionId !== "home") {
        const element = document.getElementById(sectionId);
        if (element) observer.observe(element);
      }
    });

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check for scroll position
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const handleNavigation = (href: string) => {
    const [path, hash] = href.split("#");
    if (pathname === path) {
      if (hash === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = path;
      sessionStorage.setItem("hash", hash);
    }
  };

  const isActive = (href: string) => {
    if (href === "/blog") return pathname === href;
    const sectionId = href.split("#")[1];
    return activeSection === sectionId;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-10 bg-[#ffffff9f] backdrop-blur-md">
      <nav
        className="flex items-center justify-between px-6 py-3 lg:px-8"
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
          {links.map((link) => (
            <span
              key={link.href}
              onClick={() => handleNavigation(link.href)}
              className={`text-sm cursor-pointer leading-6 transition-colors duration-300 ease-in-out ${
                isActive(link.href)
                  ? "text-[#ff3838] font-extrabold"
                  : "text-gray-900 hover:opacity-60 font-semibold"
              }`}
            >
              {link.label}
            </span>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="w-max px-3 flex gap-2 items-center sm:px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#34A1FF] to-[#ff4747] rounded-lg shadow-[-10px_20px_40px_var(--shadow1),10px_20px_40px_var(--shadow2)] ">
            <span className="">Contact Us</span>
            <Image src={Chevron} alt={"Chevron Right"} />
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
          {links.map((link) => (
            <span
              key={link.href}
              className={`block rounded-md px-3 py-2 text-base font-medium transition-colors duration-300 ease-in-out ${
                isActive(link.href)
                  ? "text-[#FF6C85]"
                  : "text-gray-900 hover:bg-gray-50 hover:text-[#ffada5]"
              }`}
              onClick={() => {
                setIsMenuOpen(false);
                handleNavigation(link.href);
              }}
            >
              {link.label}
            </span>
          ))}
          <Link
            href="/contact"
            className="block rounded-md bg-blue-600 px-3 py-2 text-base font-medium text-white hover:bg-blue-500 transition-colors duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
