"use client";

import Image from "next/image";
import React, { useState } from "react";
import aero from "@/public/images/aero.svg";
import core1 from "@/public/images/core1.svg";
import choose2 from "@/public/images/choose2.svg";
import core3 from "@/public/images/core3.svg";
import core4 from "@/public/images/core4.svg";
import Calendar from "./Calendar";
import Chevron from "@/public/images/chevron.svg";

const content = [
  {
    title: "Integrity",
    description: "Transparent and honest assessment of eligibility",
    img: core1,
  },
  {
    title: "Excellence",
    description: "Helping clients showcase their best achievements",
    img: choose2,
  },
  {
    title: "Commitment",
    description: "Personalized support to strengthen every case",
    img: core3,
  },
  {
    title: "Innovation",
    description: "Data-driven approach to profile-building",
    img: core4,
  },
];

const CoreValues = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section>
        <div className="mx-auto max-w-[70vw] lg:max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 px-4 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-500/20 mb-4">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
            </span>
            We Build Profiles That Win EB1A Approvals above why choose us
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mt-3 text-sm leading-6 lg:leading-8 text-gray-600">
            We help you present your achievements effectively and navigate the
            immigration process with confidence.
          </p>
          <div className="flex items-end justify-end w-full">
            <Image
              className="-mr-[5vw] lg:-mr-32 -mt-5 lg:-mt-12"
              src={aero}
              width={150}
              alt={"Aero"}
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-32 grid grid-cols-1 gap-x-12 gap-y-20 lg:grid-cols-2">
          {content.map((item, index) => (
            <div
              key={index}
              className="relative pt-12 flex flex-col items-center rounded-3xl p-8 bg-white/10 backdrop-filter backdrop-blur-sm shadow-2xl shadow-black/10 transition-all duration-500 hover:-translate-y-4 border border-white/20"
            >
              <div className="absolute -top-8 rounded-xl w-max p-3 bg-gradient-to-br from-[#34A1FF] to-[#FF6C85] shadow-[-10px_20px_40px_var(--shadow1),10px_20px_40px_var(--shadow2)]">
                <Image src={item.img} width={40} alt={item.title} />
              </div>
              <h3 className="mt-4 text-center font-bold text-lg text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-center leading-5 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="my-32 mx-auto w-max flex sm:flex-row gap-4 items-center justify-center sm:justify-start">
          <div
            onClick={() => openModal()}
            className="cursor-pointer lg:px-32 px-10 flex gap-3 items-center sm:px-32 py-5 text-sm font-semibold text-white bg-gradient-to-r from-[#34A1FF] to-[#ff4747] rounded-full shadow-[-10px_20px_40px_var(--shadow1),10px_20px_40px_var(--shadow2)]"
          >
            <span className="lg:text-lg">Book a Free Consultation</span>
            <Image src={Chevron} alt={"Chevron Right"} />
          </div>
        </div>
      </section>
      {isModalOpen && <Calendar closeModal={closeModal} root={"about"} />}
    </>
  );
};

export default CoreValues;
