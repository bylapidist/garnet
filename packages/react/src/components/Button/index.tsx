import React from 'react';
import { ButtonProps } from '@lapidist/garnet-types';

import styles from '@lapidist/garnet-styles/components/button.module.css';

export default function Button(props: React.PropsWithChildren<ButtonProps>) {
    return (
        <button className={styles.button} type={props.type}>
            hello
        </button>
    );
}
