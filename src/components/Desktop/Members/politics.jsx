import React, { useEffect } from "react";
import Feather from "../Feather";
import rizalPortrait from "../../../assets/images/rizal18.png";
import parchmentImage from "../../../assets/images/parchment.png";
import linesImage from "../../../assets/images/lines.png";

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

export default function RizalLegacy() {
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
    <Feather isScrollable={true}>
      <div
        style={{
          position: "relative",
          padding: "60px 40px",
          fontFamily: "'Coustard', serif",
          color: "#3d2e1e",
          overflow: "hidden",
        }}
      >
        {/* Parchment Background */}
        <img
          src={parchmentImage}
          alt="Parchment"
          style={{
            position: "absolute",
            top: 370,
            right: 170,
            height: "70%",
            width: "60%",
            objectFit: "cover",
            opacity: 0.6,
            zIndex: -10,
          }}
        />

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
                fontSize: "42px",
                fontWeight: "700",
                color: "#3a1e00",
                margin: 0,
              }}
            >
              JOSÉ RIZAL
            </h1>
            <p style={{ fontSize: "18px", lineHeight: "1.9", marginTop: "10px" }}>
              A Filipino nationalist and intellectual, was a key figure in
              advocating for reforms during the Spanish colonial rule in the
              Philippines. His political beliefs centered around peaceful
              reform, equality, and freedom, rather than outright revolution.
            </p>
          </div>
        </div>

        {/* Reform Rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {reforms.map((pair, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "20px",
                position: "relative",
              }}
            >
              {/* Vertical Line Image */}
              <img
                src={linesImage}
                alt="Vertical Line"
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 0,
                  height: "100%",
                  width: "auto",
                  objectFit: "contain",
                }}
              />

              {/* Left Reform */}
              <div
                className="scroll-effect"
                style={{
                  transform: "translateY(50px)",
                  opacity: 0,
                  transition: "transform 0.6s ease, opacity 0.6s ease",
                  width: "48%",
                  textAlign: "left",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    backgroundColor: "#f9e4c8",
                    padding: "6px 12px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#5a3210",
                    border: "1px solid #d1a26c",
                    boxShadow: "1px 1px 3px rgba(0,0,0,0.1)",
                    marginBottom: "10px",
                    width: "240px",
                    minHeight: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  {pair.left.title}
                </div>
                <p style={{ fontSize: "17px", lineHeight: "1.7", margin: 40 }}>
                  {pair.left.description}
                </p>
              </div>

              {/* Right Reform */}
              <div
                className="scroll-effect"
                style={{
                  transform: "translateY(50px)",
                  opacity: 0,
                  transition: "transform 0.6s ease, opacity 0.6s ease",
                  width: "48%",
                  textAlign: "right",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    backgroundColor: "#f9e4c8",
                    padding: "6px 12px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#5a3210",
                    border: "1px solid #d1a26c",
                    boxShadow: "1px 1px 3px rgba(0,0,0,0.1)",
                    marginBottom: "10px",
                    width: "240px",
                    minHeight: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    marginLeft: "auto",
                  }}
                >
                  {pair.right.title}
                </div>
                <p style={{ fontSize: "17px", lineHeight: "1.7", margin: 40 }}>
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
