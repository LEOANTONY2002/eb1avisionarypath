"use client";

import dynamic from "next/dynamic";
// import Mission from "./components/Mission";

// Dynamically import client components with ssr disabled
const Hero = dynamic(() => import("./components/Hero"), { ssr: true });
const Services = dynamic(() => import("./components/Services"), { ssr: true });
const ChooseUs = dynamic(() => import("./components/ChooseUs"), { ssr: true });
const Pricing = dynamic(() => import("./components/Pricing"), { ssr: true });
const Testimonials = dynamic(() => import("./components/Testimonials"), {
  ssr: true,
});
const FAQ = dynamic(() => import("./components/FAQ"), { ssr: true });
const Disclaimer = dynamic(() => import("./components/Disclaimer"), {
  ssr: true,
});

export default function Home() {
  return (
    <main id="root" className="bg-white overflow-x-hidden">
      <Disclaimer />
      <Hero />
      <Services />
      <ChooseUs />
      <Pricing />
      <Testimonials />
      <FAQ />
    </main>
  );
}
