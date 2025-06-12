import React from 'react';
// import softwareScreenshot from '../../../assets/images/landscape.jpg'; 

import TeaSpillersPreview from '../../../assets/vids/TeaSpillersPreview.mp4'
import AdmissionPreview from '../../../assets/vids/AdmissionPreview.mp4'
import PLMPreview from '../../../assets/vids/ATMPreview.mp4'
import EnrollPreview from '../../../assets/vids/EnrollmentPreview.mp4'
import ThePreview from '../../../assets/vids/ThePreview.mp4'


const Software = () => {
  return (
    <div className="w-full h-full text-black font-courier px-6 py-4 space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-5xl font-black font-vt323">Software</h1>
        <h2 className="text-3xl font-vt323">Projects</h2>
        <p className="mt-2 text-[15px] -[700px] text-justify">
        Below are some of the software projects our team developed during the last semester as part of our academic coursework.
        </p>
      </div>

      <hr className="border border-black/50" /> 

      {/* Portfolio */}
      <div>
        <h3 className="text-[33px] font-black font-vt323 leading-tight">The&lt;script&gt; Portfolio</h3>
        <p className="text-[15px] -[750px] text-justify mt-2">
          the&lt;script&gt;.vercel.app is our team’s portfolio site — the one you're viewing right now!
          This project was built as part of our Web Systems & Technologies 2 midterm.
          It's fully inspired by the classic Windows 95 look, and includes animated UI,
          retro assets, and project windows to simulate an old-school OS.
          <br /><br />
          It was built using ReactJS, TailwindCSS, and a lot of pixel-perfect CSS. We started this around early April and developed it collaboratively using GitHub. We focused on making it responsive, modular, and retro-accurate — all for the love of tech and nostalgia!
        </p>
      </div>

      {/* Image or video */}
      <div>
        <div className="flex justify-center items-center w-full my-4">
            <video 
              src={ThePreview} 
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
        <em>Figure 1:</em> A preview of our team’s retro-inspired portfolio interface.
      </p>
      </div>
      <p className="text-[15px] -[750px] text-justify mt-4">
        This portfolio represents more than just a class requirement — it reflects our creativity, teamwork, and appreciation for web history. From designing pixel-perfect icons to building reusable components, this site is a passion project that showcases who we are as developers and as a team.
      </p>

      <h3 className="text-xl font-bold mt-10 mb-2">Links:</h3>
      <ul className="list-disc pl-6 space-y-2 text-blue-700 font-mono underline">
        <li>
          <a href="thescript.vercel.app" target="_blank" rel="noopener noreferrer">
            [OS Site] – The&lt;Script&gt;.com
          </a>
        </li>
        <li>
          <a href="https://github.com/ic-meg/thescript.git" target="_blank" rel="noopener noreferrer">
            [Github Repository] – The&lt;Script&gt; Repository
          </a>
        </li>
      </ul>
      <p className="text-[15px] -[750px] text-justify mt-6">
        the&lt;script&gt;.com was a meaningful opportunity for our team to apply everything we've learned — from version control to UI/UX design, and frontend development using modern frameworks. Through collaboration, trial-and-error, and a shared love for nostalgic aesthetics, we brought this digital showcase to life. We hope you enjoy exploring it as much as we enjoyed building it.
      </p>
      <br />

    

      {/* Tea Spillers */}
      <div>
        <h3 className="text-[33px] font-black font-vt323 leading-tight">Tea Spillers - Python GUI</h3>
        <p className="text-[15px] -[750px] text-justify mt-2">
          The Tea Spillers is a simple billing system made using Python and Tkinter for the GUI (graphical user interface). 
          Users can order from a menu and choose their customer status — student, senior, or regular. 
          Each type gets a different discount. For payment, they can pay using cash or e-wallet like GCash. 
          After the payment, the system creates a receipt that the user can view or print. It’s not a perfect system, 
          but it looks a bit like a cashier’s POS (point of sale) and also feels like a small self-service kiosk you see in cafes.
        </p>
      </div>

      {/* Image */}
      <div>
        <div className="flex justify-center items-center w-full my-4">
          <video 
            src={TeaSpillersPreview} 
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
        <em>Figure 2:</em> A preview of our team’s Tea Spillers.
      </p>
      </div>
      <h3 className="text-xl font-bold mt-10 mb-2">Links:</h3>
      <ul className="list-disc pl-6 space-y-2 text-blue-700 font-mono underline">
        <li>
          <a href= "https://youtu.be/sIdmq6asZuw" target="_blank" rel="noopener noreferrer">
            [Youtube] – Demo Link
          </a>
        </li>
        <li>
          <a href="https://github.com/ic-meg/Tea-Spillers---Billing-System" target="_blank" rel="noopener noreferrer">
            [Github Repository] – Tea Spillers Repository
          </a>
        </li>
      </ul>
      <p className="text-[15px] -[750px] text-justify mt-6">
        While it’s not super advanced, it shows how even small systems can help make everyday tasks like ordering and billing easier and more organized.
      </p>
           
       {/* ATM Machine (Java GUI)*/}
       <div>
        <h3 className="text-[33px] font-black font-vt323 leading-tight">PLM ATM Management System</h3>
        <p className="text-[15px] -[750px] text-justify mt-2">
          The ATM system is a self-service machine that allows people to do different banking tasks 
          like withdrawing cash, depositing money, checking account balances, transferring money, and paying bills, 
          all without needing to talk to a bank teller. 
          <br /><br />
          This system is built using the Java's Graphical User Interface (GUI) framework, which makes it secure and reliable. Java helps the ATM handle many transactions safely, with features like data protection and PIN verification to keep everything secure. 
        </p>
      </div>

      {/* Image */}
      <div>
      <div className="flex justify-center items-center w-full my-4">
          <video 
            src={PLMPreview} 
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
        <em>Figure 3:</em> A preview of our team’s ATM Management System.
      </p>
      </div>
      <h3 className="text-xl font-bold mt-10 mb-2">Links:</h3>
      <ul className="list-disc pl-6 space-y-2 text-blue-700 font-mono underline">
        <li>
          <a href="https://youtu.be/EMpdLx9KnrU" target="_blank" rel="noopener noreferrer">
            [YouTube] – ATM Management System - Demo
          </a>
        </li>
        <li>
          <a href="https://github.com/ic-meg/PLM-ATM-Management-System.git" target="_blank" rel="noopener noreferrer">
            [Github Repository] – ATM Management System Repository
          </a>
        </li>
      </ul>
      <p className="text-[15px] -[750px] text-justify mt-6">
        The ATM System project was an exciting chance for our team to put all our skills to the test, from coding with Java to designing secure and user-friendly interfaces. 
      </p>
      
    {/* Online Exam */}
    <div>
          <h3 className="text-[33px] font-black font-vt323 leading-tight">Integrated Online Admission and Examination System</h3>
          <p className="text-[15px] -[750px] text-justify mt-2">
            This is a system that helps schools or colleges manage student admissions and exams online. 
            It allows students to apply, take entrance exams, and be monitored during the test to make sure 
            they are not cheating—all using a computer or mobile device. Everything is done in one platform to make the process 
            easy and secure.
            <br /><br />
            The Integrated Online Admission and  Examination System was built using PHP, HTML, CSS, and SQL. It handles everything from student registration to secure online exams, all in one platform.
          </p>
        </div>

        {/* Image */}
        <div>
          <div className="flex justify-center items-center w-full my-4">
              <video 
                src={AdmissionPreview} 
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
          <em>Figure 2:</em> A preview of our team’s Admission and Online Exam system.
        </p>
        </div>
        <h3 className="text-xl font-bold mt-10 mb-2">Links:</h3>
        <ul className="list-disc pl-6 space-y-2 text-blue-700 font-mono underline">
          <li>
            <a href="https://youtu.be/QNC6hF-WZBQ" target="_blank" rel="noopener noreferrer">
              [YouTube] – Online Admission and Examination System
            </a>
          </li>
          <li>
            <a href="https://github.com/ic-meg/Group6OnlineExam.git" target="_blank" rel="noopener noreferrer">
              [Github Repository] – Admission and Online Examination Repository
            </a>
          </li>
        </ul>
        <p className="text-[15px] -[750px] text-justify mt-6">
          This project is more than just a school project — it shows our creativity, teamwork, and love for building smart web solutions. By designing a smooth online admission and exam system, we combined useful features with strong security. From user-friendly design to reliable proctoring tools, this system shows who we are as developers and how well we work together as a team.
        </p>

       {/* Online enrollment */}
       <div>
        <h3 className="text-[33px] font-black font-vt323 leading-tight">Online Enrollment System</h3>
        <p className="text-[15px] -[750px] text-justify mt-2">
          An Online Enrollment System is a website that allows students to register for courses or subjects using 
          the internet. It replaces the traditional, manual enrollment process by providing a fast, easy, and convenient way for 
          students, parents, and school staff to manage enrollment.
          <br /><br />
          This ongoing project is being built using PHP, HTML, CSS, JS, and SQL. PHP handles the system's core functionalities like processing user actions and managing enrollments. HTML and CSS are used to create a responsive, user-friendly interface that works well across all devices. SQL is used for securely storing and managing student records, allowing for efficient updates and data retrieval. By combining these technologies, we are creating a streamlined, accessible system for both students and administrators.
        </p>
      </div>

      {/* Image */}
      <div>
          <div className="flex justify-center items-center w-full my-4">
              <video 
                src={EnrollPreview} 
                muted 
                autoPlay 
                playsInline
                preload='auto'
                loop 
                className="border border-black w-full max-w-[850px] shadow-md"
              >
                Your browser does not support the video tag.
              </video>
            </div>

      <p className="text-sm text-center mt-2">
        <em>Figure 4:</em> A preview of our team’s Online Enrollment system.
      </p>
      </div>
      <h3 className="text-xl font-bold mt-10 mb-2">Links:</h3>
      <ul className="list-disc pl-6 space-y-2 text-blue-700 font-mono underline">
        <li>
          <a href="https://youtu.be/FBk6lccTrTs" target="_blank" rel="noopener noreferrer">
            [YouTube] – Online Enrollment System
          </a>
        </li>
      </ul>
      <p className="text-[15px] -[750px] text-justify mt-6">
        It helps schools and universities improve accuracy, reduce paperwork, save time, and provide a better experience for users.
      </p>


 

      
      
    </div>
    
  );
};

export default Software;
