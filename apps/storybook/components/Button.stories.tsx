import * as React from 'react';
import { App, Button } from '@lapidist/garnet-react';
import type { CommonProps, ButtonProps } from '@lapidist/garnet-types';
import type { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Button',
    component: Button,
    decorators: [(getStory) => <App>{getStory()}</App>],
    argTypes: {
        as: {
            options: ['button', 'div'],
            control: { type: 'select' },
        },
        level: {
            options: ['primary', 'secondary', 'tertiary', 'danger'],
            control: { type: 'inline-radio' },
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'inline-radio' },
        },
        block: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
    },
} as Meta;

const defaultArgs: CommonProps<ButtonProps> = {
    as: 'button',
    testId: 'Button',
    level: 'primary',
    size: 'medium',
    disabled: false,
    block: false,
    children: 'Click Me',
};

export const PrimarySmall: StoryObj<CommonProps<ButtonProps>> = {
    args: {
        ...defaultArgs,
        size: 'small',
    },
};

export const PrimaryMedium: StoryObj<CommonProps<ButtonProps>> = {
    args: {
        ...defaultArgs,
        size: 'medium',
    },
};

export const PrimaryLarge: StoryObj<CommonProps<ButtonProps>> = {
    args: {
        ...defaultArgs,
        size: 'large',
    },
};

export const PrimaryDisabled: StoryObj<CommonProps<ButtonProps>> = {
    args: {
        ...defaultArgs,
        disabled: true,
    },
};

export const SecondarySmall: StoryObj<CommonProps<ButtonProps>> = {
    args: {
        ...defaultArgs,
        level: 'secondary',
        size: 'small',
    },
};

export const SecondaryMedium: StoryObj<CommonProps<ButtonProps>> = {
    args: {
        ...defaultArgs,
        level: 'secondary',
        size: 'medium',
    },
};

export const SecondaryLarge: StoryObj<CommonProps<ButtonProps>> = {
    args: {
        ...defaultArgs,
        level: 'secondary',
        size: 'large',
    },
};

export const SecondaryDisabled: StoryObj<CommonProps<ButtonProps>> = {
    args: {
        ...defaultArgs,
        level: 'secondary',
        disabled: true,
    },
};

export const TertiarySmall: StoryObj<CommonProps<ButtonProps>> = {
    args: {
        ...defaultArgs,
        level: 'tertiary',
        size: 'small',
    },
};

export const TertiaryMedium: StoryObj<CommonProps<ButtonProps>> = {
    args: {
        ...defaultArgs,
        level: 'tertiary',
        size: 'medium',
    },
};

export const TertiaryLarge: StoryObj<CommonProps<ButtonProps>> = {
    args: {
        ...defaultArgs,
        level: 'tertiary',
        size: 'large',
    },
};

export const TertiaryDisabled: StoryObj<CommonProps<ButtonProps>> = {
    args: {
        ...defaultArgs,
        level: 'tertiary',
        disabled: true,
    },
};

export const DangerSmall: StoryObj<CommonProps<ButtonProps>> = {
    args: {
        ...defaultArgs,
        level: 'danger',
        size: 'small',
    },
};

export const DangerMedium: StoryObj<CommonProps<ButtonProps>> = {
    args: {
        ...defaultArgs,
        level: 'danger',
        size: 'medium',
    },
};

export const DangerLarge: StoryObj<CommonProps<ButtonProps>> = {
    args: {
        ...defaultArgs,
        level: 'danger',
        size: 'large',
    },
};

export const DangerDisabled: StoryObj<CommonProps<ButtonProps>> = {
    args: {
        ...defaultArgs,
        level: 'danger',
        disabled: true,
    },
};

export const Block: StoryObj<CommonProps<ButtonProps>> = {
    args: {
        ...defaultArgs,
        level: 'primary',
        block: true,
    },
};
