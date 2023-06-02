import { useCallback, useState } from 'react';

import { SelectChangeEvent } from '@mui/material/Select';
import { Option } from 'stories/components/Forms/Select/types/Option';
import { SelectProps } from 'stories/components/Forms/Select/types/Props';

import * as S from './styles';

export const Select: React.FC<SelectProps> = ({
  options,
  helperText,
  onChangeValue,
  emptyLabel = 'Selecione uma opção',
  ...props
}) => {
  const [value, setValue] = useState<Option['value']>('');

  const onChange = useCallback(
    (event: SelectChangeEvent<Option['value']>) => {
      setValue(event.target.value);

      if (onChangeValue) {
        onChangeValue(event.target.value);
      }
    },
    [onChangeValue]
  );

  return (
    <S.Wrapper>
      {props.label && <S.Label>{props.label}</S.Label>}

      <S.Select
        value={value}
        onChange={onChange}
        label={props.label}
        notched={!!props.label}
        {...props}
      >
        <S.Option value="">{emptyLabel}</S.Option>

        {options.map((option) => (
          <S.Option key={`${option.value}-${option.label}`} value={option.value}>
            {option.label}
          </S.Option>
        ))}
      </S.Select>

      {helperText && <S.HelperText>{helperText}</S.HelperText>}
    </S.Wrapper>
  );
};
