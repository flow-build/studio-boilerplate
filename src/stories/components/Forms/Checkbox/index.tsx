import MuiCheckbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { CheckboxProps } from 'stories/components/Forms/Checkbox/types';

export const Checkbox: React.FC<CheckboxProps> = ({ label = '', ...props }) => {
  return <FormControlLabel control={<MuiCheckbox {...props} />} label={label} />;
};
