"use client";

import dynamic from "next/dynamic";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Mission from "./components/Mission";

// Dynamically import client components with ssr disabled
const Hero = dynamic(() => import("./components/Hero"), { ssr: true });
const ChooseUs = dynamic(() => import("./components/ChooseUs"), { ssr: true });
const Pricing = dynamic(() => import("./components/Pricing"), { ssr: true });
const Testimonials = dynamic(() => import("./components/Testimonials"), {
  ssr: true,
});
const FAQ = dynamic(() => import("./components/FAQ"), { ssr: true });
const Blog = dynamic(() => import("./components/Blog"), { ssr: false });

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <ChooseUs />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
