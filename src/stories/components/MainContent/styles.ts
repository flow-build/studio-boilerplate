import { styled } from '@mui/material/styles';
import { spacing } from 'theme/spacing';

export const MainContentWrapper = styled('div')`
  max-width: 75rem;
  min-height: calc(100vh - 15.625rem);
  margin: ${spacing.S10} auto;
  display: flex;
  flex-direction: column;
`;
