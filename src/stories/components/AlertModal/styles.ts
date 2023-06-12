import { Box, styled } from '@mui/material';
import { spacing } from 'theme/spacing';

import { Modal } from '../Modal';

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
