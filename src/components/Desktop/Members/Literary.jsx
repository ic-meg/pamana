import React, { useEffect, useState } from "react"
import Feather from "../Feather"
import { Icons, Images, RizalLiterature } from "../../../assets"
import PuzzleModal from "../PuzzleModal"
import { Icon } from "@mui/material"


const Literary = ( {setActiveTab}) => {
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
        "The main theme is to Exposes the abuses of the Spanish clergy and government in the Philippines through satire and tragic narrative.",
        "The title is Latin, meaning “Touch Me Not,” taken from the Bible (John 20:17).",
        "It reveals the abuses of the Spanish friars, land grabbing, corruption, and forced labor.",
        "Crisostomo Ibarra, the main character, represents Rizal’s reformist ideals.",
        "Rizal intended to awaken national consciousness and expose injustice.",
      ],
    },
    {
      name: "El Filibusterismo (The Reign of Greed)",
      published: "Published: Sep 1891",
      subDetails: "Genre: novel",
      type: "novel",
      summary: `Set 13 years after Noli, Ibarra returns as Simoun, a wealthy jeweler. He plots a violent revolution, planning sabotage via a bomb-lamp at a high-profile wedding attended by officials—aimed to incite a popular uprising Basilio is now a medical student, disillusioned after personal tragedies; he briefly joins Simoun but backs out. Simoun infiltrates the elite, fuels oppression through greed and abuse to provoke revolt, and nearly succeeds.
      <br/><br/>
      At the wedding, Basilio warns Isagani, who disposes of the lamp just in time—preventing mass bloodshed. Simoun flees to Padre Florentino, asks for forgiveness and understanding; realizing the revolution failed because it lacked virtue, he kills himself. Florentino disposes of Simoun’s wealth into the sea.`,
      img: RizalLiterature[0],
      facts: [
        "Published in 1891 in Ghent, Belgium, under financial hardship.",
        "Simoun's plan: to detonate a bomb at a wedding to spark rebellion.",
        "It reveals the abuses of the Spanish friars, land grabbing, corruption, and forced labor.",
        "Basilio, formerly a child in Noli, now a student entangled in the uprising.",
        "Rizal warns that violence without virtue will not lead to freedom.",
      ],
    },
    {
      name: "Makamisa <span class='font-light font-serif'> (Just the mass)</span>",
      published: "Published: 1980’s",
      subDetails: "WRITTEN: 1892 (Hong Kong)",
      type: "novel",
      summary: `An unfinished Tagalog novel. Only the first chapter introduces Padre Agaton and community life. In a light, satirical tone, Rizal critiques clerical hypocrisy using local, everyday stories. Though brief, it echoes his earlier novels in tone and theme.`,
      img: Images.rizalBirth,
      facts: [
        "Written in Tagalog, showing Rizal’s advocacy for the native language.",
        "The manuscript was found unfinished, only a chapter and fragment were completed.",
        "It could have been Rizal’s third novel, continuing his criticism of friars.",
        "The tone is more comic and satirical, unlike the tragic tone of his other novels.",
        "The main character, Padre Agaton, is portrayed as arrogant and hypocritical.",
      ],
    },
    {
      name: "Sobre la indolencia de los filipinos  <span class='font-light font-serif'> (On the Indolence of the Filipinos)</span>",
      published: "Published: July 15,1890 (In La Solidaridad) ",
      subDetails: "Genre: Major essay",
      type: "novel",
      summary: `Rizal challenges the stereotype of “laziness,” tracing real causes: the tropical climate (which makes an hour’s labor akin to a day’s in Europe), war, epidemics, forced labor, monopolies, corrupt governance, church teachings against material progress, educational discrimination, lack of national unity <br>He concludes that Filipinos have been industrious before colonial misrule. Their decline is structural, not moral. He advocates for equitable education and civic unity as a remedy .</br>`,
      img: Images.rizalBirth,
      facts: [
       "Published in 5 parts in La Solidaridad in 1890.",
        "Rizal argues that Filipinos are not naturally lazy, but made so by colonization.",
        "Rizal highlights that the climate plays a role in work habits—hotter regions need different labor rhythms.",
        "The essay is a defense of national dignity against colonial stereotypes.",
        "It uses historical evidence, like pre-colonial trade, to prove Filipinos were once industrious.",
      ],
    },
    {
      name: "Sa Mga Kababaihang Taga‑Malolos   <span class='font-light font-serif'> (To the Young Women of Malolos)</span>",
      published: "published: February 17, 1889 (London)",
      subDetails: "genre:letter",
      type: "novel",
      summary: `He urges them to uphold dignity, virtue, critical thought, and national pride. He emphasizes rational religion over blind obedience, and stresses women’s role in shaping future generations, promoting honor over shame`,
      img: Images.rizalBirth,
      facts: [
       "A personal letter addressed to 20 women from Malolos who fought for education.",
        "He emphasizes that women are essential to nation-building.",
        "Encourages women to be critical, strong, and well-educated.",
        "The letter is considered early feminist writing in Philippine history.",
        "Written in Tagalog-Spanish mix, making it accessible and heartfelt.",
      ],
    },
    {
      name: "El Consejo de los Dioses   <span class='font-light font-serif'>(The Council of the Gods) </span>",
      published: "published:1880 (Manila)",
      subDetails: "Published: by Liceo Artistico Literario de Manila; reprinted by La Solidaridad in 1883",
      type: "drama",
      summary: `In this allegorical contest-winning play, Greek gods debate literary ideals, mirroring Rizal’s critique of scholastic rigidity. It showcases his humanist thinking, asserting that literature and art must elevate national consciousness through intellectual freedom and enlightenment `,
      img: Images.rizalBirth,
      facts: [
       "Won first prize in a literary contest organized by the Manila Lyceum in 1880.",
        "Uses Greek mythology to discuss art, truth, and intellectual ideals.",
        "Rizal blends classical Western thought with Filipino perspectives.",
        "Symbolizes his early belief that art can be moral and political at once.",
        "Gods like Jupiter, Mars, and Venus debate the greatest forms of literature.",
      ],
    },
    {
      name: "A la juventud filipina  <span class='font-light font-serif'>(The Council of the Gods (To the Philippine Youth) </span>",
      published: "published: 1879",
      subDetails: "Reprinted in 1883",
      type: "poe",
      summary: `A rousing poem urging Filipino youth to rise with talent (“genius”), embrace arts and sciences, break the chains of ignorance, and lead national progress. It paints youth as divine hope, calling for inspiration and enlightenment as tools against colonial oppression `,
      img: Images.rizalBirth,
      facts: [
       "The main theme is to Exposes the abuses of the Spanish clergy and government in the Philippines through satire and tragic narrative.",
        "The title is Latin, meaning “Touch Me Not,” taken from the Bible (John 20:17).",
        "It reveals the abuses of the Spanish friars, land grabbing, corruption, and forced labor.",
        "Crisostomo Ibarra, the main character, represents Rizal’s reformist ideals.",
        "Rizal intended to awaken national consciousness and expose injustice.",
      ],
    },
    {
      name: "Mi último adiós <span class='font-light font-serif'>(My Last Farewell) </span>",
      published: " published: september 1898",
      subDetails: "written: December 29,1896",
      type: "poem",
      summary: `Rizal’s final poem is an undying declaration of love for his country. It expresses serenity in sacrificing for freedom, requesting that his simple grave feed the land—a metaphor for rooting his sacrifice in national revival<br></br> `,
      img: Images.rizalBirth,
      facts: [
       "It was written the night before Rizal’s execution.",
        "Expresses calm acceptance of death and love for the Philippines.",
        "The line 'I die just when I see the dawn break...' is iconic.",
        "Crisostomo Ibarra, the main character, represents Rizal’s reformist ideals.",
        "Offers no hatred, but a deep hope for national freedom.Rizal intended to awaken national consciousness and expose injustice.",
      ],
    },
    {
      name: "Junto al Pasig <span class='font-light font-serif'>(Beside the Pasig)  </span>",
      published: " Written: 1880",
      subDetails: "Genre: One-act zarzuela/musical play",
      type: "drama",
      summary: ` A Catholic-themed drama with strong religious and symbolic elements. It involves a boy named Leonido who experiences a dream where good and evil forces fight for his soul. `,
      img: Images.rizalBirth,
      facts: [
       "Written for the Feast of the Immaculate Conception and performed at the Ateneo Municipal de Manila.",
        "Contains religious and moral undertones, aligned with Rizal's early Catholic education.",
        "The devil symbolizes temptation and spiritual conflict, while the Virgin Mary represents purity.",
        "Combines music, song, and dialogue, typical of Spanish-era religious plays.",
        "Demonstrates Rizal’s growing symbolic language and use of dream sequences.",
      ],
    },
    {
      name: "Toast to Luna and Hidalgo <span class='font-light font-serif'>(Brindis a Luna y Hidalgo)</span>",
      published: "Delivered: June 25, 1884",
      subDetails: "Genre: oratorical speech",
      type: "poem",
      summary: `Rizal’s speech in Madrid praises the artistic success of Filipino painters Luna and Hidalgo, arguing that their work proves Filipino excellence in global arenas.`,
      img: Images.rizalBirth,
      facts: [
        "Delivered during a celebratory banquet in Madrid.",
        "Highlights intellectual potential of Filipinos.",
        "Rizal used the moment to assert national pride.",
        "Encouraged the Propaganda Movement’s leaders."
      ]
    },
    {
      name: "The Song of Maria Clara",
      published: "Written: 1887",
      subDetails: "Genre: lyrical poem",
      type: "poem",
      summary: `A heartfelt piece found within the novel Noli Me Tangere, expressing Maria Clara's longing, purity, and pain in the midst of turmoil.`,
      img: RizalLiterature[7],
      facts: [
        "Part of Noli Me Tangere’s narrative arc.",
        "Depicts the feminine ideal in Filipino literature.",
        "Highly emotional and melodic.",
        "Symbolizes love, faith, and sacrifice."
      ]
    },
    {
      name: "La Vision del Fray Rodriguez",
      published: "Written: 1889",
      subDetails: "Genre: satirical drama",
      type: "drama",
      summary: `A biting satire against Father Rodriguez who criticized Rizal’s ideas, portraying the friar as comically ignorant in a dream-like dialogue with saints.`,
      img: RizalLiterature[3],
      facts: [
        "Responds to Fr. Rodriguez's critique of Rizal’s works.",
        "Humorous dialogue mocking religious hypocrisy.",
        "Promotes reason over blind dogma.",
        "Written in Spanish with biting wit."
      ]
    },
    {
      name: "To Josephine",
      published: "Written: 1896",
      subDetails: "Genre: love poem",
      type: "poem",
      summary: `A tender poem written for Josephine Bracken, Rizal’s common-law wife, expressing affection and hope in the face of imminent death.`,
      img: RizalLiterature[7],
      facts: [
        "One of Rizal’s most personal poems.",
        "Written shortly before his execution.",
        "Expresses longing, love, and calm resignation.",
        "Reveals Rizal’s romantic and poetic side."
      ]
    },
    {
      name: "The Song of Maria Clara",
      published: "Written: 1887",
      subDetails: "Genre: lyrical poem",
      type: "poem",
      summary: `A heartfelt piece found within the novel Noli Me Tangere, expressing Maria Clara's longing, purity, and pain in the midst of turmoil.`,
      img: RizalLiterature[7],
      facts: [
        "Part of Noli Me Tangere’s narrative arc.",
        "Depicts the feminine ideal in Filipino literature.",
        "Highly emotional and melodic.",
        "Symbolizes love, faith, and sacrifice."
      ]
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

  return (
    <>
      <PuzzleModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        details={literature[activeLiterature]}
      />
      <Feather isScrollable={true} setActiveTab={setActiveTab}>
        <div className="relative w-[90%] justify-self-end mr-5 gap-5 flex flex-col">
          <h1 className="text-2xl sm:text-2xl font-bold tracking-wider font-coustard align-middle text-center mt-7 m-7">
            Literature
          </h1>
          <div className="flex justify-evenly items-center w-full">
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

          {activeLiterature !== null ? (
            <div className="relative w-full flex justify-center min-h-[1050px] ">
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
              <div className="w-[75%] mt-28 flex flex-col gap-5">
                <div className="flex justify-between gap-2">
                  <div>
                    <h1
                      className="text-[36px] sm:text-[55px] font-extrabold uppercase tracking-wide leading-none font-coustard break-words"
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
                  </div>
                  <img
                    src={literature[activeLiterature].img}
                    alt="literature"
                    className="w-[300px] h-[300px]"
                    draggable={false}
                  />
                </div>
                <h2 className="text-xl sm:text-2xl mt-2 font-bold tracking-wider font-coustard">
                  Summary:
                </h2>
                <p
                  className="pl-10 pr-10"
                  dangerouslySetInnerHTML={{
                    __html: highlightTextSafeHTML(
                      literature[activeLiterature].summary,
                      searchQuery
                    ),
                  }}
                />

                <a
                  className="font-bold tracking-wider text-sm font-extrabold underline mt-10"
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
                  className="flex gap-2 justify-center items-center w-fit h-fit mt-10"
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
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
              {filteredLiterature.map((lit, index) => (
                <a onClick={() => setActiveLiterature(literature.indexOf(lit))}>
                  <div className="bg-no-repeat bg-cover bg-center relative flex justify-center">
                    <img
                      src={Images.literaturePaper}
                      alt="paper"
                      className="w-full absolute -z-10"
                      draggable={false}
                    />
                    <img
                      src={Icons.inkPen}
                      alt="paper"
                      className="w-[40%] absolute -z-10 -right-2 top-[50%]"
                      draggable={false}
                    />
                    <div className="w-[75%] mt-10 flex flex-col gap-0">
                      <div className="pr-20 gap-1 flex flex-col min-h-[4.6rem] min-w-0">
                        <h1
                          className="text-[.5rem] font-extrabold uppercase tracking-wide leading-none font-coustard break-words whitespace-normal"
                          dangerouslySetInnerHTML={{
                            __html: lit.name,
                          }}
                        />
                        <h2 className="text-[.5rem] tracking-wider leading-tight uppercase">
                          {lit.published}
                        </h2>
                        <h2 className="text-[.5rem] tracking-wider leading-tight uppercase">
                          {lit.subDetails}
                        </h2>

                        <h2 className="text-[.5rem] mt-auto font-bold tracking-wider font-coustard uppercase">
                          Summary:
                        </h2>
                      </div>

                      <img
                        src={lit.img}
                        alt="literature"
                        className="w-[3rem] h-[4rem] absolute right-10"
                        draggable={false}
                      />
                      <p
                        className="text-[.4rem] pl-2 leading-none pr-10 min-h-[9rem]"
                        dangerouslySetInnerHTML={{
                          __html: lit.summary,
                        }}
                      />
                      <a
                        className="font-bold tracking-wider text-[.3rem] font-extrabold underline leading-tight pr-[6rem]"
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
