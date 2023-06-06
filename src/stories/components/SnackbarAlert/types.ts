type Severity = 'error' | 'warning' | 'info' | 'success';
type Variant = 'outlined' | 'filled';
type Vertical = 'top' | 'bottom';
type Horizontal = 'left' | 'right' | 'center';

export interface SnackbarAlertsProps {
  vertical?: Vertical;
  horizontal?: Horizontal;
  open: boolean;
  message: string;
  severity: Severity;
  variant?: Variant;
  autoHideDuration?: number;
  onClose: () => void;
}
