'use client';

import React from 'react';

import { Typography } from '@mui/material';
import { Breadcrumbs, ImageComponent } from 'stories/components';
import { Markdown } from 'stories/components/Markdown';

import { descriptionMock } from './descriptionMock';
import * as S from './styles';

export default function Posts() {
  const breadcrumbItems = [
    { text: 'Home', href: '/' },
    { text: 'Category', href: '/' },
    { text: 'Post' }
  ];

  return (
    <S.Main>
      <Breadcrumbs items={breadcrumbItems} />
      <S.ContentWrapper>
        <S.Wrapper>
          <S.TitleWrapper>
            <S.Title>Nome da Coisa</S.Title>
          </S.TitleWrapper>
          <ImageComponent
            src={'https://img.logoipsum.com/284.svg'}
            alt={'Lorem Ipsum Image'}
            width={536}
            height={354}
          />
          <Markdown children={descriptionMock} />
        </S.Wrapper>
        <S.SideRight>
          <S.Box>
            <Typography variant="h5" fontWeight={'bold'} style={{ marginBottom: 10 }}>
              Recent Posts
            </Typography>
            <Typography variant="h6" fontWeight={'bold'}>
              R$ 1234 por periodo
            </Typography>
            <Typography variant="body1" fontWeight={'light'}>
              Outra qualquer descrição
            </Typography>
          </S.Box>
        </S.SideRight>
      </S.ContentWrapper>
    </S.Main>
  );
}
