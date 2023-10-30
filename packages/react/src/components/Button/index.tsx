import React from 'react';
import { ButtonProps } from '@lapidist/garnet-types';

import styles from '@lapidist/garnet-styles/dist/components/button.module.css';

const Button = (props: React.PropsWithChildren<ButtonProps>) => {
    return (
        <button className={styles.button} type={props.type}>
            hello
        </button>
    );
};

export default Button;
