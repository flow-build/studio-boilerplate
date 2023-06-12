import { SnackbarProps } from '@mui/material/Snackbar/';

type Severity = 'error' | 'warning' | 'info' | 'success';
type Variant = 'outlined' | 'filled';

export interface SnackbarAlertsProps extends SnackbarProps {
  severity: Severity;
  variant?: Variant;
  setOpen: (value: boolean) => void;
  onClose: () => void;
}
