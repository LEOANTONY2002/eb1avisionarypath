"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
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
const Calendar = dynamic(() => import("./components/Calendar"), {
  ssr: false,
});

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const existingScript = document.querySelector(
      "script[src='https://assets.calendly.com/assets/external/widget.js']"
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <main id="root" className="bg-white overflow-x-hidden">
      {isModalOpen && <Calendar closeModal={closeModal} />}
      <Disclaimer />
      <Hero openModal={openModal} />
      <Services />
      <ChooseUs />
      <Pricing openModal={openModal} />
      <Testimonials />
      <FAQ />
    </main>
  );
}
