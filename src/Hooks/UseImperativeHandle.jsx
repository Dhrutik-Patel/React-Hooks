import React from 'react';

const UseImperativeHandle = () => {
    const [value, setValue] = React.useState('red');
    const inputRef = React.useRef();

    const handleFocus = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <CustomInput ref={inputRef} value={value} onChange={setValue} />
            <br />
            <button onClick={handleFocus}>Focus</button>
        </>
    );
};

const CustomInput = React.forwardRef((props, ref) => {
    // React.useImperativeHandle(
    //     ref,
    //     () => {
    //         return {
    //             customFocus: () => {
    //                 ref.current.style.border = '2px solid red';
    //                 ref.current.focus();
    //             },
    //         };
    //     },
    //     []
    // );

    return (
        <input
            ref={ref}
            {...props}
            style={{
                fontSize: '2rem',
                padding: '1rem',
                border: '1px solid black',
                borderRadius: '5px',
                outline: 'none',
            }}
        />
    );
});

export default UseImperativeHandle;
