import React from 'react';
import './styles/input.css';
import './styles/styles.css';
import UpperHalf from './components/UpperHalf';
import LowerHalf from './components/LowerHalf';
import { CountContextProvider } from './context/count-context';

const App = () => {
  return (
      <CountContextProvider>
        <div className='App-wrapper'>
            <UpperHalf />
            <LowerHalf />
        </div>
      </CountContextProvider>

  );
}

export default App;
