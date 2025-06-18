import React from "react";
import Feather from "../Feather";
import "./References.css";

const references = [
  {
    id: 1,
    text: "Areté Ateneo. (2021, June 15). Rizal without the overcoat [Video]. YouTube.",
    link: "https://www.youtube.com/watch?v=bX2w_mUQ3sI"
  },
  {
    id: 2,
    text: "EXPERIENCE BIÑAN. (2023, August 24). Jose Rizal in Biñan.",
    link: "https://experiencebinan.com/rizal-in-binan/"
  },
  {
    id: 3,
    text: "Jose Rizal | EBSCO. (n.d.). EBSCO Information Services.",
    link: "https://www.youtube.com/watch?v=bX2w_mUQ3sI"
  },
  {
    id: 4,
    text: "Jose Rizal - New World Encyclopedia. (n.d.).",
    link: "https://www.newworldencyclopedia.org/entry/Jose_Rizal#Google_vignette"
  },
  {
    id: 5,
    text: "Ravin, T. B., M.D. (2001). Jose Rizal: Philippine national hero and ophthalmologist. JAMA Ophthalmology | JAMA Network.",
    link: "https://jamanetwork.com/"
  },
  {
    id: 6,
    text: "Kern, K. (n.d.) Rizal in Ateneo de Manila University. Scribd.",
    link: "https://www.scribd.com/document/387164672/Rizal-in-Ateneo-de-Manila-University"
  },
  {
    id: 7,
    text: "The Editors of Encyclopedia Britannica. (2025, April 15). Jose Rizal | Biography, Education, Works, Full Name, & Facts.",
    link: "https://www.britannica.com/biography/Jose-Rizal"
  },
  {
    id: 8,
    text: "Valdeavilla, R. (2024, October 20). The life and legacy of José Rizal: national hero of the Philippines. Culture Trip.",
    link: "https://theculturetrip.com/asia/articles/the-life-and-legacy-of-jose-rizal-the-philippines-national-hero"
  }
];

const References = ({ setActiveTab }) => {
  return (
    <Feather isScrollable={true} setActiveTab={setActiveTab}>
      <h1 className="references-title">
        <span className="pamana">Pamana’s</span>
        <span className="label">References</span>
      </h1>

      <ol className="reference-list">
        {references.map(ref => (
          <li key={ref.id}>
            <p>{ref.text}</p>
            <a href={ref.link} target="_blank" rel="noopener noreferrer">
              {ref.link}
            </a>
          </li>
        ))}
      </ol>
    </Feather>
  );
};

export default References;
