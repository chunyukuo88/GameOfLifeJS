import React, { useState, useEffect } from 'react';

function MathFact(){
    const [fact, setFact] = useState('');

    const [url, options] = _getFetchParameters();
    
    useEffect(() => {
        const fetchMathFact = async () => {
            const result = await fetch(url, options).then(res => res.text());
            setFact(result);
        };
        fetchMathFact();
    }, []);

    return(<p>{ fact }</p>);
};

function _getFetchParameters(){
    const url = `http://numbersapi.com/26/math`;
    const options = { method: "GET", headers: { "Content-type": "text/plain" }};
    return [url, options];
}

export default MathFact;