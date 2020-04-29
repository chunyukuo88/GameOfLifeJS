import React from 'react';
import './App.css';
import Grid from './Grid';
import MathFact from './mathFact';
import useCountInput from './hooks/useCountInput';

const App = () => {

  const [count, setCount] = useCountInput(0);

  return (
    <div>
      <h1>Chunyu Kuo's Site</h1>
      <Grid />
      <button onClick={() => setCount(count + 1)}>
        Count up!
      </button>
      <button onClick={() => setCount(count - 1)}>
        Count down!
      </button>
      <p>Now click below for a fun fact about the number {count}:</p>
      {/* <button onClick={() => MathFact(count)}>
        Click!
      </button> */}
    </div>
  );
}

export default App;