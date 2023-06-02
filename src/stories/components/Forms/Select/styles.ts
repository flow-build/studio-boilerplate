import MuiFormControl from '@mui/material/FormControl';
import MuiSelect from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import { Option as TOption } from 'stories/components/Forms/Select/types';

export const Wrapper = styled(MuiFormControl)`
  width: 100%;
`;

export const Select = styled(MuiSelect<TOption['value']>)`
  width: 100%;
`;
