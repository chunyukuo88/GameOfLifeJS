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
      <MathFact />
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;