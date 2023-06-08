import Link from 'next/link';

import * as S from './styles';
import { RecentPostsProps } from './types';

export function RecentPosts({ title, price, urlRedirect, description }: RecentPostsProps) {
  return (
    <Link href={urlRedirect ?? ''}>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Price>
          {price.value} {price.description}
        </S.Price>
        <S.Description>{description}</S.Description>
      </S.Wrapper>
    </Link>
  );
}
