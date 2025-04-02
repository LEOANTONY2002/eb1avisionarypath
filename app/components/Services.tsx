"use client";

import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 px-4 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-500/20 mb-8">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
            </span>
            Expert Immigration Services
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Immigration Solutions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide expert guidance for various immigration pathways, helping
            you navigate the complex process with confidence.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-3">
          {/* EB1A Visa Card */}
          <article className="group relative isolate flex flex-col justify-end overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-xl ring-1 ring-gray-200/50 transition-all duration-500 hover:shadow-2xl hover:ring-blue-500/20 hover:-translate-y-1">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500">
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="mt-6 text-2xl font-semibold leading-8 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              EB1A Visa
            </h3>
            <p className="mt-4 text-base leading-7 text-gray-600">
              For individuals with extraordinary ability in sciences, arts,
              education, business, or athletics.
            </p>
            <div className="mt-8 flex items-center text-sm font-medium text-blue-600">
              <Link href="/services/eb1a" className="group/link">
                <span>Learn more about EB1A</span>
                <svg
                  className="ml-2 inline-block h-4 w-4 transition-transform group-hover/link:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </article>

          {/* O1A Visa Card */}
          <article className="group relative isolate flex flex-col justify-end overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-xl ring-1 ring-gray-200/50 transition-all duration-500 hover:shadow-2xl hover:ring-purple-500/20 hover:-translate-y-1">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-500">
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mt-6 text-2xl font-semibold leading-8 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
              O1A Visa
            </h3>
            <p className="mt-4 text-base leading-7 text-gray-600">
              For individuals with extraordinary ability in business, science,
              education, or athletics.
            </p>
            <div className="mt-8 flex items-center text-sm font-medium text-purple-600">
              <Link href="/services/o1a" className="group/link">
                <span>Learn more about O1A</span>
                <svg
                  className="ml-2 inline-block h-4 w-4 transition-transform group-hover/link:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </article>

          {/* EB2 NIW Card */}
          <article className="group relative isolate flex flex-col justify-end overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-xl ring-1 ring-gray-200/50 transition-all duration-500 hover:shadow-2xl hover:ring-indigo-500/20 hover:-translate-y-1">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-500">
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="mt-6 text-2xl font-semibold leading-8 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
              EB2 NIW
            </h3>
            <p className="mt-4 text-base leading-7 text-gray-600">
              For professionals with advanced degrees or exceptional ability in
              their field.
            </p>
            <div className="mt-8 flex items-center text-sm font-medium text-indigo-600">
              <Link href="/services/eb2-niw" className="group/link">
                <span>Learn more about EB2 NIW</span>
                <svg
                  className="ml-2 inline-block h-4 w-4 transition-transform group-hover/link:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
