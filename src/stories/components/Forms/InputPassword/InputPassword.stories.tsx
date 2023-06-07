import type { Meta, StoryObj } from '@storybook/react';

import { InputPassword } from './';

const meta: Meta<typeof InputPassword> = {
  title: 'Form/InputPassword',
  component: InputPassword,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof InputPassword>;

export const Primary: Story = {
  args: {
    label: 'Senha',
    name: 'password',
    id: 'password'
  }
};
