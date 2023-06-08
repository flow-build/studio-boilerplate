import { Typography, styled } from '@mui/material';
import { spacing } from 'theme/spacing';
export const Wrapper = styled('div')`
  background-color: ${({ theme }) => theme.palette.grey[100]};
  padding: ${spacing.S14};

  width: 100%;
`;

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.h6};
  font-weight: bold;
  margin-bottom: ${spacing.S14};
`;

export const Price = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.subtitle1};
`;

export const Description = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.subtitle2};
`;
