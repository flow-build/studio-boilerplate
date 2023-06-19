import { useCallback, useState } from 'react';

import * as S from './styles';
import { InputNumberProps } from './types';

export function InputNumber({ defaultValue = 0, onChange, isInt = false }: InputNumberProps) {
  const [value, setValue] = useState(defaultValue);

  const getValueMinus = useCallback(
    (currentValue: number) => {
      return isInt ? Math.max(currentValue - 1, 0) : currentValue - 1;
    },
    [isInt]
  );

  const getValueMore = useCallback((currentValue: number) => {
    return currentValue + 1;
  }, []);

  const handleChange = useCallback(
    (action: '+' | '-') => {
      if (action === '-') {
        const valueMinus = getValueMinus(value);

        setValue(getValueMinus);
        if (onChange != null) {
          onChange(valueMinus);
        }
      }
      if (action === '+') {
        const valueMore = getValueMore(value);

        setValue(getValueMore);
        if (onChange != null) {
          onChange(valueMore);
        }
      }
    },
    [value, onChange, getValueMore, getValueMinus]
  );

  return (
    <S.InputContainer>
      <S.ActionBox
        onClick={() => {
          handleChange('-');
        }}
        disabled={isInt ? value <= 0 : false}
      >
        -
      </S.ActionBox>
      <S.Input type="number" value={value} disabled={false} />
      <S.ActionBox
        onClick={() => {
          handleChange('+');
        }}
        disabled={false}
      >
        +
      </S.ActionBox>
    </S.InputContainer>
  );
}
