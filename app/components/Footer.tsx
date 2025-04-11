import Link from "next/link";
import footer_bg from "@/public/images/footer.webp";
import Image from "next/image";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Why Us", href: "/#whyus" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Testimonial", href: "/#testimonials" },
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
      href: "https://www.instagram.com/eb1avisionarypath",
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
  ],
};

export default function Footer() {
  return (
    <footer className="relative flex justify-end max-h-[85vh] lg:max-h-[75vh] pt-28 overflow-visible pb-64">
      <Image
        src={footer_bg}
        alt=""
        className="absolute w-screen bottom-0 h-[70vh]"
        fill
      />
      <div className="mx-auto z-[1] max-w-7xl text-white overflow-visible px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="flex justify-center flex-wrap gap-5 space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className="text-sm leading-6 opacity-55 hover:opacity-100 hover:font-semibold"
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
              target="_blank"
              className="opacity-55 hover:opacity-100"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap lg:flex-nowrap gap-5 justify-center space-x-10 text-sm leading-6">
          <a
            href="tel:+918248633492"
            className="flex items-center opacity-55 hover:opacity-100"
          >
            <svg
              className="h-6 w-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.64.58 1 1 0 011 1v3.5a1 1 0 01-1 1A18 18 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.58 3.64 1 1 0 01-.27 1.11l-2.2 2.2z" />
            </svg>
            +91 8248633492
          </a>
          <a
            href="mailto:info@eb1avisionarypath.com"
            className="flex items-center opacity-55 hover:opacity-100"
          >
            <svg
              className="h-6 w-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 11 4 6.01V6h16zM4 18V8.99l8 5 8-5V18H4z" />
            </svg>
            info@eb1avisionarypath.com
          </a>
          <div className="flex items-center opacity-55 hover:opacity-100">
            <svg
              className="h-6 w-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
            Coimbatore, India
          </div>
        </div>
        <p className="mt-10 text-center text-xs leading-5">
          &copy; {new Date().getFullYear()} EB1A Visionary Path. All rights
          reserved.
        </p>
        <div className="absolute bottom-0 left-0 w-screen mt-10 p-5 bg-white/40 text-center text-xs leading-5">
          <p>
            <strong>Disclaimer: </strong> At EB1A Visionary Path, we aim to
            share helpful insights for your journey, but please note that we are
            not a law firm. Our content is informational only and should not be
            considered legal advice or a substitute for professional legal
            guidance.
          </p>
        </div>
      </div>
    </footer>
  );
}
