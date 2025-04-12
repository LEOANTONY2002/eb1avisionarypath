"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation"; // Use usePathname for Next.js 13
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo.webp";
import Chevron from "@/public/images/chevron.svg";
import Calendar from "./Calendar";
// import { sendGTMEvent } from "@next/third-parties/google";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#whyus", label: "Why Us" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`Section in view: ${entry.target.id}`); // Debugging log
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 } // Lower threshold to trigger earlier
    );

    links.forEach((link) => {
      const sectionId = link.href.split("#")[1];
      if (sectionId && sectionId !== "home") {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.observe(element);
        }
      }
    });

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Scale down the logo when scrolled
      } else {
        setIsScrolled(false); // Reset the logo size when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    const sectionId = href.split("#")[1];
    if (pathname.startsWith("/blog")) return href === "/blog";
    if (pathname === "/about") return pathname === href;
    return activeSection === sectionId;
  };

  return (
    <>
      {isModalOpen && <Calendar closeModal={closeModal} root={"root"} />}

      <header className="fixed inset-x-0 top-0 z-10 bg-[#ffffff9f] backdrop-blur-md">
        <nav
          className="flex items-center justify-between px-6 py-3 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                src={Logo}
                width={isScrolled ? 80 : 120} // Dynamically scale the logo
                alt={"EB1A Visionary Path"}
                className={`transition-all duration-300 ease-in-out ${
                  isScrolled ? "scale-90" : "scale-100"
                }`}
              />
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
          <div className="hidden lg:flex lg:gap-x-8">
            {links.map((link) => (
              <span
                key={link.href}
                onClick={() => handleNavigation(link.href)}
                className={`text-sm cursor-pointer leading-6 py-2 px-4 rounded-full transition-all duration-250 ease-in-out ${
                  isActive(link.href)
                    ? "text-[#ff3838] font-extrabold border border-[#ff1d1d]"
                    : "text-gray-900 hover:opacity-60 font-semibold"
                }`}
              >
                {link.label}
              </span>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="w-max px-3 flex gap-2 items-center sm:px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#34A1FF] to-[#ff4747] rounded-full cursor-pointer shadow-[-10px_20px_40px_var(--shadow1),10px_20px_40px_var(--shadow2)] ">
              <span
                className=""
                onClick={() => {
                  window.dataLayer?.push({
                    event: "button_click",
                    button_name: "Contact",
                  });
                  setIsModalOpen(true);
                }}
              >
                Contact Us
              </span>
              <Image src={Chevron} alt={"Chevron Right"} />
            </div>
          </div>
        </nav>
        {/* Mobile menu */}
        <div
          ref={menuRef}
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
            <div className="py-5">
              <Link
                href="/#"
                className="block m-2 px-6 py-3 bg-gradient-to-r text-center text-white from-[#34A1FF] to-[#ff4747] rounded-full cursor-pointer shadow-[-10px_20px_40px_var(--shadow1),10px_20px_40px_var(--shadow2)]"
                onClick={() => {
                  window.dataLayer?.push({
                    event: "button_click",
                    button_name: "Contact",
                  });
                  setIsMenuOpen(false);
                  setIsModalOpen(true);
                }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
