import { JSX, JSXElementConstructor } from 'react';

export type CommonProps<T> = {
    id?: string;
    className?: string;
    as?: keyof JSX.IntrinsicElements | JSXElementConstructor<unknown>;
    testId?: string;
} & T;
