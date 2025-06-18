import React, { useEffect, useState } from "react"
import Feather from "../Feather"
import { Icons, Images, RizalLiterature } from "../../../assets"
import PuzzleModal from "../PuzzleModal"
import "../ScrollAnim.css"
import useScrollAnim from "../ScrollAnim"

const Literary = ({ setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [filter, setFilter] = useState("novel")
  const [inputValue, setInputValue] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const [activeLiterature, setActiveLiterature] = useState(null)
  const literature = [
    {
      name: "Noli Me Tángere <span class='font-light font-serif'> (Touch Me Not)</span>",
      published: "Published: Mar 21, 1887",
      subDetails: "Genre: novel",
      type: "novel",
      summary: `Set in San Diego, the novel centers on Crisostomo Ibarra’s
      return from Europe to build a school and promote reforms. He
      discovers his father was disgraced by the Church, igniting
      conflict with Padre Damaso, who harshly opposes Ibarra’s
      initiatives. The boy Crispín is falsely accused of theft,
      beaten, and disappears; his brother Basilio’s mother, Sisa,
      loses her mind searching for them.
      <br/><br/>
      Ibarra tries to collaborate with Spanish authorities and town
      leaders until a conspiracy involving Father Salvi frames him. He
      is jailed, then dramatically rescued by Elias. Maria Clara,
      manipulated by Father Salvi’s confession of her true paternity
      (Damaso is her biological father), breaks her engagement to
      Ibarra. Ibarra escapes with Elias, but Elias sacrifices his life
      to save him. The novel ends ambiguously: Ibarra disappears, Elias
      and Sisa die, and Maria Clara becomes a nun. It sharply
      criticizes clerical hypocrisy and social injustice.`,
      img: RizalLiterature[0],
      facts: [
        "Cats sleep for 70% of their lives!",
        "The Eiffel Tower can grow over 6 inches in summer.",
        "Bananas are berries, but strawberries are not.",
        "Octopuses have three hearts.",
        "A bolt of lightning contains enough energy to toast 100,000 slices of bread.",
        "Humans share 60% of their DNA with bananas.",
        "Sharks existed before trees.",
        "There are more stars in the universe than grains of sand on Earth.",
      ],
    },
    {
      name: "El Filibus&shy;terismo",
      published: "Published: Sep 1891",
      subDetails: "Genre: novel",
      type: "novel",
      summary: `Set 13 years after Noli, Ibarra returns as Simoun, a wealthy jeweler. He plots a violent revolution, planning sabotage via a bomb-lamp at a high-profile wedding attended by officials—aimed to incite a popular uprising Basilio is now a medical student, disillusioned after personal tragedies; he briefly joins Simoun but backs out. Simoun infiltrates the elite, fuels oppression through greed and abuse to provoke revolt, and nearly succeeds.
      <br/><br/>
      At the wedding, Basilio warns Isagani, who disposes of the lamp just in time—preventing mass bloodshed. Simoun flees to Padre Florentino, asks for forgiveness and understanding; realizing the revolution failed because it lacked virtue, he kills himself. Florentino disposes of Simoun’s wealth into the sea.`,
      img: RizalLiterature[0],
      facts: [
        "Cats sleep for 70% of their lives!",
        "The Eiffel Tower can grow over 6 inches in summer.",
        "Bananas are berries, but strawberries are not.",
        "Octopuses have three hearts.",
        "A bolt of lightning contains enough energy to toast 100,000 slices of bread.",
        "Humans share 60% of their DNA with bananas.",
        "Sharks existed before trees.",
        "There are more stars in the universe than grains of sand on Earth.",
      ],
    },
    {
      name: "Makamisa <span class='font-light font-serif'> (Just the mass)</span>",
      published: "Published: 1980’s",
      subDetails: "WRITTEN: 1892 (Hong Kong)",
      type: "drama",
      summary: `An unfinished Tagalog novel. Only the first chapter introduces Padre Agaton and community life. In a light, satirical tone, Rizal critiques clerical hypocrisy using local, everyday stories. Though brief, it echoes his earlier novels in tone and theme.`,
      img: Images.rizalBirth,
      facts: [
        "Cats sleep for 70% of their lives!",
        "The Eiffel Tower can grow over 6 inches in summer.",
        "Bananas are berries, but strawberries are not.",
        "Octopuses have three hearts.",
        "A bolt of lightning contains enough energy to toast 100,000 slices of bread.",
        "Humans share 60% of their DNA with bananas.",
        "Sharks existed before trees.",
        "There are more stars in the universe than grains of sand on Earth.",
      ],
    },
  ]

  const filteredLiterature = literature.filter((item) => {
    const matchesType = item.type === filter
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesType && matchesSearch
  })

  useEffect(() => {
    if (inputValue.trim() === "") {
      setSearchQuery("")
    }
  }, [inputValue])

  const highlightTextSafeHTML = (htmlString, query) => {
    if (!query.trim()) return htmlString

    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlString, "text/html")
    const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT)

    const regex = new RegExp(`(${escapedQuery})`, "gi")

    while (walker.nextNode()) {
      const node = walker.currentNode
      if (
        node.parentElement.tagName !== "SCRIPT" &&
        node.parentElement.tagName !== "STYLE"
      ) {
        const highlighted = node.textContent.replace(
          regex,
          "<mark class='bg-yellow-200 text-black font-semibold'>$1</mark>"
        )
        if (highlighted !== node.textContent) {
          const span = document.createElement("span")
          span.innerHTML = highlighted
          node.parentNode.replaceChild(span, node)
        }
      }
    }

    return doc.body.innerHTML
  }

  useScrollAnim(".scrollAnim", 0.3, activeLiterature)

  return (
    <>
      <PuzzleModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        details={literature[activeLiterature]}
      />

      <Feather isScrollable={true} setActiveTab={setActiveTab}>
        <div className="relative w-[90%] justify-self-end mr-5 gap-5 flex flex-col">
          <div className="scrollAnim fadeInDown">
            <h1 className="text-8xl font-great align-middle text-center m-7 mb-0">
              Literary & Works
            </h1>
            <div className="grid grid-cols-2 lg:flex gap-5 justify-evenly items-center w-full">
              {[
                { name: "Novels & Major Essays", type: "novel" },
                { name: "Poetry & Sonnets", type: "poem" },
                { name: "Drama", type: "drama" },
              ].map((item, index) => (
                <a
                  className={`text-base font-bold border-b-2 transition pl-3 pr-3
    ${
      filter === item.type
        ? "border-amber-700"
        : "border-amber-900 hover:border-amber-700"
    }
  `}
                  onClick={() => {
                    setActiveLiterature(null)
                    setFilter(item.type)
                  }}
                >
                  {item.name}
                </a>
              ))}

              <div className="border-2 border-amber-900 flex content-center w-fit">
                <input
                  name="Search"
                  placeholder="Search"
                  className="bg-transparent outline-none border-t-0 border-l-0 border-b-0 border-r-1 border-amber-900 p-2 text-sm"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                  style={{ padding: 5 }}
                  onClick={() => setSearchQuery(inputValue)}
                >
                  <img
                    src={Icons.search}
                    alt="search"
                    className="h-5 w-auto"
                    draggable={false}
                  />
                </button>
              </div>
            </div>
          </div>

          {activeLiterature !== null ? (
            <div className="relative w-full flex justify-center min-h-[1050px] ">
              <img
                src={Images.literaturePaper}
                alt="paper"
                className="w-full absolute -z-10  h-[110%] lg:h-auto"
                draggable={false}
              />
              <img
                src={Icons.inkPen}
                alt="inkPen"
                className="scrollAnim fadeInRight w-[30vh] lg:w-[40vh] absolute -z-10 right-0 bottom-20"
                draggable={false}
              />
              <div className=" w-[75%] mt-28 flex flex-col gap-5">
                <div className="scrollAnim fadeInUp flex flex-col-reverse lg:flex-row justify-between gap-2 ">
                  <div className="scrollAnim fadeInUp lg:h-full flex flex-col">
                    <h1
                      className="text-[36px] sm:text-[55px] text-center lg:text-left font-extrabold uppercase tracking-wide leading-none font-coustard break-words"
                      dangerouslySetInnerHTML={{
                        __html: highlightTextSafeHTML(
                          literature[activeLiterature].name,
                          searchQuery
                        ),
                      }}
                    />

                    <h2 className="text-xl sm:text-2xl mt-2 tracking-wider">
                      {literature[activeLiterature].published}
                    </h2>
                    <h2 className="text-xl sm:text-2xl mt-2 tracking-wider">
                      {literature[activeLiterature].subDetails}
                    </h2>

                    <h2 className="text-xl sm:text-2xl font-bold tracking-wider font-coustard mt-10 lg:mt-auto">
                      Summary:
                    </h2>
                  </div>
                  <img
                    src={literature[activeLiterature].img}
                    alt="literature"
                    className="scrollAnim fadeInRight w-[220px] h-[300px] m-auto"
                    draggable={false}
                  />
                </div>

                <p
                  className="scrollAnim fadeInUp pl-10 pr-10"
                  dangerouslySetInnerHTML={{
                    __html: highlightTextSafeHTML(
                      literature[activeLiterature].summary,
                      searchQuery
                    ),
                  }}
                />

                <a
                  className="scrollAnim fadeInUp font-bold tracking-wider text-sm font-extrabold underline mt-10"
                  style={{
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)",
                  }}
                  onClick={() => {
                    if (literature[activeLiterature]) setIsOpen(true)
                  }}
                >
                  Test your brain with our puzzle and uncover fun facts!
                </a>
                <a
                  className="scrollAnim fadeInLeft flex gap-2 justify-center items-center w-fit h-fit mt-10"
                  onClick={() => {
                    setActiveLiterature(null)
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                >
                  <img
                    src={Icons.back}
                    alt="back"
                    className="w-8"
                    draggable={false}
                  />
                  <h1 className="text-[1.5rem] font-extrabold uppercase tracking-wide leading-none font-coustard">
                    Back
                  </h1>
                </a>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-4">
              {filteredLiterature.map((lit, index) => (
                <a onClick={() => setActiveLiterature(literature.indexOf(lit))}>
                  <div className="scrollAnim fadeInDown bg-no-repeat bg-cover bg-center relative flex justify-center">
                    <img
                      src={Images.literaturePaper}
                      alt="paper"
                      className="w-full absolute -z-10"
                      draggable={false}
                    />
                    <img
                      src={Icons.inkPen}
                      alt="paper"
                      className="w-[40%] absolute -z-10 -right-2 top-[30%] lg:top-[50%]"
                      draggable={false}
                    />
                    <div className="w-[75%] mt-10 flex flex-col gap-0">
                      <div className="lg:pr-20 gap-1 flex flex-col items-center lg:items-start min-h-[7rem] min-w-0">
                        <img
                          src={lit.img}
                          alt="literature"
                          className="w-auto h-[45%] lg:w-[4rem] lg:h-[5.5rem] lg:absolute right-10 mb-2"
                          draggable={false}
                        />
                        <h1
                          className="text-[.8rem] lg:text-[1rem] text-center lg:text-start font-extrabold uppercase tracking-wide leading-none font-coustard break-words whitespace-normal"
                          dangerouslySetInnerHTML={{
                            __html: lit.name,
                          }}
                        />
                        <h2 className="text-[.8rem] lg:text-[.6rem] text-center lg:text-start tracking-wider leading-tight uppercase">
                          {lit.published}
                        </h2>
                        <h2 className="text-[.8rem] lg:text-[.6rem] text-center lg:text-start tracking-wider leading-tight uppercase">
                          {lit.subDetails}
                        </h2>

                        <h2 className="hidden lg:block text-[.5rem] mt-auto font-bold tracking-wider font-coustard uppercase">
                          Summary:
                        </h2>
                      </div>

                      <p
                        className="hidden lg:block text-[.4rem] pl-2 leading-none pr-10 min-h-[9rem]"
                        dangerouslySetInnerHTML={{
                          __html: lit.summary,
                        }}
                      />
                      <a
                        className="hidden lg:visible font-bold tracking-wider text-[.3rem] font-extrabold underline leading-tight pr-[6rem]"
                        style={{
                          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)",
                        }}
                        onClick={() => {
                          if (literature[activeLiterature]) setIsOpen(true)
                        }}
                      >
                        Test your brain with our puzzle and uncover fun facts!
                      </a>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </Feather>
    </>
  )
}

export default Literary
