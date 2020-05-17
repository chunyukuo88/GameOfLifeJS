import React, { useState, useEffect } from 'react';

const MathFact = (integer) => {
    const [fact, setFact] = useState('Want facts? Get clicking!');
    const url = `http://numbersapi.com/${integer}/math`;
    const options = { method: "GET", headers: { "Content-type": "text/plain" }};

    
    useEffect(() => {
        const getFact = async () => { 
            const result = await fetch(url, options).then(res => res.text());
            setFact(result);
            console.log(fact);
         };
        getFact();
     },[url, options, fact]);

    return (
        <div>
            <p>{fact}</p>
        </div>
    );

};

export default MathFact;