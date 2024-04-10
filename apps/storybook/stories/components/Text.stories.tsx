import * as React from 'react';
import { App, Text } from '@lapidist/garnet-react';
import type { TextProps } from '@lapidist/garnet-types';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';

export default {
    title: 'Text',
    component: Text,
    decorators: [(getStory) => <App>{getStory()}</App>],
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;
export const DefaultText: StoryObj<TextProps> = Template.bind({});
DefaultText.args = {};
