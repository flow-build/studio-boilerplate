export interface ConfirmModalProps {
  title?: string;
  text: string;
  open: boolean;
  textButtonConfirm?: string;
  textButtonCancel?: string;
  onConfirm: (confirm: boolean) => void;
}
