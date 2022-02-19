import React, {useState, useEffect} from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import RenderCard from './components/RenderCard';

let data = require('./cards.json');

function App() {
  const [cardArray, setCardArray] = useState([
    {
      name: 'Ethan',
      image: 'christian-buehner-DItYlc26zVI-unsplash.jpg',
      key: 'Ethan1',
      clicked: false,
    },
    {
      name: 'Arab man',
      image: 'irene-strong-v2aKnjMbP_k-unsplash.jpg',
      key: 'Arabman2',
      clicked: false,
    },
    {
      name: 'don Qui',
      image: 'janko-ferlic-G-jo31ESuRE-unsplash.jpg',
      key: 'Donqui3',
      clicked: false,
    },
    {
      name: 'shawtee B.',
      image: 'jonas-kakaroto-KIPqvvTOC1s-unsplash (1).jpg',
      key: 'shawteeB4',
      clicked: false,
    },
  ]);
  const [score, setScore] = useState(0);
  const [prevHighScore, setPrevHighScore] = useState([]);
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
        // iterate over card array and then do stuff
        setCardArray([...cardArray, (cardArray[i].clicked = true)]);
        //cardArray[i].clicked = true; // idk if mutating state directly is ok but idk try using set state or something
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


  // ran everytime a card is clicked
  const handleFunctionsClicks = e => {
    console.log(cardArray);
    handleGameLose(e);
    if (gameLost === false) {
      handleCardClickedState(e);
      setScore(score + 1);
      shuffleArray([...cardArray]);
    }
  };

  const bubbleSort = (array) => {
    for(let i = 0; i < array.length; i++){
      for (let j = i; j < array.length; j++){
        if (array[j] < array[i]){
          [array[j], array[i]] = [array[i], array[j]]
        }
      }
    }
    return array[0]
  }

  const handleHighScore = (prevScore) =>{
    let highscoreArray = []
    let newPrevScore = prevScore - 1
    highscoreArray.push(newPrevScore)
    setPrevHighScore(bubbleSort(highscoreArray))
  }

  const handleReset = () => {
    console.log('game has been reset');
    console.log(prevHighScore)
    setCardArray([
      {
        name: 'Ethan',
        image: 'christian-buehner-DItYlc26zVI-unsplash.jpg',
        key: 'Ethan1',
        clicked: false,
      },
      {
        name: 'Arab man',
        image: 'irene-strong-v2aKnjMbP_k-unsplash.jpg',
        key: 'Arabman2',
        clicked: false,
      },
      {
        name: 'don Qui',
        image: 'janko-ferlic-G-jo31ESuRE-unsplash.jpg',
        key: 'Donqui3',
        clicked: false,
      },
      {
        name: 'shawtee B.',
        image: 'jonas-kakaroto-KIPqvvTOC1s-unsplash (1).jpg',
        key: 'shawteeB4',
        clicked: false,
      },
    ]);
    setGameLost(!gameLost);
    handleHighScore(score)
    setScore(0);
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
      <button onClick={() => handleReset()}>Replay?</button>
    </div>
  );
}

export default App;
