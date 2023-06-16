import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import { SnackbarAlertsProps } from './types';

export const SnackbarAlerts = ({
  message,
  severity = 'info',
  variant = 'filled',
  onClose,
  ...props
}: SnackbarAlertsProps) => {
  return (
    <Snackbar {...props} onClose={onClose}>
      <Alert severity={severity} onClose={onClose} variant={variant}>
        {message}
      </Alert>
    </Snackbar>
  );
};
