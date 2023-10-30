import React from 'react';
import { AppProps } from '@lapidist/garnet-types';

import '@lapidist/garnet-tokens/dist/core.css';
import '@lapidist/garnet-tokens/dist/light.css';
import '@lapidist/garnet-tokens/dist/dark.css';
import '@lapidist/garnet-styles/dist/global.css';

const App = ({
    theme = 'light',
    children,
}: React.PropsWithChildren<AppProps>) => (
    <div className={`theme-${theme}`}>{children}</div>
);

export default App;
