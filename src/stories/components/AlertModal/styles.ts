import { Box, styled } from '@mui/material';
import MUIIconButton from '@mui/material/Button';

export const IconButton = styled(MUIIconButton)`
  color: ${({ theme }) => theme.palette.grey[500]};
`;

export const BoxAlert = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
