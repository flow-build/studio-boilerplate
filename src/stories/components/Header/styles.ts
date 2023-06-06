import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const ToolbarHeader = styled(Toolbar)`
  display: flex;
  justify-content: center;
`;

export const Content = styled('div')`
  display: flex;
  width: 100%;
  max-width: 75rem;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled('div')`
  padding-right: ${spacing.S10};
`;

export const ContainerHeader = styled(Container, {
  shouldForwardProp: (prop) => !['loggedIn'].includes(prop as string)
})<{
  loggedIn: boolean;
}>`
  display: flex;
  justify-content: ${({ loggedIn }) => (loggedIn ? 'center' : 'flex-end')};
  gap: ${({ loggedIn }) => (loggedIn ? 'initial' : spacing.S16)};
  ${({ theme }) => theme.breakpoints.up('lg')} {
    justify-content: flex-end;
    align-items: center;
  }
`;

export const ContainerHeaderAvatar = styled(Container)`
  display: flex;
  justify-content: flex-end;
  gap: ${spacing.S16};
`;

export const ButtonHeader = styled(Button)`
  text-transform: capitalize;
`;

export const DividedLink = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'loggedIn'
})<{ loggedIn: boolean }>(({ loggedIn }) => ({
  '::after': {
    content: loggedIn ? '"|"' : 'none',
    margin: loggedIn ? `${spacing.S10}` : '0'
  },
  ':last-child::after': {
    content: loggedIn ? '""' : 'none'
  }
}));

export const LinkHeader = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const DividerHeader = styled(Divider)`
  font-size: ${fontSizes.F20};
`;
