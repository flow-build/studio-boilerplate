import { FacebookOutlinedIcon, Instagram, SvgIcon, Twitter, Youtube } from 'shared/icons';

const SOCIAL_NETWORKS_ICON_MAP = {
  facebook: FacebookOutlinedIcon,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube
};

export const getSocialNetworkIcon = (iconName: string): typeof SvgIcon | null => {
  return (
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    SOCIAL_NETWORKS_ICON_MAP[iconName.toLowerCase() as keyof typeof SOCIAL_NETWORKS_ICON_MAP] ||
    null
  );
};
