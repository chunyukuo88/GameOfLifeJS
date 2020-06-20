import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from "../context/user-context";
import { AuthContext } from "../context/authentication-context";

const UpperHalf = () => {
    const [ userData ] = useContext(UserContext);
    const [ inspiredBy, setInspiredBy ] = useState('John Conway');
    const [ authStatus ] = useContext(AuthContext);

    let termOfAddressToUser = (userData.name)
                                ? userData.name.split(' ')[0]
                                : 'friend';

    const changeInspiration = () => {
        setInspiredBy('Claude Shannon');
    };

    useEffect(() => {
        if (authStatus.isAuthenticated === true) {
            changeInspiration();
        }
    },[authStatus]);

    return (
      <React.Fragment>
        <section className='upper-left'>
          <h1 className='page-title'>Welcome, {termOfAddressToUser}!</h1>
        </section>

        <section className='upper-right-a'>
          <span className='byline a'>Made by <br/>Chunyu Kuo</span>
          <span className='byline b'>Inspired by <br/>{ inspiredBy }</span>
        </section>

        <section className='upper-right-b'>
          <span className='華語版本'>換成中文</span>
          <span className='english'>English</span>
        </section>
      </React.Fragment>
    );
};

export default UpperHalf;
