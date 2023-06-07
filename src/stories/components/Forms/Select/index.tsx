import { useCallback, useState } from 'react';

import HelperText from '@mui/material/FormHelperText';
import Label from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material/Select';
import { Option, SelectProps } from 'stories/components/Forms/Select/types';

import * as S from './styles';

export const Select: React.FC<SelectProps> = ({
  options,
  helperText,
  onChangeValue,
  emptyLabel = 'Selecione uma opção',
  ...props
}) => {
  const [value, setValue] = useState<Option['value']>(props.multiple ? [] : '');

  const onChange = useCallback(
    (event: SelectChangeEvent<Option['value']>) => {
      setValue(event.target.value);

      if (onChangeValue) {
        onChangeValue(event);
      }
    },
    [onChangeValue]
  );

  return (
    <S.Wrapper>
      {props.label && (
        <Label id="label-select" shrink>
          {props.label}
        </Label>
      )}

      <S.Select
        labelId="label-select"
        displayEmpty
        value={value}
        onChange={onChange}
        label={props.label}
        notched={!!props.label}
        {...props}
      >
        {!props.multiple && <MenuItem value="">{emptyLabel}</MenuItem>}

        {options.map((option) => (
          <MenuItem key={`${option.value}-${option.label}`} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </S.Select>

      {helperText && <HelperText>{helperText}</HelperText>}
    </S.Wrapper>
  );
};
