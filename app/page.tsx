// "use client";

// import dynamic from "next/dynamic";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Mission from "./components/Mission";
import Image from "next/image";
import HeroImage from "@/public/images/hero-bg.png";
import Logo from "@/public/images/logo.png";
import cs from "@/public/images/cs.png";

// Dynamically import client components with ssr disabled
// const Hero = dynamic(() => import("./components/Hero"), { ssr: false });
// const Services = dynamic(() => import("./components/Services"), { ssr: false });
// const Pricing = dynamic(() => import("./components/Pricing"), { ssr: false });
// const Testimonials = dynamic(() => import("./components/Testimonials"), {
//   ssr: false,
// });
// const FAQ = dynamic(() => import("./components/FAQ"), { ssr: false });
// const Blog = dynamic(() => import("./components/Blog"), { ssr: false });

export default function Home() {
  return (
    <main className="bg-white">
      {/* <Header />
      <Hero />
      <Services />
      <Mission />
      <Pricing />
      <Testimonials />
      <Blog />
      <FAQ />
      <Footer /> */}
      <div className="absolute inset-0 ">
        <Image
          src={HeroImage}
          alt="Immigration success"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-28">
        <Image src={Logo} width={450} alt="Immigration success" priority />
        <Image src={cs} width={700} alt="Immigration success" priority />
        <p className="text-black mt-5 text-2xl">
          Talk to us:{" "}
          <a
            className="text-[#34A1FF]"
            href="mailto:info@eb1avisionarypath.com"
          >
            info@eb1avisionarypath.com
          </a>
        </p>
      </div>
    </main>
  );
}
