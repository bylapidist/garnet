import React from 'react';
import cx from 'classnames';
import { CommonProps, TextProps } from '@lapidist/garnet-types';

import styles from '@lapidist/garnet-styles/components/text.module.css';

export default function Text({
    id,
    className,
    as: Component = 'div',
    testId = 'Text',
    size = 'medium',
    family = 'body',
    weight = 'regular',
    ...restProps
}: React.PropsWithChildren<CommonProps<TextProps>>) {
    return (
        <Component
            data-testid={testId}
            id={id}
            className={cx(
                styles.this,
                styles[`size-${size}`],
                styles[`family-${family}`],
                styles[`weight-${weight}`],
                className,
            )}
            {...restProps}
        />
    );
}
