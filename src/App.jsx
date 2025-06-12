import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';

import './App.css';
import './tailwind.css';
import './scrollbar.css';
import '../src/components/Desktop/desktop.css';

import Start from './pages/startup';
import Play from './pages/play';
import Shutdown from './components/shutdown';
import Desktop from './components/Desktop/desktop';

import { AudioProvider } from './contexts/AudioContext'; //handles bg music

function App() {
  useEffect(() => {
    // redirect everything to '/' just in case someone tries to skip start page
    if (window.location.pathname !== '/') {
      window.location.replace('/');
    }
  }, []);

  return (
    <AudioProvider> 
      <div className="grainy-overlay">
        <Routes>
          <Route exact path="/" element={<Start />} />      {/* startup screen (auto-type text) */}
          <Route path="/play" element={<Play />} />         {/* vinyl animation before desktop */}
          <Route path="/desktop" element={<Desktop />} />   {/* windows 95-inspired UI */}
          <Route path="/shutdown" element={<Shutdown />}/>  {/* shutdown animation */}
        </Routes>
      </div>
    </AudioProvider>
  );
}

export default App;