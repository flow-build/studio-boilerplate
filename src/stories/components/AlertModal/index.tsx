import { useState } from 'react';

import { Alert, AlertTitle } from '@mui/material';

import { Modal } from '../Modal';
import { AlertModalProps } from './types';

export function AlertModal({
  severity,
  alertTitle,
  alertText,
  icon,
  variant,
  color
}: AlertModalProps) {
  const [open, setOpen] = useState(false);

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  return (
    <>
      <button type="button" onClick={handleOpenModal}>
        Erro
      </button>
      <Modal closeModal={handleCloseModal} open={open}>
        <Alert icon={icon} severity={severity} variant={variant} color={color}>
          <AlertTitle>{alertTitle}</AlertTitle>
          {alertText}
        </Alert>
      </Modal>
    </>
  );
}
