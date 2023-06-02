import { TSocialNetworkIcon } from './utils';

export interface InterfaceIcon {
  id: string;
  name: TSocialNetworkIcon;
  redirectLink: string;
}

export interface SocialNetworksProps {
  title: string;
  icons: InterfaceIcon[];
}
