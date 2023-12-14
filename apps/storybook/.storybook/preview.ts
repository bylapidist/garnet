import '@lapidist/garnet-tokens/dist/core.css';
import '@lapidist/garnet-tokens/dist/light.css';
import '@lapidist/garnet-tokens/dist/dark.css';
import '@lapidist/garnet-react/style.css';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
