import MuiBackdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import MuiCircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
export const LoaderContainer = styled(Box)`
  padding-top: ${({ theme }) => theme.spacing(2)};

  display: flex;
  justify-content: center;
`;

export const CircularProgress = styled(MuiCircularProgress)`
  color: ${({ theme }) => theme.palette.primary.light};
`;

export const Container = styled(Box)`
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 999999999;

  transform: translate(-50%, -50%);
`;

export const Backdrop = styled(MuiBackdrop)`
  z-index: 999999998;
`;
