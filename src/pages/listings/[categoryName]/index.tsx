import { useListings } from 'hooks';
import { useSearchParams } from 'next/navigation';
import { SearchUI } from 'stories/components';
import * as S from 'styles/listingsPageStyles';

export default function CategoryName() {
  const searchParams = useSearchParams();
  const searchTerm = decodeURI(searchParams.get('categoryName')?.toString() ?? '');

  const { data } = useListings(searchTerm ?? '', searchTerm, true);
  return (
    <S.Wrapper>
      <SearchUI {...data} />
    </S.Wrapper>
  );
}
