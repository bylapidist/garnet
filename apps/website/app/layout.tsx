import React from 'react';
import { App } from '@lapidist/garnet-react';
import '@lapidist/garnet-react/style.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <App>{children}</App>
        </html>
    );
}
