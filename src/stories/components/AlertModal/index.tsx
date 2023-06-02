import { useState } from 'react';

import * as S from './styles';
import { AlertModalProps } from './types';

export function AlertModal({ alertTitle, alertText }: AlertModalProps) {
  const [open, setOpen] = useState(true);

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <S.BoxModal title={alertTitle} closeModal={handleCloseModal} open={open}>
      <S.BoxAlert>
        {alertText}
        <S.IconButton onClick={handleCloseModal} variant="outlined">
          OK
        </S.IconButton>
      </S.BoxAlert>
    </S.BoxModal>
  );
}