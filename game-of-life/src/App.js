import React, { useRef } from 'react';
import './styles/input.css';
import './styles/styles.css';
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
          <span className='byline-a'>By Chunyu Kuo</span>
          <span className='byline-b'>Inspired by John Conway</span>
        </section>

        <section className='upper-right-b'>
          <span className='華語版本'>華語版本</span>
          <span>English</span>
        </section>

        <section className='lower-half'>
            <section className='entry-section'>
                <button className='count-up'
                        onClick={() => setCount(count + 1)}
                >
                  ⇧
                </button>
                <input className='integer-input-box' type="number" onChange={(e) => setCount(e.target.value)} value={count}/>
                <button className='count-down' 
                        onClick={() => setCount(count - 1)}
                >
                  ⇩
                </button>
            </section>

            <section className='fact-section'>
              <p className='fact-label'><span>Now here is a fun fact about the number </span><span>{count}:</span></p>
              <MathFact count={count} />
            </section>
        </section>
    </div>
  );
}

export default App;