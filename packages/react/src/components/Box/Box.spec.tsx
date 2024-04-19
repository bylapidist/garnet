import React from 'react';
import { describe, expect, test, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Box from './index';
import { NullableSize } from '@lapidist/garnet-types/common';

afterEach(cleanup);

const setup = (Component: React.ReactElement) => render(Component);

const sizes: NullableSize[] = ['none', 'small', 'medium', 'large'];

describe('Box', () => {
    test('it matches snapshot', () => {
        const { container } = setup(<Box>Hello world</Box>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(sizes)('it works with gutters', (gutter) => {
        const { container } = setup(<Box gutter={gutter}>Hello world</Box>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(sizes)('it works with elevations', (elevation) => {
        const { container } = setup(
            <Box elevation={elevation}>Hello world</Box>,
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(sizes)('it works with roundness', (roundness) => {
        const { container } = setup(
            <Box roundness={roundness}>Hello world</Box>,
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    test('it works with default testId', () => {
        setup(<Box gutter={sizes[0]}>Hello world</Box>);
        expect(screen.getByTestId('Box')).toBeTruthy();
    });

    test('it works with specified testId', () => {
        setup(
            <Box gutter={sizes[0]} testId={'TestId'}>
                Hello world
            </Box>,
        );
        expect(screen.getByTestId('TestId')).toBeTruthy();
    });

    test('it works with as', () => {
        setup(
            <Box gutter={sizes[0]} as="span">
                Hello world
            </Box>,
        );
        expect(screen.getByTestId('Box').nodeName).toBe('SPAN');
    });

    test('it works with className', () => {
        setup(
            <Box gutter={sizes[0]} className="test">
                Hello world
            </Box>,
        );
        expect(
            screen.getByTestId('Box').classList.contains('test'),
        ).toBeTruthy();
    });
});
