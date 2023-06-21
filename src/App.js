import { useState } from 'react';
import './App.css';

function App() {
  // count holds the current value of state
  // setCount is a function that changes state
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount(count +1);
  }
  const handleDecrease = () => {
    setCount(count -1);
  }


  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={handleIncrease}>
        Increase
      </button>

      <button onClick={handleDecrease}>
        Decrease
      </button>
    </div>
  );
}

export default App;
