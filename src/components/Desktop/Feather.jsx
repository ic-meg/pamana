import frame from "../../assets/icons/scroll.svg";
import tallFrame from "../../assets/icons/line5.png";
import feather from "../../assets/icons/feather.png";
import homeIcon from "../../assets/icons/Home.png";

const Feather = ({
  children,
  isScrollable = false,
  isHome = false,
  setActiveTab,
}) => {
  const frameToUse = isScrollable ? tallFrame : frame;

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
                height: "auto",
                maxHeight: "100%",
                objectFit: "contain",
                top: 0,
              }
        }
      />

      {/* Decorative Feather */}
      <img
        src={feather}
        alt="Feather"
        className={`absolute z-10 ${
          isScrollable
            ? "top-[-10px] left-[-10px] w-28 sm:top-[-10px] sm:left-[20px] sm:w-48 md:w-56"
            : "top-[12px] left-[16px] w-24 sm:top-[15px] sm:left-[30px] sm:w-44 md:w-52"
        }`}
      />

      {/* Home Button  */}
      {!isHome && setActiveTab && (
        <button
          onClick={() => setActiveTab("home")}
          className={`fixed right-4 sm:right-[55px] w-14 sm:w-16 h-14 sm:h-16 rounded-full z-50 flex items-center justify-center 
  bg-gradient-to-br from-[#f5ebd6] to-[#dfc69b]
  border-[3px] border-[#5e4222]
  shadow-[inset_0_2px_6px_rgba(255,255,255,0.6),inset_0_-2px_6px_rgba(0,0,0,0.25),0_6px_12px_rgba(0,0,0,0.25)]
  hover:brightness-105 hover:scale-105
  transition-all duration-300 ease-in-out
  ${isScrollable ? "bottom-5" : "bottom-16"}`}
          title="Back to Home"
        >
          <img
            src={homeIcon}
            alt="Home"
            className="w-[36px] h-[36px] object-contain pointer-events-none drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]"
          />
        </button>
      )}

      {/* Page Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default Feather;
