import Die from './components/Die'
import './App.css'

function App() {

  // Function that returns a main element with a div containing 10 Die components, each with a random value of 1-6.
  function generateNewDice() {
    const dice =[];
    for (let i=0; i < 10; i++) {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      dice.push(<Die key={i} value={randomValue} />);
    }
    return dice;
  }

  console.log(generateNewDice());

  return (
        <main>
            <div className="dice-container">
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
            </div>
        </main>
    )
}

export default App
