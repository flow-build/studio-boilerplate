import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

import { Button } from '../Forms/Button';

export const ToolbarHeader = styled(Toolbar)`
  display: flex;
  justify-content: center;
`;

export const Content = styled('div')`
  width: 100%;
  max-width: 75rem;
  display: grid;
  grid-template-areas: 'menu logo search links button-avatar';
  grid-template-columns: 5% 15% 50% 25% 5%;
  align-items: center;
`;

export const WrapperMenu = styled('div')`
  padding-right: ${spacing.S10};
  grid-area: menu;
`;

export const WrapperLogo = styled('div')`
  grid-area: logo;
`;

export const ContainerHeader = styled(Container, {
  shouldForwardProp: (prop) => !['loggedIn'].includes(prop as string)
})<{
  loggedIn: boolean;
}>`
  grid-area: links;
  max-height: 4rem;

  display: flex;
  justify-content: ${({ loggedIn }) => (loggedIn ? 'center' : 'flex-end')};
  gap: ${({ loggedIn }) => (loggedIn ? 'initial' : spacing.S16)};
  ${({ theme }) => theme.breakpoints.up('lg')} {
    justify-content: center;
    align-items: center;
  }
`;

export const IconWrapper = styled(Grid)`
  display: flex;
  justify-content: flex-end;
  padding-right: ${spacing.S16};
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

export const WrapperInputSearch = styled(`div`)`
  grid-area: search;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin: 0 ${spacing.S20};

    .MuiInputBase-root {
      padding: 0 !important;
    }

    button {
      padding-top: ${spacing.S16};
    }
  }
`;

export const ButtonAvatar = styled('div')`
  grid-area: button-avatar;
  max-height: 4rem;
  justify-self: end;

  div {
    padding: 0;
    margin: 0;
  }
`;
