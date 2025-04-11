import Image from "next/image";
import React from "react";
import HeroImage from "@/public/images/about-bg.webp";
import { Montserrat, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "600" });
const montserrat = Montserrat({ subsets: ["latin"] });

const HeroAbout = () => {
  return (
    <section className="isolate max-w-7xl text-white h-[100vh] mx-auto px-4 flex flex-col items-center justify-center gap-5 sm:px-6 lg:px-8 text-center">
      <div className="absolute w-screen h-[140vh] inset-0 -z-10">
        <Image
          src={HeroImage}
          alt="Immigration success"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>
      <div className="inline-flex items-center mt-52 rounded-full bg-white/60 text-black backdrop-blur-sm px-3 py-1 text-xs sm:text-sm font-medium ring-1 ring-inset ring-white/20 shadow-sm">
        <span className="relative flex h-2 w-2 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
        </span>
        Our Story
      </div>
      <h1
        className={`text-5xl font-extrabold sm:text-6xl ${playfair.className}`}
      >
        About Us
      </h1>
      <div className="border bg-white/15 backdrop-blur-md border-white p-5 rounded-3xl m-2">
        <p
          className={`my-4 text-sm sm:text-md font-bold  ${montserrat.className}`}
        >
          At EB1A Visionary Path, we are dedicated to guiding EB1A aspirants
          with end-to-end support and valuable insights. Our goal is to simplify
          the complex immigration journey and help individuals move forward with
          clarity and confidence. With a focus on empowerment and personalised
          guidance, we equip our clients with the knowledge and resources needed
          to confidently pursue their EB1A dreams. Start your journey to success
          with EB1A Visionary Path your reliable partner in navigating the road
          to U.S. immigration excellence.
        </p>
        <p className="mt-1 text-sm lg:text-md text-left">
          Legal Disclaimer: The content provided on this platform is intended
          for general informational purposes only and does not constitute legal
          advice. We strongly encourage consulting with a qualified immigration
          attorney for any legal concerns or questions related to your case.
          While we make every effort to present accurate and up-to-date
          information, there may be instances where updates or changes are not
          fully reflected. Any reliance on the information provided is done at
          your own discretion.
        </p>
      </div>
      <p className="text-white text-lg">
        <span className="opacity-50 ">Talk to us: </span>
        <a
          className="opacity-100 hover:underline transition-all hover:duration-300 hover:ease-in-out hover:delay-100 hover:cursor-pointer"
          href="mailto:info@eb1avisionarypath.com"
        >
          info@eb1avisionarypath.com
        </a>
      </p>
    </section>
  );
};

export default HeroAbout;
