import { styled } from '@mui/material/styles';
import { spacing } from 'theme/spacing';

export const MainContentWrapper = styled('div')`
  max-width: 75rem;
  //height screen - height header - height footer
  min-height: calc(100vh - 6rem - 12.1875rem);
  margin: ${spacing.S10} auto;
  display: flex;
  flex-direction: column;
`;
