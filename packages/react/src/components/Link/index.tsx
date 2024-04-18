import React from 'react';
import cx from 'classnames';
import { CommonProps, LinkProps } from '@lapidist/garnet-types';

import styles from '@lapidist/garnet-styles/components/link.module.css';
import Text from '../Text';
import Box from '../Box';

export default function Link({
    id,
    className,
    as = 'a',
    testId = 'Link',
    size = 'medium',
    family = 'body',
    weight = 'regular',
    children,
    ...restProps
}: React.PropsWithChildren<CommonProps<LinkProps>>) {
    return (
        <Text
            as={as}
            testId={testId}
            id={id}
            className={cx(styles.this, className)}
            size={size}
            family={family}
            weight={weight}
            {...restProps}
        >
            <Box as="span" testId={`${testId}-inner`} className={styles.inner}>
                {children}
            </Box>
        </Text>
    );
}
