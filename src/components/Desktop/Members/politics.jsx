import React, { useEffect } from "react";
import Feather from "../Feather";
import rizalPortrait from "../../../assets/images/rizal18.png";
// import parchmentImage from "../../../assets/images/parchment.png";
import linesImage from "../../../assets/icons/lines.png"
import scrollBg from "../../../assets/images/scroll-paper.png";


const scrollLabelStyle = {
  backgroundImage: `url(${scrollBg})`,
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "260px",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "16px",
  color: "#3a1e00",
  textAlign: "center",
  padding: "0 20px",
  marginBottom: "20px",
  fontFamily: "serif",
  lineHeight: "1.2",
};

const reforms = [
  {
    left: {
      title: "PEACEFUL REFORM",
      description:
        "Rizal opposed violent revolution, promoting change through peaceful, legal means and his writings.",
    },
    right: {
      title: "EDUCATION",
      description:
        "He believed education was essential for national progress and empowerment.",
    },
  },
  {
    left: {
      title: "EQUAL RIGHTS",
      description:
        "He called for equality between Filipinos and Spaniards in law, education, and public service.",
    },
    right: {
      title: "NATIONAL IDENTITY",
      description:
        "He promoted Filipino pride, celebrated the richness of Filipino culture, and encouraged unity among his fellow countrymen to foster a strong national identity.",
    },
  },
  {
    left: {
      title: "REPRESENTATION",
      description: "Rizal pushed for Filipino representation in the Spanish Parliament.",
    },
    right: {
      title: "ANTI-COLONIAL, NOT ANTI-SPAIN",
      description:
        "He criticized colonial abuses but believed in reform within the Spanish system.",
    },
  },
];


export default function RizalLegacy({setActiveTab}) {

  useEffect(() => {
    const cards = document.querySelectorAll(".scroll-effect");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
  }, []);


  return (
    <Feather isScrollable={true} setActiveTab={setActiveTab}>
      <div
        style={{
          position: "relative",
          padding: "40px 30px",
          fontFamily: "'Coustard', serif",
          color: "#3d2e1e",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "20px",
            marginBottom: "50px",
          }}
        >
          <img
            src={rizalPortrait}
            alt="Jose Rizal"
            style={{ width: "400px", filter: "sepia(0.4)", flexShrink: 0 }}
          />
          <div>
            <h1
              style={{
                fontSize: "56px",
                fontWeight: "300",
                color: "#3a1e00",
                margin: 0,
                fontFamily: "coustard",
              }}
            >
              JOSÉ RIZAL
            </h1>
            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.9",
                marginTop: "10px",
                fontFamily: "serif",
              }}
            >
              A Filipino nationalist and intellectual, was a key figure in
              advocating for reforms during the Spanish colonial rule in the
              Philippines. His political beliefs centered around peaceful
              reform, equality, and freedom, rather than outright revolution.
            </p>
          </div>
        </div>

        {/* Reform Rows */}
        <div style={{ position: "relative", padding: "0 20px" }}>
          {/* ONE vertical line for the whole section */}
          <img
            src={linesImage}
            alt="Divider"
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 0,
              height: "100%",
              width: "auto",
            }}
          />

          {reforms.map((pair, index) => (
            <div
              key={index}
              className="scroll-effect"
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "40px",
                marginBottom: "80px",
                position: "relative",
              }}
            >
              {/* LEFT COLUMN */}
              <div
                style={{
                  width: "45%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div style={scrollLabelStyle}>{pair.left.title}</div>
                <p
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.7",
                    marginTop: "-12px",
                    fontWeight: "normal",
                    fontFamily: "serif",
                  }}
                >
                  {pair.left.description}
                </p>
              </div>

              {/* RIGHT COLUMN */}
              <div
                style={{
                  top: "100%",
                  width: "45%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <div
                  style={{
                    ...scrollLabelStyle,
                    marginLeft: "auto",
                    marginTop: "-55px",
                  }}
                >
                  {pair.right.title}
                </div>

                <p
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.7",
                    textAlign: "right",
                    marginTop: "-12px",
                    fontWeight: "normal",
                    fontFamily: "serif",
                  }}
                >
                  {pair.right.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Feather>
  );
}
