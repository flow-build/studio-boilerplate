import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { Select } from 'stories/components/Forms/Select';
import { SelectProps } from 'stories/components/Forms/Select/types';

const meta: Meta<SelectProps> = {
  title: 'Form/Select',
  component: Select,
  args: {
    label: 'Label',
    options: [{ label: 'Teste', value: 10 }],
    helperText: 'Helper text'
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Select>;

const Standard = (args: SelectProps) => {
  return <Select {...args} />;
};

export const Primary: Story = {
  render: (args) => <Standard {...args} />
};
