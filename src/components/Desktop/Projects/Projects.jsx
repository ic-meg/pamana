
import React from 'react';

import Software from './Software';
import Arduino from './Arduino';
import UI from './ui';
import Game from './game';

import arduinoIcon from '../../../assets/icons/arduino-icon.png';
import uiIcon from '../../../assets/gif/ux.gif';
import gamingVideo from '../../../assets/gif/gaming-unscreen.gif';


const Projects = ({ setActiveTab, activeTab }) => {
  return (
    <div className="w-full h-full text-black font-['Courier_New_Custom',monospace] px-4 sm:px-6 md:px-8 py-6 space-y-8">
      {activeTab === 'software' && <Software />}
      {activeTab === 'arduino' && <Arduino />}
      {activeTab === 'ui' && <UI />}
      {activeTab === 'game' && <Game />}

      {!['software', 'arduino', 'ui', 'game'].includes(activeTab) && (
        <>
          <div>
            <br />
            <h1 className="text-3xl sm:text-[40px] font-black font-vt323">Projects</h1>
          </div>

          <p className="text-[15px] leading-relaxed font-courier text-justify">
            Click on one of the areas below to check out some of our team’s projects! From the digital world to physical circuits, we made sure to explore and enjoy the process of making. 🛠️
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* SOFTWARE */}
            <div
              onClick={() => setActiveTab('software')}
              className="border border-black p-4 flex items-center gap-4 hover:brightness-110 cursor-pointer "
            >
              <img
                src="data:image/gif;base64,R0lGODlhIAAgAKIAAAAAAAAA/5ycnM7Ozv8AAP//AP///wAAACH/C05FVFNDQVBFMi4wAwHoAAAh+QQFFAAAACwAAAAAIAAgAAAD2wi63P4QnklPvGyOIcQeExYdhvFx3haKzeGVZ+cKFru4wQZvtCzYClwgNyj5ep2fSDgkHmfJzoXZRM2gUeWDOrQis1PXppnzYbUtSlEzLtMob2nr9jGwed+rax48rQ8qWIJ8QYAndmdfQQwFDnc6URNyiwsCBHsZJCkymISSIJ2FgWgZdB6nkmmkpX1GHK+pmRSsN4AwpxyxACQliLsStgYekjNBwry+I4BfaBU0RjXKk3QfE8I0QC2vKSAyANNLRcLbcVBAhuIoSebZd5HF2ZlWofFp9PX4+RcJAAAh+QQFFAAAACwDAA0AAgAEAAADBVhAcCAnACH5BAUUAAAALAMADAABAAMAAAMDWHQJACH5BAUUAAAALAMACwADAAMAAAMFCFQH0CAAIfkEBRQAAAAsBAALAAMAAQAAAwN4VAkAIfkEBRQAAAAsAwALAAQABgAAAwoItwfez4EiBTkiACH5BAUUAAAALAMADQACAAQAAAMFWEBwICcAIfkEBRQAAAAsAwAMAAEAAwAAAwNYdAkAIfkEBRQAAAAsAwALAAMAAwAAAwUIVAfQIAAh+QQFFAAAACwEAAsAAwABAAADA3hUCQAh+QQFFAAAACwDAAsABAAGAAADCgi3B97PgSIFOSIAIfkEBRQAAAAsAwANAAIABAAAAwVYQHAgJwAh+QQFFAAAACwDAAwAAQADAAADA1h0CQAh+QQFFAAAACwDAAsAAwADAAADBQhUB9AgACH5BAUUAAAALAQACwADAAEAAAMDeFQJACH5BAUUAAAALAMACwAEAAYAAAMKCLcH3s+BIgU5IgAh+QQFFAAAACwDAA0AAgAEAAADBVhAcCAnACH5BAUUAAAALAMADAABAAMAAAMDWHQJACH5BAUUAAAALAMACwADAAMAAAMFCFQH0CAAIfkEBRQAAAAsBAALAAMAAQAAAwN4VAkAIfkEBRQAAAAsBQAGAAgABgAAAxMICicWi4lgYgtw3czaGEc4GGICACH5BAUUAAAALAsABQAFAAYAAAMMaDNm4cuF+SiFY5oEACH5BAUUAAAALAsABQAGAAYAAAMOGDNmE8ExA+mjMEfLagIAIfkEBRQAAAAsCwAGAAUABQAAAwloETOhC8K3Gk0AIfkEBRQAAAAsCwAFAAUABwAAAw5oM2bhy4X56HRq1LNYAgAh+QQFFAAAACwLAAUAEAAHAAADJBgzZjviiCgACHi1KenE4MKNH5iRnWCeVCosJtRO3MMeuEQUCQAh+QQFFAAAACwZAAsABAACAAADBXgnLFQJACH5BAUUAAAALBsADAAEAAQAAAMJeCcgcg0AIkFJACH5BAUUAAAALBwADgADAAUAAAMHCHDKQA8UlQAh+QQJFAAAACwQABAADwANAAADQzgjcicgSnCUg1Me+vLcmuNMRHYUaDEW3tmkaiu+RfMpxODUdlQJBKCFsWEMDAagYNF4PIRHA5PRoDpy0ybjcwhqMwkAIfkEBRQAAAAsEAAQAA8ADQAAAz04I3InIEpwlINTHvry3JrjTEV2GKgxEt7ZpKMpvkbzKZZrR5Ww4A8bY4DyGRuPIA61YDCCSJwTyfj0qJkEACH5BAUUAAAALBoAEQAEAAQAAAMHCFpKek+BBAAh+QQFFAAAACwcABAAAwADAAADBQhQQHAqACH5BAUUAAAALB0ADQACAAUAAAMGWADEcAckACH5BAUUAAAALBkACwAGAAUAAAMMWCQCwOQ0xs5jTrqcADs="
                alt="Software Icon"
                className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]"
              />
              <div>
                <h2 className="text-[20px] sm:text-[24px] font-black font-vt323">Software</h2>
                <p className="text-[13px] sm:text-[14px] tracking-wider font-vt323">PROJECTS</p>
              </div>
            </div>

            {/* UI/UX */}
            <div
              onClick={() => setActiveTab('ui')}
              className="border border-black p-4 flex items-center gap-4 hover:brightness-110 cursor-pointer "
            >
              <img
                src={uiIcon}
                alt="UI/UX Icon"
                className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]"
              />
              <div>
                <h2 className="text-[20px] sm:text-[24px] font-black font-vt323">UI/UX</h2>
                <p className="text-[13px] sm:text-[14px] tracking-wider font-vt323">PROJECTS</p>
              </div>
            </div>

            {/* GAME */}
            <div
              onClick={() => setActiveTab('game')}
              className="border border-black p-4 flex items-center gap-4 hover:brightness-110 cursor-pointer "
            >
              <img
                src={gamingVideo}
                alt="Game Icon"
                className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]"
              />
              <div>
                <h2 className="text-[20px] sm:text-[24px] font-black font-vt323">Game</h2>
                <p className="text-[13px] sm:text-[14px] tracking-wider font-vt323">PROJECTS</p>
              </div>
            </div>

            {/* ARDUINO */}
            <div
              onClick={() => setActiveTab('arduino')}
              className="border border-black p-4 flex items-center gap-4 hover:brightness-110 cursor-pointer "
            >
              <img
                src={arduinoIcon}
                alt="Arduino Icon"
                className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]"
              />
              <div>
                <h2 className="text-[20px] sm:text-[24px] font-black font-vt323">Arduino</h2>
                <p className="text-[13px] sm:text-[14px] tracking-wider font-vt323">HARDWARE</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
