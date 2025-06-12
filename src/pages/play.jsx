import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './play.css';
import logo from '../assets/icons/icon-with-name.svg';

import vinylSound from '../assets/sounds/bgmusic.MP3';
import { AudioContext } from '../contexts/AudioContext';

const Play = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();
  const { playTrack } = useContext(AudioContext);

  const handleClick = () => {
    setIsSpinning(true);
    playTrack(vinylSound, { 
      volume: 0.7,
      loop: true 
    });

    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        navigate('/desktop');
      }, 800);
    }, 2000);
  };

  return (
    <div className={`play-screen retro-boot-in ${fadeOut ? 'fade-out' : ''}`}>
      <p className="click-to-play">Click to Play</p>
      <div className="vinyl-wrapper relative" onClick={handleClick}>
        <img
          src={logo}
          alt="The Script Logo"
          className={`vinyl-image ${isSpinning ? 'spin-infinite' : ''}`}
        />
      </div>
    </div>
  );
};

export default Play;