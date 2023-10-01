import React from 'react';

const UseTransition = () => {
    const [isPending, startTransition] = React.useTransition();
    const [input, setInput] = React.useState('');
    const [list, setList] = React.useState([]);

    const LIST_SIZE = 20000;

    const handleChange = (e) => {
        setInput(e.target.value);

        // startTransition is used to delay the update of the list, so the UI doesn't freeze.
        // High priority updates are not delayed. and low priority updates are delayed.

        startTransition(() => {
            const newList = [];
            for (let i = 0; i < LIST_SIZE; i++) {
                newList.push(e.target.value);
            }
            setList(newList);
        });

        // const newList = [];
        // for (let i = 0; i < LIST_SIZE; i++) {
        //     newList.push(e.target.value);
        // }
        // setList(newList);
    };

    return (
        <>
            <input value={input} onChange={handleChange} />
            {isPending ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default UseTransition;
