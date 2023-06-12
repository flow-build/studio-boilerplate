import React, { useContext } from 'react';

import { SearchUICustonContext } from 'context/SearchUI';
import { Carousel } from 'stories/components/Carousel';

import * as S from './styles';
import { BodyHeaderProps } from './types';

export const BodyHeader = ({ title }: BodyHeaderProps) => {
  const { carouselItems } = useContext(SearchUICustonContext);
  return (
    <S.Wrapper>
      {carouselItems && (
        <S.WrapperCarousel>
          <Carousel {...carouselItems} />
        </S.WrapperCarousel>
      )}
      <S.Title variant="h4">{title}</S.Title>
    </S.Wrapper>
  );
};
