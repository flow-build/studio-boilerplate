import React from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';
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
          <S.Button className="prev">
            <ArrowBackIos />
          </S.Button>
        </S.Grid>
        <S.Grid item xs={10}>
          <Swiper
            navigation={{
              prevEl: '.prev',
              nextEl: '.next'
            }}
            className="mySwiper"
            slidesPerView={slidesPerView}
          >
            {data.map((item: ListIcon, index: number) => (
              <SwiperSlide key={index}>
                <S.Container>
                  <div>{item.icon}</div>
                  <div>{item.label}</div>
                </S.Container>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.Grid>
        <S.Grid item xs>
          <S.Button className="next">
            <ArrowForwardIos />
          </S.Button>
        </S.Grid>
      </S.Grid>
    </S.Wrapper>
  );
};
