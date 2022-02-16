import React, {useState} from 'react';

const Scoreboard = ({score, prevHighScore}) => {
  return (
    <div>
      <div>Your Current Score is: {score}</div>
      <div>Your Previous High Score is {prevHighScore}</div>
    </div>
  );
};

export default Scoreboard;
