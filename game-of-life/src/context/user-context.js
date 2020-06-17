import React, { useState, createContext } from 'react';

export const UserContext = createContext();

const initialState = {
    'id': 1,
    'first-name': 'Gordon',
    'last-name': 'Ramsay',
    'username': 'GordonRamsay',
    'email': 'GordonRamsay@GordonRamsay.food',
    'address': {
        'street': '4355 Allen Dr',
        'city': 'Whitehall',
        'zipcode': '43213',
    },
    'phone': '1-800-EAT-FOOD',
    'company': {
        'name': 'Gordon Ramsay Cookery',
        'DBA': 'Gordon Ramsay Cookery',
    }
};

export const UserContextProvider = props => {
    const [userData, setUserData] = useState(initialState);

    return (
        <UserContext.Provider value={[userData, setUserData]}>
            {props.children}
        </UserContext.Provider>
    );
};

