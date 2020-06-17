import React, { useState, createContext } from 'react';

export const FactContext = createContext();

const initialState = {
    first: 'first',
    second: 'second'
};

export const FactContextProvider = props => {
    const [fact, setFact] = useState(initialState);

    return (
        <FactContext.Provider value={[fact, setFact]}>
            {props.children}
        </FactContext.Provider>
    );
};

