import React from 'react';
import { describe, expect, test, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Button from './index';

afterEach(cleanup);

const setup = (Component: React.ReactElement) => render(Component);

describe('Button', () => {
    test('it matches snapshot', () => {
        const { container } = setup(<Button />);
        expect(screen.getByRole('button')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });
});
