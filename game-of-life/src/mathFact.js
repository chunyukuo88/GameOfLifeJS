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
        <React.Fragment>
            <p className="fetched-fact">{fetchedMatchesInteger(count, fact) === true ? fact : "Loading fact..."}</p>
        </React.Fragment>
    );
};

const fetchedMatchesInteger = (integer, fact) => {
    const integerFromFact = fact.split(' ')[0];
    return (integer === integerFromFact);
};

export default MathFact;