import { useListings } from 'hooks';
import { useSearchParams } from 'next/navigation';
import { SearchUI } from 'stories/components';
import * as S from 'styles/searchTermPageStyles';

export default function CategoryName() {
  const searchParams = useSearchParams();
  const searchTerm = decodeURI(searchParams.get('term')?.toString() ?? '');

  const { data } = useListings(`Resultado de busca por: ${searchTerm ?? ''}`, searchTerm);
  return (
    <S.Wrapper>
      <SearchUI {...data} />
    </S.Wrapper>
  );
}
