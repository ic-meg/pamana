import React from 'react';
import MemberProfile from './MemberProfile';

import avatar from '../../../assets/us/ley-1x1.png';
import button1 from '../../../assets/icons/button1.png';
import button2 from '../../../assets/icons/BUTTON-2.svg';
import button3 from '../../../assets/icons/BUTTON-3.svg';
import button4 from '../../../assets/icons/BUTTON-4.svg';

import HTML from '../../../assets/icons/HTML.svg';
import CSS from '../../../assets/icons/CSS.svg';
import JavaScript from '../../../assets/icons/JAVASCRIPT.svg';
import SQL from '../../../assets/icons/MYSQL.svg';
import Figma from '../../../assets/icons/FIGMA.svg';



const Ley = () => {

  const leyProjects = [
    { name: "The Script - Portfolio", icon: button2 },
    { name: "ATM System - Java", icon: button2 },
    { name: "Admission and Online Exam System", icon: button2 },
    { name: "Enrollment System", icon: button2 },
    { name: "Facebook Mockup", icon: button2 },
    { name: "Baclaran Church Website", icon: button2 },
    { name: "Tic Tac Toe", icon: button2 },
    { name: "Arduino Smart Coffee Machine", icon: button2 },
  ];

    return (
        <MemberProfile
          name="Shanley Q. Galo"
          title="Frontend Developer, Designer"
          email="shanleygalo0000@gmail.com"
          hashtag="#ByteMeLey"
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
          funFact="Beyond coding, I love watching anime and old films or series. I enjoy relaxing and taking my time—doing things that make me feel calm and happy. At home, I’m just a regular daughter who helps with house chores. I also really enjoy spending time with my nieces and nephew. Playing with them always makes me smile. Coding/Studying is my responsibilities, but these little moments are what keep me balanced and happy."
          motto="Code hard, chill harder."
          socials={{
            facebook: "https://www.facebook.com/shanleygalo0000",
            instagram: "https://www.instagram.com/shan.ley_/",
          
          }}
          projects={leyProjects}
        />
      );
    };

export default Ley;