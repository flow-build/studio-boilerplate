import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { AlertModal } from './index';

const meta: Meta<typeof AlertModal> = {
  title: 'AlertModal',
  component: AlertModal,
  args: {
    alertTitle: 'Titulo do alerta',
    alertText: 'Texto do alerta'
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof AlertModal>;

export const Template: Story = {
  render: (args) => <AlertModal {...args} />
};
