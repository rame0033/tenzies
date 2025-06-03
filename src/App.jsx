import Die from './components/Die'
import { useState } from 'react'
import Confetti from 'react-confetti'
import './App.css'

function App() {
  // Store dice values, not components
  const [dice, setDice] = useState(generateNewDice());

  const gameWon = dice.every(die => die.isHeld) && dice.every (die => die.value === dice[0].value);

  

  // Generate an array of 10 random values (1-6)
   function generateNewDice() {
      const diceArray = [];
      for (let i = 0; i < 10; i++) {
        diceArray.push({
          value: Math.floor(Math.random() * 6) + 1,
          isHeld: false,
          id: i // Unique ID for each die
        });
      }
      return diceArray;
    }

  function rollDice() {
    if (!gameWon){
    setDice(oldDice => oldDice.map(die => 
        die.isHeld?
        die:
        {...die, value: Math.floor(Math.random() * 6) + 1} // Roll only unheld dice
      ))
    }

    else{
      setDice(generateNewDice()); // Reset the game
    }
  }

  // Function to hold a die
  function hold(id){
    setDice(oldDice => {
      return oldDice.map(die => {
        return die.id === id?
          {...die, isHeld: !die.isHeld} :
          die
      })
    })
  }

  // Render Die components from dice values
  const diceElements = dice.map(dieObj => (
        <Die 
            key={dieObj.id} 
            value={dieObj.value} 
            isHeld={dieObj.isHeld}
            hold={() => hold(dieObj.id)}
            id={dieObj.id}
        />)
      );

  return (
    <main>
      {gameWon && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

      <div className="dice-container">
        {diceElements}
      </div>

      <button className="roll-dice" onClick={rollDice}>{gameWon? "New Game" : "Roll"}</button>
    </main>
  )
}

export default App