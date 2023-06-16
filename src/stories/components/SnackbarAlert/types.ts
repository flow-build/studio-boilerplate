import { AlertColor } from '@mui/material';
import { SnackbarProps } from '@mui/material/Snackbar';

type Variant = 'outlined' | 'filled';

export interface SnackbarAlertsProps extends SnackbarProps {
  severity?: AlertColor;
  variant?: Variant;
  onClose: () => void;
}
