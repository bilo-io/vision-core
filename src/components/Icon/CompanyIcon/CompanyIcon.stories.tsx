import React from 'react'
import type { Meta } from '@storybook/react';

import Countdown, { CompanyIcon } from './CompanyIcon'

// const withProvider = (story: Function) => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof Countdown> = {
    title: 'Components/Core/Icon/CompanyIcon',
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
        <CompanyIcon code={code} />
    ))
}