import React, { useState, useEffect, createContext } from 'react';
import { fetchUser } from '../components/MyComponent';
import { useAsync } from "react-async"

export const UserContext = createContext();

// const initialState = {
//     'id': 1,
//     'first-name': 'Gordon',
//     'last-name': 'Ramsay',
//     'username': 'GordonRamsay',
//     'email': 'GordonRamsay@GordonRamsay.food',
//     'address': {
//         'street': '4355 Allen Dr',
//         'city': 'Whitehall',
//         'zipcode': '43213',
//     },
//     'phone': '1-800-EAT-FOOD',
//     'company': {
//         'name': 'Gordon Ramsay Cookery',
//         'DBA': 'Gordon Ramsay Cookery',
//     }
// };


export const UserContextProvider = props => {
    const [userData, setUserData] = useState('Loading user data...');

    const url = 'https://jsonplaceholder.typicode.com/users';
    const options = { method: "GET", headers: { "Content-type": "text/plain" }};;
    useEffect(() => {
        const getUserArray = async () => {
            const result = await fetch(url, options).then(res => res.json());
            setUserData(result[0]);
        };
        getUserArray();
    },[url, options, userData]);

    return (
        <UserContext.Provider value={[userData, setUserData]}>
            {props.children}
        </UserContext.Provider>
    );
};

