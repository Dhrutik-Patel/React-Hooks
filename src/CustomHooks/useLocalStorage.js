import React from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = React.useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    // React.useDebugValue(storedValue, (name) => {
    //     return name.toUpperCase();
    // }); // useDebugValue hook is used to display a label for custom hooks in React DevTools.

    const setValue = (value) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue];
};

export default useLocalStorage;
