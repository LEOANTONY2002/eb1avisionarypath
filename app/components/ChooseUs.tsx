import Image from "next/image";
import React from "react";
import aero from "@/public/images/aero.svg";
import choose1 from "@/public/images/choose1.svg";
import choose2 from "@/public/images/choose2.svg";
import choose3 from "@/public/images/choose3.svg";

const content = [
  {
    title: "Expert Guidance",
    description: "Specialized in EB1A, O1A, and EB2 NIW Profile Building",
    img: choose1,
  },
  {
    title: "Proven Track Record",
    description:
      "Successfully helped Numerous Clients strengthen their profiles",
    img: choose2,
  },
  {
    title: "Personalized Support",
    description: "Tailored strategies for your Unique Achievements",
    img: choose3,
  },
];

const ChooseUs = () => {
  return (
    <section id="whyus" className="mx-auto py-32 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-[80vw] lg:max-w-2xl text-center">
        <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 px-4 py-1.5 text-sm font-medium text-left text-blue-700 ring-1 ring-inset ring-blue-500/20 mb-4">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
          </span>
          Extraordinary Ability is Built — Not Just Born.
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Why Choose Us
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

      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
    </section>
  );
};

export default ChooseUs;
