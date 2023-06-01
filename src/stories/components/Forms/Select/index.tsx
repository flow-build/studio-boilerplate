import { useState } from 'react';

import { SelectProps, SelectChangeEvent } from '@mui/material/Select';
import { Option } from 'stories/components/Forms/Select/types/Option';

import * as S from './styles';

export type Props = SelectProps<Option['value']> & {
  options: Array<Option>;
};

export const Select: React.FC<Props> = ({ options = [], ...props }) => {
  const [value, setValue] = useState<Option['value']>('');

  function onChange(event: SelectChangeEvent<Option['value']>) {
    setValue(event.target.value);
  }

  return (
    <S.Wrapper value={value} onChange={onChange} {...props}>
      <S.Option value="">Selecione uma opção</S.Option>

      {options.map((option, index) => (
        <S.Option key={`${option.value}-${index}`} value={option.value}>
          {option.label}
        </S.Option>
      ))}
    </S.Wrapper>
  );
};
