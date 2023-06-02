import { ChipList } from 'stories/components/Forms/MultiSelect/components/ChipList';
import { Option, SelectProps } from 'stories/components/Forms/Select/types';

import * as S from './styles';

export type Props = Omit<SelectProps, 'multiple'>;

export const MultiSelect: React.FC<Props> = ({ options, ...props }) => {
  function isMultipleString(values: Option['value']): values is string[] {
    return Array.isArray(values);
  }

  function getSelectedOptionsByValues(values: string[]): Option[] {
    if (!values) {
      return [];
    }

    const findOption = (value: string) => options.find((option) => option.value === value);

    return values
      .filter(Boolean)
      .map((value) => ({ label: findOption(value)?.label, value } as Option));
  }

  function renderValue(options: Option['value']) {
    if (isMultipleString(options)) {
      const selecteds = getSelectedOptionsByValues(options);

      return <ChipList options={selecteds} />;
    }

    return null;
  }

  return <S.Wrapper options={options} multiple renderValue={renderValue} {...props} />;
};
