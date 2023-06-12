'use client';

import { useListings } from 'hooks';
import { useParams } from 'next/navigation';
import { SearchUI } from 'stories/components';

import * as S from '../styles';

export default function CategoryName() {
  const params = useParams();
  const searchTerm = decodeURI(params?.term?.toString() ?? '');

  const { data } = useListings(searchTerm ?? '', searchTerm, true);
  return (
    <S.Wrapper>
      <SearchUI {...data} />
    </S.Wrapper>
  );
}
