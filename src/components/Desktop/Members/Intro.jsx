import { useEffect, useState } from 'react';
import Feather from "../Feather";
import hbdRizal from '../../../assets/images/hbdRizal.png';
import curvyLines from '../../../assets/images/curvyLines.png';
import curvyLines2 from '../../../assets/images/curvyLines2.png';
import './Quotes.css'; 

const Intro = ({ setActiveTab }) => {
  const [displayedParagraphs, setDisplayedParagraphs] = useState([]);
  const [currentText, setCurrentText] = useState('');
  const [currentParaIndex, setCurrentParaIndex] = useState(0);
  const [showIntroTitle, setShowIntroTitle] = useState(false);
  const [animateElements, setAnimateElements] = useState(false);
  
  const paragraphs = [
    "Who is José Protasio Rizal Mercado y Alonso Realonda? One of the most revered figures in Philippine history. José Rizal was a multifaceted intellectual and a prominent writer who called him as sought information of the government through his writing.",
    "He did not raise a sword, yet he became the most dangerous enemy of oppression—because he attracted the minds of the people. His pen, mightier than any weapon, became a symbol of resistance and reform. Rizal's unwavering courage to speak the truth, even in the face of death, made him a beacon of hope for the Filipino people.",
    "This brewery inspired our homeland to fight for freedom. He is the one who started the fire and ignited the hearts of Filipinos which had to live people's revivalism. At the cost of his life, he stood in amidst the chaos and rage of the Spaniards with dignity and determination. He was executed by colonialists and became the trigger of the betterment of tomorrow.",
    "To this day, his legacy lives on, not just in monuments or history books, but in the continuing struggle for truth, justice, and national identity."
  ];

  // Trigger animations when component mounts
  useEffect(() => {
    setAnimateElements(true);
    const timer = setTimeout(() => setAnimateElements(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Blinking animation for Introduction title
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowIntroTitle(prev => !prev);
    }, 1000);

    return () => clearInterval(blinkInterval);
  }, []);

  // Typing animation for paragraphs
  useEffect(() => {
    let currentIndex = 0;
    const paragraphText = paragraphs[currentParaIndex];
    
    if (!paragraphText) return;

    const typingInterval = setInterval(() => {
      if (currentIndex <= paragraphText.length) {
        setCurrentText(paragraphText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setDisplayedParagraphs(prev => [...prev, paragraphText]);
        setCurrentText('');
        setTimeout(() => {
          if (currentParaIndex < paragraphs.length - 1) {
            setCurrentParaIndex(prev => prev + 1);
          }
        }, 500);
      }
    }, 20);

    return () => clearInterval(typingInterval);
  }, [currentParaIndex]);

  return (
    <Feather isScrollable={true} setActiveTab={setActiveTab}>
      <div style={{ 
        position: "relative", 
        padding: "0 20px",
        minHeight: "100vh"
      }}>
        {/* Main Content Container */}
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          padding: "40px 0 60px",
          position: "relative"
        }}>
          {/* Image Container with Curvy Lines */}
          <div style={{ 
            position: "relative",
            marginBottom: "10px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            {/* hbdRizal.png */}
            <div 
              className={animateElements ? "fadeInUp" : ""}
              style={{
                width: "180px",
                height: "260px",
                borderRadius: "80%",
                overflow: "hidden",
                position: "relative",
                zIndex: 2,
                animationDelay: "0.1s",
                animationFillMode: "both"
              }}
            >
              <img 
                src={hbdRizal} 
                alt="José Rizal" 
                style={{ 
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  transform: animateElements ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.5s ease"
                }} 
              />
            </div>

            {/* curvyLines.png with fadeInUp animation */}
			      <img 
			        src={curvyLines} 
			        alt="Decorative lines" 
			        style={{ 
				      width: "100%",  
				      maxWidth: "500px",
				      position: "absolute",
				      bottom: "40px",
				      left: 0,
				      right: 0,  
				      margin: "0 auto",
				      zIndex: 1,
				      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
				      opacity: 0,  
				      animation: "fadeInUp 0.7s ease 0.3s forwards"  
			      }} 
			    />

            {/* Blinking Introduction text with fadeInUp */}
            <h1 
              className={animateElements ? "fadeInUp" : ""}
              style={{ 
                fontSize: "5.5rem", 
                marginTop: "160px", 
                marginBottom: "30px", 
                color: "#543312",
                fontFamily: "'Great Vibes', cursive",
                fontWeight: "normal",
                textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
                zIndex: 2,
                position: "relative",
                opacity: showIntroTitle ? 1 : 0.3, 
                transition: "opacity 0.5s ease-in-out, transform 0.5s ease",
                animationDelay: "0.5s",
                animationFillMode: "both"
              }}
            >
              Introduction
            </h1>
          </div>

          {/* Animated intro content */}
          <div style={{ 
            maxWidth: "800px", 
            textAlign: "center",
            position: "relative",
            zIndex: 3,
            padding: "0 20px"
          }}>
            <div style={{
              padding: "25px",
              borderRadius: "10px",
            }}>
              {/* Completed paragraphs */}
              {displayedParagraphs.map((text, index) => (
                <p 
                  key={index} 
                  className="fadeInUp"
                  style={{ 
                    fontSize: "1.1rem", 
                    lineHeight: "1.8", 
                    marginBottom: "20px",
                    color: "#452702",
                    animationDelay: `${0.7 + (index * 0.2)}s`,
                    animationFillMode: "both"
                  }}
                >
                  {text}
                </p>
              ))}
              
              {/* Currently typing paragraph */}
              {currentText && (
                <p style={{ 
                  fontSize: "1.1rem", 
                  lineHeight: "1.8", 
                  marginBottom: "20px",
                  color: "#452702",
                  whiteSpace: "pre-wrap"
                }}>
                  {currentText}
                  <span style={{
                    animation: "blink 0.7s infinite",
                    marginLeft: "2px"
                  }}>|</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* curvyLines2.png */}
		<img 
		  src={curvyLines2} 
		  alt="Decorative lines" 
		  style={{ 
			width: "100%",
			maxWidth: "500px",
			position: "absolute",
			bottom: "-100px",
			left: 0,
			right: 0,
			margin: "0 auto",
			zIndex: 1,
			filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
			opacity: 0,
			animation: "fadeInUp 0.7s ease 0.2s forwards"
		  }} 
		/>
      </div>

      {/* CSS for animations */}
		  <style jsx>{`
		    @keyframes fadeInUp {
        from {
        opacity: 0;
			  transform: translateY(20px);
			  }
        to {
			  opacity: 1;
			  transform: translateY(0);
			  }
		    }
		`}</style>
    </Feather>
  );
};

export default Intro;