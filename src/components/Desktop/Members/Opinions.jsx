import { useEffect, useRef, useState } from "react"
import Feather from "../Feather"
import { Icons, Images, RizalLiterature } from "../../../assets"
import ScrollAnim from "../ScrollAnim"
import "../ScrollAnim.css"

const Opinions = ({ setActiveTab }) => {
  ScrollAnim()

  return (
    <Feather isScrollable={true} setActiveTab={setActiveTab}>
      <div className="relative w-[90%] justify-self-end mr-5 gap-2 flex flex-col">
        <h1 className="scrollAnim fadeInDown text-2xl sm:text-2xl font-bold tracking-wider font-great align-middle text-center mt-7 m-7">
          Interview & Opinios
        </h1>
        <div className="flex justify-between gap-10 w-[85%] m-auto">
          <div className="scrollAnim fadeInLeft relative inline-block">
            <div className="absolute top-3 left-3 w-[97%] h-[97%] border border-black -z-10"></div>
            <img
              src={Images.opinionsImg}
              alt="Rizal Monument"
              className="w-[1550px] h-[300px]"
            />
          </div>

          <div className="scrollAnim fadeInRight flex flex-col items-center gap-5 justify-center">
            <h2 className="text-xl font-bold tracking-wider font-coustard">
              RIZAL THAT I DON’T KNOW
            </h2>
            <p className="text-[1.2rem]">
              The Philippine National Hero that we are not aware of, Filipinos.
              The humane side of José Protasio Rizal Mercado y Alonso Realonda
              that we should embrace. In this lecture entitled ‘Rizal Without
              the Overcoat’ by Ambeth Ocampo, we will explore and learn things
              that are not part of the history we learn inside the classroom.
              This will be a more human and relatable angle of our national
              hero.
            </p>
          </div>
        </div>

        <div className="scrollAnim fadeInUp">
          <h2 className="text-xl font-bold tracking-wider font-coustard pl-10 mt-5">
            Good to Know: 
          </h2>
          <p className="text-[1.2rem]">
            “Ambeth Ocampo is a public historian whose research covers the late
            nineteenth-century Philippines: its art, culture, and the heroes who
            figure in the birth of the nation. He writes a widely read Editorial
            Page column for the Philippine Daily Inquirer and moderates a
            growing Facebook Fan Page. Ocampo is a Professor and former
            Chairperson of the Department of History, School of Social Sciences
            in the Ateneo de Manila University.” - Areté Ateneo
          </p>
        </div>

        <h2 className="scrollAnim fadeInRight text-xl font-bold tracking-wider font-coustard text-right mt-5">
          OVERVIEW: 
        </h2>
        <div className="scrollAnim fadeInLeft flex justify-between gap-5 m-auto">
          <div className="flex flex-col items-center gap-5">
            <p className="text-[1.2rem]">
              Ambeth Ocampo has been  researching Dr. Jose Rizal since the late
              1980s. Decades of rigorous research of our national hero, he saw
              various perspectives that highlighted how heroic and humane at the
              same time the person we are looking up to. For all that we know,
              Rizal was excellent intellectually and artistically. This
              representation of our national hero is common knowledge to us
              Filipinos as his artistic intellect is the one who inspired and
              ignited hearts to a People Revolution that brought us to what we
              are now.
            </p>
          </div>
          <div className="scrollAnim fadeInRight relative inline-block">
            <div className="absolute top-2 left-2 w-full h-full border border-black -z-10"></div>
            <iframe
              width="360"
              height="210"
              src="https://www.youtube.com/embed/MXw_mQu3jsI?si=9TIFoV0P6K21BuWG"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          </div>
        </div>
        <p className="scrollAnim fadeInUp font-bold text-right text-[.8rem]">
          https://www.youtube.com/watch?v=MXw_mQu3jsI
        </p>

        <p className="scrollAnim fadeInUp text-[1.2rem] mt-5">
          Throughout this lecture video of Ambeth Ocampo about Rizal, we are
          forced to see  beyond the typical representations of him as a national
          hero through various pieces of evidence that most of us Filipinos
          don't even know the representation or if its existence. To highlight,
          this journey of Ocampo starts with a simple humorous yet intriguing
          question made by his father. These were all the whys asked to start
          which foster curiosity and deeper understanding to all the simplest
          yet unknown information we can know about our national hero. The
          discussion sheds light about Rizal's preference for both Western and
          Filipino clothing, significance of his local and global monuments,
          artifacts, and anecdotes that reveals his humane side.
          <br />
          <br />
          The lesser known and usually set aside information usually reveals the
          most significant information. Years of research full of dedication and
          curiosity from the simplest to incomprehensible details led to all the
          information and closest perspective we can have to our national hero.
          With that being all said, academic knowledge of Rizal that is passed
          through generations is a portrayal of a person that we should look up
          to and respect however, bringing this to light and knowledge people,
          without the sugarcoat, we can all speak that this humane side of Rizal
          makes him more fit as our national hero.
        </p>
      </div>
    </Feather>
  )
}

export default Opinions
