import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { Props, Select } from 'stories/components/Forms/Select';

const meta: Meta<typeof Select> = {
  title: 'Form/Select',
  component: Select,
  args: {
    options: [{ label: 'Teste', value: 10 }]
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
