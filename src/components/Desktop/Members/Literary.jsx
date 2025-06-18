import React from "react"
import Feather from "../Feather"
import { Icons, Images, RizalLiterature } from "../../../assets"

const Literary = ({ setActiveTab }) => {
  return (
    <Feather isScrollable={true} setActiveTab={setActiveTab}>
      <div className="relative h-[65vh] w-[90%] justify-self-end mr-5 gap-5 flex flex-col ">
        <h1 className="text-2xl sm:text-2xl font-bold tracking-wider font-coustard align-middle text-center mt-7 m-7">
          Literature
        </h1>
        <div className="flex justify-evenly items-center w-full">
          {[
            { name: "Novels & Major Essays" },
            { name: "Poetry & Sonnets" },
            { name: "Drama" },
          ].map((item, index) => (
            <a className="text-base font-bold border-b-2 border-amber-900 hover:border-amber-700 transition pl-3 pr-3">
              {item.name}
            </a>
          ))}
          <div class="border-2 border-amber-900 flex content-center w-fit">
            <input
              name="Search"
              placeholder="Search"
              className="bg-transparent outline-none border-t-0 border-l-0 border-b-0 border-r-1 border-amber-900 p-2 text-sm"
            />
            <button style={{ padding: 5 }}>
              <img
                src={Icons.search}
                alt="search"
                className="h-5 w-auto"
                draggable={false}
              />
            </button>
          </div>
        </div>

        <div className="bg-no-repeat bg-cover bg-center relative w-full flex justify-center min-h-[1050px]">
          <img
            src={Images.literaturePaper}
            alt="paper"
            className="w-full absolute  -z-10"
            draggable={false}
          />
          <img
            src={Icons.inkPen}
            alt="paper"
            className="w-[40vh] absolute -z-10 right-0 bottom-20"
            draggable={false}
          />
          <div className="w-[75%] mt-24 flex flex-col gap-5">
            <div className="flex justify-between">
              <div>
                <h1 className="text-[36px] sm:text-[55px] font-extrabold uppercase tracking-wide leading-none font-coustard">
                  Noli Me Tángere{" "}
                  <span className="font-light font-serif">(Touch Me Not)</span>
                </h1>
                <h2 className="text-xl sm:text-2xl mt-2 tracking-wider">
                  Publication Date: March 21, 1887
                </h2>
                <h2 className="text-xl sm:text-2xl mt-2 tracking-wider">
                  Genre: novel
                </h2>
              </div>
              <img
                src={RizalLiterature[0]}
                alt="literature"
                className="w-[40em]"
                draggable={false}
              />
            </div>
            <h2 className="text-xl sm:text-2xl mt-2 font-bold tracking-wider font-coustard">
              Summary:
            </h2>
            <p className="min-h-[300px] pl-10 pr-10">
              Set in San Diego, the novel centers on Crisostomo Ibarra’s return
              from Europe to build a school and promote reforms. He discovers
              his father was disgraced by the Church, igniting conflict with
              Padre Damaso, who harshly opposes Ibarra’s initiatives. The boy
              Crispín is falsely accused of theft, beaten, and disappears; his
              brother Basilio’s mother, Sisa, loses her mind searching for them.
              <br />
              <br />
              Ibarra tries to collaborate with Spanish authorities and town
              leaders until a conspiracy involving Father Salvi frames him. He
              is jailed, then dramatically rescued by Elias. Maria Clara,
              manipulated by Father Salvi’s confession of her true paternity
              (Damaso is her biological father), breaks her engagement to
              Ibarra. Ibarra escapes with Elias, but Elias sacrifices his life
              to save him The novel ends ambiguously: Ibarra disappears, Elias
              and Sisa die, and Maria Clara becomes a nun. It sharply criticizes
              clerical hypocrisy and social injustice .
            </p>
            <a
              className="font-bold tracking-wider text-sm font-extrabold underline"
              style={{
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)",
              }}
            >
              Test your brain with our puzzle and uncover fun facts!
            </a>
          </div>
        </div>
      </div>
    </Feather>
  );
};

export default Literary
