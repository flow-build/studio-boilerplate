import React, { FC, useMemo } from 'react';

import * as S from './styles';
import { ProgressBarProps } from './types';

export const ProgressBar: FC<ProgressBarProps> = ({
  descriptionTip,
  strength
}): React.JSX.Element => {
  const nameStrength = useMemo(() => {
    switch (strength) {
      case 'weak':
        return 'Fraca';
      case 'medium':
        return 'Média';
      case 'strong':
        return 'Forte';
      case 'great':
        return 'Ótimo';
      default:
        return ' ';
    }
  }, [strength]);

  return (
    <S.Wrapper>
      <S.ContainerPasswordLevel>
        <S.ProgressBarPasswordLevelEmpty>
          <S.ProgressBarPasswordLevel strength={strength} />
        </S.ProgressBarPasswordLevelEmpty>
        <S.TextLevelPassword>{nameStrength}</S.TextLevelPassword>
      </S.ContainerPasswordLevel>
      <S.ContainerTips>
        <S.DescriptionTips>{descriptionTip}</S.DescriptionTips>
      </S.ContainerTips>
    </S.Wrapper>
  );
};
