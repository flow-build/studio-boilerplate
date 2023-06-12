import { Box, styled } from '@mui/material';
import { spacing } from 'theme/spacing';

import { Button } from '../Forms/Button';
import { Modal } from '../Modal';

export const ConfirmButton = styled(Button)`
  margin: ${spacing.S5};
`;
export const CancelButton = styled(Button)`
  margin: ${spacing.S5};
`;

export const BoxConfirm = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${spacing.S16};
  justify-content: space-between;
`;

export const BoxModal = styled(Modal)`
  max-width: 25rem;
  margin: auto;
`;

export const BoxButton = styled(Box)`
  padding: ${spacing.S1};
`;
