import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { AlertModal } from './index';
import { AlertModalProps } from './types';

const meta: Meta<typeof AlertModal> = {
  title: 'AlertModal',
  component: AlertModal,
  args: {
    alertTitle: 'Titulo do alerta',
    alertText: 'Texto do alerta',
    open: true
  },
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof AlertModal>;

const AlertModalDemo = (args: AlertModalProps) => {
  const [open, setOpen] = useState(args.open);

  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleOpenModal = () => {
    setOpen(true);
  };
  return (
    <div>
      <button onClick={handleOpenModal}>AlertModal</button>
      <AlertModal {...args} onClose={handleCloseModal} open={open}></AlertModal>
    </div>
  );
};

export const Primary: Story = {
  render: (args) => <AlertModalDemo {...args} />
};
