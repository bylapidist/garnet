import * as React from 'react';
import { App, Button } from '@lapidist/garnet-react';
import type { ButtonProps } from '@lapidist/garnet-types';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';

export default {
    title: 'Button',
    component: Button,
    decorators: [(getStory) => <App>{getStory()}</App>],
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;
export const DefaultButton: StoryObj<ButtonProps> = Template.bind({});
DefaultButton.args = {
    type: 'button',
};
