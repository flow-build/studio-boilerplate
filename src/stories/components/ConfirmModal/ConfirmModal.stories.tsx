import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { ConfirmModal } from './index';

const meta: Meta<typeof ConfirmModal> = {
  title: 'ConfirmModal',
  component: ConfirmModal,
  args: {
    Title: 'Titulo',
    Text: 'Deseja aceitar os termos e condições? '
  },
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof ConfirmModal>;

export const Primary: Story = {
  render: (args) => <ConfirmModal {...args} />
};
