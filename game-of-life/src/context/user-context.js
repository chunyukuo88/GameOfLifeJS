import React, { useState, useEffect, createContext } from 'react';
import { dummyUserUrl, dummyUserOptions } from '../common/urlsAndOptions';

export const UserContext = createContext();

export const UserContextProvider = props => {
    const [userData, setUserData] = useState('Loading user data...');

    console.log('The user context function was called.');

    useEffect(() => {
        const getUserArray = async () => {
            const result = await fetch(dummyUserUrl, dummyUserOptions)
                                    .then(res => res.json());
            setUserData(result[0]);
        };
        // getUserArray(); Uncommenting causes an infinite loop visible only via the console log on line 9.
    },[dummyUserUrl, dummyUserOptions, userData]);

    return (
        <UserContext.Provider value={[userData, setUserData]}>
            {props.children}
        </UserContext.Provider>
    );
};

