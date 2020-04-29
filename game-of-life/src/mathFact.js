import { useState, useEffect } from 'react';

function MathFact(integer){
    const [fact, setFact] = useState('');

    const url = `http://numbersapi.com/${integer}/math`;
    const options = { method: "GET", headers: { "Content-type": "text/plain" }};

    useEffect(() => {
        const fetchMathFact = async () => {
            const result = await fetch(url, options).then(res => res.text());
            setFact(result);
        };
        fetchMathFact();
    }, []);

    return(fact);
};

export default MathFact;