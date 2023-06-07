import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Main = styled(Grid)`
  width: 100%;
  min-height: calc(100vh - 15.625rem);
  padding: ${spacing.S50};
`;

export const ContentWrapper = styled(Grid)`
  width: 100%;
  display: flex;
  gap: 15rem;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    max-width: none;
    width: 100%;
  }
`;

export const Wrapper = styled(Grid)`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    max-width: none;
    width: 37.5rem;
    height: fit-content;
  }
`;

export const TitleWrapper = styled(Grid)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Title = styled(Typography)`
  width: 100%;
  text-overflow: ellipsis;
  font-size: ${fontSizes.F32};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
`;

export const SideRight = styled(Grid)`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.grey[200]};
  display: none;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const Box = styled(Grid)`
  margin-bottom: 1rem;
`;
