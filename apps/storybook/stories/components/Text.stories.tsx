import * as React from 'react';
import { App, Text } from '@lapidist/garnet-react';
import type { CommonProps, TextProps } from '@lapidist/garnet-types';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';

export default {
    title: 'Text',
    component: Text,
    decorators: [(getStory) => <App>{getStory()}</App>],
} as Meta;

const defaultArgs: CommonProps<TextProps> = {
    as: 'p',
    testId: 'Text',
    size: 'medium',
    weight: 'regular',
    family: 'body',
};

const Template: StoryFn<CommonProps<TextProps>> = (args) => (
    <Text {...args}>
        Nunc porttitor lectus ex, eu pharetra elit placerat non. Suspendisse nec
        ultrices augue, et varius velit. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae.
    </Text>
);
export const SmallSize: StoryObj<CommonProps<TextProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        size: 'small',
    },
};

export const MediumSize: StoryObj<CommonProps<TextProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        size: 'medium',
    },
};

export const LargeSize: StoryObj<CommonProps<TextProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        size: 'large',
    },
};

export const RegularWeight: StoryObj<CommonProps<TextProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        weight: 'regular',
    },
};

export const MediumWeight: StoryObj<CommonProps<TextProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        weight: 'medium',
    },
};

export const BoldWeight: StoryObj<CommonProps<TextProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        weight: 'bold',
    },
};

export const BodyFamily: StoryObj<CommonProps<TextProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        family: 'body',
    },
};

export const HeadingFamily: StoryObj<CommonProps<TextProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        family: 'heading',
    },
};

export const SerifFamily: StoryObj<CommonProps<TextProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        family: 'serif',
    },
};

export const MonoFamily: StoryObj<CommonProps<TextProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        family: 'mono',
    },
};
