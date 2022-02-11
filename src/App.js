import React, {useState} from 'react'
import './App.css';
import Scoreboard from './components/Scoreboard'
import RenderCard from './components/RenderCard'

let data = require('./components/cards.json')

function App() {

const [cardArray, setCardArray] = useState(data)
const [cardClicked, setCardClicked] = useState(false)
const [score,setScore] = useState(0)
const [prevHighScore, setPrevHighScore] = useState(0)

  return (
    <div className="App">
      <Scoreboard score={score}/>
      <RenderCard data={data}/>
    </div>
  );
}

export default App;
