import React from 'react'
import type { Meta } from '@storybook/react';

import Countdown from './Countdown'

// const withProvider = (story: Function) => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof Countdown> = {
  title: 'Components/Core/Countdown',
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

export const DefaultStory = () => (
  <Countdown date={new Date(2028, 4, 1)} />
)