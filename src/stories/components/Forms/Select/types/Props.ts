import { SelectProps as MuiSelectProps } from '@mui/material/Select';
import { Option } from 'stories/components/Forms/Select/types/Option';

export type SelectProps = MuiSelectProps<Option['value']> & {
  options: Array<Option>;
  helperText?: string;
};
