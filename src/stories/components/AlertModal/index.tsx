import { useState } from 'react';

import { Modal } from '../Modal';
import * as S from './styles';
import { AlertModalProps } from './types';

export function AlertModal({ alertTitle, alertText }: AlertModalProps) {
  const [open, setOpen] = useState(true);

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  return (
    <>
      <button onClick={handleOpenModal}>Modal alert</button>
      <Modal title={alertTitle} closeModal={handleCloseModal} open={open}>
        <S.BoxAlert>
          <S.AlertText>{alertText}</S.AlertText>
          <S.IconButton onClick={handleCloseModal}>OK</S.IconButton>
        </S.BoxAlert>
      </Modal>
    </>
  );
}
