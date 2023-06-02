import Chip from '@mui/material/Chip';
import { ChipListProps } from 'stories/components/Forms/MultiSelect/components/ChipList/types';

import * as S from './styles';

export const ChipList: React.FC<ChipListProps> = ({ options }) => {
  return (
    <S.Wrapper>
      {options.map((option, index) => (
        <Chip key={index.toString()} label={option.label} />
      ))}
    </S.Wrapper>
  );
};
