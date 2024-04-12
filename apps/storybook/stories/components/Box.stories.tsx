import * as React from 'react';
import { App, Box, Text } from '@lapidist/garnet-react';
import type { CommonProps, BoxProps, TextProps } from '@lapidist/garnet-types';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';

export default {
    title: 'Box',
    component: Box,
    decorators: [(getStory) => <App>{getStory()}</App>],
    argTypes: {
        as: {
            options: ['p', 'div', 'span'],
            control: { type: 'select' },
        },
        gutter: {
            options: ['none', 'small', 'medium', 'large'],
            control: { type: 'inline-radio' },
        },
        elevation: {
            options: ['none', 'small', 'medium', 'large'],
            control: { type: 'inline-radio' },
        },
        roundness: {
            options: ['none', 'small', 'medium', 'large'],
            control: { type: 'inline-radio' },
        },
    },
} as Meta;

const defaultArgs: CommonProps<BoxProps> = {
    as: 'div',
    testId: 'Box',
    gutter: undefined,
    elevation: undefined,
    roundness: undefined,
};

const Template: StoryFn<CommonProps<BoxProps>> = (args) => (
    <Box {...args}>
        <Text>
            Nunc porttitor lectus ex, eu pharetra elit placerat non. Suspendisse
            nec ultrices augue, et varius velit. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
        </Text>
    </Box>
);

export const NoGutter: StoryObj<CommonProps<TextProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        elevation: 'small',
    },
};

export const SmallGutter: StoryObj<CommonProps<TextProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        gutter: 'small',
        elevation: 'small',
    },
};

export const MediumGutter: StoryObj<CommonProps<TextProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        gutter: 'medium',
        elevation: 'small',
    },
};

export const LargeGutter: StoryObj<CommonProps<TextProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        gutter: 'large',
        elevation: 'small',
    },
};

export const NoElevation: StoryObj<CommonProps<TextProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        gutter: 'medium',
        elevation: 'none',
    },
};

export const SmallElevation: StoryObj<CommonProps<TextProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        elevation: 'small',
        gutter: 'medium',
    },
};

export const MediumElevation: StoryObj<CommonProps<TextProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        elevation: 'medium',
        gutter: 'medium',
    },
};

export const LargeElevation: StoryObj<CommonProps<TextProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        elevation: 'large',
        gutter: 'medium',
    },
};

export const NoRoundness: StoryObj<CommonProps<TextProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        gutter: 'medium',
        elevation: 'medium',
        roundness: 'none',
    },
};

export const SmallRoundness: StoryObj<CommonProps<TextProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        gutter: 'medium',
        elevation: 'medium',
        roundness: 'small',
    },
};

export const MediumRoundness: StoryObj<CommonProps<TextProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        gutter: 'medium',
        elevation: 'medium',
        roundness: 'medium',
    },
};

export const LargeRoundness: StoryObj<CommonProps<TextProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        gutter: 'medium',
        elevation: 'medium',
        roundness: 'large',
    },
};
