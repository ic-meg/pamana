import React, { useEffect, useState, useRef, useContext } from "react";
import volumeIcon from "../../assets/icons/volume.svg";
import appIcon from "../../assets/icons/windows.png";
import shutdownIcon from "../../assets/images/computer-old.png";
import { useNavigate } from "react-router-dom";

import shutdownSound from "../../assets/sounds/windows-shutdown.mp3";
import { AudioContext } from "../../contexts/AudioContext";
import clickSound from "../../assets/sounds/mouse-click.mp3";

const Taskbar = ({
  openApps = [],
  onClickApp,
  toggleMute,
  isMuted,
  isMobile,
}) => {
  const clickAudioRef = useRef(null);
  const navigate = useNavigate();
  const { audioRef } = useContext(AudioContext);
  const startButtonRef = useRef(null);

  const [time, setTime] = useState("");
  const [startOpen, setStartOpen] = useState(false);
  const startMenuRef = useRef(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      setTime(`${hours}:${minutes.toString().padStart(2, "0")}${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        startMenuRef.current &&
        !startMenuRef.current.contains(event.target) &&
        startButtonRef.current &&
        !startButtonRef.current.contains(event.target)
      ) {
        setStartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <audio ref={clickAudioRef} src={clickSound} preload="auto" />
      {startOpen && (
        <div className="absolute inset-0 bg-black bg-opacity-20 z-[998]" />
      )}

      <div
        className={`${
          isMobile ? "fixed" : "absolute"
        } bottom-0 left-0 w-full bg-[#E4E4E4] border-t flex items-center justify-between px-2 font-['Courier_New',_monospace] text-black z-50`}
        style={{
          height: "48px",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        {/* Start button */}
        <div className="flex items-center gap-2 text-sm">
          <button
            ref={startButtonRef}
            onClick={() => {
              if (clickAudioRef.current) {
                clickAudioRef.current.currentTime = 0;
                clickAudioRef.current.play().catch(() => {});
              }
              setStartOpen((prev) => !prev);
            }}
            className={`flex items-center gap-1 sm:gap-2 px-2 py-[3px] text-black bg-[#E4E4E4] border min-w-[70px] max-w-[90px]
            text-[12px] sm:text-[14px] overflow-hidden whitespace-nowrap
            ${
              startOpen
                ? "shadow-[inset_3px_3px_0_#7E7E7E,inset_-3px_-3px_0_#B1B1B1]"
                : "shadow-[inset_2px_2px_1px_#ffffff,inset_-2px_-2px_1px_#8b8b8b]"
            }`}
          >
            <img
              src={appIcon}
              alt="App Icon"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            <span className="truncate font-vt323">Start</span>
          </button>

          {/* Taskbar open app buttons */}
          <div
            className="flex items-center gap-1  max-w-[5vw] sm:max-w-none pr-2 
      scrollbar-thin scrollbar-thumb-[#A0A0A0] scrollbar-track-[#DFDFDF] 
      [&::-webkit-scrollbar]:h-[8px] 
      [&::-webkit-scrollbar-thumb]:rounded-md 
      [&::-webkit-scrollbar-thumb]:border 
      [&::-webkit-scrollbar-thumb]:border-[#8a8a8a] 
      [&::-webkit-scrollbar-thumb]:bg-gradient-to-b 
      [&::-webkit-scrollbar-thumb]:from-[#D4D0C8] 
      [&::-webkit-scrollbar-thumb]:to-[#C0C0C0] 
      [&::-webkit-scrollbar-track]:bg-[#DFDFDF]"
          >
            {openApps.map((app) => (
              <div key={app.id} className="relative group flex-shrink-0">
                <button
                  onClick={() => onClickApp(app.id)}
                  className={`flex items-center gap-1 h-[26px] px-3 py-[2px] text-xs font-['Courier_New_Custom',_monospace] bg-[#C0C0C0] min-w-[100px] max-w-[180px] truncate ${
                    app.isMinimized
                      ? "shadow-[inset_1px_1px_0px_#ffffff,inset_-1px_-1px_0px_#B0B0B0]"
                      : "shadow-[inset_-2px_-2px_1px_#ffffff,inset_2px_2px_1px_black]"
                  }`}
                >
                  <img src={app.icon} alt="App" className="w-[14px] h-[14px]" />
                  <span className="truncate">{app.title}</span>
                </button>
                <div className="absolute bottom-[110%] left-0 bg-black text-white text-xs px-2 py-1 rounded hidden group-hover:block z-[1000] whitespace-nowrap">
                  {app.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*  Clock and volume */}
        <div
          className="ml-auto flex items-center gap-2 px-2 h-[32px] bg-[#E4E4E4] 
      shadow-[inset_-2px_-2px_0_#F0F0F0,inset_2px_2px_0_#7E7E7E] 
      text-[12px] sm:text-[14px] min-w-[70px] sm:min-w-[90px] max-w-[30vw] truncate"
        >
          <button
            onClick={toggleMute}
            className="relative w-[18px] h-[18px] flex items-center justify-center cursor-pointer hover:brightness-110"
            title={isMuted ? "Unmute" : "Mute"}
          >
            <img
              src={volumeIcon}
              alt="Volume Icon"
              className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]"
            />

            {isMuted && (
              <div className="absolute w-[16px] h-[16px] flex items-center justify-center">
                <span className="absolute text-[16px] text-red-600 font-bold leading-none rotate-[35deg] -translate-y-[1px]">
                  /
                </span>
              </div>
            )}
          </button>
          <span className="truncate">{time}</span>
        </div>
      </div>

      {/* Start Menu */}
      {startOpen && (
        <div
          ref={startMenuRef}
          className="absolute bottom-[48px] left-2 z-[999] w-[180px] sm:w-[230px] h-[300px] sm:h-[360px] bg-no-repeat bg-contain bg-center
+           origin-top scale-y-0 animate-scrollOpen"
          style={{
            backgroundImage: `url(${require("../../assets/images/scroll-shutdown.png")})`,
            backgroundSize: "100% 100%",
          }}
        >
          {/* Rizal Image (top right) */}
          <img
            src={require("../../assets/images/rizal-shutdown.png")}
            alt="Rizal"
            className="absolute top-[50px] right-[26px] w-[45px] sm:w-[60px] pointer-events-none select-none"
          />

          {/* "Pamana" text vertically rotated */}
          <span
            className="absolute left-[15px] top-[190px] text-[16px] font-prime text-[#2b1a10] leading-[1.2] tracking-wide"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "upright",
            }}
          >
            Pamana
          </span>

          {/* Shutdown text aligned to right */}
          <div
            onClick={() => {
              if (audioRef?.current) {
                audioRef.current.pause();
              }
              const shutdownAudio = new Audio(shutdownSound);
              shutdownAudio.volume = 0.6;
              shutdownAudio.play().finally(() => navigate("/"));
            }}
            className="absolute bottom-[68px] right-[44px] flex items-center gap-2 cursor-pointer"
          >
            <img
              src={shutdownIcon}
              alt="Shutdown"
              className="w-[18px] h-[16px] pointer-events-none"
            />
            <span className="italic text-[13px] sm:text-[15px] font-prime text-[#2b1a10]">
              Shutdown...
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Taskbar;
