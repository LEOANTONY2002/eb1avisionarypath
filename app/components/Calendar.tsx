"use client";

import { PopupModal } from "react-calendly";
import { useEffect } from "react";

const pageSettings = {
  backgroundColor: "FFF4F4",
  primaryColor: "003E74",
  textColor: "C50606",
};

const Calendar = ({ closeModal }: { closeModal: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="absolute z-30 w-screen h-screen bg-[#fdfeff24] backdrop-blur-lg flex items-center justify-center overflow-y-auto">
      {document.getElementById("root") && (
        <PopupModal
          url={"https://calendly.com/eb1avisionarypath/30min"}
          rootElement={document.getElementById("root") as HTMLElement}
          onModalClose={function (e: React.MouseEvent<HTMLElement>): void {
            closeModal();
          }}
          open={true}
          pageSettings={pageSettings}
        />
      )}
    </div>
  );
};

export default Calendar;
