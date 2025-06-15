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
        return <Intro />;
      case "biography":
        return <Biography />;
      case "literary":
        return <Literary />;
      case "legacy":
        return <Legacy />;
      case "timeline":
        return <Timeline />;
      case "quotes":
        return <Quotes />;
      case "photos":
        return <Illustration />;
      case "opinions":
        return <Opinions />;
      case "references":
        return <References />;
      case "political":
        return <Politics />;
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
