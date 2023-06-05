import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { ConfirmModal } from './index';
import { ConfirmModalProps } from './types';

const meta: Meta<typeof ConfirmModal> = {
  title: 'ConfirmModal',
  component: ConfirmModal,
  args: {
    title: 'Titulo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor a urna et sollicitudin.',
    open: true
  },
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof ConfirmModal>;

const ConfirmModalDemo = (args: ConfirmModalProps) => {
  const [open, setOpen] = useState(args.open);

  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleOpenModal = () => {
    setOpen(true);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>ConfirmModal</button>
      <ConfirmModal {...args} open={open} onConfirm={handleCloseModal}></ConfirmModal>
    </div>
  );
};

export const Primary: Story = {
  render: (args) => <ConfirmModalDemo {...args} />
};
