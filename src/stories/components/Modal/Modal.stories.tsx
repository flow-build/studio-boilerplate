import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './';
import { ModalProps } from './types';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalDemo = (args: ModalProps) => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpenModal}>
        Open Modal
      </button>
      <Modal title="Title" {...args} closeModal={handleCloseModal} open={open}>
        Teste
      </Modal>
    </div>
  );
};

export const Primary: Story = {
  render: (args) => <ModalDemo {...args} />
};
