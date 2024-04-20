import React from 'react'
import type { Meta } from '@storybook/react';

import Countdown, { TechIcon } from './TechIcon'

// const withProvider = (story: Function) => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof Countdown> = {
    title: 'Components/Core/Icon/TechIcon',
    component: Countdown,
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
    decorators: [
        // withProvider
    ]
};

export default meta;

export const DefaultStory = () => {
    const codes = [
        'xbox',
        'sony'
    ]
    return codes.map((code) => (
        <TechIcon code={code} />
    ))
}