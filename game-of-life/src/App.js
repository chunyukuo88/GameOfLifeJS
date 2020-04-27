import React, { useEffect, useState } from 'react';
import './App.css';
import Grid from './Grid';
import MathFact from './MathFact';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

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
