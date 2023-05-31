import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { InputNumber } from './index';

const meta: Meta<typeof InputNumber> = {
  title: 'Form/InputNumber',
  component: InputNumber,
  args: {
    isInt: false,
    defaultValue: 0
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof InputNumber>;

export const Template: Story = {
  render: (args) => <InputNumber {...args} />
};
