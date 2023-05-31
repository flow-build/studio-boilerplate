import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Youtube from '@mui/icons-material/YouTube';
import SvgIcon from '@mui/material/SvgIcon';

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
