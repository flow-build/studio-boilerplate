import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

import { Option as TOption } from './types/Option';

export const Wrapper = styled(Select<TOption['value']>)`
  width: 100%;
`;

Wrapper.defaultProps = {
  displayEmpty: true
};

export const Option = styled(MenuItem)``;
