"use client";

import Link from "next/link";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function Pricing() {
  const tiers = [
    {
      name: "Gold Plan",
      id: "tier-gold",
      href: "/contact",
      price: { monthly: "499" },
      description: "Basic Support",
      features: [
        "Profile assessment",
        "General eligibility guidance",
        "Assistance in collecting evidence",
      ],
      featured: false,
    },
    {
      name: "Silver Plan",
      id: "tier-silver",
      href: "/contact",
      price: { monthly: "999" },
      description: "Comprehensive Support",
      features: [
        "Everything in Gold",
        "Strategic profile-building",
        "Assistance in preparing recommendation letters",
      ],
      featured: true,
    },
    {
      name: "Platinum Plan",
      id: "tier-platinum",
      href: "/contact",
      price: { monthly: "1,999" },
      description: "Premium & Personalized",
      features: [
        "Everything in Silver",
        "Personalized coaching and strategy calls",
        "End-to-end evidence compilation and optimization",
      ],
      featured: false,
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-white py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">
                Choose your path to EB1A success
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                Select the plan that aligns with your goals and timeline
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-blue-600"
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
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 ${
                tier.featured
                  ? "bg-gradient-to-br from-white via-blue-50 to-white shadow-xl scale-105 ring-2 ring-blue-500/20"
                  : "bg-white text-gray-900 ring-1 ring-gray-200"
              }`}
            >
              {tier.featured && (
                <>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-blue-600 px-4 py-1.5 text-xs font-medium text-white shadow-lg">
                      Most Popular
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5" />
                </>
              )}

              <div className="relative">
                <div className="flex items-center justify-between">
                  <h3
                    id={tier.id}
                    className={`text-lg font-semibold leading-8 ${
                      tier.featured ? "text-blue-600" : "text-gray-900"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  {tier.featured && (
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg
                        className="h-4 w-4 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <p
                  className={`mt-4 text-sm leading-6 ${
                    tier.featured ? "text-gray-600" : "text-gray-600"
                  }`}
                >
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span
                    className={`text-4xl font-bold tracking-tight ${
                      tier.featured ? "text-blue-600" : "text-gray-900"
                    }`}
                  >
                    ${tier.price.monthly}
                  </span>
                  <span
                    className={`text-sm font-semibold leading-6 ${
                      tier.featured ? "text-gray-600" : "text-gray-600"
                    }`}
                  >
                    /month
                  </span>
                </p>
                <a
                  href={tier.href}
                  className={`mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200 ${
                    tier.featured
                      ? "bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600"
                      : "bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600"
                  }`}
                >
                  Get started
                </a>
                <ul
                  role="list"
                  className={`mt-8 space-y-3 text-sm leading-6 ${
                    tier.featured ? "text-gray-600" : "text-gray-600"
                  }`}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className={`h-6 w-5 flex-none ${
                          tier.featured ? "text-blue-600" : "text-gray-400"
                        }`}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
