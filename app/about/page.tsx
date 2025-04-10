import { Metadata } from "next";
import Image from "next/image";
import HeroImage from "@/public/images/about-bg.webp";
import { Montserrat, Playfair_Display, Lavishly_Yours } from "next/font/google";
import aero from "@/public/images/aero.svg";
import core1 from "@/public/images/core1.svg";
import choose2 from "@/public/images/choose2.svg";
import core3 from "@/public/images/core3.svg";
import core4 from "@/public/images/core4.svg";

export const metadata: Metadata = {
  title: "About Us - EB1A Visionary Path",
  description:
    "Learn more about EB1A Visionary Path, our mission, vision, and core values. We are dedicated to guiding EB1A aspirants with personalized support and expert insights.",
  keywords: [
    "EB1A Visionary Path",
    "About EB1A",
    "Immigration services",
    "Mission and Vision",
    "Core values",
  ],
  openGraph: {
    title: "About Us - EB1A Visionary Path",
    description:
      "Learn more about EB1A Visionary Path, our mission, vision, and core values. We are dedicated to guiding EB1A aspirants with personalized support and expert insights.",
    url: "https://eb1avisionarypath.com/about",
    images: [
      {
        url: "/images/about-bg.webp",
        width: 1200,
        height: 630,
        alt: "About Us - EB1A Visionary Path",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - EB1A Visionary Path",
    description:
      "Learn more about EB1A Visionary Path, our mission, vision, and core values. We are dedicated to guiding EB1A aspirants with personalized support and expert insights.",
    images: ["/images/about-bg.webp"],
  },
};

const playfair = Playfair_Display({ subsets: ["latin"], weight: "600" });
const lavishly = Lavishly_Yours({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"] });

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

export default function About() {
  return (
    <main className="bg-white w-screen overflow-x-hidden relative">
      {/* Header Section */}
      <section className="isolate max-w-7xl text-white h-[70vh] mx-auto px-4 flex flex-col items-center justify-center gap-5 sm:px-6 lg:px-8 text-center">
        <div className="absolute w-screen h-[110vh] inset-0 -z-10">
          <Image
            src={HeroImage}
            alt="Immigration success"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
        <div className="inline-flex items-center mt-52 rounded-full bg-white/60 text-black backdrop-blur-sm px-3 py-1 text-xs sm:text-sm font-medium ring-1 ring-inset ring-white/20 shadow-sm">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
          </span>
          Our Story
        </div>
        <h1
          className={`text-5xl font-extrabold sm:text-6xl ${playfair.className}`}
        >
          About Us
        </h1>
        <p
          className={`my-4 text-sm sm:text-lg border bg-white/15 backdrop-blur-md border-white p-5 rounded-3xl m-2 ${montserrat.className}`}
        >
          At EB1A Visionary Path, we are dedicated to guiding EB1A aspirants
          with end-to-end support and valuable insights. Our goal is to simplify
          the complex immigration journey and help individuals move forward with
          clarity and confidence. With a focus on empowerment and personalised
          guidance, we equip our clients with the knowledge and resources needed
          to confidently pursue their EB1A dreams. Start your journey to success
          with EB1A Visionary Path your reliable partner in navigating the road
          to U.S. immigration excellence.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="mt-80 max-w-7xl mx-auto text-black">
        <div className="flex flex-col-reverse items-center justify-center gap-12 rounded-3xl max-w-[80vw] mx-auto p-12 md:p-24 mb-12 md:flex-row bg-gradient-to-br from-[#003E7412] to-[#EF002912]">
          <p className="text-sm md:text-lg">
            “To become the most trusted partner for high-achieving professionals
            and entrepreneurs seeking U.S. immigration through EB1A, O1A, and
            EB2 NIW by offering unparalleled profile-building services that
            highlight their excellence and global impact.”
          </p>
          <div className="flex flex-col gap-6">
            <p
              className={`text-2xl md:text-[32px] text-right -mb-6 ${lavishly.className}`}
            >
              Our
            </p>
            <h2
              className={`text-5xl md:text-[64px] bg-clip-text w-max bg-gradient-to-r from-[#ff6c6c] to-[#e40026] text-transparent ${playfair.className}`}
            >
              VISION
            </h2>
          </div>
        </div>
      </section>

      <section className="mt-12 max-w-7xl mx-auto text-black">
        <div className="flex flex-col items-center justify-center gap-12 rounded-3xl max-w-[80vw] mx-auto p-12 md:p-24 mb-48 md:flex-row bg-gradient-to-br from-[#003E7412] to-[#EF002912]">
          <div className="flex flex-col gap-6">
            <p
              className={`text-2xl md:text-[32px] text-left -mb-6 ${lavishly.className}`}
            >
              Our
            </p>
            <h2
              className={`text-5xl md:text-[64px] bg-clip-text w-max bg-gradient-to-r from-[#6cb6ff] to-[#0067e4] text-transparent ${playfair.className}`}
            >
              MISSION
            </h2>
          </div>
          <p className="text-sm md:text-lg">
            “Empowering extraordinary individuals to achieve their immigration
            goals by providing strategic guidance, compelling evidence-building,
            and expert insights. We are dedicated to helping professionals and
            entrepreneurs present their best case for EB1A, O1A, and EB2 NIW
            categories with clarity, confidence, and credibility.”
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section>
        <div className="mx-auto max-w-[70vw] lg:max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 px-4 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-500/20 mb-4">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
            </span>
            Expert Immigration Services
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
        <div className="max-w-5xl mx-auto mt-32 my-80 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {content.map((item, index) => (
            <div
              key={index}
              className="relative pt-12 flex flex-col items-center rounded-3xl p-8 bg-white/10 backdrop-filter backdrop-blur-sm shadow-2xl shadow-black/10 transition-all duration-500 hover:-translate-y-1 border border-white/20"
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
    </main>
  );
}
