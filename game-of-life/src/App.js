import React, { useRef } from 'react';
import './styles/input.css';
import './styles/layout.css';
import MathFact from './MathFact';
import useCountInput from './hooks/useCountInput';

const App = () => {

  const [count, setCount] = useCountInput(0);
  const ref = useRef();

  return (
    <div className='App-wrapper' ref={ref}>

        <section className='upper-left'>
          <h1 className='page-title' onClick={() => console.log(ref.current.className)}>The Splendid Maths</h1>
        </section>

        <section className='upper-right-a'>
          <p className='localization'>By Alex Gochenour</p>
        </section>

        <section className='upper-right-b'>
          <span>中文</span>
          <span>English</span>
        </section>

        <section className='lower-half'>
          <button className='count-up'
                  onClick={() => setCount(count + 1)}
          >
            Count up!
          </button>
          <input type="number" onChange={(e) => setCount(e.target.value)} value={count}/>
          <button className='count-down' 
                  onClick={() => setCount(count - 1)}
          >
            Count down!
          </button>
          <p><span>Now here is a fun fact about the number </span><span>{count}:</span></p>
          <MathFact count={count} />
        </section>
    </div>
  );
}

export default App;