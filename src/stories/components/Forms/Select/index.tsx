import { useState } from 'react';

import { SelectChangeEvent } from '@mui/material/Select';
import { Option } from 'stories/components/Forms/Select/types/Option';
import { Props } from 'stories/components/Forms/Select/types/Props';

import * as S from './styles';

export const Select: React.FC<Props> = ({ options, helperText, ...props }) => {
  const [value, setValue] = useState<Option['value']>('');

  function onChange(event: SelectChangeEvent<Option['value']>) {
    setValue(event.target.value);
  }

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
        <S.Option value="">Selecione uma opção</S.Option>

        {options.map((option, index) => (
          <S.Option key={`${option.value}-${index}`} value={option.value}>
            {option.label}
          </S.Option>
        ))}
      </S.Select>

      {helperText && <S.HelperText>{helperText}</S.HelperText>}
    </S.Wrapper>
  );
};
