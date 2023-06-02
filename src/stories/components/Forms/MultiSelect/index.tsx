import { ChipList } from 'stories/components/Forms/MultiSelect/components/ChipList';
import { MultiSelectProps } from 'stories/components/Forms/MultiSelect/types';
import { Select } from 'stories/components/Forms/Select';
import { Option } from 'stories/components/Forms/Select/types';

export const MultiSelect: React.FC<MultiSelectProps> = ({ options, ...props }) => {
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

  return <Select options={options} multiple renderValue={renderValue} {...props} />;
};
