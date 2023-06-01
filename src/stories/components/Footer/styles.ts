import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { spacing } from 'theme/spacing';

export const Container = styled(Grid)`
  padding: ${spacing.S10};
  background-color: ${({ theme }) => theme.palette.grey[50]};
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const LinkWrapper = styled(Grid)`
  background-color: ${({ theme }) => theme.palette.grey[50]};
  width: 100%;
  display: flex;
  justify-content: center;
`;
