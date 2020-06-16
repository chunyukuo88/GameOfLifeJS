import React, { useState, createContext } from 'react';
import RandomNumberGenerator from "./randomNumberGenerator";
export const CountContext = createContext();

export const CountContextProvider = props => {
    const [count, setCount] = useState(RandomNumberGenerator);

    return (
        <CountContext.Provider value={[count, setCount]}>
            {props.children}
        </CountContext.Provider>
    );
};

