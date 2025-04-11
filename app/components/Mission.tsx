import { Playfair_Display, Lavishly_Yours } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "600" });
const lavishly = Lavishly_Yours({ subsets: ["latin"], weight: "400" });

const Mission = () => {
  return (
    <>
      <section className="mt-80 lg:mt-[600px] max-w-7xl mx-auto text-black">
        <div className="flex flex-col-reverse items-center justify-center gap-12 rounded-3xl max-w-[80vw] mx-auto p-12 md:p-24 mb-12 md:flex-row bg-gradient-to-br from-[#003E7412] to-[#EF002912] border border-white hover:shadow-[-10px_20px_60px_var(--shadow1),10px_20px_60px_var(--shadow2)] hover:scale-[1.09] transition-all duration-300 ease-in-out">
          <p className="text-sm md:text-lg">
            “To become the most trusted partner for high-achieving professionals
            and entrepreneurs seeking U.S. immigration through EB1A, O1A, and
            EB2 NIW by offering unparalleled profile-building services that
            highlight their excellence and global impact.”
          </p>
          <div className="flex flex-col gap-6">
            <p
              className={`text-2xl md:text-[32px] text-center md:text-right -mb-6 ${lavishly.className}`}
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
      <section className="mt-32 max-w-7xl mx-auto text-black">
        <div className="flex flex-col items-center justify-center gap-12 rounded-3xl max-w-[80vw] mx-auto p-12 md:p-24 mb-48 md:flex-row bg-gradient-to-br from-[#003E7412] to-[#EF002912] border border-white hover:shadow-[-10px_20px_60px_var(--shadow1),10px_20px_60px_var(--shadow2)] hover:scale-[1.09] transition-all duration-300 ease-in-out">
          <div className="flex flex-col gap-6">
            <p
              className={`text-2xl md:text-[32px] text-center md:text-left -mb-6 ${lavishly.className}`}
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
    </>
  );
};

export default Mission;
