import { useState } from 'react';

import { CloseReason } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalDemo = (args: any) => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = (value: CloseReason) => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpenModal}>
        Open Modal
      </button>
      <Modal title="Title" closeModal={handleCloseModal} open={open} {...args}>
        Teste
      </Modal>
    </div>
  );
};

export const Primary: Story = {
  render: (args) => <ModalDemo {...args} />
};
