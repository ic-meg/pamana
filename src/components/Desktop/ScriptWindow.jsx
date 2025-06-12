import React, { useState } from 'react';

import SidebarLayout from './SidebarLayout';

import About from './About/About';

import { Projects, Software, Arduino, UI, Game } from './Projects';
import { Members, Gil, Meg, Ley, Pam, Kate } from './Members';

import Contact from './Contact/Contact';
import Home from './home';

//Tracks which is the active tab and returns it, control the sidebar expanded 
const ScriptWindow = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarState, setSidebarState] = useState({
    expandProjects: false,
    expandMembers: false
  });


  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
  
      case 'projects':
        return <Projects activeTab={activeTab} setActiveTab={setActiveTab} />;
  
      case 'software':
        return <Software />;
      
      case 'ui':
        return <UI />
  
      case 'game':
        return <Game />
        
      case 'arduino':
        return <Arduino />;
  
      case 'members':
        return <Members activeTab={activeTab} setActiveTab={setActiveTab} />;
  
      case 'giuliani':
        return <Gil />;
  
      case 'meg':
        return <Meg />;
  
      case 'shanley':
        return <Ley />;
  
      case 'pamela':
        return <Pam />;
  
      case 'kate':
        return <Kate />;
  
      case 'contact':
        return <Contact />;
  
      default:
        return null;
    }
  };
  

  return activeTab === 'home' ? (
    <Home
      setActiveTab={(tab) => {
        
        if (tab === 'projects') {
          setSidebarState({ expandProjects: true, expandMembers: false });
        } else if (tab === 'members') {
          setSidebarState({ expandProjects: false, expandMembers: true });
        } else {
          setSidebarState({ expandProjects: false, expandMembers: false });
        }
        setActiveTab(tab);
      }}
    />

  ) : (
    <SidebarLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      sidebarState={sidebarState}
    >
      {renderContent()}
    </SidebarLayout>
  );
};

export default ScriptWindow;
