interface InterfaceIcon {
  id: string;
  name: string;
  redirectLink: string;
}

export interface SocialNetworksProps {
  title?: string;
  icons: InterfaceIcon[];
  secondTitle?: string;
  description?: string;
}
