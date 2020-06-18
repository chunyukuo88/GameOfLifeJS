import React, { useContext } from 'react';
import { UserContext } from "../context/user-context";

export default function EntrySection(){
    const [ userData, setUserData ] = useContext(UserContext);

    function changePhoneNumber (){
        const clone = {...userData};
        clone.phone = '123';
        setUserData(clone);
    };

    function changeId (){
        const clone = {...userData};
        clone.id = 'Forgot it at the pool, sorry';
        setUserData(clone);
    }



    const buttonStyle = {
        fontSize: '4rem'
    }
    console.log(JSON.stringify(userData));

    return (
        <React.Fragment>
                <h1>Global state taken from a fetch call⮕</h1>
                <div>
                    Name: {userData.name}<br/>
                    ID: {userData.id}<br/>
                    Phone: {userData.phone}<br/>
                    Site: {userData.website}
                </div>
                <button style={buttonStyle} onClick={changePhoneNumber}>Change ☎️</button>
                <button style={buttonStyle} onClick={changeId}>Change ID️</button>
        </React.Fragment>
    );
};

