type Variant = 'contained' | 'outlined';
type Color = 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
export interface AlertModalProps {
  alertTitle: string;
  alertText: string;
  onClose: () => void;
  open: boolean;
  buttonText?: string;
  variant?: Variant;
  color?: Color;
}
