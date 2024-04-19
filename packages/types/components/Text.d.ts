import { SizeProps } from '../common';

export type TextFamily = 'body' | 'heading' | 'serif' | 'mono';
export type TextWeight = 'regular' | 'medium' | 'bold';

export type TextProps = {
    family?: TextFamily;
    weight?: TextWeight;
} & SizeProps;
