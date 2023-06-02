import { Box, styled } from '@mui/material';
import MUIIconButton from '@mui/material/Button';

import { Modal } from '../Modal';

export const IconButton = styled(MUIIconButton)`
  color: ${({ theme }) => theme.palette.grey[500]};
`;

export const BoxAlert = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const BoxModal = styled(Modal)`
  max-width: 25rem;
  align-self: start;
  margin: 0rem auto;
`;
