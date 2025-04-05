"use client";

import { CheckIcon } from "@heroicons/react/24/outline";

export default function Pricing() {
  const tiers = [
    {
      name: "Silver Plan",
      id: "tier-silver",
      href: "/contact",
      price: { amount: "6,999", additional: "3,000" },
      description: "Basic Support",
      features: [
        "4 Scholarly Articles",
        "4 Memberships/Fellowships",
        "2 Media Features",
        "2 Awards",
      ],
      featured: false,
    },
    {
      name: "Gold Plan",
      id: "tier-gold",
      href: "/contact",
      price: { amount: "10,999", additional: "5,000" },
      description: "Comprehensive Support",
      features: [
        "4 Scholarly Articles",
        "6 Memberships/Fellowships",
        "3 Media Features",
        "4 Awards",
        "Critical Role Documentation – 7 Support Letters",
        "Judging – 30 Journal Papers",
      ],
      featured: true,
    },
    {
      name: "Platinum Plan",
      id: "tier-platinum",
      href: "/contact",
      price: { amount: "14,999", additional: "6,000" },
      description: "Premium & Personalized",
      features: [
        "5 Scholarly Articles",
        "6 Memberships/Fellowships",
        "3 Media Features",
        "4 Awards",
        "5 Scholarly Articles",
        "Critical Role Documentation – 7 Support Letters (Drafted)",
        "Judging – 50 Journal Papers from Various Journals",
        "Group Discount Available for 2+ Candidates",
        "2 Virtual Speaking Opportunities",
        "Original Contribution Letter (Drafted)",
        "Final Merits Compilation",
        "Attorney Introduction",
      ],
      featured: false,
    },
  ];

  return (
    <div
      id="pricing"
      className="relative bg-gradient-to-br from-white via-blue-50/30 to-white py-24"
    >
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

        <div className="mx-auto mt-28 grid max-w-lg grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 ${
                tier.featured
                  ? "bg-gradient-to-br from-[#f8fcff] to-[#fff4f6] shadow-xl scale-105 ring-2 ring-white"
                  : "bg-white text-gray-900 ring-1 ring-gray-200"
              }`}
            >
              {tier.featured && (
                <>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-br from-[#34A1FF] to-[#FF6C85] px-4 py-1.5 text-xs font-medium text-white shadow-lg">
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
                      tier.featured ? "text-[#0e3e69]" : "text-gray-900"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  {tier.featured && (
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg
                        className="h-4 w-4 text-[#0e3e69]"
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
                    tier.featured ? "text-[#247cc8]" : "text-gray-600"
                  }`}
                >
                  {tier.description}
                </p>
                <div className="mt-6 flex items-center gap-x-2">
                  {tier.featured ? (
                    <p className="w-max bg-clip-text bg-gradient-to-r from-[#2c5797] to-[#ff2a4e]">
                      <span
                        className={
                          "text-4xl font-bold tracking-tight text-transparent"
                        }
                      >
                        ${tier.price.amount}
                      </span>
                    </p>
                  ) : (
                    <span
                      className={
                        "text-4xl font-bold tracking-tight text-gray-900"
                      }
                    >
                      ${tier.price.amount}
                    </span>
                  )}
                  <span
                    className={`text-sm font-semibold leading-6 ${
                      tier.featured ? "text-[#0e3e69]" : "text-gray-600"
                    }`}
                  >
                    (Additional Cost: ~${tier.price.additional} Approx.)
                  </span>
                </div>

                {tier.featured ? (
                  <a
                    href={tier.href}
                    className={`mt-8 block rounded-xl px-6 py-4 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all shadow-[-10px_20px_40px_var(--shadow1),10px_20px_40px_var(--shadow2)] duration-200 ${"bg-gradient-to-r from-[#34A1FF] to-[#FF6C85]"}`}
                  >
                    Get started
                  </a>
                ) : (
                  <div className="mt-6 cursor-pointer flex max-w-sm rounded-xl bg-gradient-to-tr from-[#34A1FF] to-[#FF6C85] p-0.5 shadow-lg">
                    <div className="flex flex-1 items-center justify-center font-bold text-xl bg-white px-6 py-3 rounded-xl">
                      <div className="bg-clip-text w-max bg-gradient-to-tr from-[#34A1FF] to-[#FF6C85]">
                        <p className="text-transparent">Get started</p>
                      </div>
                    </div>
                  </div>
                )}

                <ul
                  role="list"
                  className={`mt-8 space-y-3 text-sm leading-6 ${
                    tier.featured ? "text-gray-600" : "text-gray-600"
                  }`}
                >
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex gap-x-3">
                      <CheckIcon
                        className={`h-6 w-5 flex-none ${
                          tier.featured ? "text-[#34A1FF]" : "text-gray-400"
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
