import React from 'react';

const UseState = () => {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    );
};

export default UseState;
