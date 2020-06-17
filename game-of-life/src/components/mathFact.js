import React, { useState, useEffect, useContext } from 'react';
import { getNumbersApiUrl } from "../common/urlsAndOptions";
import { CountContext } from "../context/count-context";
import { useAsync } from 'react-async';

const fetchMathFact = async () => {
  const url = 'http://numbersapi.com/2/math';
  // const url = 'https://jsonplaceholder.typicode.com/todos/1';
  const options = { method: "GET", headers: { "Content-type": "text/plain" }};
  const result = await fetch(url, options)
                     .then(res => res.text());
                  // .then(response => response.json())
                  // .then(json => console.log(json))
  if (!result.ok) throw new Error(result.statusText)
    return result.text();
};

const MathFact = () => {
    const { data, error, isPending, cancel } = useAsync({
        promiseFn: fetchMathFact,
        onResolve: () => console.log('Resolved'),
    });
    return (
        <React.Fragment>
            <div>
                {isPending && "Loading..."}
                {error && `Error: ${error.message}`}
                {JSON.stringify(data, null, 2)}
            </div>
        </React.Fragment>
    );
    // const [contextCount] = useContext(CountContext);
    // const [fact, setFact] = useState('Want facts? Get clicking!');
    // const count = JSON.stringify(contextCount);
    // const url = getNumbersApiUrl(count);
    // const options = { method: "GET", headers: { "Content-type": "text/plain" }};

    // useEffect(() => {
    //     const getFact = async () => {
    //         const result = await fetch(url, options).then(res => res.text());
    //         setFact(result);
    //      };
    //     getFact();
    //  },[url, options, fact]);
    //
    // //Todo: Research best practice for where to put this first of two uses of useEffect:
    // useEffect(() => {
    //     document.title = `Pondering the number ${count}`;
    // });
    //
    // return (
    //     <React.Fragment>
    //         <p className="fetched-fact">
    //             {fetchedMatchesInteger(count, fact) === true
    //                 ? fact
    //                 : "Loading fact..."
    //             }
    //         </p>
    //     </React.Fragment>
    // );
};

const fetchedMatchesInteger = (integer, fact) => {
    const integerFromFact = fact.split(' ')[0];
    return (integer === integerFromFact);
};

export default MathFact;
