import { ReactNode } from 'react';

type Severity = 'error' | 'warning' | 'info' | 'success';
type Variant = 'filled' | 'outlined';
type Color = 'error' | 'warning' | 'info' | 'success';

export interface AlertModalProps {
  severity?: Severity;
  alertTitle?: string;
  alertText?: string;
  variant?: Variant;
  icon?: ReactNode;
  color?: Color;
}
