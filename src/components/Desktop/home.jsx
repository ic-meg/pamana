import React from 'react';

const Home = ({ setActiveTab }) => {
  return (
    <div className="w-full h-full text-black flex flex-col items-center justify-center text-center px-4 py-8 gap-6 font-courier">
   
      <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 text-[14px] sm:text-[16px] md:text-[18px]">
        <button
          onClick={() => setActiveTab('about')}
          className="hover:underline underline-offset-2"
        >
          about us
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          className="hover:underline underline-offset-2"
        >
          projects
        </button>
        <button
          onClick={() => setActiveTab('members')}
          className="hover:underline underline-offset-2"
        >
          members
        </button>
        <button
          onClick={() => setActiveTab('contact')}
          className="hover:underline underline-offset-2"
        >
          contact
        </button>
      </nav>

     
      <div>
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold">
          The&lt;Script&gt;
        </h1>
        <p className="text-[12px] sm:text-sm mt-2 font-semibold">
          Learning. Building. Innovating.
        </p>
      </div>
    </div>
  );
};

export default Home;
