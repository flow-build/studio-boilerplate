import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { Select } from 'stories/components/Forms/Select';
import { Props } from 'stories/components/Forms/Select/types/Props';

const meta: Meta<Props> = {
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

const Standard = (args: Props) => {
  return <Select {...args} />;
};

export const Primary: Story = {
  render: (args) => <Standard {...args} />
};
