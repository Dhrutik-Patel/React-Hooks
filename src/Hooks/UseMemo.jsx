import React, { useEffect } from 'react';

const slowFunction = (num) => {
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
};

const UseMemo = () => {
    const [number, setNumber] = React.useState(0);
    const [dark, setDark] = React.useState(false);

    // const doubleNumber = slowFunction(number);
    const doubleNumber = React.useMemo(() => {
        return slowFunction(number); // slowFunction will only run when number changes, not on every re-render
    }, [number]);

    const themeStyles = React.useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black',
        };
    }, [dark]);

    useEffect(() => {
        console.log('Theme changed');
    }, [themeStyles]);

    return (
        <>
            <input
                type='number'
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark((prevDark) => !prevDark)}>
                Change Theme
            </button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    );
};

export default UseMemo;
