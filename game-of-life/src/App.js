import React from 'react';
import './styles/input.css';
import './styles/styles.css';
import UpperHalf from './UpperHalf';
import MathFact from './MathFact';
import useCountInput from './hooks/useCountInput';

const App = () => {
  const initialCount = Math.floor(Math.random() * 101);
  const [count, setCount] = useCountInput(initialCount);

  return (
    <div className='App-wrapper'>

        <UpperHalf />
        <section className='lower-half'>
            <section className='entry-section'>
                <a className='count-up'   onClick={() => setCount(count + 1)}></a>
                <input  className='integer-input-box' type="number" onChange={
                  (e) => setCount(parseInt(e.target.value, 10))} value={count}
                />
                <a className='count-down' onClick={() => setCount(count - 1)}></a>
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