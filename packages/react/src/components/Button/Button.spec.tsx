import React from 'react';
import { describe, expect, test, afterEach, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Button from './index';
import { Size, Level } from '@lapidist/garnet-types/common';

afterEach(cleanup);

const setup = (Component: React.ReactElement) => render(Component);

const sizes: Size[] = ['small', 'medium', 'large'];
const levels: Level[] = ['primary', 'secondary', 'tertiary', 'danger'];

describe('Button', () => {
    test('it works with defaults', () => {
        const { container } = setup(<Button>Hello world</Button>);
        expect(screen.getByRole('button')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(sizes)('it works with sizes', (size) => {
        const { container } = setup(<Button size={size}>Hello world</Button>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(levels)('it works with levels', (level) => {
        const { container } = setup(<Button level={level}>Hello world</Button>);
        expect(container.firstChild).toMatchSnapshot();
    });

    // test('it works with icon', () => {
    //     const { container } = setup(
    //         <Button icon={faXmark}>Hello world</Button>
    //     );
    //     expect(container.firstChild).toMatchSnapshot();
    // });

    test('it works disabled', () => {
        const { container } = setup(<Button disabled>Hello world</Button>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test('it works block', () => {
        const { container } = setup(<Button block>Hello world</Button>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test('it works with default testId', () => {
        setup(<Button>Hello world</Button>);
        expect(screen.getByTestId('Button')).toBeTruthy();
    });

    test('it works with default testId', () => {
        setup(<Button>Hello world</Button>);
        expect(screen.getByTestId('Button')).toBeTruthy();
    });

    test('it works with specified testId', () => {
        setup(<Button testId={'TestId'}>Hello world</Button>);
        expect(screen.getByTestId('TestId')).toBeTruthy();
    });

    test('it works with as', () => {
        setup(<Button as="span">Hello world</Button>);
        expect(screen.getByTestId('Button').nodeName).toBe('SPAN');
    });

    test('it works with native button props', () => {
        const handleOnClick = vi.fn();
        const { getByRole } = setup(<Button onClick={handleOnClick} />);
        fireEvent.click(getByRole('button'));
        expect(handleOnClick).toHaveBeenCalledOnce();
    });

    test('it works with className', () => {
        setup(<Button className="test">Hello world</Button>);
        expect(
            screen.getByTestId('Button').classList.contains('test'),
        ).toBeTruthy();
    });
});
