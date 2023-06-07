import { useCallback } from 'react';

import { Results } from '@elastic/react-search-ui';
import { ResultViewProps } from '@elastic/react-search-ui-views';
import { Card } from 'stories/components/Generic';
import { CardProps } from 'stories/components/Generic/Card/types';

import * as S from './styles';
import { BodyContentProps } from './types';
import { useBodyContent } from './useBodyContent';

export const BodyContent = ({ fields }: BodyContentProps) => {
  const { getPropsCard } = useBodyContent(fields);

  const resultView = useCallback(
    ({ result, key }: ResultViewProps) => {
      const propsCard = getPropsCard<CardProps>(result);

      return (
        <li key={key}>
          <Card {...propsCard} mode="vertical" />
        </li>
      );
    },
    [getPropsCard]
  );

  return (
    <S.Wrapper>
      <Results className="result-search-ui" resultView={resultView} />
    </S.Wrapper>
  );
};
