import React, { createContext, useState, useRef, useEffect } from 'react';

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(new Audio());
  const [currentTrack, setCurrentTrack] = useState(null);

  const playTrack = (src, options = {}) => {
    if (audioRef.current.src !== src) {
      audioRef.current.src = src;
      audioRef.current.currentTime = 0;
    }
    
    audioRef.current.volume = options.volume || 0.5;
    audioRef.current.loop = options.loop || false;
    setCurrentTrack(src);
    
    audioRef.current.play().catch(e => {
      
      console.log("Typing sound play prevented:", e);
    });
    
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const currentAudio = audioRef.current;
    return () => {
      if (currentAudio) {
        currentAudio.pause();
      }
    };
  }, []);

  return (
    <AudioContext.Provider value={{ 
      playTrack, 
      toggleMute, 
      isMuted, 
      currentTrack,
      audioRef 
    }}>
      {children}
    </AudioContext.Provider>
  );
};