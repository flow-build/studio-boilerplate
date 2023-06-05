import { ReactNode } from 'react';

import { MenuAnchor, MenuVariant } from './utils';
export declare type MenuAnchorTypes = (typeof MenuAnchor)[keyof typeof MenuAnchor];
export declare type MenuVariantTypes = (typeof MenuVariant)[keyof typeof MenuVariant];
export interface MenuItemProps {
  id: string;
  redirectLink: string;
  title: string;
}
export interface MenuProps {
  anchor?: MenuAnchorTypes;
  variant?: MenuVariantTypes;
  menuItems?: MenuItemProps[];
  logo?: ReactNode;
}

export {};
