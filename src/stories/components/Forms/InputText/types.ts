type MaskType = 'register' | 'date' | 'phone' | 'zipcode' | 'onlyNumbers';
type Position = 'end' | 'start';

export interface MaskProps {
  onChange: (event: { target: { name: string; value: unknown } }) => void;
  name: string;
  value: string;
  mask?: MaskType;
}

export interface InputProps {
  maskType?: MaskType;
  testId?: string;
  iconName?: string;
  colorIcon?: string;
  position?: Position;
}
