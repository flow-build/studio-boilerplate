import { ReactNode } from 'react';

import { MenuAnchor, MenuOptions } from './utils';
export declare type MenuTypes = (typeof MenuOptions)[keyof typeof MenuOptions];
export declare type MenuAnchorTypes = (typeof MenuAnchor)[keyof typeof MenuAnchor];
export interface MenuItemProps {
  id: string;
  redirectLink: string;
  title: string;
}
export interface MenuProps {
  type?: MenuTypes;
  anchor?: MenuAnchorTypes;
  menuItems?: MenuItemProps[];
  logo?: ReactNode;
}

export {};
