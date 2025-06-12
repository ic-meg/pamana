import React, { useState } from 'react';

import './Kate.css';
import fbIcon from '../../../assets/icons/facebook.png';
import igIcon from '../../../assets/icons/instagram.png';

const MemberProfile = ({ name, title, email, avatar, buttons, tools, hashtag, funFact, motto, socials, projects}) => {
  const [activeSection, setActiveSection] = useState("tools");
  const [previewImage, setPreviewImage] = useState(null);
  
  // store main profile content
  const [profileContent] = useState({
    name,
    title,
    email,
    hashtag,
    tools,
  });


  return (
    <div className="kate-container font-vt323 text-black p-6 bg-[#f0f0f0]">
    
    <div className="flex justify-between items-center mb-4">
      {/* Hashtag */}
      <p className="text-lg">{profileContent.hashtag}</p>

      {/* Social Links */}
      <div className="flex gap-2">
        {socials?.facebook && (
          <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="transition hover:brightness-125">
            <img src={fbIcon} alt="Facebook" className="w-6 h-6" />
          </a>
        )}
        {socials?.instagram && (
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="transition hover:brightness-125">
            <img src={igIcon} alt="Instagram" className="w-6 h-6" />
          </a>
        )}

      </div>
    </div>

      {/* Profile */}
      <div className="flex items-center gap-6 mb-6">
        <img src={avatar} alt={`${profileContent.name} Avatar`} className="w-[130px] h-[130px] cursor-pointer"  onClick={() => setPreviewImage(avatar)} />
        <div className="min-w-0 break-words max-w-[240px] sm:max-w-full">
          <h1 className="text-[18px] sm:text-[20px] break-words">{profileContent.name}</h1>
          <p className="text-[16px] sm:text-[20px] break-words">{profileContent.title}</p>
          <a href={`mailto:${profileContent.email}`} className="text-[14px] sm:text-[16px] underline break-words">
            {profileContent.email}
          </a>
        </div>

      </div>

      {/* Buttons */}
      <div className="flex">
      <div className="flex flex-wrap gap-3 my-4 max-w-[280px] sm:max-w-full mx-auto sm:mx-0 justify-center sm:justify-start">

        {buttons.map((btn, index) => {
          
          const sectionMap = ["tools", "projects", "bio", "motto"];
          const sectionKey = sectionMap[index];
          // const isActive = activeSection === sectionKey;

          return (
            <button
              key={index}
              className="win95-btn flex justify-center items-center p-1"
              style={{
                backgroundColor: activeSection === sectionKey ? '#E4E4E4' : '#C3C3C3',
              }}
              onClick={() => setActiveSection(sectionKey)}
            >
              <img
                src={btn.src}
                alt={btn.alt}
                className={`${index === 0 ? 'w-[30px] h-[30px]' : 'w-[20px] h-[20px]'}`}
              />
            </button>
          );
        })}
      </div>
    </div>


      {/* Tools Section */}
      {activeSection === "tools" && (
        <>
          <h2 className="text-[20px] font-bold font-['Courier_New',monospace] underline underline-offset-4 mb-2 ">
            {profileContent.name.split(' ')[0]}'s Tech Toolbox
          </h2>
          <p className="text-[14px] font-['Courier_New',monospace] text-black/70">
            A collection of languages and software {profileContent.name.split(' ')[0]} knows and uses.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-6 mt-6">
            {profileContent.tools.map((tool, index) => (
              <div key={index} className="flex items-center gap-3">
                <img src={tool.src} alt={tool.label} className="w-10 h-10" />
                <span className="tech-label">{tool.label}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Projects Section */}
      {activeSection === "projects" && (
        <>
          <h2 className="text-[20px] font-bold font-['Courier_New',monospace] underline underline-offset-4 mb-4">
            {profileContent.name.split(' ')[0]}'s Project Archives 
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {projects?.map((project, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src={project.icon} alt={project.name} className="w-[30px] h-[30px]" />
                <span className="text-[16px]">{project.name}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Fun Fact Section */}
      {activeSection === "bio" && (
        <>
          <h2 className="text-[20px] font-bold font-['Courier_New',monospace] underline underline-offset-4 mb-2">
            Fun Fact About {profileContent.name.split(' ')[0]}
          </h2>
          <p className="text-[14px] font-['Courier_New',monospace] mt-4 leading-relaxed text-black/80 text-justify">
            {funFact}
          </p>
        </>
      )}

      {/* Motto Section */}
      {activeSection === "motto" && (
        <>
          <div className="mt-6">
            <p className="text-[16px] font-['Courier_New',monospace] text-black mb-2">
              <span className="text-blue-900 font-bold flex justify-center">● Core Lines of The&lt;Script&gt;</span>
            </p>
            <p className="text-[22px] flex justify-center font-bold text-[#0096C7] font-['Courier_New',monospace] ">
              “{motto}”
            </p>
          </div>
        </>
      )}
        {previewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[999]">
          <div
            className="absolute top-4 right-4 text-white text-xl cursor-pointer"
            onClick={() => setPreviewImage(null)}
          >
            ✕
          </div>
          <img 
            src={previewImage}
            alt="Preview"
            className="max-w-full max-h-[90vh] rounded-md border-2 border-white shadow-lg"
          />
        </div>
      )}
    </div>

    
  );
};

export default MemberProfile;
