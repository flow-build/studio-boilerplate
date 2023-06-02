import { ReactNode } from 'react';
export interface HeaderProps {
  logo?: ReactNode;
  links?: Array<{ name: string; url: string }>;
  button: { name: string; onClick: () => void };
  loggedIn?: boolean;
  menu?: ReactNode;
  username?: string;
}
