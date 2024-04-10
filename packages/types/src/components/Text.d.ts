export type TextSize = 'small' | 'medium' | 'large';
export type TextFamily = 'body' | 'heading' | 'serif' | 'mono';
export type TextWeight = 'regular' | 'medium' | 'bold';

export interface TextProps {
    size?: TextSize;
    family?: TextFamily;
    weight?: TextWeight;
}
