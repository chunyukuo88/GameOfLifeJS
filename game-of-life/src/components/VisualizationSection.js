import React, { useContext } from 'react';
import { FactContext } from "../context/fact-context";

export default function EntrySection(){
  const [ fact, setFact ] = useContext(FactContext);

  const changeFact = () => setFact({first: 'w00t.'});
  const restoreFact = () => setFact({first: 'first', second: 'second'});
  return (
      <section className='visualization-section'>
        <button onClick={changeFact}>Change the global fact</button>
        <button onClick={restoreFact}>Change the global fact</button>
        <input  type='text'
                onChange={
                  (e) => setFact({first: e.target.value})
                }
                value={fact.first}
        />
        <p>{fact.first}</p>
        <p>{fact.second}</p>
      </section>
  );
};

