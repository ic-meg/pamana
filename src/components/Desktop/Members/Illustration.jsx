import React, { useState, useEffect } from 'react';
import Feather from "../Feather";
import illus1 from '../../../assets/images/illus1.png';
import illus2 from '../../../assets/images/illus2.png';
import illus3 from '../../../assets/images/illus3.png';
import illus4 from '../../../assets/images/illus4.png';
import illus5 from '../../../assets/images/illus5.png';
import illus6 from '../../../assets/images/illus6.png'; // Goodbye Leonora image

const Illustration = ({ setActiveTab }) => {
  const [showLeonora, setShowLeonora] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-effect");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <Feather isScrollable={true} setActiveTab={setActiveTab}>
      <style>{`
        .scroll-effect {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .scroll-effect.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <div
        style={{
          padding: "40px",
          fontFamily: "serif",
          color: "#5c4033",
          maxWidth: "1200px",
          marginTop: "100 auto",
          boxSizing: "border-box",
        }}
      >
        <h1
          className="scroll-effect"
          style={{
            fontSize: "85px",
            textAlign: "center",
            marginBottom: "60px",
            fontStyle: "italic",
            fontWeight: 600,
            fontFamily: "'Dancing Script', cursive",
          }}
        >
          Illustrations
        </h1>

        {/* --- Noli Me Tangere --- */}
        <div className="scroll-effect" style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "60px",
          flexWrap: "wrap",
        }}>
          <div>
            <img src={illus1} alt="Noli Me Tángere" style={{ width: "180px", height: "auto", display: "block" }} />
            <p style={{ textAlign: "center", fontStyle: "italic", fontWeight: "600" }}>
              Noli me tángere<br />1887
            </p>
          </div>
          <div style={{
            backgroundColor: "#d6bb9a",
            padding: "30px",
            fontSize: "20px",
            flex: 1,
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "90px",
            marginRight: "-40px",
          }}>
            <p>
              A novel by José Rizal that exposes the social injustices, corruption, and abuse under Spanish colonial rule in the Philippines.
              It follows Crisostomo Ibarra, who returns home to reform society but faces oppression and betrayal.
            </p>
          </div>
        </div>

        {/* --- Calamba, Laguna --- */}
        <div className="scroll-effect" style={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          gap: "60px",
          flexWrap: "wrap",
        }}>
          <div>
            <img src={illus2} alt="Calamba, Laguna" style={{ width: "200px", height: "auto", display: "block" }} />
            <p style={{ textAlign: "center", fontStyle: "italic", fontWeight: "600" }}>
              Calamba, Laguna
            </p>
          </div>
          <div style={{
            backgroundColor: "#d6bb9a",
            padding: "30px",
            fontSize: "20px",
            flex: 1,
            textAlign: "right",
            borderTopRightRadius: "90px",
            borderBottomRightRadius: "0px",
            marginLeft: "-55px",
          }}>
            <p>
              José Rizal was born on June 19, 1861 in Calamba, Laguna, a quiet town in the Philippines.
              His birthplace was a large Spanish-style house, now preserved as a shrine, where he grew up in a well-off and educated family.
            </p>
          </div>
        </div>

        {/* --- Sketches by Rizal --- */}
        <div className="scroll-effect" style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "60px",
          flexWrap: "wrap",
        }}>
          <div>
            <img src={illus3} alt="Sketches by Rizal" style={{ width: "180px", height: "auto", display: "block" }} />
            <p style={{ textAlign: "center", fontStyle: "italic", fontWeight: "600" }}>
              A Group of Sketches by Rizal
            </p>
          </div>
          <div style={{
            backgroundColor: "#d6bb9a",
            padding: "30px",
            fontSize: "20px",
            flex: 1,
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "90px",
            marginRight: "-40px",
          }}>
            <p>
              As a child, José Rizal enjoyed drawing animals like birds and horses without lifting his pencil, always creating original ideas.
              He also loved molding with clay and wax, shaping birds and butterflies that improved over time. Encouraged by his uncles,
              this sparked his interest in nature and creativity.
            </p>
          </div>
        </div>

        {/* --- La Liga Filipina --- */}
        <div className="scroll-effect" style={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          gap: "60px",
          flexWrap: "wrap",
        }}>
          <div>
            <img src={illus4} alt="La Liga Filipina" style={{ width: "200px", height: "auto", display: "block" }} />
            <p style={{ textAlign: "center", fontStyle: "italic", fontWeight: "600" }}>
              The Rizal Monument
            </p>
          </div>
          <div style={{
            backgroundColor: "#d6bb9a",
            padding: "30px",
            fontSize: "20px",
            flex: 1,
            textAlign: "right",
            borderTopRightRadius: "90px",
            borderBottomRightRadius: "0px",
            marginLeft: "-51px",
          }}>
            <p>
              Rizal established La Liga Filipina to promote unity and reforms peacefully.
              Though it was dissolved quickly, it inspired future movements that led to the Philippine Revolution.
            </p>
          </div>
        </div>

        {/* --- Dapitan Exile --- */}
        <div className="scroll-effect" style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "60px",
          flexWrap: "wrap",
        }}>
          <div>
            <img src={illus5} alt="Dapitan Exile" style={{ width: "180px", height: "auto", display: "block" }} />
            <p style={{ textAlign: "center", fontStyle: "italic", fontWeight: "600" }}>
              La Solidaridad<br />
              February 15, 1889
            </p>
          </div>
          <div style={{
            backgroundColor: "#d6bb9a",
            padding: "30px",
            fontSize: "20px",
            flex: 1,
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "90px",
            marginRight: "-40px",
          }}>
            <p>
              During his exile in Dapitan, Rizal contributed as a teacher, doctor, and engineer.
              He enhanced the community through education, medicine, and public works — a true model of civic dedication.
            </p>
          </div>
        </div>

        {/* --- Goodbye Leonora Button --- */}
        <div className="scroll-effect" style={{ textAlign: "center", marginTop: "60px" }}>
          <button
            onClick={() => setShowLeonora(true)}
            style={{
              padding: "12px 24px",
              fontSize: "20px",
              backgroundColor: "#5c4033",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontFamily: "serif"
            }}
          >
            Goodbye Leonora
          </button>

          {showLeonora && (
            <div style={{ marginTop: "30px" }}>
              <img
                src={illus6}
                alt="Goodbye Letter to Leonora"
                style={{ width: "700px", height: "auto" }}
              />
            </div>
          )}
        </div>
      </div>
    </Feather>
  );
};

export default Illustration;
