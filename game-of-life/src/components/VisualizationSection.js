import React, { useContext } from 'react';
import { UserContext } from "../context/user-context";

export default function EntrySection(){
    const [ userData, setUserData ] = useContext(UserContext);

    const changePhoneNumber = () => setUserData({'phone' : '1-800-FLOWERS'});
    const changeId = () => setUserData({'id' : '2'}, console.log(`Phone: ${userData.id}`));
    const buttonStyle = {
        fontSize: '4rem'
    }

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

