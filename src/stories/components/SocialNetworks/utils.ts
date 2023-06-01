import { FacebookOutlinedIcon, Instagram, Twitter, Youtube } from 'shared/icons';

export const SocialNetworkIcon = Object.freeze({
  facebook: FacebookOutlinedIcon,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube
});

export type TSocialNetworkIcon = keyof typeof SocialNetworkIcon;

// export const getSocialNetworkIcon = (iconName: string): typeof SvgIcon | null => {
//   return (
//     SOCIAL_NETWORKS_ICON_MAP[iconName.toLowerCase() as keyof typeof SOCIAL_NETWORKS_ICON_MAP] ||
//     null
//   );
// };
