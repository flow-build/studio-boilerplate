import { Option } from 'stories/components/Forms/Select/types';

import * as S from './styles';

type Props = {
  options: Array<Option>;
};

export const ChipList: React.FC<Props> = ({ options }) => {
  return (
    <S.Wrapper>
      {options.map((option, index) => (
        <S.Chip key={index.toString()} label={option.label} />
      ))}
    </S.Wrapper>
  );
};
