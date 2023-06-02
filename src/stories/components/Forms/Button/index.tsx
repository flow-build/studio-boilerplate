import MuiButton from '@mui/material/Button';
import { ButtonProps } from 'stories/components/Forms/Button/types';

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <MuiButton {...props} />;
};
