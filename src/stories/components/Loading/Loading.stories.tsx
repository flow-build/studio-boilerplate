import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Loading } from './index';

const meta: Meta<typeof Loading> = {
  title: 'Loading',
  component: Loading,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof Loading>;

export const Primary: Story = {
  render: (args) => <Loading {...args} size={200} />
};
