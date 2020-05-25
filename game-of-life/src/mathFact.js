import React, { useState, useEffect } from 'react';

const MathFact = (integerAsObject) => {
    const count = JSON.stringify(integerAsObject.count);
    const [fact, setFact] = useState('Want facts? Get clicking!');
    const url = `http://numbersapi.com/${count}/math`;
    const options = { method: "GET", headers: { "Content-type": "text/plain" }};
    
    useEffect(() => {
        const getFact = async () => { 
            const result = await fetch(url, options).then(res => res.text());
            setFact(result);
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