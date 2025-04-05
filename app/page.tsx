"use client";

import dynamic from "next/dynamic";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChooseUs from "./components/ChooseUs";
// import Mission from "./components/Mission";

// Dynamically import client components with ssr disabled
const Hero = dynamic(() => import("./components/Hero"), { ssr: false });
const Pricing = dynamic(() => import("./components/Pricing"), { ssr: false });
const Testimonials = dynamic(() => import("./components/Testimonials"), {
  ssr: false,
});
const FAQ = dynamic(() => import("./components/FAQ"), { ssr: false });
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
