import MuiFormControl from '@mui/material/FormControl';
import MuiFormHelperText from '@mui/material/FormHelperText';
import MuiInputLabel from '@mui/material/InputLabel';
import MuiMenuItem from '@mui/material/MenuItem';
import MuiSelect from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import { Option as TOption } from 'stories/components/Forms/Select/types';

export const Wrapper = styled(MuiFormControl)`
  width: 100%;
`;

export const Label = styled(MuiInputLabel)``;

Label.defaultProps = {
  id: 'label-select',
  shrink: true
};

export const Select = styled(MuiSelect<TOption['value']>)`
  width: 100%;
`;

Select.defaultProps = {
  labelId: 'label-select',
  displayEmpty: true
};

export const Option = styled(MuiMenuItem)``;

export const HelperText = styled(MuiFormHelperText)``;
