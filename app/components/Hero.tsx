"use client";

import Link from "next/link";
import Image from "next/image";
import HeroImage from "@/public/images/hero-image.jpg";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden min-h-screen">
      {/* Background image with overlay */}
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

      {/* Main content */}
      <div className="relative min-h-screen flex flex-col lg:flex-row lg:gap-10 items-center justify-center py-20 px-4 sm:px-6 lg:px-28">
        {/* Left content */}
        <div className="">
          <div className="mx-auto max-w-3xl text-center lg:text-left lg:mx-0 lg:max-w-none">
            <div className="relative">
              <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-xs sm:text-sm font-medium text-white ring-1 ring-inset ring-white/20 shadow-sm">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
                </span>
                Bypass the H-1B lottery
              </div>
              <h1 className="mt-6 sm:mt-10 text-3xl sm:text-4xl lg:text-7xl font-bold tracking-tight text-white">
                Your Path to{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                    Extraordinary Ability
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
                Immigration
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-gray-300">
                Get an EB1A Green Card in FEW Days. No Oscar Needed!
              </p>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-start">
                <Link
                  href="https://calendly.com/eb1a-visionarypath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <span className="relative z-10">BOOK YOUR SLOT</span>
                </Link>
                <span className="text-[#c0ebff8f] text-sm sm:text-base">
                  with our EB1A Experts
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right content - Feature cards in collage grid */}
        <div className="mt-12 lg:mt-0 lg:pl-8">
          <div className="relative space-y-4">
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/5 p-6 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/10 hover:translate-x-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative text-left">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    Expert guidance for EB1A, O1A, and EB2 NIW visas.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/5 p-6 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/10 hover:translate-x-1 lg:ml-6">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative text-left">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    We help you present your achievements effectively and
                    navigate the immigration process with confidence.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/5 p-6 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/10 hover:translate-x-1 lg:ml-12">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative text-left">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    Provide a strong first impression, establish credibility,
                    and encourage engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>
    </div>
  );
}
