import React from 'react';

import TicTacToePreview from '../../../assets/vids/TicTacToeDemo.mp4'

const Software = () => {
  return (
    <div className="w-full h-full text-black font-courier px-6 py-4 space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-5xl font-black font-vt323">Console Game</h1>
        <h2 className="text-2xl font-vt323">Projects</h2>
        <p className="mt-2 text-[15px] -[700px] text-justify">
        Below are some of the console game projects our team developed during the last semester as part of our academic coursework.
        </p>
      </div>

      <hr className="border border-black/50" /> 

    {/* Tic Tac Toe */}
    <div>
        <h3 className="text-[33px] font-black font-vt323 leading-tight">Tic Tac Toe</h3>
        <p className="text-[15px] -[750px] text-justify mt-2">
          This is a basic two-player game played in the console. The program begins with a welcome message, 
          followed by a brief delay and gameplay instructions. Players then enter their names, and the game starts with a message 
          and good luck wish. Player 1 (X) goes first, followed by Player 2 (O), with a delay between turns. 
          The game continues until one player wins or it's a draw. After the game ends, 
          the score is shown and players can choose to play again or exit.
          <br /><br />
          We used the C++ programming language to develop the Tic Tac Toe console game. With C++, we were able to handle user input, display the game board, manage player turns, and implement game logic like checking for a winner or a draw.
        </p>
      </div>

      {/* Video */}
      <div>
          <div className="flex justify-center items-center w-full my-4">
              <video 
                src={TicTacToePreview} 
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
        <em>Figure 9:</em> A preview of our team’s Tic Tac Toe game in the console.
      </p>
      </div>
      <h3 className="text-xl font-bold mt-10 mb-2">Links:</h3>
      <ul className="list-disc pl-6 space-y-2 text-blue-700 font-mono underline">
        <li>
          <a href="https://youtu.be/PwxFTVZkZZg" target="_blank" rel="noopener noreferrer">
            [YouTube] – Tic Tac Toe - Demo
          </a>
        </li>
        <li>
          <a href="https://github.com/loiverever/TicTacToe" target="_blank" rel="noopener noreferrer">
            [Github Repository] – Tic Tac Toe - Repository
          </a>
        </li>
      </ul>
      <p className="text-[15px] -[750px] text-justify mt-6">
        We worked on making the game easy to play but still fun and challenging. We tried to make sure the game was simple while also adding some interesting parts to keep players engaged. Throughout the process, we balanced creativity with logic, refining the gameplay mechanics and interface. 
      </p>
      
      
      
    </div>
    
  );
};

export default Software;
