import React from 'react';

const UseCallback = () => {
    const [number, setNumber] = React.useState(1);
    const [dark, setDark] = React.useState(false);

    // const getItems = () => {
    //     return [number, number + 1, number + 2];
    // }; // function is recreated every time the component re-renders

    // useCallback caches the function instance itself unlike useMemo which caches the return value of the function

    const getItems = React.useCallback(() => {
        return [number, number + 1, number + 2];
    }, [number]); // function is only recreated when number changes

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333',
    };

    return (
        <div style={theme}>
            <input
                type='number'
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark((prevDark) => !prevDark)}>
                Toggle theme
            </button>
            <List getItems={getItems} />
        </div>
    );
};

export default UseCallback;

const List = ({ getItems }) => {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        setItems(getItems());
        console.log('Updating items');
    }, [getItems]);

    return items.map((item) => <div key={item}>{item}</div>);
};
