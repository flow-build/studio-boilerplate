import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { fontSizes } from 'theme/fontSizes.theme';

export const Container = styled(Grid)`
  span {
    display: block;
    margin-bottom: 0;
    color: ${({ theme }) => theme.palette.grey[700]};
    text-align: center;
    font-size: ${fontSizes.F12};
    font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.tonalOffset};
    font-size: ${fontSizes.F12};
    font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  }
`;
