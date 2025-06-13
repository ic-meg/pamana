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
      className={`absolute top-4 right-4 z-50 
        w-[320px] h-auto px-3 py-2 
        bg-[#F4EAD5] border border-[#8B5E3C] 
        shadow-[2px_2px_4px_rgba(0,0,0,0.4)] 
        font-serif text-[13px] leading-tight tracking-wide
        transition-all duration-500 ease-out
        ${
          visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
    >
      {/* Header Bar */}
      <div className="flex justify-between items-center  text-black px-2 py-[2px] h-[24px] border-b border-gray-300">
        <div className="flex items-center gap-2">
          <img src={Message} alt="icon" className="w-[14px] h-[14px]" />
          <span className="text-xs font-semibold italic text-gray-700">
            Dispatch Message
          </span>
        </div>
        <button
          className="text-gray-600 text-xs hover:text-red-400"
          onClick={() => setVisible(false)}
        >
          ✕
        </button>
      </div>

      {/* Body Content */}
      <div className="mt-2 px-1">
        <p className="text-[#3B2F2F]">
          <strong>From the Archives:</strong>
          <br />
          Welcome to <span className="italic">Pamana</span> Jose Rizal
          <br />
          Dive into the story of our national hero.
        </p>
      </div>
    </div>
  );
};

export default WelcomePopup;
