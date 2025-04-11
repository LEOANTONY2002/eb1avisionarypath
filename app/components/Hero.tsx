import Image from "next/image";
import HeroImage from "@/public/images/hero-bg.webp";
import Chevron from "@/public/images/chevron.svg";
import { Playfair_Display, Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
// import { sendGTMEvent } from "@next/third-parties/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "600" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "800" });

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
      }, 300); // duration of slide-out
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="relative isolate min-h-[100vh] text-black">
      {/* Background image */}
      <div className="absolute w-screen h-[160vh] inset-0 -z-10">
        <Image
          src={HeroImage}
          alt="Immigration success"
          fill
          className="object-cover"
          priority
        />
        <div className="w-screen h-32 absolute bottom-0 bg-gradient-to-b from-transparent to-white"></div>
      </div>
      {/* Main content */}
      <section
        id="home"
        className="relative max-w-screen-md min-h-screen flex flex-col items-center justify-center pt-24 mx-auto "
      >
        <div className="inline-flex -mt-32 items-center rounded-full bg-white/60 backdrop-blur-sm px-3 py-1 text-xs sm:text-sm font-medium ring-1 ring-inset ring-white/20 shadow-sm">
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
          className={`mt-16 -ml-28 lg:-ml-48 font-extrabold text-base sm:text-lg lg:text-3xl text-center ${montserrat.className}`}
        >
          Your EB1A Green Card Journey
          <span className="relative  w-max h-2 overflow-hidden ">
            <span
              className={`absolute top-0 w-max ml-2 font-extrabold text-transparent bg-gradient-to-r from-[#3c80bb] to-[#b70000] bg-clip-text ${
                animating ? "animate-slide-out" : "animate-slide-in"
              }`}
            >
              {words[index]}
            </span>
          </span>
        </p>

        {/* Buttons */}
        <div className="mt-16 flex sm:flex-row gap-4 items-center justify-center sm:justify-start">
          <div
            onClick={() => openModal()}
            className="cursor-pointer lg:px-32 px-10 flex gap-3 items-center sm:px-32 py-5 text-sm font-semibold text-white bg-gradient-to-r from-[#34A1FF] to-[#ff4747] rounded-full shadow-[-10px_20px_40px_var(--shadow1),10px_20px_40px_var(--shadow2)]"
          >
            <span className="lg:text-lg">Book a Free Consultation</span>
            <Image src={Chevron} alt={"Chevron Right"} />
          </div>
        </div>
        <div className="w-screen absolute bottom-2">
          <p className="mt-10 font-black opacity-10 text-5xl lg:text-8xl text-center">
            Let’s Build Your Case
            <span className="inline-flex ml-2">
              <span className="w-5 lg:w-10 h-5 lg:h-10 bg-current rounded-full animate-dot-ease"></span>
              <span className="w-5 lg:w-10 h-5 lg:h-10 bg-current rounded-full animate-dot-ease ml-1 [animation-delay:200ms]"></span>
              <span className="w-5 lg:w-10 h-5 lg:h-10 bg-current rounded-full animate-dot-ease ml-1 [animation-delay:400ms]"></span>
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
