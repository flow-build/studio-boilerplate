import { MenuItemProps } from '@mui/material/MenuItem';
import { SelectProps as MuiSelectProps, SelectChangeEvent } from '@mui/material/Select';

export type Option = {
  value: MenuItemProps['value'];
  label: string;
};

export type SelectProps = MuiSelectProps<Option['value']> & {
  options: Array<Option>;
  helperText?: string;
  emptyLabel?: string;
  onChangeValue?: (event: SelectChangeEvent<Option['value']>) => void;
};
