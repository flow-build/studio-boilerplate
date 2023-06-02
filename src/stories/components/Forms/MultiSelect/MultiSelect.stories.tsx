import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { Props, MultiSelect } from 'stories/components/Forms/MultiSelect';

const meta: Meta<Props> = {
  title: 'Form/MultiSelect',
  component: MultiSelect,
  args: {
    label: 'Label',
    options: [
      { label: 'Opção 1', value: 1 },
      { label: 'Opção 2', value: 2 },
      { label: 'Opção 3', value: 3 }
    ],
    helperText: 'Helper text'
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof MultiSelect>;

const Standard = (args: Props) => {
  return <MultiSelect {...args} />;
};

export const Primary: Story = {
  render: (args) => <Standard {...args} />
};
