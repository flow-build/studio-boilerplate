import { ReactNode } from 'react';

import { DialogProps } from '@mui/material';

export interface ModalProps extends DialogProps {
  closeModal: () => void;
  title?: string;
  children: ReactNode;
}
