type Severity = 'error' | 'warning' | 'info' | 'success';
type Variant = 'outlined' | 'filled';
export interface SnackbarAlertsProps {
  open: boolean;
  message: string;
  severity: Severity;
  variant?: Variant;
  autoHideDuration?: number;
  onClose: () => void;
}
