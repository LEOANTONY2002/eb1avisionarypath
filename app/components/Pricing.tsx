import { CheckIcon } from "@heroicons/react/24/outline";
import aero from "@/public/images/aero.svg";
import Image from "next/image";

export default function Pricing({ openModal }: { openModal: () => void }) {
  const tiers = [
    {
      name: "Silver Plan",
      id: "tier-silver",
      href: "/contact",
      price: { amount: "6,999", additional: "3,000" },
      description:
        "Perfect for emerging leaders looking to establish their professional footprint.",
      features: [
        "Scholarly publications in renowned journals",
        "Prestigious memberships and fellowships within reputable organizations",
        "Featured appearances in select media platforms",
        "Recognitions & accolades from respected institutions",
      ],
      featured: false,
    },
    {
      name: "Gold Plan",
      id: "tier-gold",
      href: "/contact",
      price: { amount: "10,999", additional: "5,000" },
      description:
        "Ideal for professionals aiming to elevate their industry stature and thought leadership.",
      features: [
        "Scholarly contributions in internationally recognized journals",
        "Esteemed memberships and fellowships across industry bodies",
        "Media visibility through curated features",
        "Multiple distinguished awards to enhance credibility",
        "Comprehensive documentation of critical roles through influential industry endorsements",
        "Judging participation for reputed academic publications",
      ],
      featured: true,
    },
    {
      name: "Platinum Plan",
      id: "tier-platinum",
      href: "/contact",
      price: { amount: "14,999", additional: "6,000" },
      description:
        "Crafted for distinguished professionals seeking premium positioning and elite recognition globally.",
      features: [
        "Group benefits available for multiple candidates",
        "Advanced scholarly publications showcasing thought leadership",
        "Membership affiliations with highly regarded professional organizations",
        "Prominent media exposure across influential channels",
        "Honors and awards from industry-leading bodies",
        "Virtual speaking engagements to enhance public visibility",
        "Extensive documentation highlighting critical roles and global impact through expert endorsements",
        "Judging expertise across prestigious academic platforms",
        "Thoughtfully crafted documentation showcasing original contributions to your field",
        "Comprehensive final merits portfolio for optimal presentation",
        "Introduction to a trusted attorney for further professional guidance",
      ],
      featured: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative bg-gradient-to-br from-white via-blue-50/30 to-white py-24"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-[80vw] lg:max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 px-4 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-500/20 mb-4">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
            </span>
            Pricing Plans
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose your path to EB1A success
          </h2>
          <p className="mt-3 text-sm leading-6 lg:leading-8 text-gray-600">
            Select the plan that aligns with your goals and timeline
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

        <div className="mx-auto mt-28 grid max-w-lg grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-2xl p-8 m-4 transition-all duration-200 ${
                tier.featured
                  ? "bg-gradient-to-br from-[#f8fcff] to-[#fff4f6] shadow-xl scale-105 ring-2 ring-white hover:shadow-[-10px_20px_60px_var(--shadow1),10px_20px_60px_var(--shadow2)] hover:scale-[1.09]"
                  : "bg-white text-gray-900 ring-1 ring-gray-200 hover:shadow-lg hover:scale-[1.02]"
              }`}
            >
              {tier.featured && (
                <>
                  <div className="absolute bg-gradient-to-br from-[#7cc6ff2d] to-[#ff476927] rounded-full p-2 -top-5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-br from-[#34A1FF] to-[#FF6C85] px-4 py-1.5 text-xs font-medium text-white shadow-lg">
                      Most Popular
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5" />
                </>
              )}

              {tier.id == "tier-platinum" && (
                <>
                  <div className="absolute bg-gradient-to-br from-[#f8fcff] to-[#fff4f6] rounded-full p-2 -top-5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex border border-white items-center rounded-full bg-gradient-to-br from-[#34A1FF] to-[#FF6C85] bg-clip-text text-transparent px-4 py-1.5 text-xs font-medium shadow-lg">
                      Recommended
                    </span>
                  </div>
                </>
              )}

              <div className="relative">
                <div className="flex items-center justify-between">
                  <h3
                    id={tier.id}
                    className={`text-2xl font-bold leading-8 ${
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
                  className={`mt-1 text-sm leading-6 ${
                    tier.featured ? "text-[#247cc8]" : "text-gray-600"
                  }`}
                >
                  {tier.description}
                </p>

                {tier.featured ? (
                  <button
                    onClick={() => openModal()}
                    className={`mt-8 block w-full rounded-full px-6 py-4 text-center text-sm text-white font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all shadow-[-10px_20px_40px_var(--shadow1),10px_20px_40px_var(--shadow2)] duration-200 ${"bg-gradient-to-r from-[#34A1FF] to-[#FF6C85]"}`}
                  >
                    Get started
                  </button>
                ) : (
                  <div className="mt-6 cursor-pointer flex max-w-sm rounded-full bg-gradient-to-tr from-[#34A1FF] to-[#FF6C85] p-0.5 shadow-lg">
                    <div className="flex flex-1 items-center justify-center font-bold text-xl bg-white px-6 py-3 rounded-full">
                      <div className="bg-clip-text w-max bg-gradient-to-tr from-[#34A1FF] to-[#FF6C85]">
                        <button
                          onClick={() => openModal()}
                          className="text-transparent"
                        >
                          Get started
                        </button>
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
    </section>
  );
}
