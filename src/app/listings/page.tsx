'use client';

import { useListings } from 'hooks';
import { SearchUI } from 'stories/components';

import * as S from './styles';

export default function Listings() {
  const { data } = useListings('Games', undefined, true);
  return (
    <S.Wrapper>
      <SearchUI {...data} />
    </S.Wrapper>
  );
}
