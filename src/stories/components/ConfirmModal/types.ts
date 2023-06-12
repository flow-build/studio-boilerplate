type Color = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
type Variant = 'contained' | 'outlined';
export interface ConfirmModalProps {
  title?: string;
  text: string;
  open: boolean;
  textButtonConfirm?: string;
  textButtonCancel?: string;
  onConfirm: (confirm: boolean) => void;
  colorButtonConfirm: Color;
  colorButtonCancel: Color;
  variant: Variant;
}
