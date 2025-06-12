import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './startup.css';
import typingSound from '../assets/sounds/dial-up.mp3'; 
import windowsStartupSound from '../assets/sounds/windows-startup.mp3';

const Startup = () => {
  const navigate = useNavigate();

  const messages = useMemo(() => [
    "Verifying system integrity...",
    "Initializing bootloader modules...",
    "Loading configuration files...",
    "Detecting peripherals...",
    "Peripheral Check: Mouse [OK], Keyboard [OK], Monitor [OK]",
    "Starting the Script OS...",
    "Initializing system files...",
    "Loading user interface..."
  ], []);

  const [currentLine, setCurrentLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [blinker, setBlinker] = useState(true);
  const [isDone, setIsDone] = useState(false);
  const [shouldFadeOut, setShouldFadeOut] = useState(false);
  const audioRef = useRef(null);

  //  background typing music
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
  
    audio.volume = 0.3;
    audio.loop = true;
  
    audio.currentTime = 2;

   audioRef.current.play().catch(e => {
 
      console.log("Typing sound play prevented:", e);
    });
    
  
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);
  

  useEffect(() => {
    if (isDone) {
      const startupSound = new Audio(windowsStartupSound);
      startupSound.volume = 0.5;
  
      const timeout = setTimeout(() => {
        setShouldFadeOut(true);
  
        if (audioRef.current) {
          audioRef.current.pause();
        }

        startupSound.play().catch(e => {
          console.log("Windows startup sound failed:", e);
          navigate('/play'); 
        });
  
        navigate('/play');
       
  
      }, 700);
  
      return () => clearTimeout(timeout);
    }
  }, [isDone, navigate]);
  

  // Blinking cursor
  useEffect(() => {
    const blink = setInterval(() => {
      setBlinker(prev => !prev);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  // Typing effect
  useEffect(() => {
    if (currentLine >= messages.length) {
      setIsDone(true);
      return;
    }

    if (charIndex < messages[currentLine].length) {
      const timeout = setTimeout(() => {
        setCharIndex(prev => prev + 1);
      }, 25);
      return () => clearTimeout(timeout);
    } else {
      setDisplayedLines(prev => [...prev, messages[currentLine]]);
      setCurrentLine(prev => prev + 1);
      setCharIndex(0);
    }
  }, [charIndex, currentLine, messages]);

  const currentText = messages[currentLine]?.substring(0, charIndex) || "";

  return (
    <div className={`startup-screen ${shouldFadeOut ? 'fade-out' : ''}`}>
      {/* Hidden audio element */}
      <audio ref={audioRef} src={typingSound} preload="auto" />



      <div className="startup-content">
        <p>The&lt;Script&gt;. Released: 03/24/2025</p>
        <p>The&lt;Script&gt; Inc. TSBIOS © 2000 The Script Inc.</p><br /><br />
        <p>SIBIOS S13 2000–2025 Special Edition</p><br />
        <p>Script Interactive Bootloader (SIB) v3.7</p>
        <p>Checking RAM: 16384 MB OK</p><br />
        <p>Loading Resources... ({displayedLines.length}/{messages.length})</p><br />

        {displayedLines.map((line, i) => (
          <p key={i} className="indented">{line}</p>
        ))}

        {!isDone && (
          <p className="indented">
            {currentText}
            <span className="cursor">{blinker ? '_' : ' '}</span>
          </p>
        )}
      </div>

      <footer className="startup-footer">
        <p>{isDone ? <span className="cursor">{blinker ? '_' : ' '}</span> : ''}</p>
        <p>Tip: Creativity is the only bootloader you need.</p>
      </footer>
    </div>
  );
};

export default Startup;
