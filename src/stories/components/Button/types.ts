export interface ButtonComponentProps {
  onClick?: CallableFunction;
  children: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'large' | 'medium' | 'small';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  customColor?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  startIcon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}
