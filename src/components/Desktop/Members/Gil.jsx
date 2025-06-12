import React from 'react';
import MemberProfile from './MemberProfile';

import avatar from '../../../assets/us/gil-1x1.png';
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


const Gil = () => {

  const gilProjects = [
    { name: "The Script - Portfolio", icon: button2 },
    { name: "Admission and Online Exam System", icon: button2 },
    { name: "Enrollment System", icon: button2 },
    { name: "Tic Tac Toe", icon: button2 },
    { name: "Arduino Smart Coffee Machine", icon: button2 },
  ];

    return (
        <MemberProfile
          name="Giuliani D. Calais"
          title="Designer"
          email="gilcalais@gmail.com"
          hashtag="#ByteMeGil"
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
            { src: Blender, label: "Blender" }

          ]}
          funFact="Beyond coding, I’m probably spiking a volleyball, leveling up in video games, or serving as an altar server and youth facilitator at my church. You might also catch me volunteering at cleanup drives—saving the planet one trash bag at a time! Oh, and if there's coffee involved, consider me fully powered up, probably editing a podcast, video, or film while sipping away like a true caffeine-fueled creative."
          motto="Brb, debugging my own thoughts."
          socials={{
            facebook: "https://www.facebook.com/giuliani.calais.7",
            instagram: "https://www.instagram.com/dyil_cls/",
          }}
          projects={gilProjects}
        />
    );
};

export default Gil;