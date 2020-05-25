import React, { useRef } from 'react';
import './App.css';
import MathFact from './MathFact';
import useCountInput from './hooks/useCountInput';

const App = () => {

  const [count, setCount] = useCountInput(0);
  const ref = useRef();

  return (
    <div className='App-wrapper' ref={ref}>
      <h1 onClick={() => console.log(ref.current.className)}>Chunyu Kuo's Site</h1>
      <input type="number" onChange={(e) => setCount(e.target.value)} value={count}/>
      <p><span>Now here is a fun fact about the number </span><span>{count}:</span></p>

      <MathFact count={count} />
    </div>
  );
}

export default App;