"use client";

import Image from "next/image";
import HeroImage from "@/public/images/hero-bg.svg";
import Chevron from "@/public/images/chevron.svg";
import Services from "./Services";
import { Playfair_Display, Montserrat } from "next/font/google";
import { useState } from "react";
import Calendar from "./Calendar"; // Make sure to create this component

const playfair = Playfair_Display({ subsets: ["latin"], weight: "600" });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="relative isolate min-h-[150vh] text-black">
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
      <div
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
          className={`mt-12 opacity-70 text-base sm:text-lg lg:text-3xl text-center ${montserrat.className}`}
        >
          Get an <strong>EB1A Green Card</strong> in FEW Days.
          <strong>No Oscar Needed!</strong>
        </p>

        {/* <p className="mt-4 sm:mt-6 opacity-70 text-sm lg:text-base text-center">
          We help you present your achievements effectively and navigate the
          immigration process with confidence.
        </p> */}

        {/* Buttons */}
        <div className="mt-20 sm:mt-10 flex sm:flex-row gap-4 items-center justify-center sm:justify-start">
          <div
            onClick={openModal}
            className="w-max cursor-pointer px-6 flex gap-3 items-center sm:px-8 py-5 text-sm font-semibold text-white bg-gradient-to-r from-[#34A1FF] to-[#ff4747] rounded-full shadow-[-10px_20px_40px_var(--shadow1),10px_20px_40px_var(--shadow2)]"
          >
            <span className="text-lg">Book a Free Consultation</span>
            <Image src={Chevron} alt={"Chevron Right"} />
          </div>
        </div>
      </div>

      <Services />

      {/* Modal */}
      {isModalOpen && <Calendar closeModal={closeModal} />}
    </div>
  );
}
