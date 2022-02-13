import React, {useState, useEffect} from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import RenderCard from './components/RenderCard';

let data = require('./cards.json');
console.log(data)
function App() {
  const [cardArray, setCardArray] = useState(data);
  const [cardClicked, setCardClicked] = useState(false);
  const [score, setScore] = useState(0);
  const [prevHighScore, setPrevHighScore] = useState(0);

  const shuffleArray = oldArray => {
    let array = oldArray
    console.log('clicked');
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    setCardArray(array);
    console.log(array)
  };

  const handleCardClick = () => {
    shuffleArray([...cardArray]);
    setScore(score + 1)
  };

  return (
    <div className="App">
      <Scoreboard score={score} />
      <RenderCard
        data={cardArray}
        handleCardClick={handleCardClick}
      />
    </div>
  );
}

export default App;
