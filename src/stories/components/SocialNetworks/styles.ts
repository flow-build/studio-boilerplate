import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const SocialNetworksContainer = styled(Box)`
  margin: 0;
  padding: 0;

  color: ${({ theme }) => theme.palette.grey[700]};
`;

export const CustomTypography = styled(Typography)`
  white-space: pre-wrap;
  margin-top: ${spacing.S5};

  &:last-child {
    font-size: ${fontSizes.F12};
    font-weight: ${({ theme }) => theme.typography.fontWeightLight};
    line-height: 2;
  }
`;
