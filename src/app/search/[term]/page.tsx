'use client';

import { useListings } from 'hooks';
import { useParams } from 'next/navigation';
import { SearchUI } from 'stories/components';

import * as S from './styles';

export default function CategoryName() {
  const params = useParams();
  const searchTerm = decodeURI(params?.term?.toString() ?? '');

  const { data } = useListings(`Resultado de busca por: ${searchTerm ?? ''}`, searchTerm);
  return (
    <S.Wrapper>
      <SearchUI {...data} />
    </S.Wrapper>
  );
}
