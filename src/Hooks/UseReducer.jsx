import React from 'react';

const initialState = {
    count: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            throw new Error("Don't understand action");
    }
};

const UseReducer = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>
                + Increment
            </button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>
                - Decrement
            </button>
        </>
    );
};

export default UseReducer;
