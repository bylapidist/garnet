import React from 'react';
import cx from 'classnames';
import { CommonProps, ButtonProps } from '@lapidist/garnet-types';

import styles from '@lapidist/garnet-styles/components/button.module.css';

import Text from '../Text';
import Box from '../Box';

export default function Button({
    id,
    className,
    as = 'button',
    testId = 'Button',
    level = 'primary',
    size = 'medium',
    block = false,
    children,
    ...restProps
}: React.PropsWithChildren<CommonProps<ButtonProps>>) {
    return (
        <Text
            as={as}
            testId={testId}
            id={id}
            size={size}
            weight="medium"
            className={cx(styles.this, { [styles.block]: block }, className)}
            {...restProps}
        >
            <Box
                as="span"
                gutter={size}
                elevation="medium"
                testId={`${testId}-inner`}
                className={cx(styles.inner, styles[`level-${level}`])}
            >
                {children}
            </Box>
        </Text>
    );
}
