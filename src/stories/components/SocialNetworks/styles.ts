import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { fontSizes } from 'theme/fontSizes.theme';

export const Wrapper = styled(Grid)`
  justify-content: center;
`;

export const SocialNetworksContainer = styled(Box)`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.palette.grey[700]};
`;

export const Title = styled(Typography)`
  font-size: ${fontSizes.F16};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
`;
