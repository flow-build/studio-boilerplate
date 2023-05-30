import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './';
import { useState } from 'react';
import { CloseReason } from '@mui/material';

import * as S from './styles';

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
      <S.Button type="button" variant="outlined" onClick={handleOpenModal}>
        Open Modal
      </S.Button>
      <Modal title="Title" closeModal={handleCloseModal} open={open} {...args}>
        Teste
      </Modal>
    </div>
  );
};

export const Primary: Story = {
  render: (args) => <ModalDemo {...args} />
};
