import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const SidebarLayout = ({ activeTab, setActiveTab, children }) => {
  const [showProjects, setShowProjects] = useState(false);
  const [showMembers, setShowMembers] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const showProjectTabs = ['projects', 'software', 'arduino', 'ui', 'game'];
    const showMemberTabs = ['members', 'giuliani', 'meg', 'shanley', 'pamela', 'kate'];

    setShowProjects(showProjectTabs.includes(activeTab));
    setShowMembers(showMemberTabs.includes(activeTab));
  }, [activeTab]);

  const isActive = (tab) =>
    activeTab === tab ? 'underline font-bold decoration-[#B3A5A5] underline-offset-4' : '';

  return (
    <div className="w-full font-courier text-black flex flex-col md:flex-row">

      {/* Hamburger button */}
      <div className="md:hidden sticky top-0 z-50 px-4 py-2 flex justify-between items-center bg-[#E0E0E0] border-b border-[#A0A0A0] shadow-[inset_0_1px_0_#fff,inset_0_-1px_0_#999]">
        <span className="text-sm font-bold text-black font-['Courier_New']">Menu</span>
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="bg-[#D0D0D0] border border-[#555] px-[10px] py-[6px] rounded-sm shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#666] hover:bg-[#B0B0B0] transition"
        >
          <HiMenu size={18} className="text-black" />
        </button>
      </div>

     {/* Fullscreen Mobile Nav */}
      <div
        className={`fixed inset-0 z-50 bg-[#F0F0F0] flex flex-col items-center justify-center gap-4 text-[20px] font-['Courier_New'] text-black
        transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 text-black bg-[#D0D0D0] border border-[#888] p-2 rounded shadow-[inset_1px_1px_0_#fff,inset_-1px_-1px_0_#666]"
        >
          <HiX size={24} />
        </button>

        <p onClick={() => { setActiveTab('home'); setIsMobileMenuOpen(false); }} className="cursor-pointer hover:underline">Home</p>
        <p onClick={() => { setActiveTab('about'); setIsMobileMenuOpen(false); }} className="cursor-pointer hover:underline">About us</p>
        <p onClick={() => { setActiveTab('projects'); setIsMobileMenuOpen(false); }} className="cursor-pointer hover:underline">Projects</p>
        <p onClick={() => { setActiveTab('members'); setIsMobileMenuOpen(false); }} className="cursor-pointer hover:underline">Members</p>
        <p onClick={() => { setActiveTab('contact'); setIsMobileMenuOpen(false); }} className="cursor-pointer hover:underline">Contact</p>
      </div>

      {/* Desktop Sidebar only */}
      <div className="hidden md:block w-[200px] bg-[#F0F0F0] p-6 sticky top-0 self-start h-fit">
        <div className="font-bold text-[18px] mb-1 leading-tight text-nowrap">
          The&lt;Script&gt;
        </div>
        <div className="text-[20px] text-black/70 mb-6">Showcase ’25</div>

        <nav className="flex flex-col gap-1 text-[18px] pl-2 mt-[80px]">
          <p className={`cursor-pointer hover:underline ${isActive('home')}`} onClick={() => setActiveTab('home')}>Home</p>
          <p className={`cursor-pointer hover:underline ${isActive('about')}`} onClick={() => setActiveTab('about')}>About us</p>

          <div>
            <p className={`cursor-pointer hover:underline ${isActive('projects')}`} onClick={() => {
              setActiveTab('projects');
              setShowProjects(true);
              setShowMembers(false);
            }}>Projects</p>
            {showProjects && (
              <div className="pl-4 flex flex-col text-[16px] mt-1">
                {['software', 'ui', 'game', 'arduino'].map((item) => {
                  const labels = { software: 'Software', ui: 'UI/UX', game: 'Game', arduino: 'Arduino' };
                  return (
                    <p key={item} className={`cursor-pointer hover:underline ${isActive(item)}`} onClick={() => setActiveTab(item)}>
                      {labels[item]}
                    </p>
                  );
                })}
              </div>
            )}
          </div>

          <div>
            <p className={`cursor-pointer hover:underline ${isActive('members')}`} onClick={() => {
              setActiveTab('members');
              setShowProjects(false);
              setShowMembers(true);
            }}>Members</p>
            {showMembers && (
              <div className="pl-4 flex flex-col text-[16px] mt-1">
                {['giuliani', 'meg', 'shanley', 'pamela', 'kate'].map((member) => (
                  <p key={member} className={`cursor-pointer hover:underline ${isActive(member)}`} onClick={() => setActiveTab(member)}>
                    {member.charAt(0).toUpperCase() + member.slice(1)}
                  </p>
                ))}
              </div>
            )}
          </div>

          <p className={`cursor-pointer hover:underline ${isActive('contact')}`} onClick={() => setActiveTab('contact')}>Contact</p>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 md:pl-6 pt-4 md:pt-0">
        {children}
      </div>
    </div>
  );
};

export default SidebarLayout;
