import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Button from './index.vue';

describe('Button', () => {
    test('it matches snapshot', () => {
        const wrapper = mount(Button, { props: { type: 'button' } });
        expect(wrapper.html()).toMatchSnapshot();
    });
});
