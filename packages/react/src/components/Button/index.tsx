import React from 'react';
import { ButtonProps } from '@lapidist/garnet-types';

const Button = (props: ButtonProps) => {
    return <button type={props.type}>hi</button>;
};

export default Button;
