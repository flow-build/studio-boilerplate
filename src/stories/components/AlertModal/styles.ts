import { Box, styled } from '@mui/material';

import { Button } from '../Forms/Button';
import { Modal } from '../Modal';

export const IconButton = styled(Button)`
  color: ${({ theme }) => theme.palette.text.primary};
  border-color: ${({ theme }) => theme.palette.grey[500]};
  &:hover {
    border-color: ${({ theme }) => theme.palette.grey[700]};
    background-color: ${({ theme }) => theme.palette.grey[700]};
  }
`;

export const BoxAlert = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const BoxModal = styled(Modal)`
  max-width: 25rem;
  margin: auto;
`;
