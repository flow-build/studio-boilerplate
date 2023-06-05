import { Box, styled } from '@mui/material';

import { Button } from '../Forms/Button';
import { Modal } from '../Modal';

export const IconButton = styled(Button)`
  color: ${({ theme }) => theme.palette.text.primary};
  border-color: ${({ theme }) => theme.palette.grey[500]};
  margin: 0.3rem;
  &:hover {
    border-color: ${({ theme }) => theme.palette.grey[700]};
    background-color: ${({ theme }) => theme.palette.grey[700]};
  }
`;

export const BoxConfirm = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BoxModal = styled(Modal)`
  max-width: 25rem;
  margin: auto;
`;

export const BoxButton = styled(Box)`
  padding: 1rem;
`;
