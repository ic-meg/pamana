import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/startup.css';

const Shutdown = () => {
  const navigate = useNavigate();

  const messages = useMemo(() => [
    "Saving resources...",
    "  Saving open files....",
    "  Terminating active processes....",
    "  Closing user interface"
  ], []);

  // typewriter animation states
  const [currentLine, setCurrentLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);

   // blinking cursor + shutdown status flags
  const [blinker, setBlinker] = useState(true);
  const [isDone, setIsDone] = useState(false);
  const [shouldFadeOut, setShouldFadeOut] = useState(false);

 // aafter shutdown redirect to "/"
  useEffect(() => {
    if (isDone) {
      const timeout = setTimeout(() => {
        setShouldFadeOut(true);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [isDone, navigate]);

  //blinking cursor effect 
  useEffect(() => {
    const blink = setInterval(() => {
      setBlinker(prev => !prev);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  // typewriter effect logic
  useEffect(() => {
    if (currentLine >= messages.length) {
      setIsDone(true);
      return;
    }

    if (charIndex < messages[currentLine].length) {
      const timeout = setTimeout(() => {
        setCharIndex(prev => prev + 1);
      }, 18);
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
      <div className="startup-content text-white">
        <p><strong>The&lt;Script&gt;.</strong>   Shut down Initiated: 03/24/2025</p>
        <p><strong>The&lt;Script&gt; Inc.</strong>   TSBIOS © 2000 The Script Inc.,</p>
        <br />
        <p>SIBIOS S13 2000–2025 Special Edition</p>
        <br />
        <p>Script Interactive Bootloader (SIB) vX 3.7</p>
        <p>Releasing Resources...</p>
        <br />

        {displayedLines.map((line, i) => (
          <p key={i} className="indented">{line}</p>
        ))}

        {!isDone && (
          <p className="indented">
            {currentText}
            <span className="cursor">{blinker ? '_' : ' '}</span>
          </p>
        )}

        {isDone && (
          <>
            <br /><br />
            <p><span className="cursor">{blinker ? '_' : ' '}</span></p>
            <p>Goodbye.</p>
    
          </>
        )}
      </div>

      <footer className="startup-footer">
        <p>Tip: Every great ending is just a reboot away.</p>
      </footer>
    </div>
  );
};

export default Shutdown;
