import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const ErrorText = styled('div')`
  color: ${({ theme }) => theme.palette.error.main};
`;
