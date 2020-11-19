import React from 'react';

import { Container } from '../../components/ModalPost/Container';


const Add = () => {
    const triggerText = 'New Post';
    const onSubmit = (event) => {
        event.preventDefault(event);
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    };
    return (
        <div className="Add">
        <Container triggerText={triggerText} onSubmit={onSubmit} />
        </div>
    );
};

export default Add;
