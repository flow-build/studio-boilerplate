export interface ConfirmModalProps {
  Title?: string;
  Text: string;
  open: boolean;
  textButtonConfirm?: string;
  textButtonCancel?: string;
  onConfirm: () => void;
  onClose: () => void;
}
