import { styled } from '@mui/material';
import MUIDialogTitle from '@mui/material/DialogTitle';
import MUIIconButton from '@mui/material/IconButton';

export const Wrapper = styled('div')`
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const DialogTitle = styled(MUIDialogTitle)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconButton = styled(MUIIconButton)`
  color: ${({ theme }) => theme.palette.grey[500]};
`;
