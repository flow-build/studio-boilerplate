'use client';
import { memo } from 'react';

import { Paging, SearchProvider, WithSearch } from '@elastic/react-search-ui';
import { Layout } from '@elastic/react-search-ui-views';
import '@elastic/react-search-ui-views/lib/styles/styles.css';

import { BodyContent } from './BodyContent';
import { BodyHeader } from './BodyHeader';
import { SideContent } from './SideContent';
import * as S from './styles';
import { SearchUIProps } from './types';

const SearcUIComponent = ({ title, config, titleField, urlField }: SearchUIProps) => {
  return (
    <SearchProvider config={config}>
      <WithSearch mapContextToProps={({ wasSearched }) => ({ wasSearched })}>
        {({ wasSearched }) => {
          return (
            <S.Wrapper>
              <Layout
                sideContent={<>{wasSearched && <SideContent />}</>}
                bodyHeader={<BodyHeader title={title} />}
                bodyContent={
                  <>{wasSearched && <BodyContent titleField={titleField} urlField={urlField} />}</>
                }
                bodyFooter={<Paging />}
              />
            </S.Wrapper>
          );
        }}
      </WithSearch>
    </SearchProvider>
  );
};

export const SearchUI = memo(SearcUIComponent);
