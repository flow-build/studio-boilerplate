export interface AlertModalProps {
  alertTitle: string;
  alertText: string;
  OnClose: () => void;
  open: boolean;
  buttonText?: string;
}
