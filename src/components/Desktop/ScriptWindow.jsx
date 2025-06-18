import React, { useState } from "react";
import Home from "./home";

// Rizal Sections
import Intro from "../Desktop/Members/Intro";
import Biography from "../Desktop/Members/Bio";
import Literary from "../Desktop/Members/Literary";
import Legacy from "../Desktop/Members/Legacy";
import Timeline from "../Desktop/Members/Timeline";
import Quotes from "../Desktop/Members/Quotes";
import Illustration from "./Members/Illustration";
import Opinions from "../Desktop/Members/Opinions";
import References from "../Desktop/Members/References";
import Politics from "../Desktop/Members/politics";

const ScriptWindow = () => {
  const [activeTab, setActiveTab] = useState("home");

const renderContent = () => {
  switch (activeTab) {
    case "intro":
      return <Intro setActiveTab={setActiveTab} />;
    case "biography":
      return <Biography setActiveTab={setActiveTab} />;
    case "literary":
      return <Literary setActiveTab={setActiveTab} />;
    case "legacy":
      return <Legacy setActiveTab={setActiveTab} />;
    case "timeline":
      return <Timeline setActiveTab={setActiveTab} />;
    case "quotes":
      return <Quotes setActiveTab={setActiveTab} />;
    case "photos":
      return <Illustration setActiveTab={setActiveTab} />;
    case "opinions":
      return <Opinions setActiveTab={setActiveTab} />;
    case "references":
      return <References setActiveTab={setActiveTab} />;
    case "political":
      return <Politics setActiveTab={setActiveTab} />;
    case "home":
      return <Home setActiveTab={setActiveTab} isHome={true} />; 
    default:
      return null;
  }
};



  return activeTab === "home" ? (
    <Home setActiveTab={setActiveTab} />
  ) : (
    <div className="relative w-full h-full">{renderContent()}</div>
  );
};

export default ScriptWindow;
