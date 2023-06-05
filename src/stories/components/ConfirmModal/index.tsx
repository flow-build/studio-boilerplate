import { useState } from 'react';

import * as S from './styles';
import { ConfirmModalProps } from './types';

export function ConfirmModal({ Title, Text, Confirm }: ConfirmModalProps) {
  const [open, setOpen] = useState(true);

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <S.BoxModal title={Title} closeModal={handleCloseModal} open={open}>
      <S.BoxConfirm>
        {Text}
        <S.BoxButton>
          <S.IconButton onClick={Confirm} variant="outlined">
            Confirmar
          </S.IconButton>
          <S.IconButton onClick={handleCloseModal} variant="outlined">
            Cancelar
          </S.IconButton>
        </S.BoxButton>
      </S.BoxConfirm>
    </S.BoxModal>
  );
}
