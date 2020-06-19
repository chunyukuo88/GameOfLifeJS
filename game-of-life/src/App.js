import React from 'react';
import './styles/input.css';
import './styles/styles.css';
import UpperHalf from './components/UpperHalf';
import LowerHalf from './components/LowerHalf';

import { CountContextProvider } from './context/count-context';
import { ThemeContextProvider } from './context/theme-context';
import { UserContextProvider } from "./context/user-context";
import { AuthContextProvider } from "./context/authentication-context";

const App = () => {
  return (
      <AuthContextProvider>
          <ThemeContextProvider>
              <UserContextProvider>
                  <CountContextProvider>
                    <div className='App-wrapper'>
                        <UpperHalf />
                        <LowerHalf />
                    </div>
                  </CountContextProvider>
              </UserContextProvider>
          </ThemeContextProvider>
      </AuthContextProvider>
  );
};

export default App;
