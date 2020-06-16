import React, { useState, useEffect, useContext } from 'react';
import { getNumbersApiUrl } from "../common/urlsAndOptions";
import { CountContext } from "../context/count-context";

const MathFact = () => {
    const [contextCount] = useContext(CountContext);
    const [fact, setFact] = useState('Want facts? Get clicking!');

    //Todo: Research best practice for where to put this first of two uses of useEffect:
    useEffect(() => {
        document.title = `Pondering the number ${count}`;
    });

    const count = JSON.stringify(contextCount);
    const url = getNumbersApiUrl(count);
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
            <p className="fetched-fact">
                {fetchedMatchesInteger(count, fact) === true
                    ? fact
                    : "Loading fact..."
                }
            </p>
        </React.Fragment>
    );
};

const fetchedMatchesInteger = (integer, fact) => {
    const integerFromFact = fact.split(' ')[0];
    return (integer === integerFromFact);
};

export default MathFact;
