import Image from "next/image";
import HeroImage from "@/public/images/hero-bg.webp";
import Chevron from "@/public/images/chevron.svg";
import { Playfair_Display, Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
// import { sendGTMEvent } from "@next/third-parties/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "600" });
const montserrat = Montserrat({ subsets: ["latin"] });

const words = ["Starts Here.", "No Awards?", "No Problem."];

export default function Hero({ openModal }: { openModal: () => void }) {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setAnimating(false);
      }, 250); // duration of slide-out
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative -mb-[450px] isolate min-h-[150vh] text-black">
      {/* Background image */}
      <div className="absolute w-screen h-[150vh] inset-0 -z-10">
        <Image
          src={HeroImage}
          alt="Immigration success"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Main content */}
      <section
        id="home"
        className="relative max-w-screen-md min-h-screen flex flex-col items-center justify-center py-20 mx-auto "
      >
        <div className="inline-flex items-center rounded-full bg-white/60 backdrop-blur-sm px-3 py-1 text-xs sm:text-sm font-medium ring-1 ring-inset ring-white/20 shadow-sm">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
          </span>
          Bypass the H-1B lottery
        </div>

        {/* Content */}

        <h1
          className={`mt-6 text-center sm:mt-10 text-3xl sm:text-4xl lg:text-6xl tracking-tight ${playfair.className}`}
        >
          Your Path to Extraordinary Ability Immigration
        </h1>
        <p
          className={`mt-12 -ml-28 lg:-ml-48 font-bold text-base sm:text-lg lg:text-3xl text-center ${montserrat.className}`}
        >
          Your EB1A Green Card Journey
          <span className="relative  w-max h-2 overflow-hidden ">
            <span
              className={`absolute top-0 w-max ml-2 text-transparent bg-gradient-to-r font-bold from-[#3c80bb] to-[#b70000] bg-clip-text ${
                animating ? "animate-slide-out" : "animate-slide-in"
              }`}
            >
              {words[index]}
            </span>
          </span>
        </p>
        <p className="mt-5 opacity-70 text-base sm:text-lg lg:text-3xl text-center">
          Let’s Build Your Case.
        </p>

        {/* Buttons */}
        <div className="mt-20 sm:mt-10 flex sm:flex-row gap-4 items-center justify-center sm:justify-start">
          <div
            onClick={() => openModal()}
            className="cursor-pointer lg:px-32 px-10 flex gap-3 items-center sm:px-32 py-5 text-sm font-semibold text-white bg-gradient-to-r from-[#34A1FF] to-[#ff4747] rounded-full shadow-[-10px_20px_40px_var(--shadow1),10px_20px_40px_var(--shadow2)]"
          >
            <span className="lg:text-lg">Book a Free Consultation</span>
            <Image src={Chevron} alt={"Chevron Right"} />
          </div>
        </div>
      </section>
    </div>
  );
}
