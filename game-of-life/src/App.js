import React from 'react';
import './styles/input.css';
import './styles/styles.css';
import UpperHalf from './components/UpperHalf';
import LowerHalf from './components/LowerHalf';

import { CountContextProvider } from './context/count-context';
import { ThemeContextProvider } from './context/theme-context';
import { FactContextProvider } from "./context/fact-context";

const App = () => {
  return (
      <ThemeContextProvider>
          <FactContextProvider>
              <CountContextProvider>
                <div className='App-wrapper'>
                    <UpperHalf />
                    <LowerHalf />
                </div>
              </CountContextProvider>
          </FactContextProvider>
      </ThemeContextProvider>
  );
};

export default App;
