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

const SearcUIComponent = ({ title, config }: SearchUIProps) => {
  const fields = [
    {
      namePropComponent: 'title',
      namePropElasticSearch: 'name'
    },
    {
      namePropComponent: 'urlImg',
      namePropElasticSearch: 'image_url'
    },
    {
      namePropComponent: 'description',
      namePropElasticSearch: 'publisher'
    },
    {
      namePropComponent: 'urlRedirect',
      namePropElasticSearch: 'id',
      customValue: '/product/{{id}}'
    },
    {
      namePropComponent: 'price.value',
      namePropElasticSearch: 'critic_score'
    },
    {
      namePropComponent: 'price.description',
      namePropElasticSearch: '',
      customValue: 'por período'
    }
  ];

  return (
    <SearchProvider config={config}>
      <WithSearch mapContextToProps={({ wasSearched }) => ({ wasSearched })}>
        {({ wasSearched }) => {
          return (
            <S.Wrapper>
              <Layout
                bodyHeader={<BodyHeader title={title} />}
                sideContent={<>{wasSearched && <SideContent />}</>}
                bodyContent={<>{wasSearched && <BodyContent fields={fields} />}</>}
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
