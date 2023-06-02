import React from 'react';

/** Swiper Styles */
import 'utils/swiper/styles';

import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';
import Link from 'next/link';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as S from './styles';
import { CarouselProps, ListIcon } from './types';

SwiperCore.use([Navigation]);

export const Carousel = ({ data, slidesPerView }: CarouselProps) => {
  return (
    <S.Wrapper>
      <S.Grid container spacing={3}>
        <S.Grid item xs>
          <S.Button className="swiper-prev">
            <ArrowBackIos />
          </S.Button>
        </S.Grid>
        <S.Grid item xs={10}>
          <Swiper
            navigation={{
              prevEl: '.swiper-prev',
              nextEl: '.swiper-next'
            }}
            className="mySwiper"
            slidesPerView={slidesPerView}
          >
            {data.map((item: ListIcon, index: number) => (
              <SwiperSlide key={index}>
                {item && (
                  <Link href={{ pathname: item.pathname }}>
                    <S.Container>
                      <div>{item.icon}</div>
                      <div>{item.label}</div>
                    </S.Container>
                  </Link>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </S.Grid>
        <S.Grid item xs>
          <S.Button className="swiper-next">
            <ArrowForwardIos />
          </S.Button>
        </S.Grid>
      </S.Grid>
    </S.Wrapper>
  );
};
