import React from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  Close,
  AccountBalance,
  AirplanemodeActive,
  ArrowForwardIos,
  ArrowBackIos
} from '@mui/icons-material';
// import { Grid } from '@mui/material';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as S from './styles';
import { CarouselProps, ListIcon } from './types';

SwiperCore.use([Navigation]);

const categories: ListIcon[] = [
  {
    label: 'Beach',
    icon: <Close />,
    description: 'This property is close to the beach!'
  },
  {
    label: 'Windmills',
    icon: <AccountBalance />,
    description: 'This property is has windmills!'
  },
  {
    label: 'Modern',
    icon: <AirplanemodeActive />,
    description: 'This property is modern!'
  },
  {
    label: 'Countryside',
    icon: <Close />,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Pools',
    icon: <AccountBalance />,
    description: 'This is property has a beautiful pool!'
  },
  {
    label: 'Islands',
    icon: <AirplanemodeActive />,
    description: 'This property is on an island!'
  },
  {
    label: 'Lake',
    icon: <Close />,
    description: 'This property is near a lake!'
  },
  {
    label: 'Skiing',
    icon: <AccountBalance />,
    description: 'This property has skiing activies!'
  },
  {
    label: 'Castles',
    icon: <AirplanemodeActive />,
    description: 'This property is an ancient castle!'
  },
  {
    label: 'Caves',
    icon: <AccountBalance />,
    description: 'This property is in a spooky cave!'
  },
  {
    label: 'Camping',
    icon: <AirplanemodeActive />,
    description: 'This property offers camping activities!'
  },
  {
    label: 'Arctic',
    icon: <AccountBalance />,
    description: 'This property is in arctic environment!'
  },
  {
    label: 'Desert',
    icon: <Close />,
    description: 'This property is in the desert!'
  },
  {
    label: 'Barns',
    icon: <AccountBalance />,
    description: 'This property is in a barn!'
  },
  {
    label: 'Lux',
    icon: <AirplanemodeActive />,
    description: 'This property is brand new and luxurious!'
  }
];

export const Carousel = ({ slidesPerView }: CarouselProps) => {
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
            {categories.map((item: ListIcon, index: number) => (
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
