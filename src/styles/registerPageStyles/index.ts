import { styled } from '@mui/material/styles';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Main = styled('main')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 15.625rem);
  padding: ${spacing.S20} 0;
`;

export const Wrapper = styled('div')`
  width: 90%;
  max-width: 25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.palette.grey[50]};
  box-shadow: 0 0 0.625rem 0.0625rem rgba(0, 0, 0, 0.34);

  ${({ theme }) => theme.breakpoints.up('sm')} {
    max-width: none;
    width: 37.5rem;
    min-height: 25rem;
  }
`;

export const Form = styled('form')`
  padding: ${spacing.S10};
  padding-right: ${spacing.S20};
  margin: 0 ${spacing.S20};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const FooterForm = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-size: ${fontSizes.F14};
    color: ${({ theme }) => theme.palette.info.main};
  }
`;
