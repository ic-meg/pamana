import React from 'react';
import MemberProfile from './MemberProfile';

import avatar from '../../../assets/us/pam-1x1.png';
import button1 from '../../../assets/icons/button1.png';
import button2 from '../../../assets/icons/BUTTON-2.svg';
import button3 from '../../../assets/icons/BUTTON-3.svg';
import button4 from '../../../assets/icons/BUTTON-4.svg';

import HTML from '../../../assets/icons/HTML.svg';
import CSS from '../../../assets/icons/CSS.svg';
import JavaScript from '../../../assets/icons/JAVASCRIPT.svg';
import SQL from '../../../assets/icons/MYSQL.svg';
import Figma from '../../../assets/icons/FIGMA.svg';


const Pam = () => {
  const pamProjects = [
    { name: "The Script - Portfolio", icon: button2 },
    { name: "ATM System - Java", icon: button2 },
    { name: "Admission and Online Exam System", icon: button2 },
    { name: "Enrollment System", icon: button2 },
    { name: "Arduino Smart Coffee Machine", icon: button2 },
  ];

    return (
        <MemberProfile
          name="Pamela T. Murillo"
          title="Frontend Developer"
          email="pamtena8@gmail.com"
          hashtag="#ByteMePam"
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
          funFact="Beyond coding, I’m all about sports—I love playing basketball, volleyball, and billiards. I also enjoy gaming and vibing to music, especially OPM (BINI supremacy!). On Sundays, you’ll probably find me at church recharging my spirit. I’m always up for a nature trip or a random adventure, but I also really value my alone time. Being home by myself lets me do my thing and tidy up in peace. Movie nights and food trips with family and friends are some of my favorite ways to unwind. I also make time for morning jogs—and sometimes in the afternoon too, just to catch that golden hour. There's something about watching the sunrise or sunset that makes me feel totally free and at peace."
          motto="Every line of code is a step in an unwritten journey."
          socials={{
            facebook: "https://www.facebook.com/pamelatena18",
            instagram: "https://www.instagram.com/pamtenasttt___/",
          }}
          projects={pamProjects}
        />
    );
};

export default Pam;