import { memo } from 'react';

import { Paging, SearchProvider, WithSearch } from '@elastic/react-search-ui';
import { Layout } from '@elastic/react-search-ui-views';
import { SearchUICustomProvider } from 'context/SearchUI';

import '@elastic/react-search-ui-views/lib/styles/styles.css';

import { BodyContent } from './BodyContent';
import { BodyHeader } from './BodyHeader';
import { SideContent } from './SideContent';
import * as S from './styles';
import { SearchUIProps } from './types';

const SearcUIComponent = ({ title, config, configFields, carouselItems }: SearchUIProps) => {
  return (
    <SearchProvider config={config}>
      <SearchUICustomProvider configFields={configFields} carouselItems={carouselItems}>
        <WithSearch mapContextToProps={({ wasSearched }) => ({ wasSearched })}>
          {({ wasSearched }) => {
            return (
              <S.Wrapper>
                <Layout
                  bodyHeader={<BodyHeader title={title} />}
                  sideContent={<>{wasSearched && <SideContent />}</>}
                  bodyContent={<>{wasSearched && <BodyContent />}</>}
                  bodyFooter={<Paging />}
                />
              </S.Wrapper>
            );
          }}
        </WithSearch>
      </SearchUICustomProvider>
    </SearchProvider>
  );
};

export const SearchUI = memo(SearcUIComponent);
