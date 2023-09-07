import { dirname, join } from 'path';

const getAbsolutePath = (value: string): unknown =>
    dirname(require.resolve(join(value, 'package.json')));
export default {
    framework: getAbsolutePath('@storybook/react-vite'),
    stories: [
        '../stories/**/*.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        getAbsolutePath('@storybook/addon-a11y'),
        getAbsolutePath('@storybook/addon-docs'),
        getAbsolutePath('@storybook/addon-links'),
        getAbsolutePath('@storybook/addon-backgrounds'),
        getAbsolutePath('@storybook/addon-controls'),
        getAbsolutePath('@storybook/addon-highlight'),
        getAbsolutePath('@storybook/addon-measure'),
        getAbsolutePath('@storybook/addon-outline'),
        getAbsolutePath('@storybook/addon-toolbars'),
        getAbsolutePath('@storybook/addon-viewport'),
    ],
    docs: {
        defaultName: 'Documentation',
        autodocs: true,
    },
};
