import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { spacing } from 'theme/spacing';

export const MainContentWrapper = styled(Container)`
  max-width: 1200px;
  min-height: calc(100vh - ${spacing.S269});
  margin-top: ${spacing.S10};
  margin-bottom: ${spacing.S10};
`;
