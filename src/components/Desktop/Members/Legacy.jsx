import React from "react";
import Feather from "../Feather";
import header from "../../../assets/images/header.png";
import { Images } from "../../../assets";
import useScrollAnim from "./LegacyScroll"; 

const Legacy = ({ setActiveTab }) => {
  useScrollAnim(); 

  return (
    <Feather isScrollable={true} setActiveTab={setActiveTab}>
      {/* Header Section */}
      <div className="relative w-full flex justify-center items-start">
        <h1 className="absolute top-6 sm:top-10 text-4xl sm:text-7xl md:text-8xl font-bold tracking-wider font-great text-[#543312] text-right w-full z-10 pl-6 sm:pl-10">
          Legacy
        </h1>
        <img
          src={header}
          alt="Legacy Header"
          className="w-full max-w-5xl h-auto object-contain mt-[100px] sm:mt-[90px]"
        />
      </div>

      {/* Main Content */}
      <div className="pl-4 pr-2 sm:pl-6 sm:pr-4 mt-8 space-y-4 text-[#543312] text-left">
        {/* Section Title */}
        <h2 className="scrollAnim text-xl sm:text-2xl font-bold font-coustard tracking-wider uppercase">
          Heroism & National Pride
        </h2>

        <div className="scrollAnim relative flex flex-col sm:flex-row gap-4 items-start text-justify">
          <p className="text-sm sm:text-base leading-relaxed font-serif flex-1">
            The Philippines' national hero, Dr. José Rizal, is revered for his
            bravery in opposing the Spanish colonial authorities in addition to
            his intellectual prowess. Rizal will always be remembered for his
            kindness toward the Filipino people and the nation, even though his
            passing sparked a revolution that overthrew the colonizer. With all
            that being said, there are a lot of well-known actions and impacts
            to remember that contributed to our life, the ones that marked and
            we all live with. We should never forget, and we should remember. Up
            until today, teachings and practices of Rizal are still followed by
            us Filipinos, showing how we respect and value all the sacrifices
            and recognize what our country has been through.
          </p>
          <img
            src={Images.mic}
            alt="Megaphone"
            className="w-[120px] sm:w-[160px] md:w-[200px] object-contain self-center sm:self-start sm:-mt-10"
          />
        </div>

        {/* Education Section */}
        <div className="scrollAnim flex flex-col sm:flex-row gap-4 items-start mt-12">
          <img
            src={Images.pencil}
            alt="Pencil Icon"
            className="w-[100px] sm:w-[140px] md:w-[180px] object-contain self-center sm:self-start sm:mt-10"
          />
          <div className="flex-1 text-left space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold font-coustard tracking-wider uppercase text-right text-justify">
              RA 1425: A Law Preserving His Legacy
            </h2>
            <p className="text-sm sm:text-base leading-relaxed font-serif">
              Jose Rizal's legacy lives on not just through remembrance, but
              through education — mandated by Republic Act No. 1425, also known
              as the Rizal Law. This law requires all educational institutions
              in the Philippines to offer courses about Rizal’s life, works, and
              writings, particularly his novels <i>Noli Me Tangere</i> and{" "}
              <i>El Filibusterismo</i>. Through this law, generations of
              Filipinos continue to learn about the hero’s contributions,
              instilling values of patriotism, civic responsibility, and a deep
              understanding of Philippine history. Honoring Rizal is more than
              just recognizing him as our national hero — it is about embracing
              his ideals to help build a more conscious, united, and
              forward-looking society.
            </p>
          </div>
        </div>

        {/* Cultural Pride Section */}
        <div className="scrollAnim flex flex-col sm:flex-row gap-4 items-start mt-12">
          <div className="flex-1 text-left space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold font-coustard tracking-wider uppercase">
              Cultural Pride and Identity
            </h2>
            <p className="text-sm sm:text-base leading-relaxed font-serif text-justify">
              Rizal encouraged Filipinos to appreciate and preserve their
              culture, language, and heritage. His writings highlighted Filipino
              traditions and the importance of national pride. Even today, his
              call to embrace the Filipino identity is echoed in efforts to
              promote the use of Filipino languages, preserve historical
              landmarks, and celebrate local traditions and art forms.
            </p>
          </div>
          <img
            src={Images.barong}
            alt="Cultural Symbol"
            className="w-[100px] sm:w-[140px] md:w-[180px] object-contain self-center sm:self-start sm:-mt-2"
          />
        </div>

        {/* Integrity Section */}
        <div className="scrollAnim flex flex-col sm:flex-row gap-4 items-start mt-12">
          <img
            src={Images.integrity}
            alt="Rizal Holding Torch"
            className="w-[100px] sm:w-[140px] md:w-[180px] object-contain self-center sm:self-start sm:mt-2"
          />
          <div className="flex-1 text-left space-y-2">
            <h2 className="text-xl sm:text-2xl text-right font-bold font-coustard tracking-wider uppercase">
              A Role Model for Integrity
            </h2>
            <p className="text-sm sm:text-base leading-relaxed font-serif text-justify">
              Rizal’s life was defined by his unwavering commitment to peaceful
              reform, honesty, and moral leadership. He chose education and
              dialogue over violence, even when facing persecution, and
              sacrificed his life for the good of his country. Rizal’s integrity
              inspires individuals to act with accountability and selflessness,
              reminding leaders to prioritize the welfare of the people. His
              legacy encourages Filipinos to build a just and ethical society
              through courage and principled action.
            </p>
          </div>
        </div>
      </div>
    </Feather>
  );
};

export default Legacy;
