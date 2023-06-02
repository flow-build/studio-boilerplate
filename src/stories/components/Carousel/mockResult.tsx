import { DownhillSkiing, Google, Villa } from 'shared/icons';

import { ListIcon } from './types';

export const mockCategories: ListIcon[] = [
  {
    label: 'Google',
    icon: <Google />,
    description: 'This property is close to the beach!',
    pathname: 'http://www.google.com'
  },
  {
    label: 'Beach',
    icon: <Villa />,
    description: 'This property is close to the beach!',
    pathname: '/beach'
  },
  {
    label: 'Windmills',
    icon: <DownhillSkiing />,
    description: 'This property is has windmills!',
    pathname: '/windmills'
  },
  {
    label: 'Modern',
    icon: <Villa />,
    description: 'This property is modern!',
    pathname: '/modern'
  },
  {
    label: 'Countryside',
    icon: <DownhillSkiing />,
    description: 'This property is in the countryside!',
    pathname: '/countryside'
  },
  {
    label: 'Pools',
    icon: <Google />,
    description: 'This is property has a beautiful pool!',
    pathname: '/pools'
  },
  {
    label: 'Islands',
    icon: <DownhillSkiing />,
    description: 'This property is on an island!',
    pathname: '/islands'
  },
  {
    label: 'Lake',
    icon: <Villa />,
    description: 'This property is near a lake!',
    pathname: '/lake'
  },
  {
    label: 'Skiing',
    icon: <DownhillSkiing />,
    description: 'This property has skiing activies!',
    pathname: '/skiing'
  },
  {
    label: 'Castles',
    icon: <Villa />,
    description: 'This property is an ancient castle!',
    pathname: '/castles'
  },
  {
    label: 'Caves',
    icon: <Google />,
    description: 'This property is in a spooky cave!',
    pathname: '/caves'
  },
  {
    label: 'Camping',
    icon: <DownhillSkiing />,
    description: 'This property offers camping activities!',
    pathname: '/camping'
  },
  {
    label: 'Arctic',
    icon: <Villa />,
    description: 'This property is in arctic environment!',
    pathname: '/arctic'
  },
  {
    label: 'Desert',
    icon: <DownhillSkiing />,
    description: 'This property is in the desert!',
    pathname: '/desert'
  },
  {
    label: 'Barns',
    icon: <Google />,
    description: 'This property is in a barn!',
    pathname: '/barns'
  },
  {
    label: 'Lux',
    icon: <Villa />,
    description: 'This property is brand new and luxurious!',
    pathname: '/lux'
  }
];
