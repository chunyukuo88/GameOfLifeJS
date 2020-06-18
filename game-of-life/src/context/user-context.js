import React, { useState, useEffect, createContext } from 'react';
import { dummyUserUrl, dummyUserOptions } from '../common/urlsAndOptions';

export const UserContext = createContext();

export const UserContextProvider = props => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const getUserArray = async () => {
            const result = await fetch(dummyUserUrl, dummyUserOptions).then(res => res.json());
            setUserData(result[0]);
        };
        getUserArray();
    },[]);

    return (
        <UserContext.Provider value={[userData, setUserData]}>
            {props.children}
        </UserContext.Provider>
    );
};

