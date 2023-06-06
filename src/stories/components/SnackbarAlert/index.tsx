import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';

import { SnackbarAlertsProps } from './types';

export const SnackbarAlerts = ({
  open = true,
  message,
  severity,
  variant = 'filled',
  vertical = 'bottom',
  horizontal = 'left',
  autoHideDuration,
  onClose
}: SnackbarAlertsProps) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
    >
      <Alert severity={severity} onClose={onClose} variant={variant}>
        {message}
      </Alert>
    </Snackbar>
  );
};
