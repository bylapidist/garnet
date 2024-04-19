import { LevelProps, SizeProps } from '../common';

export type ButtonProps = {
    block?: boolean;
    disabled?: boolean;
} & LevelProps &
    SizeProps;
