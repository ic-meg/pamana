import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';

import './App.css';
import './tailwind.css';
import './scrollbar.css';
import '../src/components/Desktop/desktop.css';

import Play from './pages/play';
import Shutdown from './components/shutdown';
import Desktop from './components/Desktop/desktop';
import BrushReveal from './pages/play'; 

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
          <Route path="/" element={<Play />} />         
          <Route path="/brush" element={<BrushReveal />} /> 
          <Route path="/desktop" element={<Desktop />} />  
          <Route path="/shutdown" element={<Shutdown />}/>  

        </Routes>
      </div>
    </AudioProvider>
  );
}

export default App;