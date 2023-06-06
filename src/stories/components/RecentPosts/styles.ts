import { Typography, styled } from '@mui/material';
import { spacing } from 'theme/spacing';
export const Wrapper = styled('div')`
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.grey['700']};
  font-size: ${({ theme }) => theme.typography.h6};
  font-weight: bold;
  margin-bottom: ${spacing.S14};
`;

export const Price = styled(Typography)`
  color: ${({ theme }) => theme.palette.grey['500']};
  font-size: ${({ theme }) => theme.typography.subtitle1};
`;

export const Description = styled(Typography)`
  color: ${({ theme }) => theme.palette.grey['500']};
  font-size: ${({ theme }) => theme.typography.subtitle2};
`;
