import React from 'react';
import Testing from './Testing';

const ThemeContext = React.createContext();

const UseContext = () => {
    const [isDarkTheme, setIsDarkTheme] = React.useState(true);

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    };

    return (
        <>
            <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <Testing />
            </ThemeContext.Provider>
        </>
    );
};

export const useThemeContext = () => {
    const context = React.useContext(ThemeContext);

    if (context === undefined) {
        throw new Error(
            'useThemeContext must be used within a ThemeContext.Provider'
        );
    }

    return context;
};

export default UseContext;
