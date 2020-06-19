import React, {useState, useEffect, createContext, useContext} from 'react';
import { dummyUserUrl, dummyUserOptions } from '../common/urlsAndOptions';
import { AuthContext } from "../context/authentication-context";

import userModel from './user-model';

export const UserContext = createContext();

export const UserContextProvider = props => {
    const [ authStatus ] = useContext(AuthContext);
    const [userData, setUserData] = useState(userModel);



    useEffect(() => {
        const getUserArray = () => {
            const result = fetch(dummyUserUrl, dummyUserOptions).then(res => res.json());
            console.log('getUserArray()');
            setUserData(result[0]);
        };
        if (authStatus === true) {
        getUserArray();
        }
    },[authStatus]);

    return (
        <UserContext.Provider value={[userData, setUserData]}>
            {props.children}
        </UserContext.Provider>
    );
};

