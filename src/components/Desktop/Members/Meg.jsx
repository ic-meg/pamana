import React from 'react';
import MemberProfile from './MemberProfile';

import avatar from '../../../assets/us/meg-1x1.png';
import button1 from '../../../assets/icons/button1.png';
import button2 from '../../../assets/icons/BUTTON-2.svg';
import button3 from '../../../assets/icons/BUTTON-3.svg';
import button4 from '../../../assets/icons/BUTTON-4.svg';

import HTML from '../../../assets/icons/HTML.svg';
import CSS from '../../../assets/icons/CSS.svg';
import JavaScript from '../../../assets/icons/JAVASCRIPT.svg';
import SQL from '../../../assets/icons/MYSQL.svg';
import Figma from '../../../assets/icons/FIGMA.svg';
import Blender from '../../../assets/icons/BLENDER.svg';

const Meg = () => {

    const megProjects = [
      { name: "The Script - Portfolio", icon: button2 },
      { name: "Tea Spillers", icon: button2 },
      { name: "ATM System - Java", icon: button2 },
      { name: "Admission and Online Exam System", icon: button2 },
      { name: "Enrollment System", icon: button2 },
      { name: "TikTok Mockup", icon: button2 },
      { name: "Espresso Markup Squad", icon: button2 },
      { name: "Tic Tac Toe", icon: button2 },
      { name: "Arduino Smart Coffee Machine", icon: button2 },
    ];

    return (
        <MemberProfile
          name="Meg Angeline V. Fabian"
          title="Full-Stack Developer"
          email="fabian.megangeline2003@gmail.com"
          hashtag="#ByteMeMeg"
          avatar={avatar}
          buttons={[
            { src: button1, alt: "Tools" },
            { src: button2, alt: "Folder" },
            { src: button3, alt: "Thumbs up" },
            { src: button4, alt: "Speech" },
          ]}
          tools={[
            { src: HTML, label: "HTML" },
            { src: CSS, label: "CSS" },
            { src: JavaScript, label: "Javascript" },
            { src: SQL, label: "MySQL" },
            { src: Figma, label: "Figma" },
            {src: Blender, label: "Blender"}
          ]}
          
          funFact="Beyond coding, I’m usually playing games or watching movies—I don’t always have everything figured out, and most days I just go with the flow. I love hanging out with my friends and having chill chitchats with my Papa and Nanay. Music keeps me going, especially R&B and of course... Jennie! (Who doesn’t wanna rock with Jennie, right?) I just like keeping myself entertained when I’m not lost in code."
          motto="Go with the flow... unless Jennie drops a track — then pause everything"
          socials={{
            facebook: "https://www.facebook.com/fabian.meg/",
            instagram: "https://www.instagram.com/megangelineee/",
          
          }}
          projects={megProjects}
        />
      );
    };
    
export default Meg;