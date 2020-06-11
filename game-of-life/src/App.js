import React from 'react';

import './styles/input.css';
import './styles/styles.css';
import UpperHalf from './components/UpperHalf';
import LowerHalf from "./components/LowerHalf";

const App = () => {
  return (
    <div className='App-wrapper'>
        <UpperHalf />
        <LowerHalf />
    </div>
  );
}

export default App;
