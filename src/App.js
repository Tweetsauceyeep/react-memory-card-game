import React, {useState, useEffect} from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import RenderCard from './components/RenderCard';

let data = require('./cards.json');
function App() {
  const [cardArray, setCardArray] = useState(data);
  const [score, setScore] = useState(0);
  const [prevHighScore, setPrevHighScore] = useState(0);
  const [gameLost, setGameLost] = useState(false);

  const shuffleArray = oldArray => {
    let array = oldArray;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    setCardArray(array);
  };

  const handleCardClickedState = e => {
    for (let i = 0; i < cardArray.length; i++) {
      if (cardArray[i].name === e.target.name) {
        cardArray[i].clicked = true; // idk if mutating state directly is ok but idk try using set state or something
        console.log(
          `${e.target.name} has been clicked and clicked value  = ${cardArray[i].clicked}`,
        );
      }
    }
  };

  // checks if the card clicked has clicked set to true, and displaying loser options if so
  const handleGameLose = e => {
    for (let i = 0; i < cardArray.length; i++) {
      if (
        cardArray[i].name === e.target.name &&
        cardArray[i].clicked === true
      ) {
        console.log('lose');
        setGameLost(true);
      }
    }
  };

  const handleFunctionsClicks = e => {
    handleGameLose(e);
    if (gameLost === false) {
      handleCardClickedState(e);
      shuffleArray([...cardArray]);
      setScore(score + 1);
    } else if (gameLost === true) {
      setScore(0);
    }
  };

  return gameLost === false ? (
    <div className="App">
      <Scoreboard score={score} prevHighScore={prevHighScore} />
      <RenderCard
        data={cardArray}
        handleFunctionsClicks={handleFunctionsClicks}
      />
    </div>
  ) : (
    <div>
      <div>YOU LOST BRUH</div>
    </div>
  );
}

export default App;
