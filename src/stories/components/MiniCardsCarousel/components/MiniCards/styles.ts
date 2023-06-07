import { Typography, styled } from '@mui/material';
import { spacing } from 'theme/spacing';
export const Wrapper = styled('div')`
  display: flex;
  margin: ${spacing.S10};
  width: 40%;
`;

export const Img = styled('img')`
  height: auto;
  width: 50%;
  border-radius: 5px;
`;

export const WrapperContent = styled('div')`
  margin-left: ${spacing.S14};
  width: 50%;
`;
export const Name = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.h6};
  font-weight: bold;
`;

export const Description = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.subtitle2};
`;
export const ContentText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.subtitle2};
`;
