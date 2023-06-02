import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { Meta, StoryObj } from '@storybook/react';

import { AlertModal } from './index';

const meta: Meta<typeof AlertModal> = {
  title: 'AlertModal',
  component: AlertModal,
  args: {
    severity: 'error',
    alertTitle: 'Error',
    alertText: 'Ocorreu um erro',
    variant: 'filled'
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof AlertModal>;

export const Template: Story = {
  render: (args) => <AlertModal {...args} />
};
