import { DialogProps } from '@mui/material';
import { ReactNode } from 'react';

export interface ModalProps extends DialogProps {
  closeModal: () => void;
  title?: string;
  children: ReactNode;
}
