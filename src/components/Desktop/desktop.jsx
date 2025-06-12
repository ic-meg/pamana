import React, { useState, useEffect, useContext, useRef } from 'react';

import MonitorFrame from '../../components/MonitorFrame';
import desktopBg from '../../assets/images/retroDesktopWallpaper.jpg';
import portraitBg from '../../assets/images/retroDesktopWallpaper-portrait.jpg';

import Taskbar from './taskbar';
import DesktopIcon from './DesktopIcon';
import WindowApp from './WindowApp';

import theScriptIcon from '../../assets/icons/shortcut.png';
import directory from '../../assets/icons/directory.ico';

import ScriptWindow from './ScriptWindow';
import WelcomePopup from './WelcomePopUp';

import Giuliani from './Members/Gil';
import Meg from './Members/Meg';
import Ley from './Members/Ley';
import Pam from './Members/Pam';
import Kate from './Members/Kate';

import { AudioContext } from '../../contexts/AudioContext';
import desktopMusic from '../../assets/sounds/bgmusic.MP3'; 

import clickSound from '../../assets/sounds/mouse-click.mp3';
import keySingle from '../../assets/sounds/key-single.MP3';
import keyLoop from '../../assets/sounds/key-loop.MP3';


const Desktop = () => {

  const audioRef = useRef(null);

  useEffect(() => {
    let lastKeyTime = 0;
    let loopAudio = null;
    
    /*Typing effect*/
    const handleKeyDown = () => {
      const now = Date.now();
      const timeSinceLastPress = now - lastKeyTime;
      lastKeyTime = now;
  
      if (timeSinceLastPress < 150) {
        if (!loopAudio || loopAudio.ended || loopAudio.paused) {
          loopAudio = new Audio(keyLoop);
          loopAudio.volume = 0.5;
          loopAudio.play().catch(() => {});
        }
      } else {
        const singleAudio = new Audio(keySingle);
        singleAudio.volume = 0.4;
        singleAudio.play().catch(() => {});
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (loopAudio) {
        loopAudio.pause();
        loopAudio = null;
      }
    };
  }, []);
  
   /*Clicking effect*/
  useEffect(() => {
    const handleClick = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0; 
        audioRef.current.play().catch(() => {});
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

   //List of the app 
  const [apps, setApps] = useState([
    {
      id: 'script',
      title: 'The<Script>',
      icon: theScriptIcon,
      isOpen: false,
      isMinimized: false,
      component: <ScriptWindow />
    },
    {
      id: 'calais',
      title: 'Giuliani',
      icon:  directory,
      isOpen: false,
      isMinimized: false,
      component: <Giuliani />
    },
    {
      id: 'fabian',
      title: 'Meg',
      icon:  directory,
      isOpen: false,
      isMinimized: false,
      component: <Meg />
    },
    {
      id: 'galo',
      title: 'Shanley',
      icon:  directory,
      isOpen: false,
      isMinimized: false,
      component: <Ley />
    },
    {
      id: 'murillo',
      title: 'Pamela',
      icon:  directory,
      isOpen: false,
      isMinimized: false, 
      component: <Pam />
    },
    {
      id: 'serrano',
      title: 'Kate',
      icon:  directory,
      isOpen: false,
      isMinimized: false,
      component: <Kate />
    }
  ]);

  const { playTrack, toggleMute, isMuted, currentTrack } = useContext(AudioContext);

  
  useEffect(() => {
    if (currentTrack !== desktopMusic) {
      playTrack(desktopMusic, { 
        volume: 0.3, 
        loop: true 
      });
    }
  }, [playTrack, currentTrack]);

  const handleAppClick = (id) => {
    setApps(prev =>
      prev.map(app =>
        app.id === id ? { ...app, isOpen: true, isMinimized: false } : app
      )
    );
  };

  const handleMinimize = (id) => {
    setApps(prev =>
      prev.map(app =>
        app.id === id ? { ...app, isMinimized: true } : app
      )
    );
  };

  const handleClose = (id) => {
    setApps(prev =>
      prev.map(app =>
        app.id === id ? { ...app, isOpen: false, isMinimized: false } : app
      )
    );
  };

  /* Mobile Detection */
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <MonitorFrame>
      <audio ref={audioRef} src={clickSound} preload="auto" />
      <div className="relative w-full h-full overflow-hidden crt-grainy pb-[48px]">


        {/* Wallpaper Background */}
        <img
          src={isMobile ? portraitBg : desktopBg}
          alt="Desktop Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />


        {/* Desktop Icons */}
        <div className="
          absolute z-10
          flex flex-col gap-3 p-4
          top-2 left-2
        ">

          <div onClick={() => handleAppClick('script')}>
            <DesktopIcon icon={theScriptIcon} label="The <Script>" />
          </div>
          <div onClick={() => handleAppClick('calais')}>
            <DesktopIcon icon={directory} label="Calais" />
          </div>
          <div onClick={() => handleAppClick('fabian')}>
            <DesktopIcon icon={directory} label="Fabian" />
          </div>
          <div onClick={() => handleAppClick('galo')}>
            <DesktopIcon icon={directory} label="Galo" />
          </div>
          <div onClick={() => handleAppClick('murillo')}>
            <DesktopIcon icon={directory} label="Murillo" />
          </div>
          <div onClick={() => handleAppClick('serrano')}>
            <DesktopIcon icon={directory} label="Serrano" />
          </div>
        </div>

        {/* Open Application Windows */}
        {apps.map(app =>
          app.isOpen && !app.isMinimized && (
            <WindowApp
              key={app.id}
              title="The&lt;Script&gt; - Showcase 2025"
              icon={app.icon}
              onClose={() => handleClose(app.id)}
              onMinimize={() => handleMinimize(app.id)}
            >
            {app.component}
            </WindowApp>
          )
        )}
        
        {/* Welcome Popup */}
        <WelcomePopup />
        
        {/* Taskbar */}
        <Taskbar 
          openApps={apps.filter(app => app.isOpen)} 
          onClickApp={handleAppClick} 
          isMuted={isMuted} 
          toggleMute={toggleMute}
          isMobile={isMobile}
        />
      </div>
    </MonitorFrame>
  );
};

export default Desktop;