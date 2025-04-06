import SOL from "@/public/images/SOL.png";
import aero from "@/public/images/aero.png";
import Image from "next/image";

const serviceContent = [
  {
    title: "EB1A Visa",
    description:
      "For individuals with extraordinary ability in sciences, arts, education, business, or athletics.",
  },
  {
    title: "O1A Visa",
    description:
      "For individuals with extraordinary ability in business, science, education, or athletics.",
  },
  {
    title: "EB2 NIW",
    description:
      "For professionals with advanced degrees or exceptional ability in their field.",
  },
];

export default function Services() {
  return (
    <div id="services" className="relative pb-24 sm:pb-32 overflow-hidden ">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-[80vw] lg:max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 px-4 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-500/20 mb-4">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
            </span>
            Expert Immigration Services
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Services We Offer
          </h2>
          <p className="mt-3 text-sm leading-6 lg:leading-8 text-gray-600">
            We provide expert guidance for various immigration pathways, helping
            you navigate the complex process with confidence.
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

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-3">
          {/* Visa Cards */}
          {serviceContent.map((service, index) => (
            <article
              key={index}
              className="group relative isolate flex flex-col justify-end rounded-3xl bg-white/10 backdrop-filter backdrop-blur-sm p-8 shadow-2xl shadow-black/10 transition-all duration-500 hover:-translate-y-1 border border-white/20"
            >
              <div
                className="absolute inset-0 -z-10 rounded-3xl transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#003E7412] group-hover:to-[#EF002912]"
                style={
                  { "--tw-gradient-angle": "120deg" } as React.CSSProperties
                }
              />
              <Image
                src={SOL}
                width={60}
                alt={service.title}
                className="-mt-20"
              />
              <h3 className="mt-6 text-2xl w-max font-semibold leading-8 text-gray-900 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#34A1FF] group-hover:to-[#ff4747]">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-gray-500">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
