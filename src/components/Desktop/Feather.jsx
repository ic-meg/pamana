import React from "react"
import frame from "../../assets/icons/scroll.svg"
import tallFrame from "../../assets/icons/line5.png"
import feather from "../../assets/icons/feather.png"

const Feather = ({ children, isScrollable = false }) => {
  const frameToUse = isScrollable ? tallFrame : frame

  return (
    <div
      className={`relative w-full text-[#543312] font-serif px-6 py-8 ${
        isScrollable ? "h-full overflow-y-auto pr-2" : "h-full overflow-hidden"
      }`}
    >
      {/* Background Frame */}
      <img
        src={frameToUse}
        alt="Frame"
        className="absolute inset-0 z-0 pointer-events-none"
        style={
          frameToUse === tallFrame
            ? {
                width: "100%",
                height: "auto",
                bottom: 0,
                objectFit: "cover",
              }
            : {
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }
        }
      />

      {/* Decorative Feather */}
      <img
        src={feather}
        alt="Feather"
        className={`absolute z-10 ${
          isScrollable
            ? "top-[-10px] left-[20px] w-40 sm:w-48 md:w-56"
            : "top-[15px] left-[30px] w-36 sm:w-44 md:w-52"
        }`}
      />

      {/* Page Content */}
      <div className="relative z-20">{children}</div>
    </div>
  )
}

export default Feather
