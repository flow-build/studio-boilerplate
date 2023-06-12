import { useCallback, useContext } from 'react';

import { Results } from '@elastic/react-search-ui';
import { ResultViewProps } from '@elastic/react-search-ui-views';
import { SearchUICustonContext } from 'context/SearchUI';
import { Card } from 'stories/components/Generic';
import { CardProps } from 'stories/components/Generic/Card/types';

import * as S from './styles';
import { useBodyContent } from './useBodyContent';

export const BodyContent = () => {
  const { configFields, modeView } = useContext(SearchUICustonContext);
  const { getPropsCard } = useBodyContent(configFields?.fields);

  const resultView = useCallback(
    ({ result }: ResultViewProps) => {
      const propsCard = getPropsCard<CardProps>(result);

      if (!propsCard) return null;

      return (
        <S.ItemResult key={result.id.raw}>
          <Card {...propsCard} mode={modeView} />
        </S.ItemResult>
      );
    },
    [getPropsCard, modeView]
  );

  return (
    <S.Wrapper>
      <Results className="result-search-ui" resultView={resultView} />
    </S.Wrapper>
  );
};
