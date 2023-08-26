export default {
    framework: '@storybook/react-vite',
    stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-a11y',
        '@storybook/addon-docs',
        '@storybook/addon-links',
        '@storybook/addon-backgrounds',
        '@storybook/addon-controls',
        '@storybook/addon-highlight',
        '@storybook/addon-measure',
        '@storybook/addon-outline',
        '@storybook/addon-toolbars',
        '@storybook/addon-viewport'
    ],
    docs: {
        defaultName: 'Documentation',
        autodocs: true
    }
};
