import { Box, styled } from '@mui/material';
import { spacing } from 'theme/spacing';

import { Button } from '../Forms/Button';
import { Modal } from '../Modal';

export const IconButton = styled(Button)`
  color: ${({ theme }) => theme.palette.text.primary};
  border-color: ${({ theme }) => theme.palette.grey[500]};
  &:hover {
    &:hover {
      border-color: ${({ theme }) => theme.palette.grey[700]};
      background-color: ${({ theme }) => theme.palette.grey[700]};
      color: ${({ theme }) => theme.palette.common.white};
    }
  }
`;

export const BoxAlert = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${spacing.S16};
  justify-content: space-between;
`;

export const BoxModal = styled(Modal)`
  max-width: 25rem;
  margin: auto;
`;
