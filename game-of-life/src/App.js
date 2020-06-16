import React from 'react';
import './styles/input.css';
import './styles/styles.css';
import UpperHalf from './components/UpperHalf';
import LowerHalf from './components/LowerHalf';
import { CountContextProvider } from './context/count-context';
import {ThemeContextProvider} from "./context/theme-context";

const App = () => {
  return (
      <ThemeContextProvider>
          <CountContextProvider>
            <div className='App-wrapper'>
                <UpperHalf />
                <LowerHalf />
            </div>
          </CountContextProvider>
      </ThemeContextProvider>
  );
};

export default App;
