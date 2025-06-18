import React, { useState } from "react";
import Feather from "../Feather";
import useScrollAnim from "../../Desktop/ScrollAnim"; 

const Bio = ({ setActiveTab }) => {
  const [activeSection, setActiveSection] = useState("early");
  useScrollAnim(".scrollAnim", 0.3, activeSection); 

  const tabs = [
    { label: "Early Life", key: "early" },
    { label: "Education & Destination", key: "education" },
    { label: "Revolutionary Works", key: "revolution" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "early":
        return (
          <div className=" mt-8 space-y-6 text-justify text-base sm:text-[17px] md:text-lg leading-[1.9] font-serif">
            {/* Image right */}
            <img
              src={require("../../../assets/images/rizal-stone.png")}
              alt="Rizal Bust"
              className="scrollAnim float-right w-40 sm:w-48 md:w-60 ml-10 mb-4 object-contain rounded-md"
            />
            <p className="indent-8 scrollAnim">
              A child born on June 19, 1861 in the city of Calamba in Laguna was
              named as José Protacio Rizal Mercado y Alonso Realonda. His
              brothers and sisters called him ‘Ute’ while the townspeople
              address him as ‘Pepito’ or ‘Pepe’. He is seventh of the eleven
              children born to Francisco Rizal Mercado and Teodora Alonzo Y
              Quintos. Rizal is an exceptional kid as from an early age he
              displayed intellectuality, artistry, and love for literature.
            </p>{" "}
            <p className="indent-8 scrollAnim">
              Considering his delicate health, an ‘aya’ (maid) is looking after
              him at the age of three. In care of his maid, he was exposed with
              stories about fairies, legends, and folklore. Also, an Angelus
              prayer was also included with his daily routine which became one
              of the earliest memories he has. With that being said, this
              started where he took part in the family prayers. He was really
              devoted about prayers that led people to brand him as ‘Manong
              Jose’. Aside from the knowledge he has acquired at this very young
              age, he also learned one of the biggest emotions a man can have,
              sorrow. One of the significant memories that left an indelible
              mark was his sister dying of conchaon 1875. This event taught
              Rizal what sorrows felt like.
            </p>{" "}
            <p className="indent-8 scrollAnim ">
              These indications made his parents make a decision and initiate an
              act that will develop and sharpen his ability which starts his
              educational journey. At the age of five, he is evidently an
              exceptional kid. He was able to write and read at this very young
              age including alphabets and Family Bible written in Spanish.
              Artistic inclination began to show as he started to make sketches
              with his pencil and to mold clay and wax objects which screams
              fanciness.
            </p>{" "}
            <p className="indent-8 scrollAnim">
              These exceptional abilities continuously develop and at the age of
              eight, he is able to write his first ever drama. The drama was
              entitled ‘Un Duelo’ which means a duel. It was written in Tagalog
              comedy and was staged in the Calamba Festival. Moreover, he also
              wrote his first poem entitled ‘Sa Aking Mga Kabata’ which means
              “To My Fellow Children” and highlights the love of one’s language
              that showcases the nationalist sentiments Rizal has in his heart.
              With all that being said, his curiosity at this age bloomed that
              also led him to dive in and learn illusions and magics.
            </p>{" "}
          </div>
        );

      case "education":
        return (
          <div className="scrollAnim mt-8 space-y-6 text-justify text-base sm:text-[17px] md:text-lg leading-[1.9] font-serif">
            {/* Section 1: Rizal and Mother */}
            <div>
              <img
                src={require("../../../assets/images/rizal-teacher.png")}
                alt="Rizal and Mother Studying"
                className="scrollAnim float-right w-40 sm:w-48 md:w-56 ml-4 mb-2 rounded-md shadow-md"
              />
              <p className="scrollAnim indent-8">
                Rizal's education began at home, guided by his mother Teodora
                Alonso, who recognized his early intelligence. He was later
                tutored by private instructors before being sent to a private
                school in Biñan under Maestro Justiniano Aquino Cruz. There,
                Rizal excelled in academics and was exposed to the arts under
                painter Juancho Carrera.
              </p>
              <p className="scrollAnim indent-8">
                At the age of 11, Rizal entered Ateneo Municipal de Manila,
                where he graduated with honors and was recognized for his
                academic excellence and artistic talents. He also wrote poetry,
                dramas, and sketches that reflected his deep love for his
                country and language.
              </p>
            </div>

            {/* Section 2: UST education */}
            <div className="scrollAnim flex flex-col md:flex-row items-start gap-4">
              <img
                src={require("../../../assets/images/rizal-ust.png")}
                alt="UST Building"
                className="scrollAnim w-40 sm:w-52 md:w-60 rounded-md shadow-md"
              />
              <p className="scrollAnim indent-8">
                He pursued further education in the University of Santo Tomas
                Faculty of Arts and Letters, where he studied philosophy and
                letters, and at the Ateneo Municipal de Manila, where he earned
                a degree in land surveying and assessment. He chose to study
                medicine at the University of Santo Tomas Faculty of Medicine
                and Surgery after learning that his mother was going blind. He
                claimed that the Spanish Dominican friars discriminated against
                the Filipino students, therefore he did not finish the degree.
              </p>
            </div>

            {/* Section 3: Europe Studies */}
            <div className="scrollAnim flex flex-col md:flex-row md:items-center gap-4">
              <p className="indent-8 scrollAnim">
                In 1882, Rizal traveled to Europe and enrolled at the
                Universidad Central de Madrid, earning a Licentiate in Medicine.
                With his brother Paciano's support, he also studied in Paris and
                Heidelberg, Germany — where he completed an eye specialty under
                Prof. Otto Becker. In Berlin, he became a member of both the
                Anthropological and Ethnological Societies and gave lectures
                about Philippine culture and language.
              </p>
              <img
                src={require("../../../assets/images/madrid.png")}
                alt="Universidad Central de Madrid"
                className="scrollAnim w-48 sm:w-56 md:w-64 rounded-md shadow-md"
              />
            </div>
          </div>
        );

      case "revolution":
        return (
          <div className=" mt-8 space-y-6 text-justify text-base sm:text-[17px] md:text-lg leading-[1.9] font-serif">
            {/* First row   */}
            <div>
              <img
                src={require("../../../assets/images/rizals-novel.png")}
                alt="Rizal's Novels"
                className="scrollAnim float-left w-32 sm:w-40 md:w-44 mr-4 mb-2 object-contain rounded-md"
              />
              <p className="scrollAnim indent-8">
                <i>Noli Me Tangere</i> and <i>El Filibusterismo</i> are two of
                José Rizal’s best-known novels. Because of their aggressive
                symbolism, these works infuriated both Spanish colonizers and
                Hispanicized Filipinos. They are quite critical of the crimes
                carried out in the name of the Church and of Spanish friars.
                Ferdinand Blumentritt, a historian and professor of
                Sudeten-German descent, was Rizal’s first critic. His initial
                response was one of skepticism. Blumentritt, a fervent supporter
                of Catholicism, was the grandson of the Imperial Treasurer at
                Vienna.
              </p>{" "}
              <br />
              <p className="scrollAnim indent-8">
                However, this did not stop him from translating{" "}
                <i>Noli Me Tangere</i> into German and then composing the
                prelude to <i>El Filibusterismo</i>. As Blumentritt had warned,
                these ultimately resulted in Rizal’s military trial and
                execution when he was charged with inciting a revolution.
                Teaching the locals where they stood was supposed to have a
                negative effect, but the Philippine Revolution of 1896 quickly
                gained momentum.
              </p>
            </div>

            {/* Second row */}
            <div>
              <p className="scrollAnim indent-8">
                Rizal wrote articles, allegories, poetry, and editorials for the
                Spanish daily <i>La Solidaridad</i>
                in Barcelona while serving as the leader of the Filipino student
                reform movement in Spain. His thoughts were mostly liberal and
                progressive in their conception of freedom and individual
                rights, particularly those of the Filipino people. He agreed
                with the movement’s members that corrupt friars and poor
                governance were the Philippines’ “double-faced Goliath,” as
                Rizal himself put it.
              </p>

              <div className=" mt-8 flex flex-row items-start gap-4">
                {/* Paragraph beside  */}
                <p className="scrollAnim flex-1 indent-8 text-justify text-base sm:text-[17px] md:text-lg leading-[1.9] font-serif">
                  When he returned to Manila in 1892, he founded{" "}
                  <i>La Liga Filipina</i>, a civic organization. The governor
                  disbanded the league, which used the legal system to promote
                  these modest social reforms. Because of the publication of his
                  works, the Spanish government had already deemed him an enemy
                  of the state at that point.
                </p>
                {/* Image on right */}
                <img
                  src={require("../../../assets/images/rizals-group.png")}
                  alt="Rizal and La Liga Filipina Members"
                  className="w-64 sm:w-72 md:w-80 rounded-md shadow-md object-contain"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Feather isScrollable={true} setActiveTab={setActiveTab}>
      <h1 className=" text-8xl font-great text-center m-7 mb-0">
        Biography
      </h1>

      {/* Tabs */}
      <div className="scrollAnim flex justify-center items-center w-full mt-2 space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`text-base font-bold border-b-2 transition px-3 pb-1 ${
              activeSection === tab.key
                ? "border-amber-700 text-amber-700"
                : "border-transparent hover:border-amber-500"
            }`}
            onClick={() => setActiveSection(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dynamic  */}
      <div className="px-6 sm:px-20 md:px-32">{renderContent()}</div>
    </Feather>
  );
};

export default Bio;
