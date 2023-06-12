import { styled } from '@mui/material/styles';
import { spacing } from 'theme/spacing';

export const Main = styled('main')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  max-width: 24rem;
  background-color: ${({ theme }) => theme.palette.grey[50]};
  box-shadow: 0 0 ${spacing.S10} ${spacing.S1} rgba(0, 0, 0, 0.34);

  ${({ theme }) => theme.breakpoints.up('sm')} {
    max-width: none;
    width: 37.5rem;
    height: 24rem;
  }
`;

export const SideLeft = styled('div')`
  flex: 0.4;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.grey[300]};
  display: none;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Form = styled('form')`
  flex: 0.6;
  padding: 0 ${spacing.S32};
  display: flex;
  flex-direction: column;
  gap: ${spacing.S16};
`;
