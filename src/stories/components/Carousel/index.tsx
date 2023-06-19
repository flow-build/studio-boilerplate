import React from 'react';

/** Swiper Styles */
import 'utils/swiper/styles';

import Link from 'next/link';
import { ArrowBack, ArrowForward } from 'shared/icons';
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
            <ArrowBack />
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
            {data.map((item: ListIcon) => (
              <SwiperSlide key={`${item.label}-${item.icon}`}>
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
            <ArrowForward />
          </S.Button>
        </S.Grid>
      </S.Grid>
    </S.Wrapper>
  );
};
