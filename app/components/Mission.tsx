import BG from "@/public/images/vision-bg.webp";
import Image from "next/image";

const Mission = () => {
  return (
    <div
      id="about"
      className="relative gap-12 flex flex-col-reverse w-screen lg:h-screen lg:flex-row"
    >
      <div className="w-[100vw] flex flex-col p-6 gap-6 justify-end lg:w-[50vw] lg:gap-12 lg:p-24">
        <div className="flex flex-col">
          <h1 className="text-2xl lg:text-5xl">Our</h1>
          <h1 className="text-4xl lg:text-7xl font-black text-transparent bg-gradient-to-r bg-clip-text from-[#0887F6] to-[#003E74]">
            MISSION
          </h1>
        </div>
        <p className="text-sm w-[70vw] lg:w-[50vw] lg:text-2xl">
          “Empowering extraordinary individuals to achieve their immigration
          goals by providing strategic guidance, compelling evidence-building,
          and expert insights. We are dedicated to helping professionals and
          entrepreneurs present their best case for EB1A, O1A, and EB2 NIW
          categories with clarity, confidence, and credibility.”
        </p>
      </div>

      <div className="w-[100vw] flex flex-col p-6 gap-6 items-end lg:w-[50vw] lg:gap-12 lg:p-24">
        <div className="flex flex-col">
          <h1 className="text-2xl text-right lg:text-5xl">Our</h1>
          <h1 className="text-4xl text-right lg:text-7xl font-black text-transparent bg-gradient-to-r bg-clip-text from-[#ff5252] to-[#a90202]">
            VISION
          </h1>
        </div>
        <p className="text-sm w-[50vw] text-right lg:text-2xl">
          “To become the most trusted partner for high-achieving professionals
          and entrepreneurs seeking U.S. immigration through EB1A, O1A, and EB2
          NIW by offering unparalleled profile-building services that highlight
          their excellence and global impact.”
        </p>
      </div>

      <div className="absolute inset-0 bg-[#E9F5FF] -z-10">
        <Image src={BG} alt="Mission" fill className="object-cover" priority />
      </div>
    </div>
  );
};

export default Mission;
