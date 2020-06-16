import React, { useContext } from "react";
import { CountContext } from "../context/count-context";

export default function EntrySection(){
    const [ count, setCount ] = useContext(CountContext);
    const increment = () => { setCount(count + 1); console.log('increment'); };
    const decrement = () => { setCount(count - 1); console.log('decrement'); };

    return (
        <section className='entry-section'>
            <div className='count-up'   onClick={increment}></div>
            <input  className='integer-input-box'
                    type="number"
                    onChange={
                        (e) => setCount(parseInt(e.target.value, 10))
                    }
                    value={count}
            />
            <div className='count-down' onClick={decrement}></div>
        </section>
    );
};
