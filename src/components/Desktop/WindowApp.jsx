import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';

const WindowApp = ({ title, icon, onClose, onMinimize, children }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(true);
  const nodeRef = useRef(null);

  if (isMinimized) return null;

  return (
    <Draggable
      handle=".window-title-bar, .box"
      nodeRef={nodeRef}
      bounds="parent"
      cancel=".no-drag" 
    >
      <div
        ref={nodeRef}
        className={`absolute m-0 p-0 ${isFullscreen ? 'top-0 left-0 w-full h-[93dvh] sm:h-[70vh] md:h-[75vh] lg:h-[79vh] xl:h-[83vh] 2xl:h-[70vh] ' : 'top-[50px] left-[7vw] w-[90vw] max-w-[980px] h-[80vh] max-h-[600px]'}
          border-[3px] border-gray-800 shadow-[4px_4px_0px_rgba(0,0,0,0.4)] bg-[#F0F0F0] z-50 
          font-['Courier_New',_monospace] flex flex-col overflow-hidden `}
      >
        {/* Title Bar */}
        <div className="window-title-bar flex items-center justify-between bg-[#000080] text-white text-sm px-2 py-1 cursor-move">
          <div className="flex items-center gap-2">
            <img src={icon} alt="App Icon" className="w-4 h-4" />
            <span className="font-bold text-[13px]">{title}</span>
          </div>
          <div className="flex items-center gap-[2px]">
            {/* Minimize */}
            <button
              className="no-drag bg-gray-300 cursor-pointer text-black w-[22px] h-[20px] text-[13px] border border-black 
                        shadow-[2px_2px_0px_#606060,inset_1px_1px_0px_#fff] 
                        hover:bg-gray-600 hover:text-white hover:shadow-[inset_2px_2px_0px_#222,2px_2px_0px_#606060]"
              onClick={() => {
                setIsMinimized(false);
                onMinimize?.();
              }}
            >
              _
            </button>

            {/* Fullscreen / Restore */}
            <button
              className="no-drag hidden sm:block bg-gray-300 cursor-pointer text-black w-[22px] h-[20px] text-[13px] border border-black 
                        shadow-[2px_2px_0px_#606060,inset_1px_1px_0px_#fff] 
                        hover:bg-gray-600 hover:text-white hover:shadow-[inset_2px_2px_0px_#222,2px_2px_0px_#606060]"
              onClick={() => setIsFullscreen(prev => !prev)}
            >
              {isFullscreen ? '🗗' : '🗖'}
            </button>

            {/* Close */}
            <button
              className="no-drag bg-gray-300 cursor-pointer text-black w-[22px] h-[20px] text-[13px] border border-black 
                        shadow-[2px_2px_0px_#606060,inset_1px_1px_0px_#fff] 
                        hover:bg-gray-600 hover:text-white hover:shadow-[inset_2px_2px_0px_#222,2px_2px_0px_#606060]"
              onClick={onClose}
            >
              X
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto w-full p-0 md:pt-0 text-sm text-black">
          {children}
        </div>

        {/* Footer */}
        <div className="box flex items-center justify-between h-[22px] bg-[#E4E4E4] border-t border-gray-500 text-[10px] text-black px-[2px] gap-[2px]">
          <div className="w-full px-2 py-[2px] border border-gray-400 text-[12px] bg-[#E4E4E4] leading-none">
            © 2025 The&lt;Script&gt;
          </div>
          <div className="flex gap-[2px]">
            <div className="w-[18px] h-[18px] border border-gray-400 bg-[#F0F0F0]" />
            <div className="w-[18px] h-[18px] border border-gray-400 bg-[#F0F0F0]" />
          </div>
          <div className="w-full px-2 py-[2px] border border-gray-400 bg-[#E4E4E4] text-[12px] leading-none text-transparent">
            placeholder
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default WindowApp;
