import React from 'react';

const UseRef = () => {
    const [name, setName] = React.useState('');
    const renderCount = React.useRef(0);
    const inputRef = React.useRef();

    React.useEffect(() => {
        renderCount.current++;
    }, [name]);

    return (
        <>
            <input
                value={name}
                ref={inputRef}
                onChange={(e) => setName(e.target.value)}
            />
            <div>My name is {name}</div>
            <div>I rendered {renderCount.current} times</div>
            <button onClick={() => inputRef.current.focus()}>
                Focus input
            </button>
        </>
    );
};

export default UseRef;
