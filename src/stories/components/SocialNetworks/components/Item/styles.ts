import { Grid, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const ListItemIcon = styled(ListItem)`
  padding: 0;
  margin-top: ${spacing.S10};
`;

export const IconName = styled(Grid)`
  display: flex;
  justify-content: inherit;
  gap: ${spacing.S5};
`;

export const SocialMediaName = styled(Typography)`
  text-transform: capitalize;
  font-size: ${fontSizes.F12};
`;
