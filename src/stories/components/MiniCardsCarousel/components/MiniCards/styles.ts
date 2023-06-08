import { Typography, styled } from '@mui/material';
import { ImageComponent } from 'stories/components/Image';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Container = styled('div')`
  width: 100%;
`;

export const Wrapper = styled('div')`
  display: flex;
  margin: ${spacing.S10};
`;

export const Img = styled(ImageComponent)`
  border-radius: 0.3125rem;
`;

export const WrapperContent = styled('div')`
  margin-left: ${spacing.S14};
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
