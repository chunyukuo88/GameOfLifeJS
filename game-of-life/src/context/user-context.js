import React, {useState, useEffect, createContext, useContext} from 'react';
import { dummyUserUrl, dummyUserOptions } from '../common/urlsAndOptions';
import { AuthContext } from "../context/authentication-context";
import userModel from './user-model';

export const UserContext = createContext();

export const UserContextProvider = props => {
    const [ authStatus ] = useContext(AuthContext);
    const [ userData, setUserData ] = useState(userModel);

    async function getUserArray() {
        const result = await fetch(dummyUserUrl, dummyUserOptions).then(res => res.json());
        setUserData(result[0]);
    };

    useEffect(() => {
        if (authStatus.isAuthenticated === true) {
            getUserArray();
        }
    },[authStatus]);

    return (
        <UserContext.Provider value={[userData, setUserData]}>
            {props.children}
        </UserContext.Provider>
    );
};

