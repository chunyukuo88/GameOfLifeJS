import React, { useState, useEffect, createContext } from 'react';
import { dummyUserUrl, dummyUserOptions } from '../common/urlsAndOptions';

export const UserContext = createContext();

export const UserContextProvider = props => {
    const [userData, setUserData] = useState('Loading user data...');

    console.log('The user context function was called.');

    useEffect(() => {
        const getUserArray = async () => {
            const result = await fetch(dummyUserUrl, dummyUserOptions).then(res => res.json());
            setUserData(result[0]);
        };
        //Uncommenting this next line causes an infinite loop visible via console.log():
        getUserArray();
    },[]);

    return (
        <UserContext.Provider value={[userData, setUserData]}>
            {props.children}
        </UserContext.Provider>
    );
};

