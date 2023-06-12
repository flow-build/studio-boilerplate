import { ReactNode } from 'react';

import { MaskFunction, MaskName } from 'utils/masks/types';

export interface InputProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  mask?: MaskName;
  customMask?: MaskFunction;
}
