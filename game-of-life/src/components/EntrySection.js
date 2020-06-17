import React, { useContext } from 'react';
import { CountContext } from '../context/count-context';

export default function EntrySection(){
    const [ count, setCount ] = useContext(CountContext);
    const increment = () => { setCount(count + 1); };
    const decrement = () => { setCount(count - 1); };
    const inputNumberStyle = { fontSize: '3em' };

    return (
        <section className='entry-section'>
            <div className='count-up' onClick={increment}></div>
            <input  className='integer-input-box'
                    type='number'
                    style={inputNumberStyle}
                    onChange={
                        (e) => setCount(parseInt(e.target.value, 10))
                    }
                    value={count}
            />
            <div className='count-down' onClick={decrement}></div>
        </section>
    );
};
