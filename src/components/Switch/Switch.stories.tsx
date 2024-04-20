import React from 'react'
import type { Meta } from '@storybook/react';

import Switch from './Switch'

// const withProvider = (story: Function) => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof Switch> = {
    title: 'Components/Core/Switch',
    component: Switch,
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
    decorators: [
        // withProvider
    ]
};

export default meta;

export const DefaultStory = () => (
    [
        <Switch onChange={function (checked: boolean): void {
            throw new Error('Function not implemented.');
        } } />,
        <Switch onChange={function (checked: boolean): void {
            throw new Error('Function not implemented.');
        } } />,
    ]
)