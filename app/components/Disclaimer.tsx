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
      <div className="text-center text-black p-12 rounded-2xl shadow-2xl max-w-2xl w-full mx-4 border border-white bg-gradient-to-br from-[#dff0ff] to-[#ffced6]">
        <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
        <p className="mb-4">
          The content provided on this platform is intended for general
          informational purposes only and does not constitute legal advice. We
          strongly encourage consulting with a qualified immigration attorney
          for any legal concerns or questions related to your case. While we
          make every effort to present accurate and up-to-date information,
          there may be instances where updates or changes are not fully
          reflected. Any reliance on the information provided is done at your
          own discretion.
        </p>
        <button
          onClick={handleClose}
          className="text-white px-10 py-4 font-bold bg-gradient-to-r from-[#34A1FF] to-[#ff4747] rounded-full shadow-[-10px_20px_40px_var(--shadow1),10px_20px_40px_var(--shadow2)] transition duration-300"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default Disclaimer;
