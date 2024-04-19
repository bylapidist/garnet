import * as React from 'react';
import { App, Link } from '@lapidist/garnet-react';
import type { CommonProps, LinkProps } from '@lapidist/garnet-types';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
    title: 'Link',
    component: Link,
    decorators: [(getStory) => <App>{getStory()}</App>],
    argTypes: {
        as: {
            options: ['a', 'span'],
            control: { type: 'select' },
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'inline-radio' },
        },
        weight: {
            options: ['regular', 'medium', 'bold'],
            control: { type: 'inline-radio' },
        },
        family: {
            options: ['body', 'heading', 'serif', 'mono'],
            control: { type: 'inline-radio' },
        },
    },
} as Meta;

const defaultArgs: CommonProps<LinkProps> = {
    as: 'a',
    testId: 'Link',
    href: 'javascript:void',
    size: 'medium',
    weight: 'regular',
    family: 'body',
};

const Template: StoryFn<CommonProps<LinkProps>> = (args) => (
    <Link {...args}>Hello world</Link>
);

export const Small: StoryObj<CommonProps<LinkProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        size: 'small',
    },
};

export const Medium: StoryObj<CommonProps<LinkProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        size: 'medium',
    },
};

export const Large: StoryObj<CommonProps<LinkProps>> = {
    render: Template,

    args: {
        ...defaultArgs,
        size: 'large',
    },
};
