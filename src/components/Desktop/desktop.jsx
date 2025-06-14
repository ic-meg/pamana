import React, { useState, useEffect, useContext, useRef } from "react";

import MonitorFrame from "../../components/MonitorFrame";
import desktopBg from "../../assets/images/noli.png";
import portraitBg from "../../assets/images/noli-portrait.png";

import Taskbar from "./taskbar";
import DesktopIcon from "./DesktopIcon";
import WindowApp from "./WindowApp";

import ScriptWindow from "./ScriptWindow";
import WelcomePopup from "./WelcomePopUp";

// import Giuliani from "./Members/Gil";
// import Meg from "./Members/Meg";
// import Ley from "./Members/Ley";
// import Pam from "./Members/Pam";
// import Kate from "./Members/Kate";

import Timeline from "./Members/Timeline";
import { Icons } from "../../assets";

import { AudioContext } from "../../contexts/AudioContext";
import desktopMusic from "../../assets/sounds/bgmusic.MP3";

import clickSound from "../../assets/sounds/mouse-click.mp3";
import keySingle from "../../assets/sounds/key-single.MP3";
import keyLoop from "../../assets/sounds/key-loop.MP3";

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

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
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

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  //List of the app
  const [apps, setApps] = useState([
    {
      id: "pamana",
      title: "Pamana",
      icon: Icons.Home,
      isOpen: false,
      isMinimized: false,
      component: <ScriptWindow />,
    },
    {
      id: "intro",
      title: "Introduction",
      icon: Icons.Intro,
      isOpen: false,
      isMinimized: false,
      component: <ScriptWindow />,
    },
    {
      id: "bio",
      title: "Biography",
      icon: Icons.bio,
      isOpen: false,
      isMinimized: false,
      component: <ScriptWindow />,
    },
    {
      id: "literary",
      title: "Literary Works",
      icon: Icons.literary,
      isOpen: false,
      isMinimized: false,
      component: <ScriptWindow />,
    },
    {
      id: "legacy",
      title: "Legacy",
      icon: Icons.legacy,
      isOpen: false,
      isMinimized: false,
      component: <ScriptWindow />,
    },
    {
      id: "timeline",
      title: "Timeline",
      icon: Icons.oldclock,
      isOpen: false,
      isMinimized: false,
      component: <Timeline />,
    },
    {
      id: "political",
      title: "Political Thoughts",
      icon: Icons.political,
      isOpen: false,
      isMinimized: false,
      component: <Timeline />,
    },
    {
      id: "quotes",
      title: "Quotes",
      icon: Icons.quotes,
      isOpen: false,
      isMinimized: false,
      component: <ScriptWindow />,
    },
    {
      id: "illustration",
      title: "Illustration",
      icon: Icons.illustration,
      isOpen: false,
      isMinimized: false,
      component: <ScriptWindow />,
    },
    {
      id: "opinions",
      title: "Opinions",
      icon: Icons.opinion,
      isOpen: false,
      isMinimized: false,
      component: <ScriptWindow />,
    },
    {
      id: "references",
      title: "References",
      icon: Icons.references,
      isOpen: false,
      isMinimized: false,
      component: <ScriptWindow />,
    },
  ]);

  const { playTrack, toggleMute, isMuted, currentTrack } =
    useContext(AudioContext);

  useEffect(() => {
    if (currentTrack !== desktopMusic) {
      playTrack(desktopMusic, {
        volume: 0.3,
        loop: true,
      });
    }
  }, [playTrack, currentTrack]);

  const handleAppClick = (id) => {
    setApps((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, isOpen: true, isMinimized: false } : app
      )
    );
  };

  const handleMinimize = (id) => {
    setApps((prev) =>
      prev.map((app) => (app.id === id ? { ...app, isMinimized: true } : app))
    );
  };

  const handleClose = (id) => {
    setApps((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, isOpen: false, isMinimized: false } : app
      )
    );
  };

  /* Mobile Detection */
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
          style={{ opacity: 0.7 }}
        />

        {/* Desktop Icons */}
        <div
          className="
          absolute z-10
          grid grid-rows-6 grid-flow-col gap-x-6 gap-y-2 p-4
          top-2 left-2
        "
        >
          <div onClick={() => handleAppClick("home")}>
            <DesktopIcon icon={Icons.Home} label="Homepage" />
          </div>
          <div onClick={() => handleAppClick("intro")}>
            <DesktopIcon icon={Icons.Intro} label="Introduction" />
          </div>
          <div onClick={() => handleAppClick("bio")}>
            <DesktopIcon icon={Icons.directory} label="Biography" />
          </div>
          <div onClick={() => handleAppClick("literary")}>
            <DesktopIcon icon={Icons.quill} label="Literary Works" />
          </div>
          <div onClick={() => handleAppClick("political")}>
            <DesktopIcon icon={Icons.political} label="Political Thought" />
          </div>
          <div onClick={() => handleAppClick("legacy")}>
            <DesktopIcon icon={Icons.legacy} label="Legacy" />
          </div>
          <div onClick={() => handleAppClick("timeline")}>
            <DesktopIcon icon={Icons.oldclock} label="Timeline" />
          </div>
          <div onClick={() => handleAppClick("quotes")}>
            <DesktopIcon icon={Icons.quotes} label="Quotes" />
          </div>
          <div onClick={() => handleAppClick("illustration")}>
            <DesktopIcon
              icon={Icons.illustration}
              label="Illustration and Photos"
            />
          </div>
          <div onClick={() => handleAppClick("opinions")}>
            <DesktopIcon icon={Icons.opinion} label="Opinions" />
          </div>
          <div onClick={() => handleAppClick("references")}>
            <DesktopIcon icon={Icons.references} label="References" />
          </div>
        </div>

        {/* Open Application Windows */}
        {apps.map(
          (app) =>
            app.isOpen &&
            !app.isMinimized && (
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
          openApps={apps.filter((app) => app.isOpen)}
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
