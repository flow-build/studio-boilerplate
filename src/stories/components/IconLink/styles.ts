import { Badge, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { fontSizes } from 'theme/fontSizes.theme';

export const Content = styled('div')`
  display: flex;
`;

export const LinkIcon = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  gap: 1rem;
`;

export const Title = styled(Typography)`
  font-size: ${fontSizes.F14};
`;

export const AlertIcon = styled(Badge)`
  span {
    font-size: ${fontSizes.F9};
  }
`;
