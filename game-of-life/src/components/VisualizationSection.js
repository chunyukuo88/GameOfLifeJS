import React, { useContext } from 'react';
import { UserContext } from "../context/user-context";

export default function EntrySection(){
    const [ userData, setUserData ] = useContext(UserContext);

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

    const buttonStyle = {fontSize: '1.7rem'};
    const someWhiteSpace = {
        'padding' : '2px',
        'border': '2px',
        'margin': '2px'};
    return (
        <React.Fragment >
                <h1>Global state from a fetch call⮕</h1>
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

