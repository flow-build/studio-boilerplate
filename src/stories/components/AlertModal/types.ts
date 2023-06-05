export interface AlertModalProps {
  alertTitle: string;
  alertText: string;
  onClose: () => void;
  open: boolean;
  buttonText?: string;
}
