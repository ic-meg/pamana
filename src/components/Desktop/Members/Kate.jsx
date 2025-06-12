import React from 'react';
import MemberProfile from './MemberProfile';

import avatar from '../../../assets/us/kate-1x1.png';
import button1 from '../../../assets/icons/button1.png';
import button2 from '../../../assets/icons/BUTTON-2.svg';
import button3 from '../../../assets/icons/BUTTON-3.svg';
import button4 from '../../../assets/icons/BUTTON-4.svg';

import HTML from '../../../assets/icons/HTML.svg';
import CSS from '../../../assets/icons/CSS.svg';
import JavaScript from '../../../assets/icons/JAVASCRIPT.svg';
import SQL from '../../../assets/icons/MYSQL.svg';
import Figma from '../../../assets/icons/FIGMA.svg';

const Kate = () => {
  const kateProjects = [
    { name: "The Script - Portfolio", icon: button2 },
    { name: "Online Exam System", icon: button2 },
    { name: "Enrollment System", icon: button2 },
    { name: "Espresso Markup Squad", icon: button2 },
    { name: "Tic Tac Toe", icon: button2 },
    { name: "Arduino Smart Coffee Machine", icon: button2 },
  ];


  return (
    <MemberProfile
      name="Kate Serrano"
      title="Frontend Developer"
      email="kateserrano104@gmail.com"
      hashtag="#ByteMeKate"
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
      ]}
      projects={kateProjects}
      
      funFact="Beyond coding, I enjoy exploring new activities for entertainment—whether it's creating content on TikTok, playing games, or going on early morning rides at dawn. As someone who loves trying out new experiences, I’m always on the lookout for fun and refreshing ways to spend my free time. Additionally, nasa page po ni giul"
      motto="Explore Beyond the Comfort Zone"
      socials={{
        facebook: "https://www.facebook.com/kate.serrano.7161",
        instagram: "https://www.instagram.com/yorsomnium_/",
      
      }}
     
    />

    
  );
};

export default Kate;
