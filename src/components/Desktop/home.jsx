import React from "react";

import scrollIcon from "../../assets/icons/scroll.png";
import rizal from "../../assets/images/rizal-portrait.png";
import HomeContent from "../Desktop/Feather";

const Home = ({ setActiveTab }) => {
  return (
    <HomeContent isScrollable={false} isHome={true} setActiveTab={setActiveTab}>
      <div className="">
        {/* Rizal */}
        <img
          src={rizal}
          alt="Jose Rizal"
          className="absolute right-10 bottom-12 w-64 sm:w-72 md:w-80 z-10 pointer-events-none"
        />

        {/* Main style */}
        <div className="relative z-20 max-w-[580px] 	ml-[190px] mr-auto mt-[40px] text-left pr-[30px] sm:pr-[36px] md:pr-[48px]">
          {/* Header */}
          <h1 className="text-[36px] sm:text-[55px] font-extrabold uppercase tracking-wide font-coustard">
            JOSÉ RIZAL:
          </h1>
          <h2 className="text-xl sm:text-2xl mt-2 font-bold tracking-wider font-coustard">
            THE DOCTOR, THE WRITER, <br /> THE REVOLUTIONARY
          </h2>
        </div>

        {/* Scroll and Published */}
        <p className="mt-0 ml-[90px] text-[16px] sm:text-lg font-bold flex items-center gap-2 font-coustard">
          <img src={scrollIcon} alt="Scroll" className="w-[90px] h-[90px]" />
          <span>Published: June 19, 1861 - Never Forgotten</span>
        </p>

        {/* Description */}
        <p className="-mt-5 ml-[90px] text-[1px] sm:text-[17px] leading-relaxed text-left max-w-[460px]">
          <span className="pl-[100px] block">
            A man of intellect and unwavering patriotism,
          </span>
          José Rizal dedicated his life to the fight for Filipino freedom
          through words and wisdom. Trained as a physician, gifted as a writer,
          and fearless in his convictions, he wielded his pen as a weapon
          against colonial oppression. His legacy endures as a symbol of hope,
          courage, and national pride.
        </p>

        {/* Buttons */}
        <div className="mt-8 ml-[90px] space-y-4">
          {/* First Row: 3 buttons */}
          <div className="flex gap-2">
            {["INTRO", "BIOGRAPHY", "LITERARY", "POLITICAL"].map((label) => (
              <button
                key={label}
                onClick={() => setActiveTab(label.toLowerCase())}
                className="px-4 py-1 text-sm sm:text-base border-2 border-[#543312] bg-[#fff7ea] rounded-[8px] shadow-md hover:bg-[#f5e9d8] font-semibold"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Second Row: 6 buttons  */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 ml-[-80px] mt-[-10px]">
            {[
              "LEGACY",
              "TIMELINE",
              "QUOTES",
              "PHOTOS",
              "OPINIONS",
              "REFERENCES",
            ].map((label) => (
              <button
                key={label}
                onClick={() => setActiveTab(label.toLowerCase())}
                className="px-4 py-1 text-sm sm:text-base border-2 border-[#543312] bg-[#fff7ea] rounded-[8px] shadow-md hover:bg-[#f5e9d8] font-semibold"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </HomeContent>
  );
};

export default Home;
