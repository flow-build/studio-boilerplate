import CardMUI from '@mui/material/Card';
import CardMediaMUI from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

import { Mode } from './types';

export const Wrapper = styled(CardMUI, {
  shouldForwardProp: (prop) => !['mode'].includes(prop as string)
})<{
  mode: Mode;
}>`
  display: flex;
  flex-direction: ${({ mode }) => (mode === 'vertical' ? 'column' : 'row')};
  max-width: ${({ mode }) => (mode === 'vertical' ? '21.5625rem' : '100%')};
`;

export const CardMedia = styled(CardMediaMUI, {
  shouldForwardProp: (prop) => !['mode'].includes(prop as string)
})<{
  mode: Mode;
}>`
  height: ${({ mode }) => (mode === 'vertical' ? '12rem' : 'auto')};
  width: ${({ mode }) => (mode === 'horizontal' ? '33%' : 'auto')};
  margin: ${({ mode }) => (mode === 'horizontal' ? spacing.S10 : '0')};
`;

export const Description = styled(Typography)`
  color: ${({ theme }) => theme.palette.grey['700']};
`;

export const Price = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  height: 2.5rem;
`;

export const WrapperAttributes = styled('div')`
  margin-top: ${spacing.S10};
  display: flex;
  gap: ${spacing.S8};
`;

export const AttributeText = styled(Typography)`
  font-size: ${fontSizes.F12};
  ::after {
    content: '|';
    margin-left: ${spacing.S4};
  }
  :last-child::after {
    content: '';
  }
`;

export const Title = styled(Typography)`
  height: 4rem;
`;
