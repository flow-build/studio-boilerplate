import React from 'react';

import { Menu } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { ListItem, ListItemText } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const GridHeader = styled(Grid)`
  display: flex;
  align-items: center !important;
  justify-content: flex-start !important;

  &.data-user {
    padding-left: ${spacing.S16};
    gap: ${spacing.S16};
  }
`;

export const FixedMenu = styled('div')`
  position: fixed;
  width: 240px;
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
  align-items: center !important;
  justify-content: flex-end !important;
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
  shouldForwardProp: (prop) => !['logo'].includes(prop as string)
})<{ logo?: React.ReactNode }>`
  width: ${(props) => (props.logo ? 'auto' : '150px')};
  height: ${(props) => (props.logo ? 'auto' : '30px')};
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
  height: calc(100vh - 21.5625rem);
  margin-right: ${spacing.S16};
  margin-bottom: ${spacing.S20};
  overflow-y: auto;

  padding: 0 ${spacing.S1} 0 ${spacing.S32};

  &::-webkit-scrollbar {
    width: 0.3125rem;
  }

  &::-webkit-scrollbar-track {
    background: -webkit-linear-gradient(180deg, #fff 40%, #fff 50%, #fff 70%);
    border-radius: 0.625rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.palette.grey[900]};
    border-radius: 0.625rem;
    box-shadow: inset 0 0 0.375rem hsla(0, 0%, 75%, 0.3);
    -webkit-box-shadow: inset 0 0 0.375rem hsla(0, 0%, 75%, 0.3);
  }

  /* Media Queries */

  ${({ theme }) => theme.breakpoints.up('md')} {
    height: calc(100vh - 11.25rem);
  }
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

export const MenuItemsHeader = styled(Grid)`
  padding: 0 ${spacing.S20} ${spacing.S20} ${spacing.S20};

  & .MuiTypography-root {
    font-size: ${fontSizes.F14};
    font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
  }

  & .MuiDivider-root {
    margin-top: ${spacing.S10};
  }
`;

export const GoBackButton = styled(Button)`
  width: 100%;

  color: inherit;
  text-transform: initial;

  & .MuiListItemText-root {
    & > .MuiTypography-root {
      width: 100%;

      display: -webkit-box;

      overflow: hidden;
      text-align: left;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }

  &:hover {
    background-color: transparent;
  }
`;
