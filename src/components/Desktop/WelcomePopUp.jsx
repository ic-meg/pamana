import React, { useEffect, useState } from "react";
import Message from "../../assets/icons/quill-pen.svg";

const WelcomePopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);

      const hideTimer = setTimeout(() => {
        setVisible(false);
      }, 3000);

      return () => clearTimeout(hideTimer);
    }, 1000);

    return () => clearTimeout(showTimer);
  }, []);

  return (
    <div
      className={`absolute top-6 right-6 z-50
        w-[320px] h-auto px-4 py-3
        bg-[#fff8e7] border border-[#7B4C2C]
        rounded-md shadow-[4px_4px_0px_rgba(0,0,0,0.2)]
        font-serif text-[13.5px] leading-tight tracking-wide
        transition-all duration-500 ease-out
        ${
          visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
    >
      {/* Header Bar */}
      <div className="flex justify-between items-center text-[#5c3b1e] font-semibold italic border-b border-[#d8c2a9] pb-1 mb-2">
        <div className="flex items-center gap-2">
          <img src={Message} alt="icon" className="w-[15px] h-[15px]" />
          <span className="text-sm">Dispatch Message</span>
        </div>
        <button
          className="text-sm text-[#5c3b1e] hover:text-red-500 transition"
          onClick={() => setVisible(false)}
        >
          ✕
        </button>
      </div>

      {/* Body Content */}
      <div className="text-[#3d2b1f]">
        <p>
          <strong>From the Archives:</strong>
        </p>
        <p>
          Welcome to <span className="italic">Pamana</span> — Jose Rizal.
          <br />
          Dive into the story of our national hero.
        </p>
      </div>
    </div>
  );
};

export default WelcomePopup;
