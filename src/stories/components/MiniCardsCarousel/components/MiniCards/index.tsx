import Link from 'next/link';

import * as S from './styles';
import { MiniCardsProps } from './types';

export function MiniCards({ name, urlRedirect, description, urlImg, text }: MiniCardsProps) {
  return (
    <Link href={urlRedirect ?? ''}>
      <S.Wrapper>
        <S.Img alt={name} src={urlImg ?? ''} width={155} height={100} />
        <S.WrapperContent>
          <S.Name>{name}</S.Name>
          <S.Description>{description}</S.Description>
          <S.ContentText>{text}</S.ContentText>
        </S.WrapperContent>
      </S.Wrapper>
    </Link>
  );
}
