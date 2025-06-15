import React from "react";
import frame from "../../assets/icons/scroll.svg";
import feather from "../../assets/icons/feather.png";

const Feather = ({ children }) => {
  return (
    <div className="relative w-full h-full text-[#543312]  font-serif px-6 py-8 overflow-hidden">
      {/* Background Frame */}
      <img
        src={frame}
        alt="Frame"
        className="absolute inset-0 w-full h-full object-contain z-0 pointer-events-none"
      />

      {/* Decorative Feather */}
      <img
        src={feather}
        alt="Feather"
        className="absolute top-[15px] left-[30px] w-36 sm:w-44 md:w-52 z-10"
      />

      {/* Page Content goes here */}
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default Feather;
