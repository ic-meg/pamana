import React from 'react';
 
import EMSPreview from '../../../assets/vids/EMSPreview.mp4'
import TikTok from '../../../assets/vids/TiktokPreview.mp4'
import FB from '../../../assets/vids/FBPreview.mp4'
import ChurchPreview from '../../../assets/vids/ChurchPreview.mp4'

const Software = () => {
  return (
    <div className="w-full h-full text-black font-courier px-6 py-4 space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-6xl font-black font-vt323">UI/UX</h1>
        <h2 className="text-3xl font-vt323">Projects</h2>
        <p className="mt-2 text-[15px] -[700px] text-justify">
        Below are some of the UI/UX projects our team designed during the last semester as part of our academic coursework.
        </p>
      </div>

      <hr className="border border-black/50" /> 

       {/* Espresso Markup Squad */}
       <div>
        <h3 className="text-[33px] font-black font-vt323 leading-tight">Espresso Markup Squad </h3>
        <p className="text-[15px] -[750px] text-justify mt-2">
          Espresso Markup Squad is just a UI prototype for a coffee pre-ordering system. 
          It’s built using only HTML and CSS, so there’s no backend or ordering functionality yet. 
          The design is meant to simulate how a real-world cafe pickup process works, like how you’d order at Starbucks. 
          It's focused on the look and feel of the system, giving users a preview of how it might look when fully functional.
        </p>
      </div>

      {/* Image or Video */}
      <div>
        <div className="flex justify-center items-center w-full my-4">
            <video 
              src={EMSPreview} 
              muted 
              autoPlay 
              loop 
              playsInline
              preload='auto'          
              className="border border-black w-full max-w-[850px] shadow-md"
            >
              Your browser does not support the video tag.
            </video>
          </div>

      <p className="text-sm text-center mt-2">
        <em>Figure 1:</em> A preview of our team’s Espresso Markup Squad.
      </p>
      </div>
      <h3 className="text-xl font-bold mt-10 mb-2">Links:</h3>
      <ul className="list-disc pl-6 space-y-2 text-blue-700 font-mono underline">
        <li>
          <a href="https://youtu.be/a_CaS6UXUjk" target="_blank" rel="noopener noreferrer">
            [YouTube] – Espresso Markup Squad
          </a>
        </li>
        <li>
          <a href="https://github.com/ic-meg/Espresso-Markup-Squad.git" target="_blank" rel="noopener noreferrer">
            [Github Repository] – EMS Repository
          </a>
        </li>
      </ul>
      

       {/* Tiktok Mockup */}
       <div>
        <h3 className="text-[33px] font-black font-vt323 leading-tight">Tiktok Mockup</h3>
        <p className="text-[15px] -[750px] text-justify mt-2">
          This mockup represents the user interface design of a TikTok website version. 
          It features a clean, modern, and visually engaging layout that mirrors the popular
          TikTok mobile app experience, adapted for desktop viewing.
          <br /><br />
          The project was created using only HTML and CSS, providing a simple yet effective representation of Tiktok's design and user interaction elements in a desktop environment.
        </p>
      </div>

      {/* Image */}
      <div>
        <div className="flex justify-center items-center w-full my-4">
            <video 
              src={TikTok} 
              muted 
              autoPlay 
              loop 
              playsInline
              preload='auto'          
              className="border border-black w-full max-w-[850px] shadow-md"
            >
              Your browser does not support the video tag.
            </video>
          </div>

      <p className="text-sm text-center mt-2">
        <em>Figure 2:</em> A preview of our team’s Tiktok Mockup.
      </p>
      </div>
      <h3 className="text-xl font-bold mt-10 mb-2">Links:</h3>
      <ul className="list-disc pl-6 space-y-2 text-blue-700 font-mono underline">
        <li>
          <a href="https://github.com/ic-meg/TikTok.git" target="_blank" rel="noopener noreferrer">
            [Github Repository] – TikTok Repository
          </a>
        </li>
      </ul>
      <p className="text-[15px] -[750px] text-justify mt-6">
        Creating this TikTok website mockup was an exciting project for our team to apply everything we've learned — from frontend development to design principles and responsive layout techniques. Through teamwork, experimenting with different design elements, and a focus on creating a seamless user experience, we were able to bring this vision to life. 
      </p>
      

            
       {/* Facebook Mockup */}
       <div>
        <h3 className="text-[33px] font-black font-vt323 leading-tight">Facebook Mockup</h3>
        <p className="text-[15px] -[750px] text-justify mt-2">
          The Facebook Mockup is a group project designed to represent Facebook's desktop view. 
          It showcases the user interface and functionality of Facebook, focusing on a layout similar 
          to what users typically experience when using the platform on a desktop computer.
          <br /><br />
          The project was created using only HTML and CSS, providing a simple yet effective representation of Facebook's design and user interaction elements in a desktop environment.
        </p>
      </div>

      {/* Image or vid */}
      <div>
        <div className="flex justify-center items-center w-full my-4">
            <video 
              src={FB} 
              muted 
              autoPlay 
              loop 
              playsInline
              preload='auto'          
              className="border border-black w-full max-w-[850px] shadow-md"
            >
              Your browser does not support the video tag.
            </video>
          </div>

      <p className="text-sm text-center mt-2">
        <em>Figure 3:</em> A preview of our team’s Facebook Mockup.
      </p>
      </div>
      <h3 className="text-xl font-bold mt-10 mb-2">Links:</h3>
      <ul className="list-disc pl-6 space-y-2 text-blue-700 font-mono underline">

        <li>
          <a href="https://github.com/ic-meg/Facebook.git" target="_blank" rel="noopener noreferrer">
            [Github Repository] – Facebook Repository
          </a>
        </li>
      </ul>
      <p className="text-[15px] -[750px] text-justify mt-6">
        The project allowed us to practice our frontend development techniques. It was a valuable opportunity for our team to apply our skills in web development, focusing on HTML and CSS to create a visually engaging and functional desktop layout.
      </p>
      

            
       {/* Baclaran Church Website */}
       <div>
        <h3 className="text-[33px] font-black font-vt323 leading-tight">Church Website</h3>
        <p className="text-[15px] -[750px] text-justify mt-2">
          A simple and static website for Baclaran Church, created as a group project using only HTML and CSS. 
          The site presents essential information about the church, such as its background, services, and contact details. 
          This project highlights basic web development skills and teamwork in building a clean, informative church website.
        </p>
      </div>

      {/* Image or Vid*/}
      <div>
        <div className="flex justify-center items-center w-full my-4">
            <video 
              src={ChurchPreview} 
              muted 
              autoPlay 
              loop 
              playsInline
              preload='auto'
              className="border border-black w-full max-w-[850px] shadow-md"
            >
              Your browser does not support the video tag.
            </video>
          </div>

      <p className="text-sm text-center mt-2">
        <em>Figure 4:</em> A preview of our team’s Church Website.
      </p>
      </div>
      <h3 className="text-xl font-bold mt-10 mb-2">Links:</h3>
      <ul className="list-disc pl-6 space-y-2 text-blue-700 font-mono underline">

        <li>
          <a href="https://github.com/ic-meg/Baclaran-Church.git" target="_blank" rel="noopener noreferrer">
            [Github Repository] – Baclaran Church
          </a>
        </li>
      </ul>
      <p className="text-[15px] -[750px] text-justify mt-6">
        Building the Baclaran Church website was a valuable experience that allowed our team to put our foundational web development knowledge into practice — it was our first step into the world of web design, driven by teamwork, creativity, and a desire to create something meaningful.
      </p>
      
      
    </div>
    
  );
};

export default Software;
