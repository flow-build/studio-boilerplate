import { useCallback } from 'react';

import { Results } from '@elastic/react-search-ui';
import { ResultViewProps } from '@elastic/react-search-ui-views';

import * as S from './styles';
import { BodyContentProps } from './types';

export const BodyContent = ({ titleField, urlField }: BodyContentProps) => {
  const resultView = useCallback(({ result }: ResultViewProps) => {
    return <div>{result.name.raw}</div>;
  }, []);

  return (
    <S.Wrapper>
      <Results
        className="result-search-ui"
        titleField={titleField}
        urlField={urlField}
        resultView={resultView}
      />
    </S.Wrapper>
  );
};
