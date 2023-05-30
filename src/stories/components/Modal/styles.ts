import { styled } from '@mui/material';

import MUIButton from '@mui/material/Button';
import MUIDialog from '@mui/material/Dialog';
import MUIDialogActions from '@mui/material/DialogActions';
import MUIDialogContent from '@mui/material/DialogContent';
import MUIDialogTitle from '@mui/material/DialogTitle';

export const Wrapper = styled('div')`
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const Button = styled(MUIButton)``;

export const Dialog = styled(MUIDialog)``;

export const DialogActions = styled(MUIDialogActions)``;

export const DialogContent = styled(MUIDialogContent)`
  width: 30rem;
`;

export const DialogTitle = styled(MUIDialogTitle)``;
