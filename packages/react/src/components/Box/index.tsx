import React from 'react';
import cx from 'classnames';
import { CommonProps, BoxProps } from '@lapidist/garnet-types';

import styles from '@lapidist/garnet-styles/components/box.module.css';

export default function Box({
    id,
    className,
    as: Component = 'div',
    testId = 'Box',
    elevation = 'none',
    gutter = 'none',
    roundness = 'none',
    ...restProps
}: React.PropsWithChildren<CommonProps<BoxProps>>) {
    return (
        <Component
            data-testid={testId}
            id={id}
            className={cx(
                styles[`elevation-${elevation}`],
                styles[`roundness-${roundness}`],
                styles[`gutter-${gutter}`],
                className,
            )}
            {...restProps}
        />
    );
}
