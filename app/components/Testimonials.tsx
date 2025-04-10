"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Loading from "../loading";
import aero from "@/public/images/aero.webp";
import quote_start from "@/public/images/quote_start.webp";

interface Testimonial {
  _id: string;
  name: string;
  position: string;
  company: string;
  title: string;
  testimonial: string;
  visaType: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTestimonialShown, setIsTestimonialShown] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);

  let testimonial = testimonials[currentIndex];
  let interval: any = null;

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/api/testimonials");
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsTestimonialShown(true);
      interval = setInterval(() => {
        goToNext();
      }, 10000);
    }, 100);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [currentIndex]);

  // Go to the previous testimonial

  const goToPrevious = () => {
    clearInterval(interval);
    if (testimonialRef.current) {
      testimonialRef.current.style.transform = `translateX(100%)`;
    }
    setIsTestimonialShown(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }, 300);
  };

  // Go to the next testimonial
  const goToNext = async () => {
    clearInterval(interval);
    if (testimonialRef.current) {
      testimonialRef.current.style.transform = `translateX(-100%)`;
    }
    setIsTestimonialShown(false);
    setTimeout(() => {
      setCurrentIndex(
        currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
      );
    }, 300);
  };

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center min-h-[600px]">
  //       <Loading />
  //     </div>
  //   );
  // }

  return (
    <section id="testimonials" className="relative w-screen py-24 bg-white">
      {loading ? (
        <div className="flex justify-center items-center min-h-[600px]">
          <Loading />
        </div>
      ) : (
        <>
          <div className="">
            <div className="mx-auto max-w-[80vw] lg:max-w-2xl text-center">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 px-4 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-500/20 mb-4">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
                </span>
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Client Success Stories
              </h2>
              <p className="mt-3 text-sm leading-6 lg:leading-8 text-gray-600">
                Real experiences from our clients who have achieved their
                immigration dreams.
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

            <div className="mt-20 ">
              {/* Testimonials container */}
              <div className="flex relative w-screen gap-5 px-7 lg:px-32">
                <Image
                  className="absolute -top-[70px] left-[50px] text-[400px]"
                  src={quote_start}
                  width={150}
                  alt="Testimonial"
                />

                <Image
                  className="absolute rotate-180 -bottom-[70px] right-[50px] text-[400px]"
                  src={quote_start}
                  width={150}
                  alt="Testimonial"
                />

                <div
                  ref={testimonialRef}
                  key={testimonial._id}
                  className={`w-screen relative transition-all duration-300 ease-in-out ${
                    isTestimonialShown ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="w-full flex flex-col gap-3 lg:gap-5 items-center bg-gradient-to-br from-[#003e740f] to-[#ef00280e] backdrop-blur-sm rounded-[40px] lg:rounded-[50px] lg:rounded-es p-6 lg:p-8 border border-white shadow-[-10px_50px_100px_#003e740f,20px_50px_100px_#ef00280e]">
                    <div>
                      <h3 className="font-extrabold text-lg text-center lg:text-2xl text-transparent bg-clip-text bg-gradient-to-br from-[#34A1FF] to-[#FF6C85]">
                        {testimonial.name}
                      </h3>
                      <p className="text-[12px] text-center text-gray-500">
                        {testimonial.position} at {testimonial.company}
                      </p>
                    </div>
                    <h2 className="font-extrabold mt-1 text-xl lg:text-3xl text-center text-transparent bg-clip-text bg-gradient-to-br from-[#34A1FF] to-[#FF6C85]">
                      {testimonial.title}
                    </h2>
                    <p className="text-black text-center lg:mb-6 text-sm lg:text-[16px] leading-relaxed">
                      "{testimonial.testimonial}"
                    </p>

                    {/* <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-blue-600">
                  {testimonial.visaType}
                </span>
              </div> */}
                  </div>

                  {/* <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="lg:bg-gradient-to-br from-[#003e7415] to-[#ef002816] lg:backdrop-blur-sm rounded-[30px] lg:rounded-[40px] lg:rounded-ss mt-2 lg:p-8 lg:border border-white lg:shadow-[-10px_50px_100px_#003e740f,20px_50px_100px_#ef00280e]"></div>
                    <div className=""></div>
                  </div> */}
                </div>
              </div>
              {/* Navigation buttons */}
              <div className="flex z-[1] mt-8 items-center justify-center gap-5">
                <button
                  onClick={() => goToPrevious()}
                  className="shadow-2xl shadow-black/50 bg-white rounded-full p-4 hover:bg-gradient-to-br hover:from-[#4fadff0f] hover:to-[#ff284c0e] focus:outline-none transition-colors duration-200"
                  aria-label="Previous testimonial"
                >
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => goToNext()}
                  className="shadow-2xl shadow-black/50 bg-white rounded-full p-4 hover:bg-gradient-to-br hover:from-[#4fadff0f] hover:to-[#ff2c4f0e] focus:outline-none transition-colors duration-200"
                  aria-label="Next testimonial"
                >
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
