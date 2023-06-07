import { Typography, styled } from '@mui/material';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';
export const Wrapper = styled('div')`
  display: flex;
  margin: ${spacing.S10};
  width: 40%;
`;

export const Img = styled('img')`
  height: auto;
  width: 50%;
  border-radius: 0.3125rem;
`;

export const WrapperContent = styled('div')`
  margin-left: ${spacing.S14};
  width: 50%;
`;
export const Name = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${fontSizes.F20};
  font-weight: bold;
`;

export const Description = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${fontSizes.F12};
`;
export const ContentText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${fontSizes.F12};
`;
