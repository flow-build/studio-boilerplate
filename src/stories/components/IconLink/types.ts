import { IconProps, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface IconLinkProps extends IconProps {
  icon: OverridableComponent<SvgIconTypeMap>;
  redirectLink: string;
  title?: string;
  badge?: number;
}
