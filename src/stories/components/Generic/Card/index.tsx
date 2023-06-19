import React from 'react';

import CardContent from '@mui/material/CardContent';
import Link from 'next/link';

import * as S from './styles';
import { CardProps } from './types';

export const Card = ({
  title,
  urlImg,
  description,
  urlRedirect,
  price,
  attributes,
  mode = 'vertical'
}: CardProps) => {
  return (
    <Link href={urlRedirect ?? ''}>
      <S.Wrapper mode={mode}>
        {Boolean(urlImg) && <S.CardMedia mode={mode} image={urlImg} title={title ?? ''} />}
        <CardContent>
          {Boolean(title) && (
            <S.Title gutterBottom variant="h6">
              {title}
            </S.Title>
          )}
          {Boolean(description) && <S.Description variant="body2">{description}</S.Description>}
          {Boolean(price) && (
            <S.Price variant="body2">
              {price?.value} {price?.description ?? ''}
            </S.Price>
          )}

          {(attributes ?? [])?.length > 0 && (
            <S.WrapperAttributes>
              {attributes?.map((attribute) => (
                <S.AttributeText key={attribute.name} variant="subtitle2">
                  {attribute.value} {attribute.name}
                </S.AttributeText>
              ))}
            </S.WrapperAttributes>
          )}
        </CardContent>
      </S.Wrapper>
    </Link>
  );
};
