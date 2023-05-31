import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { InputText } from './index';

const meta: Meta<typeof InputText> = {
  title: 'Form/InputText',
  component: InputText,
  args: {
    label: 'Nome',
    name: 'name',
    id: 'name',
    type: 'text'
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof InputText>;

const Standard = (args: any) => {
  const [value, setValue] = React.useState('');
  return (
    <InputText
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      {...args}
    />
  );
};

export const Primary: Story = {
  render: (args) => <Standard {...args} />
};
