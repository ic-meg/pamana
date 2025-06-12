import React, { useState } from 'react';

import aboutUs from '../../../assets/us/landscape.JPG';
import portrait from '../../../assets/us/portrait.JPG';


const About = () => {
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <div className="space-y-4 pb-20 text-justify font-courier">  <br />
      <h2 className="text-3xl  font-vt323">“Not the band, <br></br> but a Team of Developer”</h2>
      
      <div className="space-y-6">
        <section>
          <p className="text-lg">
            We are The&lt;Script&gt;—not the band, but a team of passionate developers! Currently, we are third-year Bachelor of Science in Information Technology students at Cavite State University - Imus Campus, striving to sharpen our skills and grow into professional developers. Though we're still students, we are committed to giving our best in every project we take on.
          </p>
          <p className="text-lg mt-4">
            Together, we are The&lt;Script&gt;—a team built on passion, collaboration, and the drive to become the best developers we can be! 🚀💻
          </p>
        </section>

        <hr className="border-t border-gray-300 my-6" />
        {/* <hr className="border-t border-gray-300 my-6" /> */}
        
        <section className="">
          <h3 className="text-3xl mb-4 font-vt323">About us</h3>
          <p className="text-lg">
            The name <b>"The&lt;Script&gt;"</b> is inspired by the concept of JavaScript, which play a big role in our project. We also added the &lt;script&gt; tag as a symbol of our journey—we are just starting, and we hope it never ends.
          </p>
          <p className="text-lg mt-4">
            We are not the famous band <b>"The Script"</b>, but a group of 3rd-year college students passionate about web development. This portfolio is not just for showcasing our skills but also for future opportunities. We want it to be something we can use as a reference as we grow in our careers.
          </p>
        </section>

        <section className="pt-6">
          <div className="bg-gray-200 rounded-lg overflow-hidden cursor-pointer">
            <img 
              src={aboutUs} 
              alt="The Script Team" 
              className="w-full h-auto object-cover"
              onClick={() => setPreviewImage(aboutUs)}
            />
          </div>
          <p className="text-sm mt-2 text-center">
            <strong>Figure 1.</strong> The&lt;Script&gt; Team Members
          </p>
          <p className="text-lg mt-4">
            To build this portfolio, we used <b>ReactJS, Tailwind CSS,</b> and <b>React Router</b>. These tools helped us create a smooth, modern, and responsive design. This project reflects our dedication and creativity, and we hope it inspires others who are also starting their journey in web development.
          </p>
        </section> 

        <section className="pt-6">
          <h3 className="text-3xl mb-4 font-vt323">Mission and Vision</h3>

          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* Left: Text */}
            <div className="flex-1 space-y-4 text-justify">
              <p className="text-lg">
                Our mission is to continuously grow, learn, and develop our skills to become the best developers in the future. As a team, we are committed to innovation, collaboration, and excellence, pushing ourselves to create high-quality solutions while embracing challenges that help us improve.
              </p>
              <p className="text-lg">
                We envision a future where The&lt;Script&gt; stands as a team of professional developers, taking on projects together with passion, expertise, and creativity. Through teamwork and dedication, we aim to make a meaningful impact in the tech industry, building solutions that matter.
              </p>
            </div>

            {/* Right: Portrait Image */}
            <div className="w-full lg:w-[300px] flex flex-col items-center justify-start  mx-auto text-center p-2 cursor-pointer">
              <img 
                src={portrait} 
                alt="The Script Team on April 3, 2025" 
                className="w-full h-full object-contain"
                onClick={() => setPreviewImage(portrait)}
              />
              <p className="text-[13px] text-black/70 italic">
                <strong>Figure 2:</strong> APR 3 2025, US
              </p>
            </div>
            
          </div>
        </section>

      {previewImage && (
        // modal preview when user clicks on image
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
    </div>
  );
};

export default About;