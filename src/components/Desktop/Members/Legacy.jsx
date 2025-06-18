import React from "react"
import Feather from "../Feather"
import React, { useState } from "react";
import Feather from "../Feather";
import scrollOpen from "../../../assets/images/scroll-paper.png";

const scrolls = [
  {
    label: "Heroism & National Pride",
    text: `Dr. José Rizal is revered not just for his intellect but for his courage in standing against Spanish colonial rule. His kindness and love for the Filipino people sparked a revolution, and his legacy still influences our pride and identity as a nation.`,
  },
  {
    label: "Philippine Revolution Impact",
    text: `Even after his death, Rizal’s influence continued through the Philippine Revolution which led to our independence in 1898. His bravery laid the foundation for freedom, celebrated each year as Filipinos honor his courage and genius.`,
  },
  {
    label: "Rizal in Education",
    text: `To preserve his values and principles, educational institutions in the Philippines require students to study his life. Rizal’s teachings are seen as essential to shaping patriotism and are still being followed to this day.`,
  },
  {
    label: "Global Recognition",
    text: `Rizal's legacy lives on across the world with monuments in countries like Indonesia, India, and the U.S. Cities, parks, roads, and even a province bear his name—symbolizing how his impact reached beyond borders.`,
  },
];

const ScrollItem = ({ label, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-center">
      <img
        src={scrollOpen}
        alt="Scroll"
        onClick={() => setIsOpen(!isOpen)}
        className={`transition-all duration-700 ease-in-out cursor-pointer drop-shadow-xl
          ${
            isOpen
              ? "fixed inset-0 m-auto w-[480px] sm:w-[540px] md:w-[600px] scale-110 rotate-0 opacity-100 z-50"
              : "relative w-[240px] sm:w-[300px] md:w-[340px] scale-100 rotate-0 opacity-100"
          }`}
        style={isOpen ? { maxHeight: "90vh" } : {}}
      />

      {/* Show title label on scroll (when not open) */}
      {!isOpen && (
        <div className="absolute text-center text-[#543312] font-coustard font-bold text-xs sm:text-sm md:text-base max-w-[85%] px-2 break-words">
          {label}
        </div>
      )}

      {/* Full content on open */}
      {isOpen && (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-50 pointer-events-none">
          <h2 className="text-2xl font-bold mb-4 text-[#543312] font-coustard text-center drop-shadow-sm px-4">
            {label}
          </h2>
          <p className="text-sm sm:text-base text-center text-[#3c2314] font-serif max-w-[500px] px-4">
            {text}
          </p>
        </div>
      )}
    </div>
  );
};

const Legacy = ({ setActiveTab }) => {
  return (
    <Feather isScrollable setActiveTab={setActiveTab}>
      <div className="flex flex-col items-center justify-center gap-10 py-8 relative">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#543312] font-coustard">
          RIZAL'S LEGACY
        </h1>

        {/* Scrolls Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6 z-10">
          {scrolls.map((scroll, idx) => (
            <ScrollItem key={idx} label={scroll.label} text={scroll.text} />
          ))}
        </div>
      </div>
    </Feather>
  )
}

export default Legacy

export default Legacy;
