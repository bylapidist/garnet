import React from 'react';
import { AppProps } from '@lapidist/garnet-types';

import '@lapidist/garnet-tokens/core.css';
import '@lapidist/garnet-tokens/light.css';
import '@lapidist/garnet-tokens/dark.css';
import '@lapidist/garnet-styles/global.css';

export default function App({
    theme = 'light',
    children,
}: React.PropsWithChildren<AppProps>) {
    return <div className={`theme-${theme}`}>{children}</div>;
}
