import React, { useContext } from 'react';
import { UserContext } from "../context/user-context";


export default function EntrySection(){
  const [ userData, setUserData ] = useContext(UserContext);

  const changeFact = () => setUserData({'first-name': 'Mr. Bean'});
  const restoreFact = () => setUserData({'first-name': 'Rowan',
                                         'last-name': 'Atkinson'});


  return (
      <section className='visualization-section'>
        <button onClick={changeFact}>Change the global user</button>
        <button onClick={restoreFact}>Restore the global user</button>
        <input  type='text'
                onChange={
                  (e) => setUserData({first: e.target.value})
                }
                value={userData.first}
        />
        <p>First name: {userData['first-name']}</p>
        <p>Last name:  {userData['last-name']}</p>
        {/*<p>Company:    {userData.company.name}</p>*/}
      </section>
  );
};

