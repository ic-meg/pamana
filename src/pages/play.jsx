import React, { useRef, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import { AudioContext } from '../contexts/AudioContext';
import bgBrush from '../assets/images/bgBrush.jpg';
import brushImg from '../assets/images/brush.png';




const BrushReveal = () => {
  const navigate = useNavigate();
  // const { playTrack } = useContext(AudioContext);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Fade state
  const [fade, setFade] = useState(false);
  const [hover, setHover] = useState(false);
  

  // Fade in on mount
  useEffect(() => {
    setFade(true);
  }, []);

  // Set canvas size to window size
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Gradient background
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(217, 217, 217, 0.90)');
      gradient.addColorStop(1, 'rgba(48, 27, 2, 0.90)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  // Handle brushing (always active on hover/move)
  const handleBrush = (clientX, clientY) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const brush = new window.Image();
    brush.src = brushImg;
    brush.onload = () => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.drawImage(brush, x - brush.width / 2, y - brush.height / 2);
      ctx.globalCompositeOperation = 'source-over';
    };
  };

  // Mouse and touch events (always brush on move)
  const handleMouseMove = (e) => {
    handleBrush(e.clientX, e.clientY);
  };
  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleBrush(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  // Fade out, then navigate
const handleHistoryClick = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    navigate("/restricted");
  } else {
    setFade(false);
    setTimeout(() => {
      navigate("/desktop");
    }, 700);
  }
};

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden"
      style={{
        fontFamily: "'Kolker Brush', cursive",
        background: `url(${bgBrush}) no-repeat fixed`,
        backgroundPosition: "center 1px",
        backgroundSize: "cover",
        opacity: fade ? 1 : 0,
        transition: "opacity 0.7s ease",
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ touchAction: "none", zIndex: 2 }}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      />

      {/* Overlay Content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ zIndex: 3, pointerEvents: "none" }}
      >
        <div style={{ position: "relative", display: "inline-block" }}>
          <h1
            style={{
              fontFamily: "'Kolker Brush', cursive",
              fontSize: "clamp(100px, 20vw, 300px)", // para responsive yung font
              color: "#000",
              textShadow: "2px 2px 8px #fff, 0 0 2px #5B3200",
              marginBottom: "clamp(20px, 8vh, 100px)",
              lineHeight: 1,
              textAlign: "center",
            }}
          >
            Pamana
          </h1>

          <span
            style={{
              position: "absolute",
              right: "clamp(10px, 5vw, 40px)",
              bottom: window.innerWidth < 768 ? "8vh" : "10vh",
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(14px, 4vw, 30px)",
              color: "black",
              textShadow:
                "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
              fontStyle: "italic",
              pointerEvents: "none",
            }}
          >
            Jose Rizal
          </span>
        </div>
        <button
          onClick={handleHistoryClick}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            fontFamily: "'Estonia', cursive",
            fontSize: "clamp(18px, 2.5vw, 45px)",
            background: "transparent",
            color: "black",
            border: "none",
            borderRadius: 12,
            padding: "12px 30px",
            cursor: "pointer",
            pointerEvents: "auto",
            boxShadow: "none",
            position: "absolute",
            bottom: "5%",
            left: "50%",

            transition: "all 0.3s ease-in-out",
            textShadow: hover
              ? "0 0 6px rgba(0, 0, 0, 0.5), 0 0 2px rgba(255, 255, 255, 0.7)"
              : "1px 1px 2px rgba(255, 255, 255, 0.8), 0 0 4px rgba(0, 0, 0, 0.9)",
            transform: hover
              ? "translateX(-50%) scale(1.05)"
              : "translateX(-50%)",
          }}
        >
          Step into History
        </button>
      </div>
    </div>
  );
};

export default BrushReveal;