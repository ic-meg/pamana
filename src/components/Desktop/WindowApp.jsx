import React, { useState, useRef } from "react";
import Draggable from "react-draggable";

const WindowApp = ({ title, icon, onClose, onMinimize, children }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  // const [isFullscreen, setIsFullscreen] = useState(true);
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
        className="absolute m-0 p-0 top-[50px] left-[7vw] w-[90vw] max-w-[980px] h-[80vh] max-h-[600px] border-[3px] border-[#543312] rounded-[20px] m-4 shadow-inner border-gray-800 shadow-[4px_4px_0px_rgba(0,0,0,0.4)] bg-[#F0F0F0] z-50 font-['Courier_New',_monospace] flex flex-col overflow-hidden"
      >

        
        {/* Title Bar */}
        <div className="window-title-bar flex items-center justify-between bg-transparent text-[#543312] text-sm px-2 py-1 cursor-move mt-[5px] ml-1">
          <div className="flex items-center gap-2">
            <img src={icon} alt="App Icon" className="w-4 h-4" />
            <span className="font-bold text-[13px]">{title}</span>
          </div>
          <div className="flex items-center gap-[2px]">
            {/* Minimize */}
            <button
              className="no-drag w-[22px] h-[22px] border-[2.5px] border-[#543312] text-[#543312] font-bold text-[13px] rounded-[2px] hover:bg-[#f5e9d8]"
              onClick={() => {
                setIsMinimized(false);
                onMinimize?.();
              }}
            >
              –
            </button>

            {/* Close */}
            <button
              className="no-drag w-[22px] h-[22px] border-[2.5px] border-[#543312] text-[#543312] font-bold text-[13px] rounded-[2px] hover:bg-[#f5e9d8]"
              onClick={onClose}
            >
              ×
            </button>
          </div>
        </div>
        <div className="w-full h-[2px] bg-[#543312]" />
        {/* Content */}
        <div className="flex-1 overflow-y-auto w-full p-0 md:pt-0 text-sm text-black">
          {children}
        </div>
        {/* Footer */}
        {/* <div className="box flex items-center justify-between h-[22px] bg-[#E4E4E4] border-t border-gray-500 text-[10px] text-black px-[2px] gap-[2px]">
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
        </div> */}
      </div>
    </Draggable>
  );
};

export default WindowApp;
