import { MenuProps } from '../Menu/types';
export interface HeaderProps {
  logo?: boolean;
  links?: Array<{ name: string; url: string }>;
  button: { name: string; onClick: () => void };
  loggedIn?: boolean;
  menu?: MenuProps;
  username?: string;
}
