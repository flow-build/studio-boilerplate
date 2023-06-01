import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { Props, Select } from 'stories/components/Forms/Select';

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
