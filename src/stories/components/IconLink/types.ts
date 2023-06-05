import { ReactNode } from 'react';

import { IconProps } from '@mui/material';

export interface IconLinkProps extends IconProps {
  icon: ReactNode;
  redirectLink: string;
  iconSize?: number;
  badge?: number;
}
