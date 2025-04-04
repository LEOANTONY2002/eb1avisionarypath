import { InlineWidget } from "react-calendly";

const Calendar = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center overflow-y-auto">
      <div className="relative bg-white rounded-2xl max-w-xl mt-16">
        <button
          onClick={closeModal}
          className="absolute -top-3 -right-3 bg-white rounded-2xl p-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* <h2 className="text-2xl font-bold mb-4">Book a Consultation</h2> */}
        <div className="rounded-2xl overflow-hidden">
          <InlineWidget
            styles={{ height: "70vh", borderRadius: "40px", padding: "20px" }}
            url="https://calendly.com/eb1avisionarypath/30min"
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
