import React from 'react';

const UseEffect = () => {
    const [resourceType, setResourceType] = React.useState('posts');
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then((response) => response.json())
            .then((json) => setItems(json));
    }, [resourceType]);

    // Another example of useEffect

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            // Clean up function, Which runs first before the next useEffect runs
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>
                    Comments
                </button>
            </div>
            <h1>{resourceType}</h1>
            {items.map((item, index) => {
                return <pre key={index}>{JSON.stringify(item)}</pre>;
            })}

            <h1>{windowWidth}</h1>
        </>
    );
};

export default UseEffect;
