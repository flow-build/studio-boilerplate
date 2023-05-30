import { ReactNode } from 'react';

type MaskType = 'register' | 'date' | 'phone' | 'zipcode' | 'onlyNumbers';

export interface MaskProps {
  onChange: (event: { target: { name: string; value: unknown } }) => void;
  name: string;
  value: string;
  mask?: MaskType;
}

export interface InputProps {
  maskType?: MaskType;
  leftIcon?: boolean;
  rigthIcon?: boolean;
  icon?: ReactNode;
}
