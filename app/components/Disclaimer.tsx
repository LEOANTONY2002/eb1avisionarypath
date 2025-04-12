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
      <div className="relative text-center text-black p-8 rounded-2xl shadow-2xl max-w-sm w-full mx-4 border border-white bg-gradient-to-br from-[#dff0ff] to-[#ffced6]">
        {/* Close Icon */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition"
          aria-label="Close Disclaimer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
        <p className="mb-4">
          At EB1A Visionary Path, we aim to share helpful insights for your
          journey, but please note that we are not a law firm. Our content is
          informational only and should not be considered legal advice or a
          substitute for professional legal guidance.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
