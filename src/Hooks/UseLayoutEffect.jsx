import React, { useEffect } from 'react';

const UseLayoutEffect = () => {
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        console.log('useEffect: ', count);
    }, [count]);

    // useLayoutEffect is called before the browser paints the screen.
    // It's useful for measuring elements on the screen.

    React.useLayoutEffect(() => {
        console.log('useLayoutEffect: ', count);
    }, [count]);
    // It's not recommended to use it, because it blocks the browser from painting the screen.
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    );
};

export default UseLayoutEffect;
