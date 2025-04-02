// "use client";

// import dynamic from "next/dynamic";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Mission from "./components/Mission";
import Image from "next/image";
import HeroImage from "@/public/images/hero-image.jpg";
import Logo from "@/public/images/logo.png";

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
    <main>
      {/* <Header />
      <Hero />
      <Services />
      <Mission />
      <Pricing />
      <Testimonials />
      <Blog />
      <FAQ />
      <Footer /> */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={HeroImage}
          alt="Immigration success"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
      </div>

      <div className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-28">
        <div className="bg-[#ffffff4e] p-4 w-max rounded-lg">
          <Image src={Logo} width={150} alt="Immigration success" priority />
        </div>
        <div className="mx-auto max-w-3xl text-center lg:text-left lg:mx-0 lg:max-w-none">
          <div className="relative">
            <h1 className="mt-6 sm:mt-10 text-3xl sm:text-4xl lg:text-7xl font-bold tracking-tight text-white">
              Coming
              <span className="relative inline-block">
                <span className="relative ml-4 z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                  Soon
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-blue-400/20"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,10 Q25,0 50,10 T100,10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>{" "}
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
