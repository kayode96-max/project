import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  let increaseButton = {id: "increase", name: "+"}
  let decreaseButton = {id: "decrease", name: "-"}

  function handleIncrease() {
    if (count < 1000) {
      setCount(count + 1);
    } else {
      alert("You can't exceed the limit");
    }
  }

  function handleDecrease() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("You can't go below zero");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Click counter</h1>
      </header>
      <div className="display">
        <h3 className="count" id='counter' key={count}>{count}</h3>
      </div>
      <div className="buttons">
        <button id={increaseButton.id} onClick={handleIncrease}> {increaseButton.name} </button>
        <button id={decreaseButton.id} onClick={handleDecrease}> {decreaseButton.name} </button>
      </div>
    </div>
  );
}

export default App;
