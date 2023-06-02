import { ReactNode } from 'react';

import { MenuAnchor, MenuOptions, MenuVariant } from './utils';
export declare type MenuTypes = (typeof MenuOptions)[keyof typeof MenuOptions];
export declare type MenuAnchorTypes = (typeof MenuAnchor)[keyof typeof MenuAnchor];
export declare type MenuVariantTypes = (typeof MenuVariant)[keyof typeof MenuVariant];
export interface MenuItemProps {
  id: string;
  redirectLink: string;
  title: string;
}
export interface MenuProps {
  type?: MenuTypes;
  anchor?: MenuAnchorTypes;
  variant?: MenuVariantTypes;
  menuItems?: MenuItemProps[];
  logo?: ReactNode;
}

export {};
