import React from 'react'
import type { Meta } from '@storybook/react';

import Countdown, { CustomIcon, CustomIconName } from './CustomIcon'

// const withProvider = (story: Function) => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof Countdown> = {
    title: 'Components/Core/Icon/CustomIcon',
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
    const codes:CustomIconName[] = [
        'characters',
        'dialogues',
        'dashboard',
    ]
    
    return codes.map((code: any) => (
        <CustomIcon name={code} />
    ))
}