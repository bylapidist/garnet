import React from 'react';

export interface ButtonProps {
    type: 'button' | 'submit';
}

const Button = (props: ButtonProps) => {
    return <button type={props.type}>hi</button>;
};

export default Button;
