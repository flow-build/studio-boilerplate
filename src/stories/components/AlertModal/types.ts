type Severity = 'erro' | 'warning';

export interface AlertModalProps {
  severity: Severity;
  alertTitle?: string;
}
