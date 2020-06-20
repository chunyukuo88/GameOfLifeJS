import React, { useContext } from 'react';
import { UserContext } from "../context/user-context";
import { AuthContext } from "../context/authentication-context";

export default function EntrySection(){
    const [ userData, setUserData ] = useContext(UserContext);
    const [ authStatus, setAuthStatus ] = useContext(AuthContext);

    function changePhoneNumber (){
        const clone = {...userData};
        clone.phone = '1-800-KARATE';
        setUserData(clone);
    };

    function typedPhoneNumber (input){
        const clone = {...userData};
        clone.phone = input;
        setUserData(clone);
    };

    function changeName (){
        const clone = {...userData};
        clone.name = 'Chuck Norris';
        setUserData(clone);
    }

    function typedName (input){
        const clone = {...userData};
        clone.name = input;
        setUserData(clone);
    }

    function setToAuthenticated(){
        setAuthStatus({'isAuthenticated': true});
    }

    const buttonStyle = {fontSize: '1.5rem'};

    return (
        <React.Fragment>
            <button onClick={setToAuthenticated} style={buttonStyle}>
                Press to update global state via fetch() call
            </button>
            <div>
                Name: {userData.name}<br/>
                ID: {userData.id}<br/>
                Phone: {userData.phone}<br/>
                Site: {userData.website}
            </div>
            <div>

                <button onClick={changePhoneNumber} style={buttonStyle}>Change ☎️</button>
                <button onClick={changeName} style={buttonStyle}>Become Chuck️</button>
                <input  className='phone-input-box' type='number'
                        onChange={
                            (e) => typedPhoneNumber(parseInt(e.target.value, 10))
                        }/>
                <input  className='name-input-box' type='text'
                        onChange={(e) => typedName(e.target.value)}/>
            </div>
        </React.Fragment>
    );
};

