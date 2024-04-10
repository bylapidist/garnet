import React from 'react';
import { describe, expect, test, afterEach } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import Text from './index';

afterEach(cleanup);

const setup = (Component: React.ReactElement) => render(Component);

describe('Text', () => {
    test('it matches snapshot', () => {
        const { container } = setup(<Text>Hello world</Text>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
