import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { spacing } from 'theme/spacing';

export const Wrapper = styled(MuiBox)`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.S8};
`;
