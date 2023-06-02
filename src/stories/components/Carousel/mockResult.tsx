import {
  Cabin,
  Castle,
  Cottage,
  Diamond,
  Diversity2,
  DownhillSkiing,
  Google,
  Kayaking,
  Landscape,
  Landslide,
  Pool,
  SportsMma,
  Terrain,
  Villa,
  Waves,
  WindPower
} from '@mui/icons-material';

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
    icon: <Waves />,
    description: 'This property is close to the beach!',
    pathname: '/beach'
  },
  {
    label: 'Windmills',
    icon: <WindPower />,
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
    icon: <Landscape />,
    description: 'This property is in the countryside!',
    pathname: '/countryside'
  },
  {
    label: 'Pools',
    icon: <Pool />,
    description: 'This is property has a beautiful pool!',
    pathname: '/pools'
  },
  {
    label: 'Islands',
    icon: <Landslide />,
    description: 'This property is on an island!',
    pathname: '/islands'
  },
  {
    label: 'Lake',
    icon: <Kayaking />,
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
    icon: <Castle />,
    description: 'This property is an ancient castle!',
    pathname: '/castles'
  },
  {
    label: 'Caves',
    icon: <Diversity2 />,
    description: 'This property is in a spooky cave!',
    pathname: '/caves'
  },
  {
    label: 'Camping',
    icon: <Cabin />,
    description: 'This property offers camping activities!',
    pathname: '/camping'
  },
  {
    label: 'Arctic',
    icon: <SportsMma />,
    description: 'This property is in arctic environment!',
    pathname: '/arctic'
  },
  {
    label: 'Desert',
    icon: <Terrain />,
    description: 'This property is in the desert!',
    pathname: '/desert'
  },
  {
    label: 'Barns',
    icon: <Cottage />,
    description: 'This property is in a barn!',
    pathname: '/barns'
  },
  {
    label: 'Lux',
    icon: <Diamond />,
    description: 'This property is brand new and luxurious!',
    pathname: '/lux'
  }
];
