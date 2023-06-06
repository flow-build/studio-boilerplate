import { ReactNode } from 'react';

import { IconLinkProps } from '../IconLink/types';
export interface HeaderProps {
  logo?: ReactNode;
  links?: Array<{ name: string; url: string }>;
  button: { name: string; onClick: () => void };
  loggedIn?: boolean;
  username?: string;
  icon?: IconLinkProps;
}
