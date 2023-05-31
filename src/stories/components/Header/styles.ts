import { Container, Divider, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

interface Props {
  loggedIn: boolean;
}

export const ToolbarHeader = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const ContainerHeader = styled(Container)<Props>(({ loggedIn }) => ({
  display: 'flex',
  justifyContent: loggedIn ?? true ? 'center' : 'flex-end',
  gap: loggedIn ?? false ? 'initial' : `${spacing.S16}`
}));

export const ContainerHeaderAvatar = styled(Container)`
  display: flex;
  justify-content: flex-end;
  gap: ${spacing.S16};
`;

export const ContainerHeaderLogged = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DividedLink = styled(Typography)<Props>(({ loggedIn }) => ({
  '::after': {
    content: loggedIn ?? false ? '"|"' : 'none',
    margin: loggedIn ?? false ? `${spacing.S10}` : '0'
  },
  ':last-child::after': {
    content: loggedIn ?? false ? '""' : 'none'
  }
}));

export const LinkHeader = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const DividerHeader = styled(Divider)`
  font-size: ${fontSizes.F20};
`;
