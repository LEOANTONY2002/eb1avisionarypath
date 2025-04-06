"use client";

import Image from "next/image";
import { useState } from "react";
import aero from "@/public/images/aero.png";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is EB1A?",
      answer:
        "EB1A is an employment-based immigrant visa category for individuals with extraordinary ability in their field. It's considered one of the most prestigious immigration categories and doesn't require a job offer or labor certification.",
    },
    {
      question: "Who qualifies for EB1A?",
      answer:
        "To qualify for EB1A, you must demonstrate extraordinary ability in your field through sustained national or international acclaim. This can be proven through various forms of evidence, including major awards, publications, patents, and significant contributions to your field.",
    },
    {
      question: "What evidence is required for EB1A?",
      answer:
        "You must provide evidence meeting at least three of the following criteria: original scientific contributions, authorship of scholarly articles, service as a judge of others' work, membership in associations requiring outstanding achievements, and other comparable evidence of extraordinary ability.",
    },
    {
      question: "How long does the EB1A process take?",
      answer:
        "The processing time varies but typically ranges from 6 to 12 months. Premium processing is available for faster adjudication within 15 calendar days.",
    },
    {
      question: "Do I need a job offer for EB1A?",
      answer:
        "No, EB1A is unique among employment-based categories as it doesn't require a job offer or labor certification. You can self-petition for this category.",
    },
  ];

  return (
    <div id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-[80vw] lg:max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 px-4 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-500/20 mb-8">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
            </span>
            FAQ
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm leading-6 lg:leading-8 text-gray-600">
            Find answers to common questions about EB1A immigration
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

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-[#50a1ff] to-[#ff2a4e] rounded-lg ${
                  openIndex === index && "p-[2px]"
                }`}
              >
                <div
                  className={`relative overflow-hidden rounded-lg border ${
                    openIndex === index
                      ? "border-gray-200 bg-white/90"
                      : "border-gray-200 bg-white"
                  } transition-all duration-300`}
                >
                  <button
                    className="flex w-full items-center justify-between p-6 text-left"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <div className="flex items-center">
                      <div
                        className={`mr-4 h-8 w-8 rounded-full ${
                          openIndex === index
                            ? "bg-gradient-to-br from-[#50a1ff] to-[#ff2a4e]"
                            : "bg-gray-100"
                        } flex items-center justify-center`}
                      >
                        <span
                          className={`text-sm font-medium ${
                            openIndex === index ? "text-white" : "text-gray-600"
                          }`}
                        >
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {faq.question}
                      </h3>
                    </div>
                    <svg
                      className={`h-5 w-5 flex-none text-gray-500 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-base text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
