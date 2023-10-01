import React from 'react';

const UseDeferredValue = () => {
    const [input, setInput] = React.useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <>
            <input type='text' value={input} onChange={handleChange} />
            <List input={input} />
        </>
    );
};

export default UseDeferredValue;

const List = ({ input }) => {
    const LIST_SIZE = 20000;
    const deferredInput = React.useDeferredValue(input); // useDeferredValue is just like debounce and throttle, it will wait for the input to stop changing before updating the value

    const list = React.useMemo(() => {
        const list = [];
        for (let i = 0; i < LIST_SIZE; i++) {
            list.push(deferredInput);
        }
        return list;
    }, [deferredInput]);

    return (
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};
