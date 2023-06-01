import { SelectProps } from '@mui/material/Select';
import { Option } from 'stories/components/Forms/Select/types/Option';

export type Props = SelectProps<Option['value']> & {
  options: Array<Option>;
  helperText?: string;
};
