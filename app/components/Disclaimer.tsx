import React, { useState, useEffect } from "react";

const Disclaimer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isShown = sessionStorage.getItem("disclaimerIsShown");

    if (!isShown) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("disclaimerIsShown", "true");
    setIsVisible(false);
    document.body.style.overflow = "unset";
  };
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center text-black p-8 rounded-2xl shadow-2xl max-w-sm w-full mx-4 border border-white bg-gradient-to-br from-[#dff0ff] to-[#ffced6]">
        <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
        <p className="mb-4">
          At EB1A Visionary Path, we aim to share helpful insights for your
          journey, but please note that we are not a law firm. Our content is
          informational only and should not be considered legal advice or a
          substitute for professional legal guidance.
        </p>
        <button
          onClick={handleClose}
          className="text-white px-10 py-4 mt-8 font-bold bg-gradient-to-r from-[#34A1FF] to-[#ff4747] rounded-full shadow-[-10px_20px_40px_var(--shadow1),10px_20px_40px_var(--shadow2)] transition duration-300"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default Disclaimer;
