import React, { useState, useEffect } from 'react';
import Feather from "../Feather";
import illus1 from '../../../assets/images/illus1.png';
import illus2 from '../../../assets/images/carved.png';
import illus3 from '../../../assets/images/illus3.png';
import illus4 from '../../../assets/images/illus4.png';
import illus5 from '../../../assets/images/illus5.png';
import illus6 from '../../../assets/images/illus6.png'; // Goodbye Leonora image

const Illustration = ({ setActiveTab }) => {
  const [showLeonora, setShowLeonora] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

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
    <Feather
      isScrollable={true}
      setActiveTab={setActiveTab}
      activeTab="illustration"
    >
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
          margin: "0 auto",
          paddingTop: "20px",
          boxSizing: "border-box",
        }}
      >
        <h1
          className="scroll-effect font-great"
          style={{
            fontSize: "85px",
            textAlign: "center",
            marginBottom: "60px",
            fontStyle: "italic",
            fontWeight: 600,
          }}
        >
          Illustrations
        </h1>

        {/* --- Noli Me Tangere --- */}
        <div
          className="scroll-effect"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "60px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <img
              src={illus1}
              alt="Noli Me Tángere"
              style={{
                width: "180px",
                height: "auto",
                display: "block",
                cursor: "pointer",
              }}
              onClick={() => setPreviewImage(illus1)}
            />

            <p
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
            >
              Noli me tángere
              <br />
              1887
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#d6bb9a",
              padding: "30px",
              fontSize: "20px",
              flex: 1,
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "90px",
              marginRight: "-40px",
            }}
          >
            <p>
              A novel by José Rizal that exposes the social injustices,
              corruption, and abuse under Spanish colonial rule in the
              Philippines. It follows Crisostomo Ibarra, who returns home to
              reform society but faces oppression and betrayal.
            </p>
          </div>
        </div>

        {/* --- Calamba, Laguna --- */}
        <div
          className="scroll-effect"
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            gap: "60px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <img
              src={illus2}
              alt="Carved Bust of Rizal"
              style={{
                width: "180px",
                height: "auto",
                display: "block",
                cursor: "pointer",
              }}
              onClick={() => setPreviewImage(illus2)}
            />

            <p
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
            >
              Carved Bust of Rizal
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#d6bb9a",
              padding: "30px",
              fontSize: "20px",
              flex: 1,
              textAlign: "right",
              borderTopRightRadius: "90px",
              borderBottomRightRadius: "0px",
              marginLeft: "-55px",
            }}
          >
            <p>
              This sculpture reflects the reverence for Rizal in Filipino
              culture. Many such busts were commissioned as nationalistic icons
              after his death.
            </p>
          </div>
        </div>

        {/* --- Sketches by Rizal --- */}
        <div
          className="scroll-effect"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "60px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <img
              src={illus3}
              alt="Sketches of Rizal"
              style={{
                width: "180px",
                height: "auto",
                display: "block",
                cursor: "pointer",
              }}
              onClick={() => setPreviewImage(illus3)}
            />
            <p
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
            >
              A Group of Sketches by Rizal
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#d6bb9a",
              padding: "30px",
              fontSize: "20px",
              flex: 1,
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "90px",
              marginRight: "-40px",
            }}
          >
            <p>
              As a child, José Rizal enjoyed drawing animals like birds and
              horses without lifting his pencil, always creating original ideas.
              He also loved molding with clay and wax, shaping birds and
              butterflies that improved over time. Encouraged by his uncles,
              this sparked his interest in nature and creativity.
            </p>
          </div>
        </div>

        {/* --- La Liga Filipina --- */}
        <div
          className="scroll-effect"
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            gap: "60px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <img
              src={illus4}
              alt="La Liga Filipina"
              style={{
                width: "180px",
                height: "auto",
                display: "block",
                cursor: "pointer",
              }}
              onClick={() => setPreviewImage(illus4)}
            />
            <p
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "600",
              }}
            >
              The Rizal Monument
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#d6bb9a",
              padding: "30px",
              fontSize: "20px",
              flex: 1,
              textAlign: "left",
              borderTopRightRadius: "90px",
              borderBottomRightRadius: "0px",
              marginLeft: "-51px",
            }}
          >
            <p>
              Rizal established La Liga Filipina to promote unity and reforms
              peacefully. Though it was dissolved quickly, it inspired future
              movements that led to the Philippine Revolution.
            </p>
          </div>
        </div>

        {/* --- Dapitan Exile --- */}
        <div
          className="scroll-effect"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "60px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <img
              src={illus5}
              alt="Dapitan"
              style={{
                width: "180px",
                height: "auto",
                display: "block",
                cursor: "pointer",
              }}
              onClick={() => setPreviewImage(illus5)}
            />
          
       
          </div>
          <div
            style={{
              backgroundColor: "#d6bb9a",
              padding: "30px",
              fontSize: "20px",
              flex: 1,
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "90px",
              marginRight: "-40px",
            }}
          >
            <p>
              During his exile in Dapitan, Rizal contributed as a teacher,
              doctor, and engineer. He enhanced the community through education,
              medicine, and public works — a true model of civic dedication.
            </p>
          </div>
        </div>

        {/* --- Goodbye Leonora Button --- */}
        <div
          className="scroll-effect"
          style={{ textAlign: "center", marginTop: "60px" }}
        >
          <button
            onClick={() => setShowLeonora((prev) => !prev)}
            style={{
              backgroundColor: "#f5e6cc",
              color: "#3a1e00",
              border: "2px solid #8b5e3c",
              padding: "14px 32px",
              fontSize: "20px",
              fontFamily: "Coustard, serif",
              borderRadius: "40px",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.6), 0 4px 6px rgba(0,0,0,0.25)",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#e8d3aa")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#f5e6cc")
            }
          >
            {showLeonora ? "Hide Letter" : "Goodbye Leonora"}
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
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999999,
            cursor: "pointer",
          }}
        >
          <img
            src={previewImage}
            alt="Preview"
            style={{
              maxWidth: "60vw",
              maxHeight: "60vh",
              objectFit: "contain",
              borderRadius: "12px",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
              backgroundColor: "white",
              padding: "12px",
            }}
          />
        </div>
      )}
    </Feather>
  );
};

export default Illustration;
