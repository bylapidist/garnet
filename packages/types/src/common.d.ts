import { JSX, JSXElementConstructor } from 'react';

export type Level = 'primary' | 'secondary' | 'tertiary' | 'danger';

export type Size = 'small' | 'medium' | 'large';

export type NullableSize = 'none' | Size;

export type LevelProps<T> = {
    level?: Level;
} & T;

export type SizeProps<T> = {
    size?: Size;
} & T;

export type CommonProps<T> = {
    id?: string;
    className?: string;
    as?: keyof JSX.IntrinsicElements | JSXElementConstructor<unknown>;
    testId?: string;
} & T;
