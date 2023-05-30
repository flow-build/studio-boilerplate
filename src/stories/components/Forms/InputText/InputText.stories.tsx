import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { InputText } from './index';

const meta: Meta<typeof InputText> = {
  title: 'Components/InputText',
  component: InputText,
  args: {
    label: 'Nome',
    name: 'name',
    id: 'name',
    type: 'text',
    colorIcon: '#949494'
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof InputText>;

const Standart = (args) => {
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
  render: (args) => <Standart {...args} />
};

export const Password: Story = {
  render: (args) => <Standart {...args} type="password" label="Senha" />
};

export const Mask: Story = {
  render: (args) => <Standart {...args} type="text" label="Telefone" maskType="phone" />
};

export const IconStart: Story = {
  render: (args) => <Standart {...args} type="text" label="nome" position="start" />
};

export const IconEnd: Story = {
  render: (args) => <Standart {...args} type="text" label="nome" position="end" />
};
