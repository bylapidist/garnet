import React from 'react';
import { TextProps } from '@lapidist/garnet-types';

import styles from '@lapidist/garnet-styles/components/text.module.css';

export default function Text(props: React.PropsWithChildren<TextProps>) {
    return <p className={styles.text}>{JSON.stringify(props)}</p>;
}
