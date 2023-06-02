import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from 'stories/components/Forms/Checkbox';
import { CheckboxProps } from 'stories/components/Forms/Checkbox/types';

const meta: Meta<CheckboxProps> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    label: 'Label'
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

const Standard = (args: CheckboxProps) => {
  return <Checkbox {...args} />;
};

export const Primary: Story = {
  render: (args) => <Standard {...args} />
};
