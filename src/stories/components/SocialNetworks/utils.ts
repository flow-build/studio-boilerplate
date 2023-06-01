import { FacebookOutlinedIcon, Instagram, Twitter, Youtube } from 'shared/icons';

export const SocialNetworkIcon = Object.freeze({
  facebook: FacebookOutlinedIcon,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube
});

export type TSocialNetworkIcon = keyof typeof SocialNetworkIcon;
