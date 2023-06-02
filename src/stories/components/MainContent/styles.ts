import { styled } from '@mui/material/styles';
import { spacing } from 'theme/spacing';

export const MainContentWrapper = styled('div')`
  max-width: ${spacing.S1200};
  min-height: calc(100vh - ${spacing.S269});
  margin: ${spacing.S10} auto;
  display: flex;
  flex-direction: column;
`;
