import { Menu } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { ListItem, ListItemText } from '@mui/material';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

import { Button } from '../Forms/Button';

export const GridHeader = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &.data-user {
    padding-left: ${spacing.S16};
    gap: ${spacing.S16};
  }
`;

export const FixedMenu = styled('div')`
  position: fixed;
  width: 15rem;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1000;
  background: #000;

  & .MuiDrawer-paper {
    background: #000;
    box-shadow: none;
    overflow: hidden;
  }

  backdrop-filter: blur(1.9375rem);
  background: hsla(0, 0%, 100%, 0.65);
`;

export const MenuButton = styled(Button)`
  color: #000;
  border-radius: 50%;
  border-color: black;
  height: 1.875rem;
  min-width: 0;
  width: 1.75rem;

  &:hover {
    background: none;
    border-color: unset;
  }
`;

export const MenuIcon = styled(Menu)`
  font-size: ${fontSizes.F16};
`;

export const GridSeeAll = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MenuDrawer = styled(SwipeableDrawer)`
  & .MuiDrawer-paper {
    background: transparent;
    box-shadow: none;

    overflow: hidden;
  }
`;

export const CloseDrawerButton = styled(Button)`
  color: #000;
  border-radius: 50%;
  border-color: #000;
  height: 1.875rem;
  min-width: 0;
  width: 1.75rem;

  &:hover {
    background: none;
    border-color: unset;
  }
`;

export const DrawerGrid = styled(Grid)`
  height: 100%;

  ${({ theme }) => `
  ${theme.breakpoints.up('xs')} {
     width: 18.125rem;
   }
   ${theme.breakpoints.up('md')} {
    width: 21.25rem;
  }
  `}

  backdrop-filter: blur(1.9375rem);
  background: hsla(0, 0%, 100%, 0.65);
`;

export const LogoWrapper = styled(Grid, {
  shouldForwardProp: (prop) => !['hasLogo'].includes(prop as string)
})<{ hasLogo?: boolean }>`
  width: ${(props) => (props.hasLogo ? 'auto' : '9.375rem')};
  height: ${(props) => (props.hasLogo ? 'auto' : '1.875rem')};
`;

export const ButtonWrapper = styled(Grid)`
  padding: ${spacing.S16};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CloseDrawerIcon = styled(CloseIcon)`
  color: black;
`;

export const MenuDivider = styled(Divider)`
  border: 0.03125rem solid #a0a0a0;
  margin-top: ${spacing.S20};
  width: 100%;
  &.grid-button {
    margin-top: ${spacing.S24};
  }
`;

export const MenuList = styled(List)`
  margin-right: ${spacing.S16};
  margin-bottom: ${spacing.S20};
  overflow-y: auto;

  padding: 0 ${spacing.S1} 0 ${spacing.S32};

  ${({ theme }) => theme.breakpoints.up('md')} {
    height: calc(100vh - 11.25rem);
  }
`;

export const IconWrapper = styled(Grid)`
  display: flex;
  justify-content: flex-end;
`;

export const MenuItem = styled(ListItem)`
  height: 2.0625rem;
`;

export const TitleCategory = styled(ListItemText)`
  span {
    font-size: ${fontSizes.F14};
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
    color: ${({ theme }) => theme.palette.grey[900]};
    opacity: 1;
  }
`;

export const LinkIcon = styled('div')`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  gap: 1rem;
`;
