import React from 'react';

const initialState = {
    cart: [],
};

const reducer = (state, action) => {
    // All of our actions will be handled here
};

const AppContext = React.createContext();

const GlobalContext = ({ children }) => {
    const [user, setUser] = React.useState(null);
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const addToCart = (productId) => {
        dispatch({ type: 'ADD_TO_CART', payload: productId });
    };

    const removeFromCart = (productId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    };

    const emptyCart = () => {
        dispatch({ type: 'EMPTY_CART' });
    };

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    };

    const login = () => {
        setUser({ id: 1, username: 'bob' });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <>
            <AppContext.Provider
                value={{
                    user,
                    isDarkTheme,
                    toggleTheme,
                    login,
                    logout,
                    state,
                    addToCart,
                    removeFromCart,
                    emptyCart,
                }}
            >
                <h1>Global Context</h1>
                <div>
                    {user ? (
                        <button onClick={logout}>Logout</button>
                    ) : (
                        <button onClick={login}>Login</button>
                    )}
                    <button onClick={toggleTheme}>Toggle Theme</button>
                </div>
                {children}
            </AppContext.Provider>
        </>
    );
};

export const useGlobalContext = () => {
    const context = React.useContext(AppContext);

    if (context === undefined) {
        throw new Error(
            'useGlobalContext must be used within a AppContext.Provider'
        );
    }

    return context;
};

export default GlobalContext;
