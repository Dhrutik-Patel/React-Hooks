import React from 'react';
import useLocalStorage from '../CustomHooks/useLocalStorage.js';

const UseDebugValue = () => {
    const [firstName, setFirstName] = useLocalStorage(
        'firstName',
        'Dhrutik Patel'
    );
    const [lastName, setLastName] = React.useState('');

    // React.useDebugValue(firstName, (name) => {
    //     return name.toUpperCase();
    // });

    return (
        <>
            <input
                type='text'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <h1>First Name: {firstName}</h1>
            <h1>Last Name: {lastName}</h1>
        </>
    );
};

export default UseDebugValue;
