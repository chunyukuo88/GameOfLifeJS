import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const initialState = {
    isThemeSetToDark: false
};

export const ThemeContextProvider = props => {
    const [theme, setTheme] = useState(initialState);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
};

