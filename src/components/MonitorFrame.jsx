//container for the monitor screen
import React, { useEffect, useState } from 'react';

import monitorLandscape from '../assets/images/apple.png';
import monitorPortrait from '../assets/images/portrait-apple.png';
import beatGif from '../assets/images/beat.gif';

const MonitorFrame = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // update layout on resize
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const selectedMonitor = isMobile ? monitorPortrait : monitorLandscape;

  const cutoutStyle = isMobile
  ? {
      
      top: '0.5%', // top edge
      left: '1.5%', // left edge
      width: '99.5%', // width of the screen cutout 
      height: '95.5%',  // height of the screen cutout 
      position: 'absolute', // make the screen position relative to its container
    }
  : {
      
      top: '1.5%', // desktop version: top offset to align screen properly
      left: '1.25%', // left offset to center
      width: '97.5%', // slightly narrower to fit screen frame
      height: '89%', // height of the desktop screen area 
      position: 'absolute',
    };


  return (
    <div
      className="w-full min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${beatGif})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className={`relative w-full max-w-[1280px] ${
          isMobile ? 'h-screen' : 'aspect-[16/10]'
        } bg-cover bg-no-repeat`}
        style={{ backgroundImage: `url(${selectedMonitor})` }}
      >
        <div
          className="absolute z-10 bg-black rounded-sm overflow-hidden"
          style={cutoutStyle}
        >
          <div className="w-full h-full relative">
            {children} {/* content inside monitor */}
          </div>
        </div>
      </div>
    </div>
  );
};


export default MonitorFrame;
