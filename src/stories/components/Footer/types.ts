import { LinkGroupsProps } from '../LinkGroup/types';
import { SocialNetworksProps } from '../SocialNetworks/types';

export interface FooterProps {
  navLinks?: LinkGroupsProps[];
  socialMedia?: SocialNetworksProps;
  disclaimer?: string;
}
