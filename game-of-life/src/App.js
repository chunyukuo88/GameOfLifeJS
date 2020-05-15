import React, { useRef } from 'react';
import './App.css';
import Grid from './Grid';
import MathFact from './mathFact';
import useCountInput from './hooks/useCountInput';

const App = () => {

  const [count, setCount] = useCountInput(0);
  const ref = useRef();

  return (
    <div className='App-wrapper' ref={ref}>
      <h1 onClick={() => console.log(ref.current.className)}>Chunyu Kuo's Site</h1>
      <Grid />
      <button className='count-up'
              onClick={() => setCount(count + 1)}
      >
        Count up!
      </button>
      <button className='count-down' 
              onClick={() => setCount(count - 1)}
      >
        Count down!
      </button>
      <p><span>Now here is a fun fact about the number</span><span>{count}:</span></p>

      <button onClick={() => MathFact(count)}>
        Click!
      </button>
    </div>
  );
}


export default App;