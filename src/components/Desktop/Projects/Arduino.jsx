import React, { useState } from 'react';
import Coffee from '../../../assets/us/coffee.JPG';

const Arduino = () => {
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <div className="w-full h-full px-6 py-4 font-courier text-black leading-relaxed">
      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-2 font-vt323">Smart Coffee Machine</h1>
      <h2 className="text-xl font-bold mb-6 font-vt323">Developed by The&lt;Script&gt; Team</h2>

      {/* Intro Paragraph */}
      <p className="mb-4 text-justify">
        As a team of developers passionate about both hardware and software, we built a Smart Coffee Machine that merges everyday convenience with automation. This project showcases our ability to work with microcontrollers, payment integration, and UI design — all while making sure nobody misses their caffeine fix.
      </p>
      <p className="mb-8 text-justify">
        Our coffee machine accepts both coin and GCash payments, features a touchscreen interface, and allows users to choose between 3-in-1 or black coffee with customizable sugar and creamer options. With Arduino handling the logic, it brings together real-world interaction and automation in one machine.
      </p>

      {/*  How It Works */}
      <h3 className="text-3xl font-bold mt-6 mb-2 font-vt323">How It Works</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>Accepts payment via coin slot or GCash scan</li>
        <li>Users interact with a touchscreen to select coffee options</li>
        <li>Arduino processes the input and triggers dispensing via relays</li>
        <li>The drink is dispensed automatically and the system resets</li>
      </ul>

      {/* Team image hereee */}
      <div className="mb-6">
        <img
          src={Coffee}
          alt="Smart Coffee Machine Project"
          className="w-full max-w-xl mx-auto rounded shadow cursor-pointer"
          onClick={() => setPreviewImage(Coffee)}
        />
        <p className="text-sm text-center mt-2">
          <em>Figure 1:</em> Our team presenting the Smart Coffee Machine project — UI demo and prototype
        </p>
      </div>

      {/* Video Demo Links  heree */}
      <h3 className="text-3xl font-bold mt-10 mb-2 font-vt323">Demo Links:</h3>
      <ul className="list-disc pl-6 space-y-2 text-blue-700 font-mono underline">
        <li>
          <a href="https://youtube.com/shorts/v0H4hzzuDmI" target="_blank" rel="noopener noreferrer">
            VIDEO – Touchscreen Coffee Ordering Walkthrough
          </a>
        </li>
   
      </ul>

   
      <p className="mt-8 text-justify">
      While the journey wasn't easy, our first presentation came with its share of challenges — we struggled to complete the full functionality in time, which took a toll on us both mentally and emotionally. But despite the setbacks, we pulled through. We stayed calm, kept going, and eventually delivered the presentation the way we envisioned it. It may not have been perfect, but it was a success — and a moment we’re proud of.
      </p>
      <p className="mt-4 text-justify">
        We’re especially grateful to our instructors for believing in us and giving us the opportunity to present again. Their understanding and support meant a lot, and it gave us the chance to prove what we were truly capable of.
      </p>
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

export default Arduino;
