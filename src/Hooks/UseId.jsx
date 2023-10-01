import React from 'react';

const UseId = () => {
    return (
        <>
            <EmailForm />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, ullam totam. Adipisci tempore iusto sequi numquam
                neque facilis, sunt pariatur esse nostrum corporis labore
                voluptatem, illo aut maiores perferendis architecto perspiciatis
                ipsam animi. Hic ad placeat maxime modi animi odit sint velit,
                expedita similique aliquam veritatis enim consectetur eius
                inventore sapiente quaerat eos doloribus magni nulla in vero
                sequi! Voluptatem nesciunt minima inventore voluptate possimus
                magni rerum dolores dolore doloremque ab esse a cumque nulla
                explicabo labore consectetur velit cupiditate deleniti, maxime
                quo? Voluptas, temporibus eaque. Doloremque atque, unde beatae,
                eum modi doloribus accusamus deserunt, eaque dolore veritatis
                sapiente totam!
            </p>
            <EmailForm />

            {/* Problem: Since we have two inputs with the same id, If we click on the label of the second input, It will focus on the first input. */}

            {/* Solution: useId */}
        </>
    );
};

export default UseId;

const EmailForm = () => {
    const id = React.useId(); // This will generate a unique id for each input.

    return (
        <>
            <label htmlFor={id}>Email</label>
            <input type='email' id={id} />
        </>
    );
};
